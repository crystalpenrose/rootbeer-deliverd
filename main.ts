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
        pause(1000)
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
    } else {
    	
    }
}
function unfollow (followerSprite: Sprite, controllingSprite: Sprite) {
    followerSprite.setPosition(followerSprite.x, followerSprite.y)
    followerSprite.setVelocity(0, 0)
}
function pickUpRootBeer (picker_upper: Sprite, thingtopickup: Sprite) {
    if (picker_upper.overlapsWith(thingtopickup)) {
        follow(thingtopickup, picker_upper)
    }
}
function follow (followerSprite: Sprite, controllingSprite: Sprite) {
    followerSprite.setPosition(controllingSprite.x, controllingSprite.y)
    followerSprite.setVelocity(controllingSprite.vx, controllingSprite.vy)
}
function spawnEnemy (EnemySprite: Sprite, ImageOfEnemy: Image, x: number, y: number, vx: number, vy: number) {
    EnemySprite = sprites.create(ImageOfEnemy, SpriteKind.Enemy)
    EnemySprite.setPosition(x, y)
    EnemySprite.setVelocity(vx, vy)
    EnemySprite.setBounceOnWall(true)
    EnemySprite.setStayInScreen(true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.powerDown.play()
    info.changeLifeBy(-1)
    pause(200)
})
let myImage: Image = null
let EnemySprite: Sprite = null
let RootBeer: Sprite = null
let Waitress: Sprite = null
let mySprite = null
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
let Mr_Pibb = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let MountainDew = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let Monster = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
let DoOnlyOneTime = true
forever(function () {
    if (controller.right.isPressed()) {
        Waitress.vx = 50
    }
    if (controller.left.isPressed()) {
        Waitress.vx = -10
    }
    if (controller.up.isPressed()) {
        Waitress.vy = -20
    }
    if (controller.down.isPressed()) {
        Waitress.vy = 100
    }
})
forever(function () {
    if (DoOnlyOneTime == true) {
        if (info.score() == 0) {
            myImage = assets.image`MtnDew`
            spawnEnemy(MountainDew, myImage, 0, 0, 30, 30)
            DoOnlyOneTime = false
        }
    }
})
forever(function () {
    Waitress.vy += 10
})
forever(function () {
    pickUpRootBeer(Waitress, RootBeer)
    deliverRootBeer()
})
