namespace SpriteKind {
    export const Target = SpriteKind.create()
    export const LeaveToken = SpriteKind.create()
}
function deliverRootBeer () {
    if (controller.A.isPressed() && RootBeer.tileKindAt(TileDirection.Bottom, assets.tile`TileTable`)) {
        unfollow(RootBeer, Waitress)
        music.baDing.play()
        info.changeScoreBy(1)
        effects.confetti.startScreenEffect(500)
    }
}
function unfollow (followerSprite: Sprite, controllingSprite: Sprite) {
    followerSprite.setPosition(followerSprite.x, followerSprite.y)
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
function createNewRootBeer () {
    RootBeer = sprites.create(assets.image`RootBeer`, SpriteKind.LeaveToken)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-1)
})
let SecondsTime = 0
let RootBeer: Sprite = null
let Waitress: Sprite = null
let mySprite = 0
mySprite = null
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`Level1Map`)
info.setScore(0)
info.setLife(2)
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
forever(function () {
    pause(1000)
    SecondsTime += 1
})
forever(function () {
    Waitress.ay = 25
})
forever(function () {
    if (controller.right.isPressed()) {
        Waitress.vx = 10
    }
    if (controller.left.isPressed()) {
        Waitress.vx = -10
    }
    if (controller.up.isPressed()) {
        Waitress.vy = -25
    }
    if (controller.down.isPressed()) {
        Waitress.vy = 100
    }
})
