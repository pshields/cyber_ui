export class Need {
  // The label for this need
  label: string;

  constructor(options: NeedOptions) {
    this.label = options.label;
  }
}


export interface NeedOptions {
  label: string;
}