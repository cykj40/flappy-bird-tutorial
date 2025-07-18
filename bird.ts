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

    jumping = false;

    private isInputActive(engine: ex.Engine) {
        return (engine.input.keyboard.isHeld(ex.Keys.Space) ||
            engine.input.pointers.isDown(0))
    }

    override onPostUpdate(engine: ex.Engine,): void {
        if (!this.jumping && this.isInputActive(engine)) {
            this.vel.y += -800;
            this.jumping = true;
        }
        if (!this.isInputActive(engine)) {
            this.jumping = false;
        }

        this.vel.y = ex.clamp(this.vel.y, -500, 500);

        this.rotation = ex.vec(200, this.vel.y).toAngle();
    }

}