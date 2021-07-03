import { AcousticBass } from "../models/acoustic/AcousticBass";
import { AcousticGuitar } from "../models/acoustic/AcousticGuitar";
import { Instrument } from "../models/types/Instrument";
import { InstrumentType } from "../models/InstrumentType";
import { InstrumentFactory } from "./InstrumentFactory";

export class AcousticInstrumentFactory extends InstrumentFactory {
  getInstrument(instrumentToGet: InstrumentType): Instrument | null {
    switch (instrumentToGet) {
      case InstrumentType.Guitar: {
        return new AcousticGuitar();
      }
      case InstrumentType.Bass: {
        return new AcousticBass();
      }
      default:
        return null;
    }
  }
}
