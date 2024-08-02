import { Measure, Unit } from './../index.js';
export type PartsPerAreaUnits =
  | PartsPerAreaMetricUnits
  | PartsPerAreaImperialUnits;
export type PartsPerAreaSystems = 'metric' | 'imperial';

export type PartsPerAreaMetricUnits = 'ppm2';
export type PartsPerAreaImperialUnits = 'ppft2';

const metric: Record<PartsPerAreaMetricUnits, Unit> = {
  ppm2: {
    name: {
      singular: 'Part per Square Meter',
      plural: 'Parts per Square Meters',
    },
    to_anchor: 1,
  },
};

const imperial: Record<PartsPerAreaImperialUnits, Unit> = {
  ppft2: {
    name: {
      singular: 'Part per Square Foot',
      plural: 'Parts per Square Feet',
    },
    to_anchor: 1,
  },
};

const measure: Measure<PartsPerAreaSystems, PartsPerAreaUnits> = {
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
