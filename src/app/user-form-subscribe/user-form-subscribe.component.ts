import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParticularService } from '../Services/user/particular.service';
import { Particular } from '../Entities/particular';

@Component({
  selector: 'app-user-form-subscribe',
  template: `
    <section>
      <h1>Good morning create your account:</h1>
        <div>
          <form [formGroup]="formGroup" (ngSubmit)="onSubmit(formGroup.value)">
            <div>
              <label for="name">
                Name
              </label>
              <input id="name" type="text" formControlName="name">
            </div>

            <div>
              <label for="firstName">
                FirstName
              </label>
              <input id="firstName" type="text" formControlName="firstName">
            </div>

            <div>
              <label for="phoneNumber">
                PhoneNumber
              </label>
              <input id="phoneNumber" type="text" formControlName="phoneNumber">
            </div>

            <div>
              <label for="email">
                Email
              </label>
              <input id="email" type="text" formControlName="email">
            </div>

            <button class="button" type="submit">Créer</button>
          </form>
        </div>
    </section>
  `,
  styleUrls: ['./user-form-subscribe.component.css']
})
export class UserFormSubscribeComponent implements OnInit {

  formGroup: FormGroup;
  newParticular: Particular;

  constructor(private formBuilder: FormBuilder, private particularService: ParticularService) {

    this.particularService = particularService;
    this.formBuilder = formBuilder;
    this.formGroup = this.formBuilder.group({
      name: '',
      firstName: '',
      phoneNumber: '',
      email: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(formGroup: FormGroup) {

    this.newParticular = this.formGroup.getRawValue();
    console.log("New user: ", this.newParticular);
    this.particularService.createParticular(this.newParticular).subscribe(particular => {
      console.log(particular);
    });
  }

}
