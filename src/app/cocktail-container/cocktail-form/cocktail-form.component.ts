import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cocktail-form',
  templateUrl: './cocktail-form.component.html',
  styleUrls: ['./cocktail-form.component.scss']
})
export class CocktailFormComponent {
  public cocktailForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    img: ['', Validators.required],
    description: ''
  });

  constructor(private fb: FormBuilder) {}

  public submit(): void {
    console.log(this.cocktailForm);
  }
}
