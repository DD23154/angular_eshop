import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent{

  form: FormGroup = this.formBuilder.group({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    Message: new FormControl('', [Validators.required])
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(form : FormGroup){

    const name = this.form.get('Name')?.value;
    const email = this.form.get('Email')?.value;
    const message = this.form.get('Message')?.value;

    alert(`Form submitted. \n The sender is: ${name} \n His/Her email address is: ${email} \n His/Her message is: ${message}`);
    console.log(form);
  }
}
