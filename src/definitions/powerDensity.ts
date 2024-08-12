import { Measure, Unit } from './../index.js';
export type PowerDensityUnits =
  | PowerDensityMetricUnits
  | PowerDensityImperialUnits;
export type PowerDensitySystems = 'metric' | 'imperial';

export type PowerDensityMetricUnits = 'W/m2';
export type PowerDensityImperialUnits = 'W/ft2';

const metric: Record<PowerDensityMetricUnits, Unit> = {
  'W/m2': {
    name: {
      singular: 'Watt per Square Meter',
      plural: 'Watts per Square Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<PowerDensityImperialUnits, Unit> = {
  'W/ft2': {
    name: {
      singular: 'Watt per Square Foot',
      plural: 'Watts per Square Feet',
    },
    to_anchor: 1,
  },
};

const measure: Measure<PowerDensitySystems, PowerDensityUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.092903,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.092903,
      },
    },
  },
};

export default measure;
