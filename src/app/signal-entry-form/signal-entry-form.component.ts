import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { SignalGameService } from '../services/signal-game.service';
import { IRound } from '../services/round';


@Component({
  selector: 'app-signal-entry-form',
  standalone: true,
  imports: [MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule, MatButtonModule],
  templateUrl: './signal-entry-form.component.html',
  styleUrl: './signal-entry-form.component.scss'
})
export class SignalEntryFormComponent {
  players: string[] = [];
  rounds: IRound[] = [];

  constructor(private service: SignalGameService, private router: Router) {
    this.players = service.players().sort();
    this.rounds = service.playerRound();
    console.log('players', this.players);
  }

  ngOnInit(): void {
    // this.players.sort();

  }

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    round: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required),
  });

  submit() {
    const scoreValue = this.form.controls['score'].value ?? '';
    const score = {
      score: parseInt(scoreValue),
      name: this.form.controls['user'].value ?? '',
      round: this.form.controls['round'].value ?? '',
    };

    this.service.updatePlayerRound(score);
    this.router.navigateByUrl('/signal');
  }
}
