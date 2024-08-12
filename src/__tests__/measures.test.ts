import configureMeasurements from '..';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';

test('measures', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().measures(),
    expected = [
      'acceleration',
      'angle',
      'apparentPower',
      'area',
      'charge',
      'currency',
      'currencyPerArea',
      'energyConsumptionPerArea',
      'heatingCoolingDegreeDays',
      'ventilationRate',
      'current',
      'digital',
      'each',
      'energy',
      'force',
      'frequency',
      'illuminance',
      'length',
      'mass',
      'massFlowRate',
      'pace',
      'partsPer',
      'partsPerArea',
      'pieces',
      'power',
      'powerDensity',
      'pressure',
      'reactiveEnergy',
      'reactivePower',
      'speed',
      'torque',
      'temperature',
      'time',
      'voltage',
      'volume',
      'volumeFlowRate',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
