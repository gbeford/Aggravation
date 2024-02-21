import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { GameService, IScore } from '../services/game.service';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'Aggravation';
scoreList$: Observable <IScore[]> = of([]);

  constructor(private service: GameService) {}

  // getUserScore() {
  //   this.service.getScore.subscribe(result => {
  //     this.score = result.score;
  //   } );
  // }

     getScore() {
      this.scoreList$ = this.service.userData$
     // this.service.getScore().subscribe(console.log); // Here you have that name
    //   // You can filter it like (.pipe(filter(name => !!name)) is you don't want undefined value
    }



}
