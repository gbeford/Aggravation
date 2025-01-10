import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SignalGameService } from '../../services/signal/signal-game.service';
import { IScore } from '../../services/score';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BarChartComponent } from '../../chart/bar-chart.component';


//https://www.freecodecamp.org/news/how-to-make-bar-and-line-charts-using-chartjs-in-angular/
@Component({
    selector: 'app-signal-dashboard',
    standalone: true,
    imports: [CommonModule, RouterModule, MatCardModule, MatIconModule, BarChartComponent],
    templateUrl: './signal-dashboard.component.html',
    styleUrl: './signal-dashboard.component.scss'
})
export class SignalDashboardComponent {
  title = 'Aggravation';
  scoreList: IScore[] = [];
 
  public chart: any;

  constructor(private service: SignalGameService) {
var bob = this.service.playerData();
      // this.scoreList = parsedValue.sort((firstItem: IScore, secondItem: IScore) => firstItem.name.localeCompare(secondItem.name));    
   console.log('!!!! service.playerData()', bob);

    this.scoreList = service.playerData().sort((firstItem, secondItem) => firstItem.name.localeCompare(secondItem.name));


  console.log('!!!! scoreList', this.scoreList);
}

  ngOnInit(): void {
  }
}
