import { _decorator, Collider, Component, ITriggerEvent, Node } from 'cc';
import { CollisionSystem } from '../Component/CollisionSystem';
import { PinMove } from './PinMove';
const { ccclass, property } = _decorator;

@ccclass('PinCollision')
export class PinCollision extends CollisionSystem {

    private _pinMove: PinMove
    start(): void {
        super.start()
        this._pinMove = this.getComponent(PinMove)
    }
    onTriggerEnter(event: ITriggerEvent)
    {
        super.onTriggerEnter(event)
        if(event.otherCollider.getComponent(PinCollision) && this._pinMove.canMove)
        {
            this._pinMove.InactiveMove()
            this._pinMove.ActiveBack()
        }
    }
}


