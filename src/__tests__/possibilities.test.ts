import configureMeasurements from '..';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from '../definitions/acceleration';
import allMeasures, {
  AllMeasures,
  AllMeasuresSystems,
  AllMeasuresUnits,
} from '../definitions/all';
import angle, { AngleSystems, AngleUnits } from '../definitions/angle';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from '../definitions/apparentPower';
import charge, { ChargeSystems, ChargeUnits } from '../definitions/charge';
import current, { CurrentSystems, CurrentUnits } from '../definitions/current';
import digital, { DigitalSystems, DigitalUnits } from '../definitions/digital';
import each, { EachSystems, EachUnits } from '../definitions/each';
import energy, { EnergySystems, EnergyUnits } from '../definitions/energy';
import force, { ForceSystems, ForceUnits } from '../definitions/force';
import frequency, {
  FrequencySystems,
  FrequencyUnits,
} from '../definitions/frequency';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from '../definitions/illuminance';
import length, { LengthSystems, LengthUnits } from '../definitions/length';
import mass, { MassSystems, MassUnits } from '../definitions/mass';
import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from '../definitions/massFlowRate';
import pace, { PaceSystems, PaceUnits } from '../definitions/pace';
import partsPer, {
  PartsPerSystems,
  PartsPerUnits,
} from '../definitions/partsPer';
import pieces, { PiecesSystems, PiecesUnits } from '../definitions/pieces';
import power, { PowerSystems, PowerUnits } from '../definitions/power';
import pressure, {
  PressureSystems,
  PressureUnits,
} from '../definitions/pressure';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from '../definitions/reactiveEnergy';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from '../definitions/reactivePower';
import speed, { SpeedSystems, SpeedUnits } from '../definitions/speed';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from '../definitions/temperature';
import time, { TimeSystems, TimeUnits } from '../definitions/time';
import torque, { TorqueSystems, TorqueUnits } from '../definitions/torque';
import voltage, { VoltageSystems, VoltageUnits } from '../definitions/voltage';
import volume, { VolumeSystems, VolumeUnits } from '../definitions/volume';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from '../definitions/volumeFlowRate';

