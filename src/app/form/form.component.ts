import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myForm!: FormGroup;

  

  onSubmit(form: FormGroup) {
    console.log(form.value.text); 
    
  };
  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
    
  }

}
