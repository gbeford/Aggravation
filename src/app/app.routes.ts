import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GameCardComponent } from './game-card/game-card.component';
import { EntryScoreComponent } from './entry-score/entry-score.component';
import { SignalDashboardComponent } from './dashboard/signal-dashboard/signal-dashboard.component';
import { SignalEntryFormComponent } from './signal-entry-form/signal-entry-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signal', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-card', component: GameCardComponent },
  { path: 'score', component: EntryScoreComponent },
  { path: 'signal', component: SignalDashboardComponent },
  { path: 'entry', component: SignalEntryFormComponent }
];
