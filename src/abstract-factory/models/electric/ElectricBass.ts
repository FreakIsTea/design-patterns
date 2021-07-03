import { Instrument } from "../types/Instrument";

export class ElectricBass implements Instrument {
  makeSound() {
    console.log("ElectricBass goes synth");
  }
}
