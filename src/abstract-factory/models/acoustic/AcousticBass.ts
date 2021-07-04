import { Instrument } from "../types/Instrument";

export class AcousticBass implements Instrument {
  private _color: string;

  constructor(color?: string) {
    if (color === undefined) this._color = "green";
    else this._color = color;
  }

  get color() {
    return this._color;
  }

  makeSound() {
    console.log(`The ${this._color} acoustic bass goes low`);
  }
}
