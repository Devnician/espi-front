import { Role_Types } from 'src/generated/graphql';

export interface LoggedUser {
  id: number;
  name: string;
  surname: string;
  family: string;
  roleType: Role_Types;
  secondRoleType: Role_Types;
  eVoted: boolean;
  voted: boolean;
  votingSectionId: number;
}
