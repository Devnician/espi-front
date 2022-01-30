import { Role_Types_Enum } from 'src/generated/graphql';

export const RoleLabels: {
  [key in Role_Types_Enum]: string;
} = {
  [Role_Types_Enum.Admin]: 'Администратор',
  [Role_Types_Enum.CentralLeader]: 'Ръководител на ЦИК',
  [Role_Types_Enum.Central]: 'Член на ЦИК',
  [Role_Types_Enum.SectionLeader]: 'Ръководител на СИК',
  [Role_Types_Enum.Section]: 'Член на СИК',
  [Role_Types_Enum.User]: 'Гласоподавател',
};
