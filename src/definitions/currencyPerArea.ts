/* eslint-disable @typescript-eslint/no-loss-of-precision */
import { Measure, Unit } from './../index.js';
export type CurrencyPerAreaUnits =
  | CurrencyPerAreaMetricUnits
  | CurrencyPerAreaImperialUnits;
export type CurrencyPerAreaSystems = 'metric' | 'imperial';

// !USD
// !CAD
// !EUR
// !GBP
// !AUD
// *JPY
// *SGD
// *INR

export type CurrencyPerAreaMetricUnits =
  | 'USD/mm2'
  | 'USD/cm2'
  | 'USD/m2'
  | 'EUR/m2'
  | 'GBP/m2'
  | 'AUD/m2'
  | 'CAD/m2'
  | 'JPY/m2'
  | 'SGD/m2'
  | 'INR/m2';
export type CurrencyPerAreaImperialUnits =
  | 'USD/in2'
  | 'USD/yd2'
  | 'USD/ft2'
  | 'EUR/ft2'
  | 'GBP/ft2'
  | 'AUD/ft2'
  | 'CAD/ft2'
  | 'JPY/ft2'
  | 'SGD/ft2'
  | 'INR/ft2';

const metric: Record<CurrencyPerAreaMetricUnits, Unit> = {
  'USD/m2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1,
  },
  'AUD/m2': {
    name: {
      singular: 'Australian Dollar per Square Meter',
      plural: 'Australian Dollars Square Meters',
    },
    to_anchor: 1 / 1.4647936838096354,
  },
  'EUR/m2': {
    name: {
      singular: 'Euro per Square Meter',
      plural: 'Euros Square Meters',
    },
    to_anchor: 1 / 0.9968797663313828,
  },
  'CAD/m2': {
    name: {
      singular: 'Canadian Dollar per Square Meter',
      plural: 'Canadian DOllars Square Meters',
    },
    to_anchor: 1 / 1.3146823727387462,
  },
  'GBP/m2': {
    name: {
      singular: 'Pound Sterling per Square Meter',
      plural: 'Pounds Sterling Square Meters',
    },
    to_anchor: 1 / 0.8629616845012081,
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
  'JPY/m2': {
    name: {
      singular: 'Japanese Yen per Square Meter',
      plural: 'Japanese Yens per Square Meters',
    },
    to_anchor: 1 / 144.83299999999995,
  },
  'SGD/m2': {
    name: {
      singular: 'Singapore Dollar per Square Meter',
      plural: 'Singapore Dollars per Square Meters',
    },
    to_anchor: 1 / 1.36739487745097,
  },
  'INR/m2': {
    name: {
      singular: 'Indian Rupee per Square Meter',
      plural: 'Indian Rupees per Square Meters',
    },
    to_anchor: 1 / 82.33276400000002,
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
  'AUD/ft2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1 / 1.4647936838096354,
  },
  'EUR/ft2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1 / 0.9968797663313828,
  },
  'CAD/ft2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1 / 1.3146823727387462,
  },
  'GBP/ft2': {
    name: {
      singular: 'Dollar per Square Meter',
      plural: 'Dollar Square Meters',
    },
    to_anchor: 1 / 0.8629616845012081,
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
  'JPY/ft2': {
    name: {
      singular: 'Japanese Yen per Square Foot',
      plural: 'Japanese Yens per Square Feet',
    },
    to_anchor: 1 / 144.83299999999995,
  },
  'SGD/ft2': {
    name: {
      singular: 'Singapore Dollar per Square Foot',
      plural: 'Singapore Dollars per Square Feet',
    },
    to_anchor: 1 / 1.36739487745097,
  },
  'INR/ft2': {
    name: {
      singular: 'Indian Rupee per Square Foot',
      plural: 'Indian Rupees per Square Feet',
    },
    to_anchor: 1 / 82.33276400000002,
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
