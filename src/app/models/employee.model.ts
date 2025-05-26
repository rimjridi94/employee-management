export interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    position: string;
    avatar: string;
    isOnline?: boolean;
    birthDate: string;
    city: string;
    postalCode: string;
    country: string;
    gender: 'Homme' | 'Femme';
    disability: boolean;
    matricules: string[];
    authorizations: string[];
    coordinates: string[];
    diplomas: string[];
  }
  
  export interface EmployeeStats {
    id: string;
    value: string;
    trend: number; // positive or negative percentage
  }