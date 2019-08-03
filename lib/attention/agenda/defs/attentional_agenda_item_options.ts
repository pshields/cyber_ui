export interface CyberUiAttentionalAgendaItemOptions {
  // The label for this item (shown in the UI)
  label: string;
  // The timestamp at which this item was added to the agenda
  // If omitted, the current time will be used
  added?: number;
}
