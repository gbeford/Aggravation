import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestComponent } from './test/test.component';
import { GameCardComponent } from './game-card/game-card.component';
import { EntryScoreComponent } from './entry-score/entry-score.component';
import { SignalDashboardComponent } from './dashboard/signal-dashboard/signal-dashboard.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'test', component: TestComponent },
  { path: 'game-card', component: GameCardComponent },
  { path: 'score', component: EntryScoreComponent },
  { path: 'signal', component: SignalDashboardComponent }
];
