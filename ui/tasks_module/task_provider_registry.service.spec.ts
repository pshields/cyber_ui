import {TestBed, async} from '@angular/core/testing';

import {from} from 'rxjs';

import {TaskProvider, TaskProviderGetTasksOptions, TaskProviderGetTasksResponse} from './interfaces/task_provider';

import {TaskProviderRegistryService} from './task_provider_registry.service';



const TASK_PROVIDER_A_RESPONSE_ONE: TaskProviderGetTasksResponse = {
  tasks: [
    {
      label: '111'
    },
    {
      label: '222'
    }
  ]
};

// An updated version of the previous response where the task labeled '111' has been removed
const TASK_PROVIDER_A_RESPONSE_TWO: TaskProviderGetTasksResponse = {
  tasks: [
    {
      label: '111'
    }
  ]
};



const TASK_PROVIDER_A: TaskProvider = {
  getTasks(options: TaskProviderGetTasksOptions) {
    return from([
      TASK_PROVIDER_A_RESPONSE_ONE,
      TASK_PROVIDER_A_RESPONSE_TWO,
    ]);
  }
};

const TASK_PROVIDER_B: TaskProvider = {
  getTasks(options: TaskProviderGetTasksOptions) {
    return from([
      {
        tasks: [{
          label: '333',
        }]
      }
    ]);
  }
};


describe('TaskProviderRegistry', () => {
  let registry: TaskProviderRegistryService;

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
    let returnedProviders: TaskProvider[];

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
    let latestTaskLabels: string[];

    beforeEach(async(() => {
      registry.registerProvider('TASK_PROVIDER_A', TASK_PROVIDER_A);
      registry.registerProvider('TASK_PROVIDER_B', TASK_PROVIDER_B);
      registry.getTasks({}).subscribe(tasks => latestTaskLabels = tasks.map(task => task.label));
    }));

    it('returns only the latest set of tasks from each provider', () => {
      // '111' is in the final emitted response from TASK_PROVIDER_A, so it should be in the final task result
      expect(latestTaskLabels).toContain('111');
      // '222' was removed prior to the final response from TASK_PROVIDER_A, so it should not be present
      expect(latestTaskLabels).not.toContain('222');
      // '333' is present in the final emitted response from TASK_PROVIDER_B, so it should be present
      expect(latestTaskLabels).toContain('333');
    });
  });
});
