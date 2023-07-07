export interface Team {
  id: string;
  name: string;
}

export interface TeamOverview {
  id: string;
  teamLeadId: string;
  teamMemberIds: string[];
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  location: string;
  avatar: string;
}
