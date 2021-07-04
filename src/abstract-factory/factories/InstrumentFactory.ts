import { Instrument } from "../models/types/Instrument";
import { InstrumentType } from "../models/InstrumentType";

/**
    An Abstract Factory is always an abstract class
    It needs to be implemented as such rather than an interface
    Because it needs to be able to delegate calls to the methods
 */ export abstract class InstrumentFactory {
  abstract getInstrument(
    instrumentToGet: InstrumentType,
    colorToGet?: string
  ): Instrument | null;
}
