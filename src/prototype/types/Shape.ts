import { Cloneable } from "./Cloneable";
import { ShapeColor } from "./ShapeColor";

export abstract class Shape implements Cloneable<Shape> {
  private _x: number;
  private _y: number;
  private _shapeColor: ShapeColor;

  constructor(shape: Shape);
  constructor(x?: number, y?: number, shapeColor?: ShapeColor);
  constructor(shapeOrX?: Shape | number, y?: number, shapeColor?: ShapeColor) {
    if (typeof shapeOrX == "number") {
      this._x = shapeOrX ? shapeOrX : 0;
      this._y = y ? y : 0;
      this._shapeColor = shapeColor ? shapeColor : 0;
      return;
    }
    this._x = shapeOrX ? shapeOrX._x : 0;
    this._y = shapeOrX ? shapeOrX._y : 0;
    this._shapeColor = shapeOrX ? shapeOrX._shapeColor : ShapeColor.black;
  }

  public get x() {
    return this._x;
  }
  public set x(x: number) {
    this._x = x;
  }

  public get y() {
    return this._y;
  }
  public set y(y: number) {
    this._y = y;
  }

  public get shapeColor() {
    return this._shapeColor;
  }
  public set shapeColor(shapeColor: ShapeColor) {
    this._shapeColor = shapeColor;
  }

  abstract clone(): Shape;
}
