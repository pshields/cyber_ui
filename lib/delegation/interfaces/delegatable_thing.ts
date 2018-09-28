import {DelegationActionRecord} from './delegation_action_record';


export interface DelegatableThing {
  // TODO Should downstream consumers be able to configure this property name?
  delegationHistory?: DelegationActionRecord[];
}
