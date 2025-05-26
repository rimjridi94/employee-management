import { Injectable, computed, signal, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface MenuItem {
  id: string;
  label: string;
  iconName: string;
  count?: number;
  route?: string;
  children?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  route?: string;
}

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private router = inject(Router);
  
  private expandedItemsSignal = signal<Set<string>>(new Set(['employees']));
  private activeItemSignal = signal<string>('work-positions');

  expandedItems = computed(() => this.expandedItemsSignal());
  activeItem = computed(() => this.activeItemSignal());

  private readonly menuItems: MenuItem[] = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      iconName: 'dashboard'
    },
    {
      id: 'employees',
      label: 'Employés',
      iconName: 'employees',
      count: 46,
      route: '/employees',
      children: [
        { id: 'work-groups', label: 'Groupes de travail' },
        { id: 'work-positions', label: 'Positions de travail' },
        { id: 'badges', label: 'Badges' },
        { id: 'alerts', label: 'Alertes' },
        { id: 'contract-types', label: 'Type de contrats' },
        { id: 'training-list', label: 'Liste des formations' },
        { id: 'holidays', label: 'Jours fériés' },
        { id: 'events', label: 'événements' },
        { id: 'periods', label: 'Périodes' }
      ]
    },
    {
      id: 'forecasts',
      label: 'Prévisions',
      iconName: 'forecasts',
      route: '/forecasts'
    },
    {
      id: 'planning',
      label: 'Planning',
      iconName: 'planning'
    },
    {
      id: 'time-control',
      label: 'Contrôle des heures',
      iconName: 'time-control'
    },
    {
      id: 'reports',
      label: 'Reports',
      iconName: 'reports'
    },
    {
      id: 'safe',
      label: 'Coffre fort',
      iconName: 'safe'
    },
    {
      id: 'restaurant',
      label: 'Restaurant',
      iconName: 'restaurant'
    }
  ];


  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }


  toggleMenuItem(itemId: string): void {
    const expanded = this.expandedItemsSignal();
    const newExpanded = new Set(expanded);
    
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    
    this.expandedItemsSignal.set(newExpanded);
  }


  navigateToItem(item: MenuItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
      this.activeItemSignal.set(item.id);
    }
  }

  selectSubMenuItem(itemId: string): void {
    this.activeItemSignal.set(itemId);
  }

  isExpanded(itemId: string): boolean {
    return this.expandedItems().has(itemId);
  }

  isActive(itemId: string): boolean {
    return this.activeItem() === itemId;
  }
}