namespace SpriteKind {
    export const Target = SpriteKind.create()
    export const LeaveToken = SpriteKind.create()
}
function deliverRootBeer () {
    if (controller.A.isPressed() && RootBeer.tileKindAt(TileDirection.Bottom, assets.tile`TileTable`)) {
        unfollow(RootBeer, Waitress)
        music.baDing.play()
        effects.bubbles.startScreenEffect(500)
        info.changeScoreBy(1)
        pause(500)
        spawnNewRootBeer()
    } else if (controller.A.isPressed() && RootBeer.tileKindAt(TileDirection.Bottom, assets.tile`Endtable`)) {
        unfollow(RootBeer, Waitress)
        info.changeScoreBy(1)
        music.magicWand.play()
        effects.bubbles.startScreenEffect(500)
        game.over(true)
    } else if (controller.A.isPressed() && RootBeer.tileKindAt(TileDirection.Center, assets.tile`BrokenTableTile`)) {
        unfollow(RootBeer, Waitress)
        music.wawawawaa.play()
        info.changeScoreBy(-1)
        pause(500)
        spawnNewRootBeer()
    } else {
    	
    }
}
function unfollow (followerSprite: Sprite, controllingSprite: Sprite) {
    followerSprite.setPosition(followerSprite.x, followerSprite.y)
    followerSprite.setVelocity(0, 0)
}
function pickUpRootBeer (picker_upper: Sprite, thingtopickup: Sprite) {
    if (picker_upper.overlapsWith(thingtopickup)) {
        follow(RootBeer, Waitress)
    }
}
function follow (followerSprite: Sprite, controllingSprite: Sprite) {
    followerSprite.setPosition(controllingSprite.x, controllingSprite.y)
    followerSprite.setVelocity(controllingSprite.vx, controllingSprite.vy)
}
function spawnNewRootBeer () {
    for (let index = 0; index <= 5; index++) {
        newrootbeer.push(index)
        newrootbeer = sprites.create(assets.image`RootBeer`, SpriteKind.LeaveToken)
        newrootbeer.setPosition(scene.cameraProperty(CameraProperty.Right), scene.cameraProperty(CameraProperty.Top))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    pause(200)
})
let newrootbeer: number[] = []
let RootBeer: Sprite = null
let Waitress: Sprite = null
let mySprite = 0
mySprite = null
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`Level1Map`)
info.setLife(2)
info.setScore(0)
Waitress = sprites.create(img`
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . 5 5 5 5 . . . . . . 
    . . . . . . . 5 5 . . . . . . . 
    5 5 5 5 3 3 3 3 3 3 3 3 5 5 5 5 
    5 5 5 5 3 3 3 3 3 3 3 3 5 5 5 5 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . . . 3 3 . . . . . . . 
    . . . . . . 3 3 3 3 . . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . 3 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 . . . 
    . . 3 3 3 3 3 3 3 3 3 3 3 3 . . 
    . 3 3 3 3 3 3 3 3 3 3 3 3 3 3 . 
    `, SpriteKind.Player)
Waitress.setPosition(8, 102)
Waitress.setVelocity(10, 0)
Waitress.ax = 0
Waitress.ay = 0
scene.cameraFollowSprite(Waitress)
Waitress.setStayInScreen(true)
RootBeer = sprites.create(assets.image`RootBeer`, SpriteKind.LeaveToken)
RootBeer.setPosition(74, 91)
let MountainDew = sprites.create(assets.image`MtnDew`, SpriteKind.Enemy)
MountainDew.setVelocity(20, 10)
MountainDew.setBounceOnWall(true)
MountainDew.setStayInScreen(true)
let Monster = sprites.create(assets.image`Monster`, SpriteKind.Enemy)
Monster.setPosition(114, 7)
Monster.setStayInScreen(true)
let Mr_Pibb = sprites.create(assets.image`Mr Pibb`, SpriteKind.Enemy)
Mr_Pibb.setPosition(49, 7)
Mr_Pibb.setStayInScreen(true)
newrootbeer = []
forever(function () {
    if (controller.right.isPressed()) {
        Waitress.vx = 30
    }
    if (controller.left.isPressed()) {
        Waitress.vx = -20
    }
    if (controller.up.isPressed()) {
        Waitress.vy = -30
    }
    if (controller.down.isPressed()) {
        Waitress.vy = 100
    }
})
forever(function () {
    Waitress.ay = 30
})
forever(function () {
    pickUpRootBeer(Waitress, RootBeer)
    deliverRootBeer()
})
