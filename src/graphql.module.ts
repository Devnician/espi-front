import { NgModule } from '@angular/core';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
import { environment } from 'src/environments/environment';

const authCtx = () =>
  setContext(async () => {
    //  const token = await getAuth().currentUser.getIdToken();
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBlcGUiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTE2MjM5MDIyLCJodHRwczovL2hhc3VyYS5pby9qd3QvY2xhaW1zIjp7IngtaGFzdXJhLWFsbG93ZWQtcm9sZXMiOlsiYWRtaW4iLCJ1c2VyIiwibW9kIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6ImFkbWluIiwieC1oYXN1cmEtdXNlci1pZCI6IjEyMzQ1Njc4OTAiLCJ4LWhhc3VyYS1vcmctaWQiOiIxMjMiLCJ4LWhhc3VyYS1jdXN0b20iOiJjdXN0b20tdmFsdWUifSwiZXhwIjoxNjM4MDQ4MTgwMDM4fQ.PoHlLbOrLiKnO7LtwsHUsVB-dr7-mcQbwmz2F1Ywt38';
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  });

const uri = environment.hasuraUrl; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): any {
  console.log('Link created');
  return {
    link: ApolloLink.from([authCtx(), httpLink.create({ uri })]),
    cache: new InMemoryCache({
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

        Query: {
          fields: {
            users: {
              keyArgs: false,
              merge: false,
            },
            // users: {
            //   merge: false,
            // },
          },
        },
      },
    }),
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
export class GraphQLModule {}
