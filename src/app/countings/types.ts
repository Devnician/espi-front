import { Maybe, Scalars } from "src/generated/graphql";

export type Custom_Referendum_Countings = {
	__typename?: 'referendum_countings';
	/** An object relationship */
	referendumId?: Maybe<Scalars['Int']>;
	question?: Maybe<Scalars['String']>;
	questionId?: Maybe<Scalars['Int']>;
	votesCount?: Maybe<Scalars['bigint']>;
	votesFalse?: Maybe<Scalars['bigint']>;
	votesTrue?: Maybe<Scalars['bigint']>;
  };
