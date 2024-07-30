import configureMeasurements from '../..';
import currencyPerArea, {
  CurrencyPerAreaSystems,
  CurrencyPerAreaUnits,
} from '../currencyPerArea';

test('USD/ft2 to USD/m2', () => {
  const convert = configureMeasurements<
    'currencyPerArea',
    CurrencyPerAreaSystems,
    CurrencyPerAreaUnits
  >({
    currencyPerArea,
  });
  expect(convert(40).from('USD/ft2').to('USD/m2')).toBeCloseTo(3.71612);
});

test('USD/m2 to USD/ft2', () => {
  const convert = configureMeasurements<
    'currencyPerArea',
    CurrencyPerAreaSystems,
    CurrencyPerAreaUnits
  >({
    currencyPerArea,
  });
  expect(convert(22).from('USD/m2').to('USD/ft2')).toBeCloseTo(236.806);
});

test('USD/m2 to USD/cm2', () => {
  const convert = configureMeasurements<
    'currencyPerArea',
    CurrencyPerAreaSystems,
    CurrencyPerAreaUnits
  >({
    currencyPerArea,
  });
  expect(convert(8).from('USD/m2').to('USD/cm2')).toBeCloseTo(80000);
});

test('USD/cm2 to USD/m2', () => {
  const convert = configureMeasurements<
    'currencyPerArea',
    CurrencyPerAreaSystems,
    CurrencyPerAreaUnits
  >({
    currencyPerArea,
  });
  expect(convert(10500).from('USD/cm2').to('USD/m2')).toBeCloseTo(1.05);
});
