import { Instrument } from "../types/Instrument";

export class AcousticGuitar implements Instrument {
  makeSound() {
    console.log("AcousticGuitar goes Despacito");
  }
}
