# Cyber UI

Cyber UI provides Angular components and services for task management, prediction management, decision support, and related topics. `Cyber` (short for cybernetics), as used in this project's title, refers to the capability of humans to augment their abilities using technology.

A demo is available at https://cyberui.org/.

Cyber UI follows [semantic versioning](https://semver.org/) and is currently pre-v1. Breaking changes are likely up until the v1 release. A v1 release is expected by the end of 2019.

You can have a say in the future of this library and its API! Fund your desired features or support ongoing development by becoming a sponsor at https://patreon.com/pshields. At higher levels, sponsorships come with development time allocated according to your priorities.

## Development

Run `ng serve` and navigate to `http://localhost:4200/`.

## Testing

Run `ng test cyber_ui` or `ng test demo` to execute the respective tests via [Karma](https://karma-runner.github.io).

## Acknowledgements

* [Angular CLI](https://github.com/angular/angular-cli) version 6 was used to generate some of the initial scaffolding, configuration, documentation, and boilerplate code.
* [Angular Material](https://github.com/angular/material2) provides many useful UI components that Cyber UI uses and builds on.

## Q & A

### What visual design guidelines does Cyber UI follow?

Cyber UI attempts to generally conform to the [Material Design](https://material.io/) aesthetic and principles.

### How does Cyber UI relate to Angular Material?

Cyber UI uses Angular Material components when it is feasible to do so, in order to keep the Cyber UI code surface smaller and less expensive to maintain.

Some Cyber UI workflows call for UI components that aren't present in Angular Material. In such cases, Cyber UI may provide its own components. These components will attempt to align with the general Material aesthetic.

If a needed-but-unimplemented component could live in Angular Material, an attempt should be made to contribute it there. Otherwise, it can live in Cyber UI.
