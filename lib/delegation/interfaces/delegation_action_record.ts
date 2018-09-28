// A record of an occurance of delegation of a particular delegatable thing
// It's intended that an array of these be stored on delegatable things and used for recordkeeping
export interface DelegationActionRecord {
  // Who was the user who performed this delegation action?
  userId?: string;
  // What was the target of this delegation action? (if no target specified, 'auto' is acceptable)
  targetId?: string;
  // At what time was this delegation action taken? (milliseconds since Unix epoch)
  when?: number;
}
