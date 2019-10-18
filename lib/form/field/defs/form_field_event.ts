// If a field's value was changed, an eent of this type should be emitted.
export interface CyberUiFormFieldChangeEvent {
  type: 'change';
};


// If the model should be saved, an event of this type should be emitted.
export interface CyberUiFormFieldSaveEvent {
  type: 'save';
}


export type CyberUiFormFieldEvent = CyberUiFormFieldChangeEvent | CyberUiFormFieldSaveEvent;
