import { Instrument } from "../types/Instrument";

export class ElectricBass implements Instrument {
  private _color: string;

  constructor(color?: string) {
    if (color === undefined) this._color = "black";
    else this._color = color;
  }

  get color() {
    return this._color;
  }

  makeSound() {
    console.log(`The ${this._color} electric bass goes synth`);
  }
}
