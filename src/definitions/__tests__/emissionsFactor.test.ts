import configureMeasurements from '../..';
import emissionsFactors, {
  EmissionsFactorsSystems,
  EmissionsFactorsUnits,
} from '../emissionsFactors';

test('kgCO2e/kWh to kgCO2e/kBtu', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });

  expect(convert(1).from('kgCO2e/kWh').to('kgCO2e/kBtu')).toBeCloseTo(3.412);
});

test('kgCO2e/kBtu to kgCO2e/kWh', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });

  expect(convert(1).from('kgCO2e/kBtu').to('kgCO2e/kWh')).toBeCloseTo(0.293071);
});

test('kgCO2e/kWh to lbCO2e/kBtu', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });

  expect(convert(1).from('kgCO2e/kWh').to('lbCO2e/kBtu')).toBeCloseTo(7.527);
});

test('kgCO2e/kWh to lbCO2e/ton-hour', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });

  expect(convert(1).from('kgCO2e/kWh').to('lbCO2e/ton-hour')).toBeCloseTo(
    0.62725
  );
});

test('kgCO2e/kBtu to lbCO2e/ton-hour', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });

  expect(convert(1).from('kgCO2e/kBtu').to('lbCO2e/ton-hour')).toBeCloseTo(
    0.18382878475
  );
});

test('lbCO2e/kBtu to lbCO2e/ton-hour', () => {
  const convert = configureMeasurements<
    'emissionsFactors',
    EmissionsFactorsSystems,
    EmissionsFactorsUnits
  >({
    emissionsFactors,
  });
  expect(convert(1).from('lbCO2e/kBtu').to('lbCO2e/ton-hour')).toBe(
    0.08333333333333333
  );
});
