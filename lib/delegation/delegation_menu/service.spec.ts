import {CyberUiDelegationMenuService} from './service';

import {DelegationTarget} from '../interfaces/delegation_target';

import {DelegationMenuState} from './state';


// A mock delegation target used for testing
const DELEGATION_TARGET_1: DelegationTarget = {
  label: 'Delegation target 1',
  delegationTargetHandler: () => {},
};


describe('CyberUiDelegationMenuService', () => {
  let service: CyberUiDelegationMenuService;

  beforeEach(() => {
    service = new CyberUiDelegationMenuService();
  });

  describe('when registering a delegation target', () => {
    let stateEmissions: DelegationMenuState[];

    beforeEach(() => {
      stateEmissions = [];
      service.state.subscribe(state => stateEmissions.push(state));
      service.registerDelegationTargets({
        targets: [DELEGATION_TARGET_1]
      });
    });

    it('emits a new state with the newly-registered delegation target', () => {
      expect(stateEmissions.length).toBe(1);
      expect(stateEmissions[0].delegationTargets[0]).toBe(DELEGATION_TARGET_1);
    });

  });

});
