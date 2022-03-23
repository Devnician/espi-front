import {
  Addresses,
  Political_Group_Members,
  Political_Group_Members_Aggregate,
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
  political_group_members_aggregate: Political_Group_Members_Aggregate;
  voted: boolean;
  eVoted: boolean;
  filteredReferendumVotes: Referendum_Votes[];
  vote: Votes;
  //

  __typename?: 'users';
  address: Addresses;
  addressId: number;
  createdAt: any;
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
  votes: Votes[];
  votes_aggregate: Votes_Aggregate;
  votingSectionId?: number;
  voting_section?: Voting_Section;
  political_group_members: Political_Group_Members[];
}
