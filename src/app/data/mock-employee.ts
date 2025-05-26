import { Employee } from '../models/employee.model';

export const MOCK_EMPLOYEES: Employee[] = [
  {
    id: 1,
    firstName: 'Lydia',
    lastName: 'Bauer',
    position: 'Responsable cuisine',
    avatar: 'test1.jpg',
    isOnline: true,
    birthDate: '1993-12-27',
    city: 'Paris',
    postalCode: '20091',
    country: 'France',
    gender: 'Femme',
    disability: false,
    matricules: ['Lydia', 'Lydia', 'Lydia', 'Lydia'],
    authorizations: ['Lydia', 'Lydia', 'Lydia'],
    coordinates: ['Lydia'],
    diplomas: []
  },
  {
    id: 2,
    firstName: 'Nom',
    lastName: 'Prénom',
    position: 'Responsable terrace',
    avatar: 'test2.jpg',
    isOnline: true,
    birthDate: '1990-01-01',
    city: 'Lyon',
    postalCode: '69000',
    country: 'France',
    gender: 'Homme',
    disability: false,
    matricules: ['Test'],
    authorizations: ['Test'],
    coordinates: ['Test'],
    diplomas: []
  },
  
];

export const MOCK_EMPLOYEE_STATS = {
  cdi: { id: 'CDI', value: 'N0011,28', trend: 6.13 }
};