import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-entry-score',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
  templateUrl: './entry-score.component.html',
  styleUrl: './entry-score.component.scss'
})


export class EntryScoreComponent {
  gamers: string[] = ['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T'];
  form = new FormGroup({
    user: new FormControl('', Validators.required)
  });

  ngOnInit(): void {
    this.gamers.sort();
  }

  submit() {
    console.log(this.form.value);
  }
}
