import {TestBed, async, fakeAsync, tick, ComponentFixture} from '@angular/core/testing';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import {By} from '@angular/platform-browser';

import {Subject, ReplaySubject} from 'rxjs';

import {Task} from '../../interfaces/task';

import {CyberUiTaskAccordionModule} from './module';
import {Component} from '@angular/core';


describe('CyberUiTaskAccordionComponent', () => {
  let fixture: ComponentFixture<CyberUiTaskAccordionTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CyberUiTaskAccordionModule,
        NoopAnimationsModule,
      ],
      declarations: [
        CyberUiTaskAccordionTestComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyberUiTaskAccordionTestComponent);
    fixture.componentInstance.tasks = new ReplaySubject<Task[]>(1);
    // Provide some fake tasks
    fixture.componentInstance.tasks.next([
      {
        label: 'Task A',
        actions: [
          {
            label: 'Action 1',
            handler: () => {}
          }
        ]
      }
    ]);
  });

  describe('when the task list changes', () => {
    beforeEach(fakeAsync(() => {
      // The first change detection tells the view to render the new suggestions
      fixture.detectChanges();
      // Flush async activity (the settimeout call in the component)
      tick();
      // Another change detection cycle is needed for the view to update and expand the panel
      fixture.detectChanges();
     }));

    it('expands the first panel', async(() => {
      const firstExpansionPanel =
        fixture.debugElement.query(By.css('mat-expansion-panel'))
                            .nativeElement;
      // The first action's label will be present if the mat-action-row is visible
      expect(firstExpansionPanel.innerText).toContain('Action 1');
    }));
  });
});


@Component({
  selector: 'cyber-ui-task-accordion-test-component',
  template: '<cyber-ui-task-accordion [tasks]="tasks"></cyber-ui-task-accordion>',
})
export class CyberUiTaskAccordionTestComponent {
  tasks: Subject<Task[]>;
}
