import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { Store } from '@ngrx/store';

// Mock du store (Nous faisons une simple fausse implémentation ici)
class MockStore {
  select() {
    return {
      subscribe() {}
    };
  }

  dispatch() {}
}

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        { provide: Store, useClass: MockStore }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when text input is empty', () => {
    component.myForm.controls['text'].setValue('');
    expect(component.myForm.valid).toBeFalsy();
  });

  it('form should be valid when text input has a value', () => {
    component.myForm.controls['text'].setValue('Sample text for testing');
    expect(component.myForm.valid).toBeTruthy();
  });

  it('should correctly compute word and character counts for a 2-word string', () => {
    const sampleText = 'apple mango';

    component.myForm.controls['text'].setValue(sampleText);

    component.onSubmit(component.myForm);

    // Check the word count
    expect(component.nbWords).toBe('2');

    // Check characters with spaces
    expect(component.characterWithSpace).toBe('11');

    // Check characters without spaces
    expect(component.characterWithoutSpace).toBe('10');
  });
});
