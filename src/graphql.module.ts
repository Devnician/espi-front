import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { filter, first, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenTypes } from './app/auth/token-types.enum';
import { AuthService } from './app/services/auth-service';

let authService: AuthService;
let sub: Subscription;

const uri = environment.hasuraUrl; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): any {
  console.log('Start build apolo link');
  sub?.unsubscribe();
  console.log(localStorage.getItem(TokenTypes.FETCH_TOKEN));
  const basic = setContext((_operation, _context) => ({
    headers: {
      Accept: 'charset=utf-8',
    },
  }));

  const auth = setContext(() => {
    let header;
    sub = authService.fetchToken$
      .pipe(
        filter((token) => token !== null),
        first()
      )
      .subscribe((token) => {
        if (token === null || token === undefined) {
          console.log('TOKEN IS UNDEFINED....');
          header = '';
        }

        header = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
      });
    return header;
  });

  const link = ApolloLink.from([basic, auth, httpLink.create({ uri })]);
  console.log('Apollo link was configured');
  const cache = new InMemoryCache({
    typePolicies: {
      users: {
        merge: false,
        fields: {
          user_role: {
            keyArgs: false,
            merge: false,
          },
        },
      },
      referendums: {
        merge: false,
        fields: {
          referendumQuestions: {
            merge: false,
          },
        },
      },

      Query: {
        fields: {
          users: {
            keyArgs: false,
            merge: false,
          },
          referendums: {
            keyArgs: false,
            merge: false,
          },
        },
      },
    },
  });
  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {
  constructor(private auth: AuthService) {
    authService = this.auth;

    if (environment.production === false) {
      const accessT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      this.auth.setAccessToken(accessT);
      const fetchT = localStorage.getItem(TokenTypes.ACCESS_TOKEN);
      this.auth.setFetchToken(fetchT);
    }
  }
}
