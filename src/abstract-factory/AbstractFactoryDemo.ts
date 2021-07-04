import { FactoryType } from "./factories/types/FactoryType";
import { FactoryProducer } from "./FactoryProducer";
import { InstrumentType } from "./models/InstrumentType";

export class AbstractFactoryDemo {
  static main() {
    let producer = new FactoryProducer();

    // Get electric factory and check objects
    console.log("\nGetting electric instruments\n");
    let eFactory = producer.getFactory(FactoryType.Electric);
    if (eFactory != null) {
      let eGuitar = eFactory.getInstrument(
        InstrumentType.Guitar,
        "red striped"
      );
      eGuitar != null ? eGuitar.makeSound() : null;
      let eBass = eFactory.getInstrument(InstrumentType.Bass);
      eBass != null ? eBass.makeSound() : null;
    }

    // Same for acoustic factory
    console.log("\n\nGetting acoustic instruments\n");
    let aFactory = producer.getFactory(FactoryType.Acoustic);
    if (aFactory != null) {
      let aGuitar = aFactory.getInstrument(InstrumentType.Guitar, "yellow");
      aGuitar != null ? aGuitar.makeSound() : null;
      let aBass = aFactory.getInstrument(InstrumentType.Bass);
      aBass != null ? aBass.makeSound() : null;
    }
  }
}
