import { Measure, Unit } from './../index.js';
export type CurrencyPerAreaUnits =
  | CurrencyPerAreaMetricUnits
  | CurrencyPerAreaImperialUnits;
export type CurrencyPerAreaSystems = 'metric' | 'imperial';

export type CurrencyPerAreaMetricUnits = 'USD/mm2' | 'USD/cm2' | 'USD/m2';
export type CurrencyPerAreaImperialUnits = 'USD/in2' | 'USD/yd2' | 'USD/ft2';

const metric: Record<CurrencyPerAreaMetricUnits, Unit> = {
  'USD/m2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1,
  },
  'USD/cm2': {
    name: {
      singular: 'Dollar per Square Centimeter',
      plural: 'Dollar per Square Centimeters',
    },
    to_anchor: 1 / 10000,
  },
  'USD/mm2': {
    name: {
      singular: 'Dollar per Square Millimeter',
      plural: 'Dollar per Square Millimeters',
    },
    to_anchor: 1 / 1000000,
  },
};

const imperial: Record<CurrencyPerAreaImperialUnits, Unit> = {
  'USD/in2': {
    name: {
      singular: 'Square Inch',
      plural: 'Square Inches',
    },
    to_anchor: 1 / 144,
  },
  'USD/ft2': {
    name: {
      singular: 'Square Foot',
      plural: 'Square Feet',
    },
    to_anchor: 1,
  },
  'USD/yd2': {
    name: {
      singular: 'Square Yard',
      plural: 'Square Yards',
    },
    to_anchor: 9,
  },
};

const measure: Measure<CurrencyPerAreaSystems, CurrencyPerAreaUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 10.7639,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 10.7639,
      },
    },
  },
};

export default measure;
