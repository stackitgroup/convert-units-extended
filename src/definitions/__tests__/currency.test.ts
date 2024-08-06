import configureMeasurements from '../..';
import currency, { CurrencySystems, CurrencyUnits } from '../currency';

test('USD to EUR', () => {
  const convert = configureMeasurements<
    'currency',
    CurrencySystems,
    CurrencyUnits
  >({
    currency,
  });

  expect(convert(10).from('USD').to('EUR')).toBeCloseTo(9.968797663313827);
});

test('EUR to GBP', () => {
  const convert = configureMeasurements<
    'currency',
    CurrencySystems,
    CurrencyUnits
  >({
    currency,
  });

  expect(convert(10).from('EUR').to('GBP')).toBeCloseTo(8.66);
});
