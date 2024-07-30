import { Measure } from '../convert.js';
import acceleration, {
  AccelerationSystems,
  AccelerationUnits,
} from './acceleration.js';
import angle, { AngleSystems, AngleUnits } from './angle.js';
import apparentPower, {
  ApparentPowerSystems,
  ApparentPowerUnits,
} from './apparentPower.js';
import area, { AreaSystems, AreaUnits } from './area.js';
import charge, { ChargeSystems, ChargeUnits } from './charge.js';
import currencyPerArea, {
  CurrencyPerAreaSystems,
  CurrencyPerAreaUnits,
} from './currencyPerArea.js';
import current, { CurrentSystems, CurrentUnits } from './current.js';
import digital, { DigitalSystems, DigitalUnits } from './digital.js';
import each, { EachSystems, EachUnits } from './each.js';
import energy, { EnergySystems, EnergyUnits } from './energy.js';
import energyConsumptionPerArea, {
  EnergyConsumptionPerAreaSystems,
  EnergyConsumptionPerAreaUnits,
} from './energyConsumptionPerArea.js';
import force, { ForceSystems, ForceUnits } from './force.js';
import frequency, { FrequencySystems, FrequencyUnits } from './frequency.js';
import heatingCoolingDegreeDays, {
  HeatingCoolingDegreeDaysSystems,
  HeatingCoolingDegreeDaysUnits,
} from './heatingCoolingDegreeDays.js';
import illuminance, {
  IlluminanceSystems,
  IlluminanceUnits,
} from './illuminance.js';
import length, { LengthSystems, LengthUnits } from './length.js';
import mass, { MassSystems, MassUnits } from './mass.js';
import massFlowRate, {
  MassFlowRateSystems,
  MassFlowRateUnits,
} from './massFlowRate.js';
import pace, { PaceSystems, PaceUnits } from './pace.js';
import partsPer, { PartsPerSystems, PartsPerUnits } from './partsPer.js';
import pieces, { PiecesSystems, PiecesUnits } from './pieces.js';
import power, { PowerSystems, PowerUnits } from './power.js';
import pressure, { PressureSystems, PressureUnits } from './pressure.js';
import reactiveEnergy, {
  ReactiveEnergySystems,
  ReactiveEnergyUnits,
} from './reactiveEnergy.js';
import reactivePower, {
  ReactivePowerSystems,
  ReactivePowerUnits,
} from './reactivePower.js';
import speed, { SpeedSystems, SpeedUnits } from './speed.js';
import temperature, {
  TemperatureSystems,
  TemperatureUnits,
} from './temperature.js';
import time, { TimeSystems, TimeUnits } from './time.js';
import torque, { TorqueSystems, TorqueUnits } from './torque.js';
import ventilationRate, {
  VentilationRateSystems,
  VentilationRateUnits,
} from './ventilationRate.js';
import voltage, { VoltageSystems, VoltageUnits } from './voltage.js';
import volume, { VolumeSystems, VolumeUnits } from './volume.js';
import volumeFlowRate, {
  VolumeFlowRateSystems,
  VolumeFlowRateUnits,
} from './volumeFlowRate.js';

export type AllMeasuresSystems =
  | AccelerationSystems
  | AngleSystems
  | CurrencyPerAreaSystems
  | ApparentPowerSystems
  | AreaSystems
  | ChargeSystems
  | VentilationRateSystems
  | EnergyConsumptionPerAreaSystems
  | HeatingCoolingDegreeDaysSystems
  | CurrentSystems
  | DigitalSystems
  | EachSystems
  | EnergySystems
  | ForceSystems
  | FrequencySystems
  | IlluminanceSystems
  | LengthSystems
  | MassSystems
  | MassFlowRateSystems
  | PaceSystems
  | PartsPerSystems
  | PiecesSystems
  | PowerSystems
  | PressureSystems
  | ReactiveEnergySystems
  | ReactivePowerSystems
  | SpeedSystems
  | TorqueSystems
  | TemperatureSystems
  | TimeSystems
  | VoltageSystems
  | VolumeSystems
  | VolumeFlowRateSystems;

export type AllMeasuresUnits =
  | AccelerationUnits
  | CurrencyPerAreaUnits
  | AngleUnits
  | ApparentPowerUnits
  | AreaUnits
  | ChargeUnits
  | VentilationRateUnits
  | EnergyConsumptionPerAreaUnits
  | HeatingCoolingDegreeDaysUnits
  | CurrentUnits
  | DigitalUnits
  | EachUnits
  | EnergyUnits
  | ForceUnits
  | FrequencyUnits
  | IlluminanceUnits
  | LengthUnits
  | MassUnits
  | MassFlowRateUnits
  | PaceUnits
  | PartsPerUnits
  | PiecesUnits
  | PowerUnits
  | PressureUnits
  | ReactiveEnergyUnits
  | ReactivePowerUnits
  | SpeedUnits
  | TorqueUnits
  | TemperatureUnits
  | TimeUnits
  | VoltageUnits
  | VolumeUnits
  | VolumeFlowRateUnits;

export type AllMeasures =
  | 'acceleration'
  | 'angle'
  | 'apparentPower'
  | 'area'
  | 'charge'
  | 'ventilationRate'
  | 'energyConsumptionPerArea'
  | 'heatingCoolingDegreeDays'
  | 'current'
  | 'currencyPerArea'
  | 'digital'
  | 'each'
  | 'energy'
  | 'force'
  | 'frequency'
  | 'illuminance'
  | 'length'
  | 'mass'
  | 'massFlowRate'
  | 'pace'
  | 'partsPer'
  | 'pieces'
  | 'power'
  | 'pressure'
  | 'reactiveEnergy'
  | 'reactivePower'
  | 'speed'
  | 'torque'
  | 'temperature'
  | 'time'
  | 'voltage'
  | 'volume'
  | 'volumeFlowRate';

const allMeasures: Record<
  AllMeasures,
  Measure<AllMeasuresSystems, AllMeasuresUnits>
> = {
  acceleration,
  currencyPerArea,
  angle,
  apparentPower,
  area,
  charge,
  ventilationRate,
  energyConsumptionPerArea,
  heatingCoolingDegreeDays,
  current,
  digital,
  each,
  energy,
  force,
  frequency,
  illuminance,
  length,
  mass,
  massFlowRate,
  pace,
  partsPer,
  pieces,
  power,
  pressure,
  reactiveEnergy,
  reactivePower,
  speed,
  torque,
  temperature,
  time,
  voltage,
  volume,
  volumeFlowRate,
};

export default allMeasures;
