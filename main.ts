namespace SpriteKind {
    export const Target = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Target, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
})
function GravityAcceleration (num: number) {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-1)
})
effects.confetti.startScreenEffect(5000)
scene.setBackgroundColor(13)
tiles.setCurrentTilemap(tilemap`Level1Map`)
info.setScore(0)
info.setLife(2)
let SecondsTime = 0
let RootBeer = sprites.create(assets.image`RootBeer`, SpriteKind.Player)
RootBeer.setPosition(8, 102)
RootBeer.setVelocity(10, 0)
RootBeer.ax = 0
RootBeer.ay = 0
scene.cameraFollowSprite(RootBeer)
RootBeer.setStayInScreen(true)
let Waitress = sprites.create(img`
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
Waitress.follow(RootBeer)
Waitress.setPosition(8, 102)
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
    GravityAcceleration(1)
})
forever(function () {
    if (controller.right.isPressed()) {
        RootBeer.vx = 10
    }
    if (controller.left.isPressed()) {
        RootBeer.vx = -10
    }
    if (controller.up.isPressed()) {
        RootBeer.vy = -10
    }
    if (controller.down.isPressed()) {
        RootBeer.vy = 100
    }
})
