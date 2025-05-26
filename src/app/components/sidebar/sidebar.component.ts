import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationService, MenuItem, SubMenuItem } from '../../services/navigation.service';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private navigationService = inject(NavigationService);
  private assetService = inject(AssetService);

  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = this.navigationService.getMenuItems();
  }

  getIconUrl(iconName: string): string {
    return this.assetService.getNavigationIconUrl(iconName);
  }

  onMenuItemClick(item: MenuItem): void {
    if (item.children) {
      this.navigationService.toggleMenuItem(item.id);
      
      if (item.route) {
        this.navigationService.navigateToItem(item);
      }
    } else if (item.route) {
      this.navigationService.navigateToItem(item);
    }
  }

  selectSubMenuItem(itemId: string, event: Event): void {
    event.stopPropagation();
    this.navigationService.selectSubMenuItem(itemId);
  }

  isExpanded(itemId: string): boolean {
    return this.navigationService.isExpanded(itemId);
  }

  isActive(itemId: string): boolean {
    return this.navigationService.isActive(itemId);
  }

  trackByItemId(index: number, item: MenuItem): string {
    return item.id;
  }

  trackByChildId(index: number, child: SubMenuItem): string {
    return child.id;
  }
}