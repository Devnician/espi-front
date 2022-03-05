import {
  Referendums,
  Referendum_Questions,
  Referendum_Votes,
  Referendum_Votes_Aggregate,
} from 'src/generated/graphql';

export class CustomReferendumQuestion implements Referendum_Questions {
  questionNumber: number; // !NOTE - zero is the last page
  response: number;

  // ----
  __typename?: 'referendum_questions';
  createdAt: any;
  id: number;
  question: string;
  referendumId: number;
  updatedAt: any;
  referendum_votes: Referendum_Votes[];
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  referendum: Referendums;
}
