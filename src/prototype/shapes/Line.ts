import { Shape } from "../types/Shape";
import { ShapeColor } from "../types/ShapeColor";

export class Line extends Shape {
  private _x2: number;
  private _y2: number;

  constructor(line: Line);
  constructor(x: number, y: number, shapeColor: ShapeColor, x2: number, y2: number);
  constructor(lineOrX: Line | number, y?: number, shapeColor?: ShapeColor, x2?: number, y2?: number) {
    if (typeof lineOrX == "number") {
      super(lineOrX, y, shapeColor);
      this._x2 = x2 ? x2 : 0;
      this._y2 = y2 ? y2 : 0;
      return;
    }
    super(lineOrX as Shape);
    this._x2 = lineOrX._x2;
    this._y2 = lineOrX._y2;
  }

  public clone(): Line {
    return new Line(this);
  }
}
