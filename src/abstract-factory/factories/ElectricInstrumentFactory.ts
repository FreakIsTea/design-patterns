import { ElectricBass } from "../models/electric/ElectricBass";
import { ElectricGuitar } from "../models/electric/ElectricGuitar";
import { Instrument } from "../models/types/Instrument";
import { InstrumentType } from "../models/InstrumentType";
import { InstrumentFactory } from "./InstrumentFactory";

export class ElectricInstrumentFactory extends InstrumentFactory {
  getInstrument(instrumentToGet: InstrumentType): Instrument | null {
    switch (instrumentToGet) {
      case InstrumentType.Guitar: {
        return new ElectricGuitar();
      }
      case InstrumentType.Bass: {
        return new ElectricBass();
      }
      default:
        return null;
    }
  }
}
