

/*eslint-disable semi */
function main(num){
    let lyricNomore='No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';
    let lyricOne='1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n';
    let lyricCommon1=' bottles of beer on the wall, ';
    let lyricCommon2=' bottles of beer.\nTake one down and pass it around, ';
    let lyricCommon4=' bottles of beer on the wall.\n';
    let lyricCommon5=' bottle of beer on the wall.\n';
    if (num===0){
        return lyricNomore;
    }
    else if(num===1){
        let lyric='';
        lyric=lyricOne+lyricNomore;
        return lyric;
    }
    else if(num>1){
        let lyric='';
         let lyricCommon='';
        for(let i=num;i>1;i--){
            if(i===2){
                 lyricCommon=i+lyricCommon1+i+lyricCommon2+(i-1)+lyricCommon5;
            }
            else{
                 lyricCommon=i+lyricCommon1+i+lyricCommon2+(i-1)+lyricCommon4;
            }
            lyric+=lyricCommon;
        }
        lyric+=lyricOne+lyricNomore;
        return lyric;
}    
}module.exports = main;
