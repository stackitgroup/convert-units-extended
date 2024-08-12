import configureMeasurements from '../..';
import emissions, { EmissionsSystems, EmissionsUnits } from '../emissions';

test('kgCO2e to MTCO2e', () => {
  const convert = configureMeasurements<
    'emissions',
    EmissionsSystems,
    EmissionsUnits
  >({
    emissions,
  });

  expect(convert(1).from('kgCO2e').to('MTCO2e')).toBeCloseTo(0.001);
});

test('MTCO2e to kgCO2e', () => {
  const convert = configureMeasurements<
    'emissions',
    EmissionsSystems,
    EmissionsUnits
  >({
    emissions,
  });

  expect(convert(1).from('MTCO2e').to('kgCO2e')).toBeCloseTo(1000);
});

test('kgCO2e to lbCO2e', () => {
  const convert = configureMeasurements<
    'emissions',
    EmissionsSystems,
    EmissionsUnits
  >({
    emissions,
  });

  expect(convert(1).from('kgCO2e').to('lbCO2e')).toBeCloseTo(2.20462);
});

test('MTCO2e to lbCO2e', () => {
  const convert = configureMeasurements<
    'emissions',
    EmissionsSystems,
    EmissionsUnits
  >({
    emissions,
  });

  expect(convert(1).from('MTCO2e').to('lbCO2e')).toBeCloseTo(2204.62);
});
