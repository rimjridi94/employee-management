import { Injectable, signal, computed } from '@angular/core';
import { Employee } from '../models/employee.model';
import { MOCK_EMPLOYEES } from '../data/mock-employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private employeesSignal = signal<Employee[]>(MOCK_EMPLOYEES);
  private selectedEmployeeSignal = signal<Employee | null>(null);

  employees = computed(() => this.employeesSignal());
  selectedEmployee = computed(() => this.selectedEmployeeSignal()); 

  getEmployeeAvatars(): { id: number; name: string; avatar: string }[] {
    return this.employees().slice(0, 5).map(emp => ({
      id: emp.id,
      name: `${emp.firstName} ${emp.lastName}`,
      avatar: emp.avatar
    }));
  }

  getEmployeeCount(): number {
    return this.employees().length;
  }

  selectEmployee(employee: Employee): void {
    this.selectedEmployeeSignal.set(employee);
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees().find(emp => emp.id === id);
  }
}