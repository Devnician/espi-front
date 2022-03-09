import { Voting_Types_Enum } from 'src/generated/graphql';

export const VotingsTypesLabels: {
  [key in Voting_Types_Enum]: string;
} = {
  [Voting_Types_Enum.Parliamentary]: 'Парламентарни избори',
  [Voting_Types_Enum.Presidential]: 'Президентски избори в 2 тура',
  [Voting_Types_Enum.LocalGovernment]: 'Избори за местна власт',
  [Voting_Types_Enum.Mayoral]: 'Кметски избори в 2 тура',
  [Voting_Types_Enum.LocalReferendum]: 'Местен референдум',
  [Voting_Types_Enum.NationalReferendum]: 'Национален референдум',
};
