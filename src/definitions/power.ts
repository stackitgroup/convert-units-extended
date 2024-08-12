import { Measure, Unit } from './../index.js';
export type PowerUnits = PowerMetricUnits | PowerImperialUnits;
export type PowerSystems = 'metric' | 'imperial';

export type PowerMetricUnits = 'W' | 'kW' | 'MW';
export type PowerImperialUnits = 'hp' | 'Btu/h' | 'ton';

const metric: Record<PowerMetricUnits, Unit> = {
  W: {
    name: {
      singular: 'Watt',
      plural: 'Watts',
    },
    to_anchor: 1,
  },
  kW: {
    name: {
      singular: 'Kilowatt',
      plural: 'Kilowatts',
    },
    to_anchor: 1000,
  },
  MW: {
    name: {
      singular: 'Megawatt',
      plural: 'Megawatts',
    },
    to_anchor: 1000000,
  },
};

const imperial: Record<PowerImperialUnits, Unit> = {
  hp: {
    name: {
      singular: 'Horsepower (British)',
      plural: 'Horsepower (British)',
    },
    to_anchor: 1,
  },
  'Btu/h': {
    name: {
      singular: 'British thermal unit per hour',
      plural: 'British thermal units per hour',
    },
    to_anchor: 1 / 2544.4332,
  },
  ton: {
    name: {
      singular: 'Ton of refrigeration',
      plural: 'Tons of refrigeration',
    },
    to_anchor: 1 / 0.2120361,
  },
};

const measure: Measure<PowerSystems, PowerUnits> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 0.00134102,
      },
    },
    imperial: {
      metric: {
        ratio: 1 / 0.00134102,
      },
    },
  },
};

export default measure;
