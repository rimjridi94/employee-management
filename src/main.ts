import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';  // ✅ Ajouté
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';  // ✅ Ajouté

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)  // ✅ Ajouté
  ]
}).catch(err => console.error(err));