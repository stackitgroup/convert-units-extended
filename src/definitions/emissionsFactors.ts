import { Measure, Unit } from './../index.js';
export type EmissionsFactorsUnits =
  | EmissionsFactorsMetricUnits
  | EmissionsFactorsImperialUnits;
export type EmissionsFactorsSystems = 'metric' | 'imperial';

export type EmissionsFactorsMetricUnits = 'kgCO2e/kBtu' | 'kgCO2e/kWh';
export type EmissionsFactorsImperialUnits = 'lbCO2e/kBtu' | 'lbCO2e/ton-hour';

const metric: Record<EmissionsFactorsMetricUnits, Unit> = {
  'kgCO2e/kWh': {
    name: {
      singular: 'Kilogram CO2e per Kilowatt-Hour',
      plural: 'Kilograms CO2e per Kilowatt-Hour',
    },
    to_anchor: 1,
  },
  'kgCO2e/kBtu': {
    name: {
      singular: 'Kilogram CO2e per Thousand British Thermal Units',
      plural: 'Kilograms CO2e per Thousand British Thermal Units',
    },
    to_anchor: 0.293071,
  },
};

const imperial: Record<EmissionsFactorsImperialUnits, Unit> = {
  'lbCO2e/kBtu': {
    name: {
      singular: 'Pound CO2e per Thousand British Thermal Units',
      plural: 'Pounds CO2e per Thousand British Thermal Units',
    },
    to_anchor: 1,
  },
  'lbCO2e/ton-hour': {
    name: {
      singular: 'Pound CO2e per Ton-Hour',
      plural: 'Pounds CO2e per Ton-Hour',
    },
    to_anchor: 12,
  },
};

const measure: Measure<EmissionsFactorsSystems, EmissionsFactorsUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 7.527,
      },
    },
    imperial: {
      metric: {
        ratio: 0.1328,
      },
    },
  },
};

export default measure;
