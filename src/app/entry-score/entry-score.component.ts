import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { GameService } from '../services/game.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-score',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  // providers:[GameService],
  templateUrl: './entry-score.component.html',
  styleUrl: './entry-score.component.scss',
})
export class EntryScoreComponent {
  players: string[];
  rounds: string[];
  setup = {};

  constructor(private service: GameService, private router: Router) {
    this.rounds = this.service.getRounds();
    this.players = this.service.getPlayers();
  }

  ngOnInit(): void {
    this.players.sort();
    // this.userData$ = this.service.userData$;
  }

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    round: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required),
  });

  submit() {
    const scoreValue = this.form.controls['score'].value ?? '';
    console.log('user', this.form.controls['user'].value);
    const score = {
      score: parseInt(scoreValue),
      name: this.form.controls['user'].value ?? '',
      round: this.form.controls['round'].value ?? '',
    };

    this.service.addUserRound(score);
    this.router.navigateByUrl('/dashboard');
  }
}
