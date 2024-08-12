import configureMeasurements from '../..';
import powerDensity, {
  PowerDensitySystems,
  PowerDensityUnits,
} from '../powerDensity';

test('W/ft2 to  W/m2', () => {
  const convert = configureMeasurements<
    'powerDensity',
    PowerDensitySystems,
    PowerDensityUnits
  >({
    powerDensity,
  });

  expect(convert(3).from('W/ft2').to('W/m2')).toBeCloseTo(32.292);
});

test('W/m2 to  W/ft2', () => {
  const convert = configureMeasurements<
    'powerDensity',
    PowerDensitySystems,
    PowerDensityUnits
  >({
    powerDensity,
  });

  expect(convert(7).from('W/m2').to('W/ft2')).toBeCloseTo(0.649);
});
