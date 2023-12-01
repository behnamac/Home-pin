import { _decorator, Component, ITriggerEvent, Node, sys } from 'cc';
import { Obstacle } from '../../Hitable/Obstacle';
import { Target } from '../../Hitable/Target';
import { GameManager } from '../../Manager/GameManager';
import { CollisionSystem } from '../../Component/CollisionSystem';
const { ccclass, property } = _decorator;

@ccclass('PlayerCollision')
export class PlayerCollision extends CollisionSystem {

    onTriggerEnter(event: ITriggerEvent)
    {
        super.onTriggerEnter(event)

        if (event.otherCollider.getComponent(Obstacle)) {
            GameManager.Instance.LevelFail()
        }
        else if (event.otherCollider.getComponent(Target)) {
            GameManager.Instance.LevelCompelet()
        }
    }
}


