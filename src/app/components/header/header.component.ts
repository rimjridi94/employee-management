import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetService } from '../../services/asset.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private assetService = inject(AssetService);
  
  companyName = 'BK Brive La Gaillarde';
  notificationCount = 12;
  searchValue = '';


  
  get logoUrl(): string {
    return this.assetService.getLogoUrl();
  }
  
  get searchIconUrl(): string {
    return this.assetService.getSearchIconUrl();
  }

  get notificationIconUrl(): string {
    return this.assetService.getNotificationIconUrl();
  }

  get helpIconUrl(): string {
    return this.assetService.getHelpIconUrl();
  }

  get dropdownIconUrl(): string {
    return this.assetService.getDropdownIconUrl();
  }

  get userAvatarUrl(): string {
    return this.assetService.getCurrentUserAvatarUrl();
  }

  onSearchChange(value: string): void {
    this.searchValue = value;
  }

  onCompanySelect(): void {
    console.log('Company selector clicked');
  }

  onNotificationsClick(): void {
    console.log('Notifications clicked');
  }

  onUserMenuClick(): void {
    console.log('User menu clicked');
  }
  onImageError(event: Event) {
    const target = event.target as HTMLImageElement;
    target.src = this.assetService.getDefaultAvatarUrl();
  } 
   toggleMobileMenu(): void {
    const sidebar = document.querySelector('.sidebar');
    sidebar?.classList.toggle('sidebar--open');
  }
  
}