import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  title = 'Aggravation';
score:string = '';

  constructor(private service: GameService) {}

  // getUserScore() {
  //   this.service.getScore.subscribe(result => {
  //     this.score = result.score;
  //   } );
  // }

     getSomething() {
      this.service.getScore().subscribe(console.log); // Here you have that name
    //   // You can filter it like (.pipe(filter(name => !!name)) is you don't want undefined value
    }



}
