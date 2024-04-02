import { Component, OnInit, ViewChild } from '@angular/core';
import { SignalGameService } from '../services/signal-game.service';
import { Chart, ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

//https://github.com/valor-software/ng2-charts 

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss'
})
export class BarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;

  chartLabels: string[] = [];
  scoreData = {};
  public barChartType = 'bar' as const;
  barChartOptions = { responsive: true };
  public barChartData: ChartData<'bar'> = { datasets: [] };

  constructor(private service: SignalGameService) {


    // this.barChartData = [
    //   { data: this.scoreData, label: 'Series A' }
    // ];
  }
  ngOnInit() {
    this.chartLabels = this.service.playerData().map(r => r.name);
    console.log('label', this.chartLabels)
    this.scoreData = this.service.playerData().map(r => r.score);
    this.createChart();
  }



  createChart() {
    this.barChartData = {
      //labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
      labels: this.chartLabels,
      datasets: [
        // { data: (this.scoreData), label: 'Series A' },
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
      ],
    };
  }
  // events
  public chartClicked({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public chartHovered({
    event,
    active,
  }: {
    event?: ChartEvent;
    active?: object[];
  }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40,
    ];

    this.chart?.update();
  }
}

  // this.service.getChartInfo().subscribe((response) => {
  //   this.chartInfo = response;
  //   if (this.chartInfo != null) {
  //     for (let i = 0; i < this.chartInfo.length; i++) {
  //       this.labeldata.push(this.chartInfo[i].year);
  //       this.realdata.push(this.chartInfo[i].amount);
  //       this.colordata.push(this.chartInfo[i].colorcode);
  //     }
  //     this.createChart(this.labeldata, this.realdata, this.colordata);
  //   }
  // });
  //  createChart(labeldata: any, realdata: any, colordata: any) {}
// }
