export class Boundary {
  static width = 48
  static height = 48
  ctx: CanvasRenderingContext2D
  position: {x: number; y: number}
  constructor({ctx, position}) {
    this.ctx = ctx
    this.position = position
  }

  draw() {
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0)'
    this.ctx.fillRect(this.position.x, this.position.y, Boundary.width, Boundary.height)
  }
}
