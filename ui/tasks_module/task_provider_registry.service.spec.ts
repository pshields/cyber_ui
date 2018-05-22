import {TestBed, inject} from '@angular/core/testing';

import {TaskProvider, TaskProviderGetTasksOptions} from './interfaces/task_provider';

import {TaskProviderRegistryService} from './task_provider_registry.service';
import {Observable, of} from 'rxjs';


const TASK_PROVIDER_A: TaskProvider = {
  getTasks(options: TaskProviderGetTasksOptions) { return of([]); }
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
});
