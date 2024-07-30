import { Measure, Unit } from './../index.js';

export type VentilationRateUnits = VentilationRateSIUnits;
export type VentilationRateSystems = 'SI';

export type VentilationRateSIUnits = 'ACH' | 'ACM' | 'ACS';

const SI: Record<VentilationRateSIUnits, Unit> = {
  ACH: {
    name: {
      singular: 'Air Change per Hour',
      plural: 'Air Changes per Hour',
    },
    to_anchor: 1,
  },
  ACM: {
    name: {
      singular: 'Air Change per Minute',
      plural: 'Air Changes per Minutes',
    },
    to_anchor: 1 / 60,
  },
  ACS: {
    name: {
      singular: 'Air Change per Second',
      plural: 'Air Changes per Seconds',
    },
    to_anchor: 1 / 3600,
  },
};

const measure: Measure<VentilationRateSystems, VentilationRateUnits> = {
  systems: {
    SI,
  },
};

export default measure;
