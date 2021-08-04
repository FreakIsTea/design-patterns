import { Shape } from "../types/Shape";
import { ShapeColor } from "../types/ShapeColor";

export class Circle extends Shape {
  private _radius: number;

  constructor(circle: Circle);
  constructor(x: number, y: number, shapeColor: ShapeColor, radius: number);
  constructor(circleOrX: Circle | number, y?: number, shapeColor?: ShapeColor, radius?: number) {
    if (typeof circleOrX == "number") {
      super(circleOrX, y, shapeColor);
      this._radius = radius ? radius : 0;
      return;
    }
    super(circleOrX as Shape);
    this._radius = circleOrX._radius;
  }

  public clone(): Circle {
    return new Circle(this);
  }
}
