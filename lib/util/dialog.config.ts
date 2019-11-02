// Angular Material's MatDialogConfig comes with its own defaults
// Cyber UI provides an opinionated version of the defaults in this module
// For example, Angular Material dialogs are fairly narrow by default
// CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG configures a larger default size
import {MatDialogConfig} from '@angular/material/dialog';


// Start with an instance of MatDialogConfig in order to inherit the Material defaults
export const CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG = new MatDialogConfig();


// The `width` property functions in some ways as a maximum width, since it still works
// well on smaller screen sizes. `width` also serves as a width hint; this property is
// set, rather than 'maxWidth', in order for the dialog to actually take up this space
// when it is available.
CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG.width = '1024px';
// Note: maxWidth is already defaulted to 80vw by Angular Material


// Under the assumption that all dialogs will show up on a light theme,
// and that cyber-ui-inverted-background always refers to a light theme
// (the semantics of that class need to be improved)
CYBER_UI_MAT_DIALOG_DEFAULT_CONFIG.panelClass = 'cyber-ui-inverted-background';
