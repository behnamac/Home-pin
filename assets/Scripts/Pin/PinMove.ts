import { _decorator, Component, Node, Vec3 } from 'cc';
import { ObjectMove } from '../Component/ObjectMove';
const { ccclass, property } = _decorator;

@ccclass('PinMove')
export class PinMove extends ObjectMove {

    firstPoint: Vec3 = new Vec3()
    canBack: boolean = false
    start() 
    {
        this.firstPoint = new Vec3(this.node.position)
    }

    update(deltaTime: number): void {
        super.update(deltaTime)
        if(this.canBack)
            this.BackToFirstPoint(deltaTime)
    }
    BackToFirstPoint(deltaTime: number)
    {
        var target = new Vec3();
        Vec3.moveTowards(target, this.node.position, this.firstPoint, this.speed * deltaTime)

        this.node.position = target;

        if (Vec3.distance(this.node.position, this.firstPoint) <= 0.1)
        {
            this.InactiveBack()
            console.log("End")
        }
    }

    ActiveBack()
    {
        this.canBack = true
    }
    InactiveBack()
    {
        this.canBack = false
    }
}


