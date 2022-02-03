import { Referendum_Questions } from 'src/generated/graphql';

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
}
