import configureMeasurements from '../..';
import power, { PowerSystems, PowerUnits } from '../power';

test('W to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('W')).toBe(1);
});

test('kW to kW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('kW').to('kW')).toBe(1);
});

test('MW to MW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('MW').to('MW')).toBe(1);
});

test('hp to hp', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('hp').to('hp')).toBe(1);
});

test('W to kW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('kW')).toBe(0.001);
});

test('W to MW', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('W').to('MW')).toBe(0.000001);
});

test('kW to Btu/h', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(20).from('kW').to('Btu/h')).toBeCloseTo(68242.71619728001);
});

test('kW to Ton', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });

  expect(convert(20).from('kW').to('ton')).toBeCloseTo(5.6888);
});

test('kW to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(1).from('kW').to('W')).toBe(1000);
});

test('W to hp', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(20).from('W').to('hp')).toBeCloseTo(0.0268204);
});

test('hp to W', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(40).from('hp').to('W')).toBeCloseTo(29828.04);
});

test('hp to ton', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(40).from('hp').to('ton')).toBeCloseTo(8.4814441);
});

test('ton to hp', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(10).from('ton').to('hp')).toBeCloseTo(47.161773471);
});

test('hp to Btu/h', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(30).from('hp').to('Btu/h')).toBeCloseTo(76332.997);
});

test('Btu/h to hp', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  expect(convert(970).from('Btu/h').to('hp')).toBeCloseTo(0.38122439);
});
