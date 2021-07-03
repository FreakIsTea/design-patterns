import { FactoryType } from "./factories/types/FactoryType";
import { FactoryProducer } from "./FactoryProducer";
import { InstrumentType } from "./models/InstrumentType";

export class AbstractFactoryDemo {
  static main() {
    let producer = new FactoryProducer();

    // Get electric factory and check objects
    console.log("Getting electric instruments");
    let eFactory = producer.getFactory(FactoryType.Electric);
    if (eFactory != null) {
      let eGuitar = eFactory.getInstrument(InstrumentType.Guitar);
      eGuitar != null ? eGuitar.makeSound() : () => {};
      let eBass = eFactory.getInstrument(InstrumentType.Bass);
      eBass != null ? eBass.makeSound() : () => {};
    }

    // Same for acoustic factory
    console.log("Getting acoustic instruments");
    let aFactory = producer.getFactory(FactoryType.Acoustic);
    if (aFactory != null) {
      let aGuitar = aFactory.getInstrument(InstrumentType.Guitar);
      aGuitar != null ? aGuitar.makeSound() : () => {};
      let aBass = aFactory.getInstrument(InstrumentType.Bass);
      aBass != null ? aBass.makeSound() : () => {};
    }
  }
}
