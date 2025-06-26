import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { Page404Component } from './pages/page404/page404.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { EditionChienComponent } from './pages/edition-chien/edition-chien.component';
import { EditionCoursComponent } from './pages/edition-cours/edition-cours.component';
import { ListeChiensComponent } from './pages/liste-chiens/liste-chiens.component';
import { ListeCoursComponent } from './pages/liste-cours/liste-cours.component';

export const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'ajout-chien', component: EditionChienComponent },
  { path: 'chiens', component: ListeChiensComponent },
  { path: 'ajout-cours', component: EditionCoursComponent },
  { path: 'cours', component: ListeCoursComponent },
  { path: 'modifier-chien/:id', component: EditionChienComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Page404Component },
];
