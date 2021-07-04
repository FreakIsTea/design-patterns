import { HouseColor } from "./types/HouseColor";

export class House {
  private _houseColor: HouseColor;

  constructor() {
    this._houseColor = HouseColor.White;
  }

  get houseColor() {
    return this._houseColor;
  }
  
}
