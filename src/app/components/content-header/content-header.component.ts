import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/asset.service';

interface BreadcrumbItem {
  label: string;
  route?: string;
}

interface Employee {
  id: number;
  name: string;
  avatar: string;
}

@Component({
  selector: 'app-content-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {
  private assetService = inject(AssetService);
  readonly maxVisibleAvatars = 3;

  @Input() title = 'Gestion des employés';
  @Input() icon = 'employees';
  @Input() breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', route: '/' },
    { label: 'My Company', route: '/company' },
    { label: 'Gestion des employés' }
  ];

  employees: Employee[] = [
    { id: 1, name: 'Employee 1', avatar: 'assets/avatars/avatar1.svg' },
    { id: 2, name: 'Employee 2', avatar: 'assets/avatars/avatar2.svg' },
    { id: 3, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },
    { id: 4, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },
    { id: 5, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },
    { id: 5, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },

    { id: 5, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },
    { id: 5, name: 'Employee 3', avatar: 'assets/avatars/avatar3.svg' },

  ];

  getIconUrl(): string {
    return this.assetService.getEmployeeContent(this.icon);
  }

  onAddEmployee(): void {
    console.log('Add employee clicked');
  }

  onGridView(): void {
    console.log('Grid view clicked');
  }

  onListView(): void {
    console.log('List view clicked');
  }

get visibleEmployees(): Employee[] {
  return this.employees.slice(0, this.maxVisibleAvatars);
}

get remainingCount(): number {
  return this.employees.length - this.maxVisibleAvatars;
}
}