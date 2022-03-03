import { Political_Group_Types_Enum } from 'src/generated/graphql';

export const PoliticalGroupTypesLabels: {
  [key in Political_Group_Types_Enum]: string;
} = {
  [Political_Group_Types_Enum.Party]: 'Партия',
  [Political_Group_Types_Enum.Coalition]: 'Коалиция',
  [Political_Group_Types_Enum.InitiativeCommittee]: 'Инициативен комитет',
};
