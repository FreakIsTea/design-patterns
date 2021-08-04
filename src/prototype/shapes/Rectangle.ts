import { Shape } from "../types/Shape";
import { ShapeColor } from "../types/ShapeColor";

export class Rectangle extends Shape {
  private _width: number;
  private _height: number;
  constructor(rectangle: Rectangle);
  constructor(x: number, y: number, shapeColor: ShapeColor, width: number, height: number);
  constructor(
    rectangleOrX: Rectangle | number,
    y?: number,
    shapeColor?: ShapeColor,
    width?: number,
    height?: number
  ) {
    if (typeof rectangleOrX == "number") {
      super(rectangleOrX, y, shapeColor);
      this._width = width ? width : 0;
      this._height = height ? height : 0;
      return;
    }
    super(rectangleOrX as Shape);
    this._width = rectangleOrX._width;
    this._height = rectangleOrX._height;
  }

  public clone(): Rectangle {
    return new Rectangle(this);
  }
}
