import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee.service';
import { AssetService } from '../../services/asset.service';
import { Employee } from '../../models/employee.model';

interface TabItem {
  id: string;
  label: string;
  count?: number;
}

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent {
  private employeeService = inject(EmployeeService);
  private assetService = inject(AssetService);

  activeTab = 'infos-personnelles';

  tabs: TabItem[] = [
    { id: 'infos-personnelles', label: 'Infos personnelles' },
    { id: 'contrats', label: 'Contrats' },
    { id: 'qualifications', label: 'Qualifications' },
    { id: 'absences-conges', label: 'Absences & Congés', count: 3 },
    { id: 'indisponibilites', label: 'Indisponibilités' },
    { id: 'discipline', label: 'Discipline' },
    { id: 'rapports', label: 'Rapports' }
  ];

  get selectedEmployee(): Employee | null {
    return this.employeeService.selectedEmployee();
  }

  get employeeAvatarUrl(): string {
    if (!this.selectedEmployee) return this.assetService.getDefaultAvatarUrl();
    return this.assetService.getAvatarWithFallback(this.selectedEmployee.avatar);
  }

  onTabSelect(tabId: string): void {
    this.activeTab = tabId;
  }

  onEditInfo(): void {
    console.log('Edit info clicked');
  }

  onEditAuth(): void {
    console.log('Edit authorization clicked');
  }

  isTabActive(tabId: string): boolean {
    return this.activeTab === tabId;
  }

  trackByTabId(index: number, tab: TabItem): string {
    return tab.id;
  }
}