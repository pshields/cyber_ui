import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


// Import the Markdown-formatted guides at compile-time
import * as taskSuggestionsData from 'raw-loader!demo/guides/task_suggestions.md';
import * as taskTemplatesData from 'raw-loader!demo/guides/task_templates.md';
import * as uncertaintyReductionData from 'raw-loader!demo/guides/uncertainty_reduction.md';
import * as workingWithAngularMaterialData from 'raw-loader!demo/guides/working_with_angular_material.md';


export class Guide {
  // The id/slug of the guide (used in the URL)
  id: string;
  // The guide's name (used in the navigation)
  label: string;
  // The Markdown data to render corresponding to this guide
  data: string|any;
}


// The list of guides that Cyber UI has documentation about
export const GUIDES = [
  {
    id: 'task-suggestions',
    label: 'Task suggestions',
    data: taskSuggestionsData,
  },
  {
    id: 'task-templates',
    label: 'Task templates',
    data: taskTemplatesData,
  },
  {
    id: 'uncertainty-reduction',
    label: 'Uncertainty reduction',
    data: uncertaintyReductionData,
  },
  {
    id: 'working-with-angular-material',
    label: 'Working with Angular Material',
    data: workingWithAngularMaterialData,
  }
];


@Component({
  selector: 'guides-section',
  templateUrl: './component.html',
  styleUrls: ['./component.scss'],
})
export class GuidesComponent {
  // The ID of the guide to show (taken from the route)
  guideId: string;
  // The current guide
  guide: Guide;

  constructor(route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.guideId = params.id;
      this.guide = GUIDES.find(obj => obj.id === this.guideId);
    });
  }
}
