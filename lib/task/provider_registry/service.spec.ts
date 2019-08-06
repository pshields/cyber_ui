import {TestBed, fakeAsync, tick} from '@angular/core/testing';

import {from} from 'rxjs';

import {Task} from '../interfaces/task';
import {TaskProvider, TaskProviderGetTasksOptions, TaskProviderGetTasksResponse} from '../interfaces/task_provider';

import {TaskProviderRegistryService} from './service';
import {delay} from 'rxjs/operators';


const TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL = 'Task from provider A (initial response)';
const SECOND_TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL = 'Second task from provider A (initial response)';
const TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL = 'Task from provider B (initial and final response)';
const TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL = 'Task from provider A (final response)';
const TASK_FROM_VERY_SLOW_PROVIDER_LABEL = 'Task from very slow provider';


const TASK_PROVIDER_A_RESPONSE_ONE: TaskProviderGetTasksResponse<Task> = {
  tasks: [
    {
      label: TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL
    },
    {
      label: SECOND_TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL
    }
  ]
};

// An updated version of the previous response where the task labeled '111' has been removed
const TASK_PROVIDER_A_RESPONSE_TWO: TaskProviderGetTasksResponse<Task> = {
  tasks: [
    {
      label: TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL
    }
  ]
};



const TASK_PROVIDER_A: TaskProvider<Task> = {
  getTasks(options: TaskProviderGetTasksOptions) {
    return from([
      TASK_PROVIDER_A_RESPONSE_ONE,
      TASK_PROVIDER_A_RESPONSE_TWO,
    ]);
  }
};

const TASK_PROVIDER_B: TaskProvider<Task> = {
  getTasks(options: TaskProviderGetTasksOptions) {
    return from([
      {
        tasks: [{
          label: TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL,
        }]
      }
    ]);
  }
};

const SLOW_TASK_PROVIDER = {
  getTasks(options: TaskProviderGetTasksOptions) {
    return from([
      {
        tasks: [{
          label: TASK_FROM_VERY_SLOW_PROVIDER_LABEL
        }]
      }
    ]).pipe(delay(EXAMPLE_DEADLINE * 1.5));
  }
}


const EXAMPLE_DEADLINE = 5000;  // Five seconds is a reasonable deadline
const VERY_SLOW_PROVIDER_DELAY = EXAMPLE_DEADLINE * 1.5;
const MAXIMUM_NECESSARY_TICK = VERY_SLOW_PROVIDER_DELAY * 2;


