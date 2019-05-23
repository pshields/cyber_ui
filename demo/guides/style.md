# Style guide

This style guide applies to the Cyber UI project itself. The intended audience is contributors to the Cyber UI project.

## Coding style

### Package directory structure

The Cyber UI library consists of multiple packages within the [`lib`](https://github.com/pshields/cyber_ui/tree/master/lib) directory.

NOTE: The package names directly inside of `lib` typically use singular forms (e.g. the `task` package, or the `workflow` package), rather than plural forms.

#### `interfaces` subdirectory

Within each package directory, the `interfaces` subdirectory contains any public-facing interfaces corresponding to the package. These interfaces form part of the public API of the package.

It's intended that `interfaces` subpackages can be imported without increasing code size. `interfaces` should contain only interface definitions that leave no trace when compiled to JavaScript.

TODO Implement an automated check for that package `interfaces` subpackages consist only of interface definitions that leave no trace upon compilation to JavaScript
