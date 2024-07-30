import configureMeasurements from '../..';
import energyConsumptionPerArea, {
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits,
} from '../energyConsumptionPerArea';

test('kWh/ft2 to kWh/in2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kWh/ft2').to('kWh/in2')).toBeCloseTo(0.0694);
});

test('kWh/in2 to kWh/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kWh/in2').to('kWh/ft2')).toBe(1440);
});

test('kWh/ft2 to kBtu/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kWh/ft2').to('kBtu/ft2')).toBeCloseTo(10 / 0.293071);
});

test('kBtu/ft2 to kWh/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  expect(convert(10).from('kBtu/ft2').to('kWh/ft2')).toBeCloseTo(10 * 0.293071);
});

test('kBtu/ft2 to kWh/m2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  const valueToTest = 10;

  expect(convert(valueToTest).from('kBtu/ft2').to('kWh/m2')).toBeCloseTo(
    valueToTest * 0.293071 * 10.7639
  );
});

test('kWh/m2 to kBtu/ft2', () => {
  const convert = configureMeasurements<
    'energyConsumptionPerArea',
    EnergyConsumptionPerAreaSystems,
    EnergyConsumptionPerAreaUnits
  >({
    energyConsumptionPerArea,
  });

  const valueToTest = 23;

  expect(convert(valueToTest).from('kWh/m2').to('kBtu/ft2')).toBeCloseTo(
    valueToTest * (1 / 10.7639) * (1 / 0.293071)
  );
});
