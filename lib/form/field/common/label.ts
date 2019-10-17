import {TextField} from '../text';


export function getLabelField(options = {}) {
  return new TextField(Object.assign({
    label: 'Label',
    propertyName: 'label'
  }, options));
}


export const LABEL_FIELD = getLabelField();
