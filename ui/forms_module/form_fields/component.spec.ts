import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CyberUiFormsModule} from '../module';

import {CyberUiFormFieldsComponent} from './component';


describe('CyberUiFormFieldsComponent', () => {
  let component: CyberUiFormFieldsComponent<{}>;
  let fixture: ComponentFixture<CyberUiFormFieldsComponent<{}>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CyberUiFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberUiFormFieldsComponent);
    component = fixture.componentInstance;
  });

  it('initializes', () => {
    expect(component instanceof CyberUiFormFieldsComponent).toBe(true);
  });
});
