import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      mobileNumber: ['', [Validators.required, Validators.pattern("^[6-9][0-9]{9}$")]]
    })
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

}