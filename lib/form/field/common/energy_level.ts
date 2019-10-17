import {ValueInNumericRangeField} from '../value_in_numeric_range';


// A field representing the user's current energy level
export const ENERGY_LEVEL_FIELD = getEnergyLevelField(1, 5);


export function getEnergyLevelField(minValue: number, maxValue: number) {
  return new ValueInNumericRangeField({
    label: 'Energy level',
    propertyName: 'energyLevel',
    minValue: minValue,
    maxValue: maxValue,
  });
}