import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
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
  submitted = false;

  constructor(private service: SignalGameService, private router: Router) {
    this.players = service.players().sort();
    this.rounds = service.playerRound();
    console.log('players', this.players);
  }

  form = new FormGroup({
    userControl: new FormControl('', Validators.required),
    roundControl: new FormControl('', Validators.required),
    scoreControl: new FormControl('', Validators.required),
  });

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    const scoreValue = this.form.controls['scoreControl'].value ?? '';
    const score = {
      score: parseInt(scoreValue),
      name: this.form.controls['userControl'].value ?? '',
      round: this.form.controls['roundControl'].value ?? '',
    };

    this.service.updatePlayerRound(score);
    this.form.reset();
    this.router.navigateByUrl('/signal');
  }
}
