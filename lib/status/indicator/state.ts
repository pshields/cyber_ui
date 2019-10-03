import {CyberUiStatusIndicatorOptions} from './defs/options';


// By default, a filled circle is used as the displayed glyph
export const CYBER_UI_STATUS_INDICATOR_DEFAULT_GLPYH = '●';

// By default, 'unknown' is used as the status string
export const CYBER_UI_STATUS_INDICATOR_DEFAULT_STATUS = 'unknown';


export class CyberUiStatusIndicatorState {
  readonly color: string|undefined;
  readonly glyph: string;
  readonly status: string;
  readonly tooltipText: string|undefined;

  constructor(options: CyberUiStatusIndicatorOptions) {
    this.color = options.color;
    this.glyph = this.getGlyph(options);
    this.status = this.getStatus(options);
    this.tooltipText = options.tooltipText;
  }

  getGlyph(options: CyberUiStatusIndicatorOptions) {
    return options.glyph || CYBER_UI_STATUS_INDICATOR_DEFAULT_GLPYH;
  }

  getStatus(options: CyberUiStatusIndicatorOptions) {
    return options.status || CYBER_UI_STATUS_INDICATOR_DEFAULT_STATUS;
  }
}
