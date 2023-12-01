import { _decorator, Component, ITriggerEvent, Node } from 'cc';
import { CollisionSystem } from '../Component/CollisionSystem';
import { Obstacle } from './Obstacle';
import { GameManager } from '../Manager/GameManager';
const { ccclass, property } = _decorator;

@ccclass('Target')
export class Target extends CollisionSystem {
    
    onTriggerEnter(event: ITriggerEvent): void {
        super.onTriggerEnter(event)

        if(event.otherCollider.getComponent(Obstacle))
        {
            GameManager.Instance.LevelFail()
        }
    }
}


