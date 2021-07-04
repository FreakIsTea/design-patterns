import { Size } from "../types/Size";
import { Room } from "./Room";

export class Bathroom extends Room {
  constructor(size: Size) {
    super(size);
  }
}
