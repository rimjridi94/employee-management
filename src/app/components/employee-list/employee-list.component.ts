import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { AssetService } from '../../services/asset.service';
import { Employee } from '../../models/employee.model';

interface EmployeeGroup {
  id: string;
  label: string;
  count: number;
  isExpanded: boolean;
  employees: Employee[];
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private assetService = inject(AssetService);

  searchTerm = '';
  
  employeeGroups: EmployeeGroup[] = [
    {
      id: 'responsables',
      label: 'Responsables',
      count: 0,
      isExpanded: true,
      employees: []
    },
    {
      id: 'cuisine',
      label: 'Cuisine',
      count: 0,
      isExpanded: true,
      employees: []
    }
  ];

  get employees(): Employee[] {
    return this.employeeService.employees();
  }

  get selectedEmployee(): Employee | null {
    return this.employeeService.selectedEmployee();
  }

  ngOnInit(): void {
    this.updateGroups();
    if (this.employees.length > 0) {
      this.employeeService.selectEmployee(this.employees[0]);
    }
  }

  private updateGroups(): void {
    const allEmployees = this.employees;
    
    this.employeeGroups[0].employees = allEmployees.filter(emp => 
      emp.position.toLowerCase().includes('responsable')
    );
    
    this.employeeGroups[1].employees = allEmployees.filter(emp => 
      emp.position.toLowerCase().includes('cuisine') || 
      emp.position.toLowerCase().includes('manager') ||
      !emp.position.toLowerCase().includes('responsable')
    );
    
    this.employeeGroups[0].count = this.employeeGroups[0].employees.length;
    this.employeeGroups[1].count = this.employeeGroups[1].employees.length;
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm = target.value;
    this.updateGroups(); 
  }

  toggleGroup(groupId: string): void {
    const group = this.employeeGroups.find(g => g.id === groupId);
    if (group) {
      group.isExpanded = !group.isExpanded;
    }
  }

  onGroupMenuClick(groupId: string): void {
    console.log('Group menu clicked:', groupId);
  }

  onEmployeeSelect(employee: Employee): void {
    this.employeeService.selectEmployee(employee);
  }

  isEmployeeSelected(employee: Employee): boolean {
    return this.selectedEmployee?.id === employee.id;
  }

  getEmployeeAvatarUrl(employee: Employee): string {
    return this.assetService.getAvatarWithFallback(employee.avatar);
  }

  trackByEmployeeId(index: number, employee: Employee): number {
    return employee.id;
  }
}