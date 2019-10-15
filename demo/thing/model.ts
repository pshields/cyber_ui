import slugify from 'slugify';

import {CyberUiDemoThingSchema} from './schema';


export class CyberUiDemoThingModel implements CyberUiDemoThingSchema {
  label: string;
  slug: string;
  description: string|undefined;
  characterizations: string[];

  constructor(
    data: CyberUiDemoThingSchema,
  ) {
    this.label = data.label;
    this.slug = this.getSlug(data);
    this.description = data.description;
    this.characterizations = data.characterizations || [];
  }

  getSlug(data: CyberUiDemoThingSchema) {
    return data.slug || slugify(data.label, {lower: true});
  }

}
