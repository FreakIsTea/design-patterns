import { Instrument } from "../types/Instrument";

export class ElectricGuitar implements Instrument {
  makeSound() {
    console.log("ElectricGuitar goes metal");
  }
}
