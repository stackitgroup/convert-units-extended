import { Measure, Unit } from './../index.js';
export type EnergyConsumptionPerAreaUnits =
  | EnergyConsumptionPerAreaMetricUnits
  | EnergyConsumptionPerAreaImperialUnits;
export type EnergyConsumptionPerAreaSystems = 'metric' | 'imperial';

export type EnergyConsumptionPerAreaMetricUnits = 'kWh/m2' | 'kWh/cm2';
export type EnergyConsumptionPerAreaImperialUnits =
  | 'kWh/ft2'
  | 'kWh/in2'
  | 'kBtu/ft2';

const metric: Record<EnergyConsumptionPerAreaMetricUnits, Unit> = {
  'kWh/m2': {
    name: {
      singular: 'Kilo-watt-hour per Square Meter',
      plural: 'Kilo-watt-hours per Square Meters',
    },
    to_anchor: 1, // Unidad base
  },
  'kWh/cm2': {
    name: {
      singular: 'Kilo-watt-hour per Square Centimeter',
      plural: 'Kilo-watt-hours per Square Centimeters',
    },
    to_anchor: 0.0001, // 1 cm² = 0.0001 m², por lo que 1 kWh/cm² = 10,000 kWh/m²
  },
};

const imperial: Record<EnergyConsumptionPerAreaImperialUnits, Unit> = {
  'kWh/ft2': {
    name: {
      singular: 'Kilo-watt-hours per Square Foot',
      plural: 'Kilo-watt-hours per Square Feet',
    },
    to_anchor: 1,
  },
  'kWh/in2': {
    name: {
      singular: 'Kilo-watt-hours per Square Foot',
      plural: 'Kilo-watt-hours per Square Feet',
    },
    to_anchor: 144,
  },
  'kBtu/ft2': {
    name: {
      singular: 'Kilo-British thermal units per Square Foot',
      plural: 'Kilo-British thermal units per Square Feet',
    },
    to_anchor: 0.293071, // Conversion factor from kBtu to kWh
  },
};

const measure: Measure<
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits
> = {
  systems: {
    metric,
    imperial,
  },
  anchors: {
    metric: {
      imperial: {
        ratio: 1 / 10.7639,
      },
    },
    imperial: {
      metric: {
        ratio: 10.7639,
      },
    },
  },
};

export default measure;
