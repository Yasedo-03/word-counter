import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { countWords } from 'src/store/actions/word-count.actions';
import { selectCharactersWithSpace, selectCharactersWithoutSpace, selectWords } from 'src/store/selectors/word-count.selectors';
import { AppState } from 'src/store/state/app.state';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  myForm!: FormGroup;
  nbWords!: string;
  characterWithSpace!: string;
  characterWithoutSpace!: string;
  isVisible: boolean = false;

  constructor(private store: Store<AppState>) {}

  onSubmit(form: FormGroup) {
    this.store.dispatch(countWords({ text: form.value.text }));

    this.isVisible = true;
  }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      text: new FormControl('', [Validators.required]),
    });

    this.store.select(selectWords).subscribe(words => this.nbWords = words.toString());
    this.store.select(selectCharactersWithSpace).subscribe(characters => this.characterWithSpace = characters.toString());
    this.store.select(selectCharactersWithoutSpace).subscribe(characters => this.characterWithoutSpace = characters.toString());
  }
}
