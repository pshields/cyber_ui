import {Component, NgModule} from '@angular/core';
import {fakeAsync, TestBed, tick, ComponentFixture} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';

import {FakeModel} from '../../../backends/fake/model';

import {CyberUiDiscreteProbabilityDistributionFieldComponent} from './component';
import {DiscreteProbabilityDistributionField} from './field';
import {CyberUiDiscreteProbabilityDistributionFieldModule} from './module';


describe('CyberUiDiscreteProbabilityDistributionField', () => {
  let fixture: ComponentFixture<CyberUiDiscreteProbabilityDistributionFieldTestComponent>;
  let harnessComponent: CyberUiDiscreteProbabilityDistributionFieldTestComponent;
  let component: CyberUiDiscreteProbabilityDistributionFieldComponent

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        CyberUiDiscreteProbabilityDistributionFieldTestModule,
      ]
    }).compileComponents();
    tick();

    fixture = TestBed.createComponent(CyberUiDiscreteProbabilityDistributionFieldTestComponent);
    harnessComponent = fixture.componentInstance;
    component = fixture
                  .debugElement
                  .query(By.directive(CyberUiDiscreteProbabilityDistributionFieldComponent))
                  .componentInstance;

    fixture.detectChanges();
  }));

  it('instantiates', () => {
    expect(component instanceof CyberUiDiscreteProbabilityDistributionFieldComponent).toBeTruthy();
  });

  describe('ngOnChanges', () => {

    describe('when both the model and field have changed', () => {

      beforeEach(fakeAsync(() => {
        harnessComponent.model = new FakeModel();
        harnessComponent.field = new DiscreteProbabilityDistributionField({
          label: 'Test field (updated)',
          propertyName: 'updatedTestProbabilityDistribution',
          outcomePresets: [
            {
              label: 'Outcome preset 1 on updated field/model',
            },
            {
              label: 'Outcome preset 2 on updated field/model',
            }
          ]
        });
        fixture.detectChanges();
      }));

      it('initializes an undefined field value with the outcome presets', () => {
        const fieldValue = harnessComponent.model.getProperty('updatedTestProbabilityDistribution');
        expect(fieldValue.length).toBe(2);
        expect(fieldValue[0].outcome.label).toEqual('Outcome preset 1 on updated field/model');
      });

    });
  });
});


@Component({
  template: `
    <cyber-ui-discrete-probability-distribution-field
      [model]=model
      [field]=field>
    </cyber-ui-discrete-probability-distribution-field>
  `
})
export class CyberUiDiscreteProbabilityDistributionFieldTestComponent {
  model = new FakeModel();

  field = new DiscreteProbabilityDistributionField({
    label: 'Test field',
    propertyName: 'testProbabilityDistribution'
  });

  constructor() {
    this.model.setProperty('initial model', true);
  }
}


@NgModule({
  imports: [
    NoopAnimationsModule,
    MatDialogModule, // all field components currently need this to support the 'helpDialog' field option
    CyberUiDiscreteProbabilityDistributionFieldModule,
  ],
  declarations: [
    CyberUiDiscreteProbabilityDistributionFieldTestComponent,
  ]
})
export class CyberUiDiscreteProbabilityDistributionFieldTestModule {}
