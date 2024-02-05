import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GameService } from '../game.service';
@Component({
  selector: 'app-entry-score',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule],
  templateUrl: './entry-score.component.html',
  styleUrl: './entry-score.component.scss'
})


export class EntryScoreComponent {
  users: string[] = ['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T'];
  rounds: string[];


  constructor(private service: GameService) {
    this.rounds = this.service.getRounds();
  }

  ngOnInit(): void {
    this.users.sort();
  }

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    round: new FormControl('', Validators.required),
    score: new FormControl('', Validators.required),
  });

  submit() {
    console.log(this.form.value);
    const scoreValue = this.form.controls['score'].value;
    this.service.editScore(scoreValue);
    //  this.service.editScore.next(this.form.controls['score'].value)
  }

    // getUserDetails () {
    //   this.service.editScore(this.form.controls['score'].value).subscribe(
    //     (results) => {

    //       this._usernext();
    //       console.log('assetStatuses',this.assetStatuses$)
    //     }
}
