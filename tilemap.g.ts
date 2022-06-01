// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1Map":
            case "level1":return tiles.createTilemap(hex`3c000800040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040104040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404030303040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040404040403030303030404040404040404040404040404040404040404010404040401040404040204040404010404040402040404040104040404030303030303030303030303040405030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303`, img`
............................................................
............................................................
............................................................
....................................................2.......
...................................................222......
..................................................22222.....
...............2....2.........2.........2....222222222222..2
222222222222222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile2,myTiles.tile3,myTiles.tile1,myTiles.tile4,myTiles.tile5], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "BrokenTableTile":
            case "tile3":return tile3;
            case "TileTable":
            case "tile2":return tile2;
            case "TileBackground":
            case "tile4":return tile4;
            case "TileFloor":
            case "tile1":return tile1;
            case "Endtable":
            case "tile5":return tile5;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
