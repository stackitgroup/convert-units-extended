import configureMeasurements from '../..';
import heatingCoolingDegreeDays, {
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits,
} from '../heatingCoolingDegreeDays';

test('degF-days to degK-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(1).from('degF-days').to('degK-days')).toBeCloseTo(255.93);
});

test('degK-days to degF-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(270).from('degK-days').to('degF-days')).toBeCloseTo(26.33);
});

test('degK-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(273.15).from('degK-days').to('degC-days')).toBeCloseTo(0);
});

test('degC-days to degK-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(20).from('degC-days').to('degK-days')).toBeCloseTo(293.15);
});

test('degC-days to degF-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(20).from('degC-days').to('degF-days')).toBe(68);
});

test('degF-days to degC-days', () => {
  const convert = configureMeasurements<
    'heatingCoolingDegreeDays',
    HeatingCoolingDegreeDaysSystems,
    HeatingCoolingDegreeDaysUnits
  >({
    heatingCoolingDegreeDays,
  });

  expect(convert(800).from('degF-days').to('degC-days')).toBeCloseTo(426.6667);
});
