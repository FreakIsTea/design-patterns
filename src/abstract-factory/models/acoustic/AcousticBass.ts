import { Instrument } from "../types/Instrument";

export class AcousticBass implements Instrument {
  makeSound() {
    console.log("AcousticBass goes low");
  }
}
