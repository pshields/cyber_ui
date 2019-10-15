export interface CyberUiDemoThingSchema {

  // This thing's user-facing label
  label: string;

  // A URL-friendly identifier for this thing
  slug?: string;

  // The list of characterizations that this thing has
  characterizations: string[];

  // A description of this thing, if provided
  description?: string;

}
