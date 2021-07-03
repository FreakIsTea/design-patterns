import { AcousticInstrumentFactory } from "./factories/AcousticInstrumentFactory";
import { ElectricInstrumentFactory } from "./factories/ElectricInstrumentFactory";
import { InstrumentFactory } from "./factories/InstrumentFactory";
import { FactoryType } from "./factories/types/FactoryType";

export class FactoryProducer {
  getFactory(factoryToGet: FactoryType): InstrumentFactory | null {
    switch (factoryToGet) {
      case FactoryType.Acoustic: {
        return new AcousticInstrumentFactory();
      }
      case FactoryType.Electric: {
        return new ElectricInstrumentFactory();
      }
      default: {
        return null;
      }
    }
  }
}
