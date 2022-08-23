import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myForm!: FormGroup;
  textToCount!: Array<string>;

  async onSubmit(form: FormGroup) {

    this.textToCount = [form.value.text]; 
    // characters with whitespaces
    const nbCharactersWithSpace: number = this.textToCount[0].length;

    // characters without whitespaces
    const nbCharactersWithoutSpace: number = this.textToCount[0].replace(/\s/g, "").length;

    // words
    const words: number = this.textToCount[0].split(' ').length;
    console.log(this.textToCount);
    console.log(words);
    console.log(nbCharactersWithoutSpace);
    console.log(nbCharactersWithSpace);

    
  };
  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    });
    
  }

  

};
