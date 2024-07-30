import configureMeasurements from '../..';
import ventilationRate, {
  VentilationRateSystems,
  VentilationRateUnits,
} from '../ventilationRate';

test('ACH to ACM', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(12).from('ACH').to('ACM')).toBe(720);
});

test('ACM to ACH', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(12).from('ACM').to('ACH')).toBe(0.2);
});

test('ACM to ACS', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(20).from('ACM').to('ACS')).toBe(1200);
});

test('ACS to ACM', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(50).from('ACS').to('ACM')).toBeCloseTo(0.8333);
});

test('ACH to ACS', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(5).from('ACH').to('ACS')).toBe(18000);
});

test('ACS to ACH', () => {
  const convert = configureMeasurements<
    'ventilationRate',
    VentilationRateSystems,
    VentilationRateUnits
  >({
    ventilationRate,
  });

  expect(convert(1000).from('ACS').to('ACH')).toBeCloseTo(0.2777);
});
