import { Component, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';
import { IRound } from '../../services/round';
import { SignalGameService } from '../../services/signal/signal-game.service';


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
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

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

  resetForm() {
    this.form.reset();
    this.formDirective.resetForm(); // This clears the validation state
  }

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
    this.resetForm();
  }
}
