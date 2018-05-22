import {TestBed, inject} from '@angular/core/testing';

import {TaskEngineSettings} from '../interfaces/task_engine_settings';
import {TaskProvider} from '../interfaces/task_provider';

import {TaskProviderRegistry} from './task_provider_registry.service';
import {Observable, of} from 'rxjs';


const TASK_PROVIDER_A: TaskProvider = {
  getTasks(settings: TaskEngineSettings) { return of([]); }
};


describe('TaskProviderRegistry', () => {
  let registry: TaskProviderRegistry;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskProviderRegistry]
    });
  });

  beforeEach(() => {
    registry = TestBed.get(TaskProviderRegistry);
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
