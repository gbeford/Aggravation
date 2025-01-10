import { Routes } from '@angular/router';
import { GameCardComponent } from './game-card/game-card.component';
import { EntryScoreComponent } from './entry-score/behavior-subject-entry/entry-score.component';
import { SignalDashboardComponent } from './dashboard/signal-dashboard/signal-dashboard.component';
import { DashboardComponent } from './dashboard/behavior-subject-dashboard/dashboard.component';
import { SignalEntryFormComponent } from './entry-score/signal-entry-form/signal-entry-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/signal', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'game-card', component: GameCardComponent },
  { path: 'score', component: EntryScoreComponent },
  { path: 'signal', component: SignalDashboardComponent },
  { path: 'entry', component: SignalEntryFormComponent }
];
