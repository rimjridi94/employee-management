import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssetService {
  private readonly BASE_PATH = 'assets';

 
  getLogoUrl(): string {
    return `${this.BASE_PATH}/images/logo.svg`;
  }

  getSearchIconUrl(): string {
    return `${this.BASE_PATH}/icons/search.svg`;
  }

  getNotificationIconUrl(): string {
    return `${this.BASE_PATH}/icons/bell.svg`;
  }

  getHelpIconUrl(): string {
    return `${this.BASE_PATH}/icons/help.svg`;
  }

  getDropdownIconUrl(): string {
    return `${this.BASE_PATH}/icons/chevron-down.svg`;
  }

  getAvatarUrl(filename: string): string {
    return `${this.BASE_PATH}/avatars/${filename}`;
  }
getEmployeeContent(filename: string): string {
  return `${this.BASE_PATH}/avatars/employee-content.svg`;
}
  getCurrentUserAvatarUrl(): string {
    return `${this.BASE_PATH}/avatars/current-user.svg`;
  }

  getDefaultAvatarUrl(): string {
    return `${this.BASE_PATH}/avatars/default.svg`;
  }

  getAvatarWithFallback(filename?: string): string {
    return filename 
      ? this.getAvatarUrl(filename)
      : this.getDefaultAvatarUrl();
  }
  getNavigationIconUrl(iconName: string): string {
    return `${this.BASE_PATH}/icons/nav/${iconName}.svg`;
  }

}