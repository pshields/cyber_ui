export interface CyberUiStatusIndicatorOptions {
  // `glyph` is the string of characters (often just one) to be displayed
  glyph?: string;
  // The indicator's color (as a CSS color string)
  // If omitted, the color will not be dynamically bound, and will instead
  // be inherited from the host cyber-ui-status-indicator element, or one of
  // its ancestors. This enables styling indicators via CSS. For example:
  //
  // cyber-ui-status-indicator[status="warning"] {
  //   color: red;
  // }
  color?: string;
  // A serialized, string representation of the current status
  // The status indicator's "status" attribute will be bound to this value,
  // which enables users to style the indicator based on its status
  status?: string;
  // The text to show in a tooltip, when hovering over the glyph
  // The intended use case is to show an explanation of the current status
  tooltipText?: string;
}
