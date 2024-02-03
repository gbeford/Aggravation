import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-entry-score',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule,FormsModule, ReactiveFormsModule],
  templateUrl: './entry-score.component.html',
  styleUrl: './entry-score.component.scss'
})


export class EntryScoreComponent {
  users: string[] = ['Gina', 'Pat', 'Linda', 'Adam', 'John W', 'John T'];
 rounds: string[]= ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15'];

  form = new FormGroup({
    user: new FormControl('', Validators.required),
    round:new FormControl('', Validators.required),
    score:new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.users.sort();
  }

  submit() {
    console.log(this.form.value);
  }
}