test('l possibilities', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().from('l').possibilities(),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'ccf',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('kg possibilities', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().from('kg').possibilities(),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('m possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().from('m').possibilities(),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('each possibilities', () => {
  const convert = configureMeasurements<'each', EachSystems, EachUnits>({
    each,
  });
  const actual = convert().possibilities('each'),
    expected = ['ea', 'dz'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass possibilities', () => {
  const convert = configureMeasurements<'mass', MassSystems, MassUnits>({
    mass,
  });
  const actual = convert().possibilities('mass'),
    expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 'st', 't'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('mass flow rate possibilities', () => {
  const convert = configureMeasurements<
    'massFlowRate',
    MassFlowRateSystems,
    MassFlowRateUnits
  >({
    massFlowRate,
  });
  const actual = convert().possibilities('massFlowRate'),
    expected = ['kg/h', 'kg/s', 'lb/h', 'lb/s', 'mt/h'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume possibilities', () => {
  const convert = configureMeasurements<'volume', VolumeSystems, VolumeUnits>({
    volume,
  });
  const actual = convert().possibilities('volume'),
    expected = [
      'mm3',
      'cm3',
      'ml',
      'cl',
      'dl',
      'l',
      'kl',
      'Ml',
      'Gl',
      'm3',
      'km3',
      'krm',
      'tsk',
      'msk',
      'kkp',
      'glas',
      'kanna',
      'tsp',
      'Tbs',
      'ccf',
      'in3',
      'fl-oz',
      'cup',
      'pnt',
      'qt',
      'gal',
      'ft3',
      'yd3',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('volume flow rate possibilities', () => {
  const convert = configureMeasurements<
    'volumeFlowRate',
    VolumeFlowRateSystems,
    VolumeFlowRateUnits
  >({
    volumeFlowRate,
  });
  const actual = convert().possibilities('volumeFlowRate'),
    expected = [
      'mm3/s',
      'cm3/s',
      'ml/s',
      'cl/s',
      'dl/s',
      'l/s',
      'l/min',
      'l/h',
      'kl/s',
      'kl/min',
      'kl/h',
      'm3/s',
      'm3/min',
      'm3/h',
      'km3/s',
      'tsp/s',
      'Tbs/s',
      'in3/s',
      'in3/min',
      'in3/h',
      'fl-oz/s',
      'fl-oz/min',
      'fl-oz/h',
      'cup/s',
      'pnt/s',
      'pnt/min',
      'pnt/h',
      'qt/s',
      'gal/s',
      'gal/min',
      'gal/h',
      'ft3/s',
      'cfm',
      'ft3/h',
      'yd3/s',
      'yd3/min',
      'yd3/h',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('length possibilities', () => {
  const convert = configureMeasurements<'length', LengthSystems, LengthUnits>({
    length,
  });
  const actual = convert().possibilities('length'),
    expected = [
      'nm',
      'μm',
      'mm',
      'cm',
      'm',
      'km',
      'mil',
      'in',
      'yd',
      'ft-us',
      'ft',
      'fathom',
      'mi',
      'nMi',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('temperature possibilities', () => {
  const convert = configureMeasurements<
    'temperature',
    TemperatureSystems,
    TemperatureUnits
  >({
    temperature,
  });
  const actual = convert().possibilities('temperature'),
    expected = ['C', 'K', 'F', 'R'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('time possibilities', () => {
  const convert = configureMeasurements<'time', TimeSystems, TimeUnits>({
    time,
  });
  const actual = convert().possibilities('time'),
    expected = [
      'ns',
      'mu',
      'ms',
      's',
      'min',
      'h',
      'd',
      'week',
      'month',
      'year',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('digital possibilities', () => {
  const convert = configureMeasurements<
    'digital',
    DigitalSystems,
    DigitalUnits
  >({
    digital,
  });
  const actual = convert().possibilities('digital'),
    expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('partsPer possibilities', () => {
  const convert = configureMeasurements<
    'partsPer',
    PartsPerSystems,
    PartsPerUnits
  >({
    partsPer,
  });
  const actual = convert().possibilities('partsPer'),
    expected = ['ppm', 'ppb', 'ppt', 'ppq'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pressure possibilities', () => {
  const convert = configureMeasurements<
    'pressure',
    PressureSystems,
    PressureUnits
  >({
    pressure,
  });
  const actual = convert().possibilities('pressure'),
    expected = [
      'Pa',
      'kPa',
      'MPa',
      'hPa',
      'bar',
      'torr',
      'mH2O',
      'mmHg',
      'psi',
      'ksi',
      'in w.c',
      'inHg',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('speed possibilities', () => {
  const convert = configureMeasurements<'speed', SpeedSystems, SpeedUnits>({
    speed,
  });
  const actual = convert().possibilities('speed'),
    expected = ['m/s', 'km/h', 'mph', 'knot', 'ft/s', 'ft/min', 'in/h', 'mm/h'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('torque possibilities', () => {
  const convert = configureMeasurements<'torque', TorqueSystems, TorqueUnits>({
    torque,
  });
  const actual = convert().possibilities('torque'),
    expected = ['Nm', 'lbf-ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pace possibilities', () => {
  const convert = configureMeasurements<'pace', PaceSystems, PaceUnits>({
    pace,
  });
  const actual = convert().possibilities('pace'),
    expected = ['min/km', 's/m', 'min/mi', 's/ft'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('current possibilities', () => {
  const convert = configureMeasurements<
    'current',
    CurrentSystems,
    CurrentUnits
  >({
    current,
  });
  const actual = convert().possibilities('current'),
    expected = ['A', 'mA', 'kA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('voltage possibilities', () => {
  const convert = configureMeasurements<
    'voltage',
    VoltageSystems,
    VoltageUnits
  >({
    voltage,
  });
  const actual = convert().possibilities('voltage'),
    expected = ['V', 'mV', 'kV'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('power possibilities', () => {
  const convert = configureMeasurements<'power', PowerSystems, PowerUnits>({
    power,
  });
  const actual = convert().possibilities('power'),
    expected = ['W', 'kW', 'MW', 'ton', 'Btu/h', 'hp'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive power possibilities', () => {
  const convert = configureMeasurements<
    'reactivePower',
    ReactivePowerSystems,
    ReactivePowerUnits
  >({
    reactivePower,
  });
  const actual = convert().possibilities('reactivePower'),
    expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('apparent power possibilities', () => {
  const convert = configureMeasurements<
    'apparentPower',
    ApparentPowerSystems,
    ApparentPowerUnits
  >({
    apparentPower,
  });
  const actual = convert().possibilities('apparentPower'),
    expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('energy possibilities', () => {
  const convert = configureMeasurements<'energy', EnergySystems, EnergyUnits>({
    energy,
  });
  const actual = convert().possibilities('energy'),
    expected = [
      'Ws',
      'kBtu',
      'Wm',
      'Wh',
      'mWh',
      'kWh',
      'MWh',
      'GWh',
      'J',
      'kJ',
      'MJ',
      'GJ',
      'Btu',
      'MMBtu',
      'Therms',
      'Ton-hours',
      'klbs',
      'cal',
      'kcal',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('reactive energy possibilities', () => {
  const convert = configureMeasurements<
    'reactiveEnergy',
    ReactiveEnergySystems,
    ReactiveEnergyUnits
  >({
    reactiveEnergy,
  });
  const actual = convert().possibilities('reactiveEnergy'),
    expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('frequency possibilities', () => {
  const convert = configureMeasurements<
    'frequency',
    FrequencySystems,
    FrequencyUnits
  >({
    frequency,
  });
  const actual = convert().possibilities('frequency'),
    expected = [
      'mHz',
      'Hz',
      'kHz',
      'MHz',
      'GHz',
      'THz',
      'rpm',
      'deg/s',
      'rad/s',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('illuminance possibilities', () => {
  const convert = configureMeasurements<
    'illuminance',
    IlluminanceSystems,
    IlluminanceUnits
  >({
    illuminance,
  });
  const actual = convert().possibilities('illuminance'),
    expected = ['lx', 'ft-cd'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('angle possibilities', () => {
  const convert = configureMeasurements<'angle', AngleSystems, AngleUnits>({
    angle,
  });
  const actual = convert().possibilities('angle'),
    expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('charge possibilities', () => {
  const convert = configureMeasurements<'charge', ChargeSystems, ChargeUnits>({
    charge,
  });
  const actual = convert().possibilities('charge'),
    expected = ['c', 'mC', 'μC', 'nC', 'pC'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('force possibilities', () => {
  const convert = configureMeasurements<'force', ForceSystems, ForceUnits>({
    force,
  });
  const actual = convert().possibilities('force'),
    expected = ['N', 'kN', 'lbf', 'kgf'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('acceleration possibilities', () => {
  const convert = configureMeasurements<
    'acceleration',
    AccelerationSystems,
    AccelerationUnits
  >({
    acceleration,
  });
  const actual = convert().possibilities('acceleration'),
    expected = ['g-force', 'm/s2'];
  expect(actual.sort()).toEqual(expected.sort());
});

test('all possibilities', () => {
  const convert = configureMeasurements<
    AllMeasures,
    AllMeasuresSystems,
    AllMeasuresUnits
  >(allMeasures);
  const actual = convert().possibilities(),
    // Please keep these sorted for maintainability
    expected = [
      'A',
      'arcmin',
      'arcsec',
      'B',
      'C',
      'F',
      'R',
      'GB',
      'Gb',
      'K',
      'KB',
      'Kb',
      'MB',
      'MPa',
      'Mb',
      'N',
      'Pa',
      'TB',
      'Tb',
      'ac',
      'b',
      'bar',
      'c',
      'cal',
      'cl',
      'cl/s',
      'cm',
      'cm2',
      'cm3',
      'cm3/s',
      'cup',
      'cup/s',
      'd',
      'deg',
      'deg/s',
      'dl',
      'dl/s',
      'ea',
      'dz',
      'fl-oz',
      'fl-oz/h',
      'ACH',
      'ACM',
      'ACS',
      'USD',
      'CAD',
      'EUR',
      'GBP',
      'AFN',
      'DZD',
      'AOA',
      'ARS',
      'AMD',
      'AWG',
      'AUD',
      'AZN',
      'BSD',
      'BHD',
      'PAB',
      'BDT',
      'BBD',
      'BZD',
      'BMD',
      'BTN',
      'BOB',
      'BAM',
      'BWP',
      'BRL',
      'BND',
      'BGN',
      'MMK',
      'BIF',
      'XOF',
      'XPF',
      'CVE',
      'KYD',
      'XAF',
      'CLP',
      'CLF',
      'COP',
      'KMF',
      'CDF',
      'CRC',
      'HRK',
      'CUC',
      'CUP',
      'CZK',
      'DKK',
      'DJF',
      'DOP',
      'XCD',
      'EGP',
      'ERN',
      'ETB',
      'FKP',
      'FJD',
      'HUF',
      'GMD',
      'GHS',
      'GIP',
      'GTQ',
      'GNF',
      'GYD',
      'HTG',
      'HNL',
      'HKD',
      'UAH',
      'ISK',
      'INR',
      'IDR',
      'IRR',
      'IQD',
      'JMD',
      'JOD',
      'KES',
      'KWD',
      'KGS',
      'LAK',
      'GEL',
      'LBP',
      'ALL',
      'LSL',
      'LRD',
      'LYD',
      'MOP',
      'MKD',
      'MGA',
      'MWK',
      'MYR',
      'MVR',
      'MRU',
      'MUR',
      'MXN',
      'MDL',
      'MNT',
      'MAD',
      'NPR',
      'NZD',
      'NIO',
      'NGN',
      'NOK',
      'OMR',
      'PKR',
      'PYG',
      'PEN',
      'PHP',
      'PLN',
      'QAR',
      'RON',
      'RUB',
      'RWF',
      'SVC',
      'WST',
      'SAR',
      'RSD',
      'SCR',
      'SLL',
      'SGD',
      'SOS',
      'ZAR',
      'KRW',
      'SSP',
      'SEK',
      'TJS',
      'TZS',
      'LKR',
      'THB',
      'TOP',
      'TTD',
      'TRY',
      'TMT',
      'UGX',
      'AED',
      'UYU',
      'UZS',
      'VUV',
      'VND',
      'YER',
      'ILS',
      'JPY',
      'KZT',
      'ZMW',
      'USD/cm2',
      'USD/ft2',
      'USD/in2',
      'USD/m2',
      'USD/mm2',
      'USD/yd2',
      'degC-days',
      'degF-days',
      'in w.c',
      'kBtu/ft2',
      'degK-days',
      'kWh/cm2',
      'kWh/ft2',
      'kWh/in2',
      'kWh/m2',
      'fl-oz/min',
      'fl-oz/s',
      'ft-us',
      'ft',
      'fathom',
      'ft-cd',
      'ft/min',
      'ft/s',
      'ft2',
      'ft3',
      'ft3/h',
      'cfm',
      'ft3/s',
      'g',
      'g-force',
      'gal',
      'gal/h',
      'gal/min',
      'gal/s',
      'glas',
      'grad',
      'GHz',
      'JPY/m2',
      'SGD/m2',
      'INR/m2',
      'JPY/ft2',
      'SGD/ft2',
      'INR/ft2',
      'GVA',
      'GVAR',
      'GVARh',
      'GWh',
      'h',
      'hPa',
      'ha',
      'hp',
      'Hz',
      'in',
      'in/h',
      'in2',
      'in3',
      'in3/h',
      'in3/min',
      'in3/s',
      'inHg',
      'J',
      'kA',
      'kPa',
      'kanna',
      'kcal',
      'kg',
      'kgf',
      'kkp',
      'kJ',
      'lb/h',
      'lb/s',
      'MJ',
      'GJ',
      'Btu',
      'MMBtu',
      'Therms',
      'Ton-hours',
      'klbs',
      'kN',
      'kl',
      'Ml',
      'Gl',
      'kg/h',
      'kg/s',
      'kgCO2e',
      'MTCO2e',
      'lbCO2e',
      'kgCO2e/kBtu',
      'kgCO2e/kWh',
      'lbCO2e/kBtu',
      'lbCO2e/ton-hour',
      'kl/h',
      'kl/min',
      'kl/s',
      'km',
      'km/h',
      'km2',
      'km3',
      'km3/s',
      'knot',
      'krm',
      'ksi',
      'kHz',
      'kV',
      'kVA',
      'kVAR',
      'kVARh',
      'kW',
      'kWh',
      'l',
      'lbf-ft',
      'l/h',
      'l/min',
      'l/s',
      'lb',
      'lbf',
      'lx',
      'm',
      'm/s',
      'm/s2',
      'm2',
      'm3',
      'm3/h',
      'm3/min',
      'm3/s',
      'mA',
      'mC',
      'mcg',
      'mg',
      'mH2O',
      'mi',
      'mi2',
      'mil',
      'min',
      'min/km',
      'min/mi',
      'ml',
      'ml/s',
      'mm',
      'mm/h',
      'mm2',
      'Btu/h',
      'GJ/m2',
      'W/ft2',
      'W/m2',
      'ton',
      'mm3',
      'mm3/s',
      'mmHg',
      'month',
      'mph',
      'ms',
      'msk',
      'mt',
      'mt/h',
      'mu',
      'nC',
      'nm',
      'Nm',
      'nm2',
      'mHz',
      'MHz',
      'mV',
      'mVA',
      'MVA',
      'mVAR',
      'MVAR',
      'mVARh',
      'MVARh',
      'MW',
      'mWh',
      'MWh',
      'nMi',
      'ns',
      'oz',
      'pC',
      'pnt',
      'pnt/h',
      'pnt/min',
      'pnt/s',
      'ppb',
      'ppft2',
      'ppm',
      'ppm2',
      'ppq',
      'ppt',
      'psi',
      'qt',
      'qt/s',
      'rad',
      'rad/s',
      'rpm',
      's',
      's/m',
      's/ft',
      't',
      'Tbs',
      'ccf',
      'Tbs/s',
      'THz',
      'torr',
      'AUD/m2',
      'CNY/m2',
      'CHF/m2',
      'CNY/ft2',
      'CHF/ft2',
      'CHF',
      'CNY',
      'EUR/m2',
      'CAD/m2',
      'GBP/m2',
      'AUD/ft2',
      'EUR/ft2',
      'CAD/ft2',
      'GBP/ft2',
      'tsk',
      'tsp',
      'tsp/s',
      'V',
      'VA',
      'VAR',
      'VARh',
      'W',
      'week',
      'Ws',
      'kBtu',
      'Wm',
      'Wh',
      'yd',
      'yd2',
      'yd3',
      'yd3/h',
      'yd3/min',
      'yd3/s',
      'year',
      'μm',
      'μm2',
      'μC',
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'st',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});

test('pieces possibilities', () => {
  const convert = configureMeasurements<'pieces', PiecesSystems, PiecesUnits>({
    pieces,
  });
  const actual = convert().possibilities('pieces'),
    expected = [
      'pcs',
      'bk-doz',
      'cp',
      'doz-doz',
      'doz',
      'gr-gr',
      'gros',
      'half-dozen',
      'long-hundred',
      'ream',
      'scores',
      'sm-gr',
      'trio',
    ];
  expect(actual.sort()).toEqual(expected.sort());
});
