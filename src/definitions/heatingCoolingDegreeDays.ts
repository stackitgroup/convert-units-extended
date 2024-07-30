import { Measure, Unit } from './../index.js';

export type HeatingCoolingDegreeDaysUnits = HeatingCoolingDegreeDaysSIUnits;
export type HeatingCoolingDegreeDaysSystems = 'SI';

export type HeatingCoolingDegreeDaysSIUnits =
  | 'degF-days'
  | 'degC-days'
  | 'degK-days';

const SI: Record<HeatingCoolingDegreeDaysSIUnits, Unit> = {
  'degC-days': {
    name: {
      singular: 'degree Celsius day',
      plural: 'degree Celsius days',
    },
    to_anchor: 1, // Unidad base
    anchor_shift: 0, // Sin ajuste
  },
  'degF-days': {
    name: {
      singular: 'degree Fahrenheit day',
      plural: 'degree Fahrenheit days',
    },
    to_anchor: 5 / 9, // 1 °F-day = (5/9) °C-day
    anchor_shift: 32 * (5 / 9), // Ajuste para convertir °F a °C
  },
  'degK-days': {
    name: {
      singular: 'degree Kelvin day',
      plural: 'degree Kelvin days',
    },
    to_anchor: 1, // Directamente equivalente a °C-day
    anchor_shift: 273.15, // Ajuste para convertir K a °C
  },
};

const measure: Measure<
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits
> = {
  systems: {
    SI,
  },
};

export default measure;
