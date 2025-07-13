import * as ex from "excalibur";


export class Bird extends ex.Actor {
    constructor() {
        super({
            pos: ex.vec(200, 300),
            width: 16,
            height: 16,
            color: ex.Color.Yellow
        });
    }

    override onInitialize(): void {
        this.acc = ex.vec(0, 1200);
    }

    start() {

    }
    stop() {
        this.vel = ex.vec(0, 0);
        this.acc = ex.vec(0, 0);

    }

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof Ground) {
            this.stop();
        }
    }

}