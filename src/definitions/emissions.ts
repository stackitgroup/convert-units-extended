import { Measure, Unit } from './../index.js';
export type EmissionsUnits = EmissionsMetricUnits | EmissionsImperialUnits;
export type EmissionsSystems = 'metric' | 'imperial';

export type EmissionsMetricUnits = 'kgCO2e' | 'MTCO2e';
export type EmissionsImperialUnits = 'lbCO2e';

const metric: Record<EmissionsMetricUnits, Unit> = {
  kgCO2e: {
    name: {
      singular: 'Kilogram CO2e',
      plural: 'Kilograms CO2e',
    },
    to_anchor: 1,
  },
  MTCO2e: {
    name: {
      singular: 'Metric Ton CO2e',
      plural: 'Metric Tons CO2e',
    },
    to_anchor: 1000,
  },
};

const imperial: Record<EmissionsImperialUnits, Unit> = {
  lbCO2e: {
    name: {
      singular: 'Pound CO2e',
      plural: 'Pounds CO2e',
    },
    to_anchor: 1,
  },
};

const measure: Measure<EmissionsSystems, EmissionsUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 2.20462,
      },
    },
    imperial: {
      metric: {
        ratio: 0.453592,
      },
    },
  },
};

export default measure;
