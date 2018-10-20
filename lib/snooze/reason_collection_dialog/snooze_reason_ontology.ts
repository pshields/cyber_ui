export class SnoozeReason {

  constructor(
    // The label associated with this snooze reason
    readonly label: string,
    // Child reasons which are more specific than this snooze reason
    public children: SnoozeReason[] = [],
  ) {}

}

// This ontology is in progress and subject to change over time
// When storing the user's reason for snoozing something, it's recommended
// that consumering store the snooze reason label itself rather than any kind
// of index or reference into this object, since the particulars of this object
// could change over time.
export const CYBER_UI_SNOOZE_REASON_ONTOLOGY = [
  new SnoozeReason(
    // This reason indicates the task needs to be further refined
    'It needs to be refined',
    [
      new SnoozeReason(
        // This reason indicates the task would benefit from further decomposition
        "This task needs to be decomposed into subtasks",
      ),
      new SnoozeReason(
        // This reason indicates that the path to completion of the task in non-obvious and would benefit from creation of a plan
        "This task needs a plan"
      ),
    ],
  ),
  new SnoozeReason(
    // This reason indicates that the reason was circumstantial rather
    // than due to an intrinsic property of the task
    "It's circumstantially suboptimal",
  ),
  new SnoozeReason(
    // This indicates that the snoozed item was not as important as it
    // was deemed by the system, and should be demoted in the suggestions
    "It's a bad suggestion",
  )
];
