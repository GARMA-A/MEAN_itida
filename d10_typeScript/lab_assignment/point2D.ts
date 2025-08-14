class Point2D {
	constructor(public x: number, public y: number) { }
	length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
}

class Point3D extends Point2D {
	constructor(x: number, y: number, public z: number) {
		super(x, y);
	}

	length(): number {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
}
