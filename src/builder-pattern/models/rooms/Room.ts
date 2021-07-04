import { Direction } from "../types/Direction";
import { Size } from "../types/Size";

export class Room {
  private _size: Size;
  private _adjacentRooms: { direction: Direction; room: Room }[];

  constructor(size: Size) {
    this._size = size;
    this._adjacentRooms = [];
  }

  get size() {
    return this._size;
  }

  get adjacentRooms() {
    return this._adjacentRooms;
  }

  public setAdjacentRoom(direction: Direction, room: Room): boolean {
    return false;
  }
}
