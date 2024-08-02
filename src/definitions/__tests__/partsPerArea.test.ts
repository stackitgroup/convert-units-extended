import configureMeasurements from '../..';
import partsPerArea, {
  PartsPerAreaSystems,
  PartsPerAreaUnits,
} from '../partsPerArea';

test('ppft2 to ppm2', () => {
  const convert = configureMeasurements<
    'partsPerArea',
    PartsPerAreaSystems,
    PartsPerAreaUnits
  >({
    partsPerArea,
  });
  expect(convert(20).from('ppft2').to('ppm2')).toBeCloseTo(1.85806);
});

test('ppm2 to ppft2', () => {
  const convert = configureMeasurements<
    'partsPerArea',
    PartsPerAreaSystems,
    PartsPerAreaUnits
  >({
    partsPerArea,
  });
  expect(convert(5).from('ppm2').to('ppft2')).toBeCloseTo(53.8195);
});
