import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myForm!: FormGroup;
  textToCount!: Array<string>;
  nbWords!: string;
  characterWithSpace!: string;
  characterWithoutSpace!: string;
  isVisible: boolean = false;
  

  onSubmit(form: FormGroup) {

    this.textToCount = [form.value.text]; 
    // characters with whitespaces
    const nbCharactersWithSpace: number = this.textToCount[0].length;

    // characters without whitespaces
    const nbCharactersWithoutSpace: number = this.textToCount[0].replace(/\s/g, "").length;

    // words
    const words: number = this.textToCount[0].split(' ').length;

    // Storage
    localStorage.setItem('words', words.toString());
    localStorage.setItem('characterWithSpace', nbCharactersWithSpace.toString());
    localStorage.setItem('characterWithoutSpace', nbCharactersWithoutSpace.toString());

    this.nbWords = localStorage.getItem('words')!;
    this.characterWithSpace = localStorage.getItem('characterWithSpace')!;
    this.characterWithoutSpace = localStorage.getItem('characterWithoutSpace')!;

    localStorage.clear();

    // display results
    this.isVisible = true;

    // log
    console.log(this.textToCount);
    console.log(words);
    console.log(nbCharactersWithoutSpace);
    console.log(nbCharactersWithSpace);

    
  };
  

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });
    
  }

  

};
