import {TimeboxId} from '../../../util/timebox/defs/timebox_id';


export interface CyberUiAttentionalAgendaItemOptions {
  // The label for this item (shown in the UI)
  label: string;
  // An optional router link for the label. If present, the label will
  // become clickable, and clicking will result in navigation to the
  // provided router link
  labelRouterLink?: string;
  // The timestamp at which this item was added to the agenda
  // If omitted, the current time will be used
  added?: number;
  // Optional ref to an existing timebox to associate with this item
  timeboxId?: TimeboxId;
  // An optional timebox duration (in ms), if the item should be timeboxed
  // Note: timeboxId has precedence if provided
  timeboxDuration?: number;
}
