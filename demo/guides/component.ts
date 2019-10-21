import {Component, HostBinding} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {CyberUiThemeService} from 'lib/public_api';

// Import the Markdown-formatted guides at compile-time
import * as styleGuideData from 'raw-loader!demo/guides/style.md';
import * as systemizationData from 'raw-loader!demo/guides/systemization.md';
import * as taskRepresentationData from 'raw-loader!demo/guides/task_representation.md';
import * as taskSuggestionsData from 'raw-loader!demo/guides/task_suggestions.md';
import * as taskSuggestionServicesData from 'raw-loader!demo/guides/task_suggestion_services.md';
import * as taskTemplatesData from 'raw-loader!demo/guides/task_templates.md';
import * as themingData from 'raw-loader!demo/guides/theming.md';
import * as uncertaintyReductionData from 'raw-loader!demo/guides/uncertainty_reduction.md';
import * as workingWithAngularMaterialData from 'raw-loader!demo/guides/working_with_angular_material.md';


export class Guide {
  // The id/slug of the guide (used in the URL)
  id: string;
  // The guide's name (used in the navigation)
  label: string;
  // The Markdown data to render, if the guide is a Markdown document
  data?: string;
  // Note: if the guide is its own component, it should be given its own route
  // rather than using this component
}


// The list of guides that Cyber UI has documentation about
export const GUIDES: Guide[] = [
  {
    id: 'attention-management',
    label: 'Attention management'
  },
  {
    id: 'style-guide',
    label: 'Style guide',
    data: styleGuideData.default,
  },
  {
    id: 'systemization',
    label: 'Systemization',
    data: systemizationData.default,
  },
  {
    id: 'task-representation',
    label: 'Task representation',
    data: taskRepresentationData.default,
  },
  {
    id: 'task-suggestions',
    label: 'Task suggestions',
    data: taskSuggestionsData.default,
  },
  {
    id: 'task-suggestion-services',
    label: 'Task suggestion services',
    data: taskSuggestionServicesData.default,
  },
  {
    id: 'task-templates',
    label: 'Task templates',
    data: taskTemplatesData.default,
  },
  {
    id: 'timeboxing',
    label: 'Timeboxing',
  },
  {
    id: 'theming',
    label: 'Theming',
    data: themingData.default,
  },
  {
    id: 'uncertainty-reduction',
    label: 'Uncertainty reduction',
    data: uncertaintyReductionData.default,
  },
  {
    id: 'working-with-angular-material',
    label: 'Working with Angular Material',
    data: workingWithAngularMaterialData.default,
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
  // The color of the primary text content on page
  // (dynamic based on theme settings)
  @HostBinding('style.color') color: string;

  constructor(
    route: ActivatedRoute,
    readonly themeService: CyberUiThemeService,
  ) {
    route.params.subscribe(params => {
      this.guideId = params.id;
      this.guide = GUIDES.find(obj => obj.id === this.guideId);
    });
    // Update the text color based on the current theme settings
    themeService.textColor.subscribe(color => {
      this.color = color;
    });
  }
}
