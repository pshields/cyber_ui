# Cyber UI

Cyber UI provides Angular components and services for task management and related topics. `Cyber` (short for cybernetics), as used in this project's title, refers to the capability of humans to augment their abilities using technology.

This software is currently pre-alpha and under active development. Most of the v1 features are not yet implemented. Support the ongoing development of this project at https://patreon.com/pshields.

A demo is available at https://cyberui-demo.firebaseapp.com/.

## Development

Run `ng serve` and navigate to `http://localhost:4200/`.

## Testing

Run `ng test cyber_ui` or `ng test demo` to execute the respective tests via [Karma](https://karma-runner.github.io).

## Acknowledgements

* [Angular CLI](https://github.com/angular/angular-cli) version 6 was used to generate some of the initial scaffolding, configuration, documentation, and boilerplate code.
* [Angular Material](https://github.com/angular/material2) provides many useful UI components that Cyber UI uses and builds on.

## Q & A

### How does Cyber UI relate to Angular Material?

Cyber UI uses Angular Material components when it is feasible to do so, in order to keep the Cyber UI code surface smaller and less expensive to maintain.

Some Cyber UI workflows call for UI components that aren't present in Angular Material. In such cases, Cyber UI may provide its own components. These components will attempt to align with the general Material aesthetic.
