import {
  Addresses,
  Referendum_Votes,
  Referendum_Votes_Aggregate,
  Role_Types,
  Role_Types_Enum,
  Users,
  Votes,
  Votes_Aggregate,
  Voting_Section,
} from 'src/generated/graphql';

export class CustomUser implements Users {
  tempVoted: boolean;
  __typename?: 'users';
  address: Addresses;
  addressId: number;
  createdAt: any;
  eVoted: boolean;
  egn: string;
  email?: string;
  family: string;
  id: number;
  name: string;
  password?: string;
  pin?: string;
  referendum_votes: Referendum_Votes[];
  referendum_votes_aggregate: Referendum_Votes_Aggregate;
  role: Role_Types_Enum;
  roleType: Role_Types;
  secondRole?: Role_Types_Enum;
  secondRoleType?: Role_Types;
  surname: string;
  updatedAt: any;
  voted: boolean;
  votes: Votes[];
  votes_aggregate: Votes_Aggregate;
  votingSectionId?: number;
  voting_section?: Voting_Section;
}