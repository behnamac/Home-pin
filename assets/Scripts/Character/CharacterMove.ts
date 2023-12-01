import { _decorator, Component, debug, Node, Vec3 } from 'cc';
import { ObjectMove } from '../Component/ObjectMove';
const { ccclass, property } = _decorator;

@ccclass('CharacterMove')
export class CharacterMove extends ObjectMove {

    ActiveMove(): void
    {
        super.ActiveMove()
        //Play Animation
    }
    InactiveMove(): void
    {
        super.InactiveMove()
        //Stop Animation
    }
}