describe('CyberUiTaskProviderRegistryService', () => {
  let registry: TaskProviderRegistryService<Task>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskProviderRegistryService]
    });
  });

  beforeEach(() => {
    registry = TestBed.get(TaskProviderRegistryService);
  });

  it('starts with an empty list of providers', () => {
    expect(registry.getProviders().length).toBe(0);
  });

  describe('getProviders()', () => {
    let returnedProviders: TaskProvider<Task>[];

    beforeEach(() => {
      returnedProviders = registry.getProviders();
    });

    it('returns a copy of the provider list', () => {
      // Push another provider onto the returned array and assert that it was not added to the registry.
      returnedProviders.push(TASK_PROVIDER_A);
      expect(returnedProviders.length).toEqual(registry.getProviders().length + 1);
    });
  });

  describe('when a provider emits multiple responses', () => {
    let taskLabels: string[][] = [];

    beforeEach(fakeAsync(() => {
      registry.registerProvider('TASK_PROVIDER_A', TASK_PROVIDER_A);
      registry.registerProvider('TASK_PROVIDER_B', TASK_PROVIDER_B);
      registry.registerProvider('SLOW_TASK_PROVIDER', SLOW_TASK_PROVIDER);
      registry.getTasks({}).subscribe(response => taskLabels.push(response.suggestions.map(suggestion => suggestion.task.label)));
      tick(MAXIMUM_NECESSARY_TICK);
    }));

    it('returns an evolving set of the latest tasks from each provider', () => {
      // The registry should emit four responses; two corresponding to provider A, one for B, and one for SLOW_TASK_PROVIDER
      expect(taskLabels.length).toBe(4);
      // Expectations for the initial response
      expect(taskLabels[0]).toContain(TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL);
      expect(taskLabels[0]).not.toContain(TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL);
      expect(taskLabels[0]).not.toContain(TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL);
      expect(taskLabels[0]).not.toContain(TASK_FROM_VERY_SLOW_PROVIDER_LABEL);
      // Expectations for the final response
      expect(taskLabels[3]).toContain(TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL);
      expect(taskLabels[3]).not.toContain(TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL);
      expect(taskLabels[3]).toContain(TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL);
      expect(taskLabels[3]).toContain(TASK_FROM_VERY_SLOW_PROVIDER_LABEL);
    });
  });

  describe("when a provider doesn't return until after the deadline", () => {
    let latestTaskLabels: string[];

    beforeEach(fakeAsync(() => {
      registry.registerProvider('TASK_PROVIDER_A', TASK_PROVIDER_A);
      registry.registerProvider('SLOW_TASK_PROVIDER', SLOW_TASK_PROVIDER);
      registry.getTasks({
        deadline: EXAMPLE_DEADLINE
      }).subscribe(response => latestTaskLabels = response.suggestions.map(suggestion => suggestion.task.label));
      tick(MAXIMUM_NECESSARY_TICK);
    }));

    it('contains tasks from providers that returned before the deadline', () => {
      expect(latestTaskLabels).toContain(TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL);
    });

    it('does not contain tasks from providers that returned after the deadline', () => {
      expect(latestTaskLabels).not.toContain(TASK_FROM_VERY_SLOW_PROVIDER_LABEL);
    });
  });

  describe('when options.oneshot is set', () => {
    let taskLabels: string[][];

    beforeEach(() => taskLabels = []);

    describe('and deadline is also set', () => {
      beforeEach(fakeAsync(() => {
        registry.registerProvider('TASK_PROVIDER_A', TASK_PROVIDER_A);
        registry.registerProvider('TASK_PROVIDER_B', TASK_PROVIDER_B);
        registry.registerProvider('SLOW_TASK_PROVIDER', SLOW_TASK_PROVIDER);
        registry.getTasks({
          deadline: EXAMPLE_DEADLINE,
          oneshot: true,
        }).subscribe(response => taskLabels.push(response.suggestions.map(suggestion => suggestion.task.label)));
        tick(MAXIMUM_NECESSARY_TICK);
      }));

      it('returns only a single response consisting of the tasks that had been received by the deadline', () => {
        expect(taskLabels.length).toBe(1);
        expect(taskLabels[0]).toContain(TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL);
        expect(taskLabels[0]).not.toContain(TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL);
        expect(taskLabels[0]).toContain(TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL);
        expect(taskLabels[0]).not.toContain(TASK_FROM_VERY_SLOW_PROVIDER_LABEL);
      });
    });

    describe('and deadline not set', () => {
      beforeEach(fakeAsync(() => {
        registry.registerProvider('TASK_PROVIDER_A', TASK_PROVIDER_A);
        registry.registerProvider('TASK_PROVIDER_B', TASK_PROVIDER_B);
        registry.registerProvider('SLOW_TASK_PROVIDER', SLOW_TASK_PROVIDER);
        registry.getTasks({
          oneshot: true,
        }).subscribe(response => taskLabels.push(response.suggestions.map(suggestion => suggestion.task.label)));
        tick(MAXIMUM_NECESSARY_TICK);
      }));

      it('returns only a single response consisting of the final set of tasks received from each provider', () => {
        expect(taskLabels.length).toBe(1);
        expect(taskLabels[0]).toContain(TASK_FROM_PROVIDER_A_FINAL_RESPONSE_LABEL);
        expect(taskLabels[0]).not.toContain(TASK_FROM_PROVIDER_A_INITIAL_RESPONSE_LABEL);
        expect(taskLabels[0]).toContain(TASK_FROM_PROVIDER_B_INITIAL_AND_FINAL_RESPONSE_LABEL);
        expect(taskLabels[0]).toContain(TASK_FROM_VERY_SLOW_PROVIDER_LABEL);
      });
    });
  })
});

// TODO Test that getTasks returns an empty response after the settings change such that there are no active task providers
// Prior to fixing this, it would create an observable which would never complete in that case