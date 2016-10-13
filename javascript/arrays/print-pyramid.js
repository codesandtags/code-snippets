function getStars(n){
    var x;

    for(var i=0; i<n; i++) {
        x = getAlignToRight( Array.from(Array(n)), i+1 );
        console.log( x.join('').replace(/_/ig, ' ') );
    }
}

function getAlignToRight(stars, n){
    stars.fill('_');

    for(var i=stars.length - 1; i > stars.length - 1 - n; i--){
        stars[i] = '#';
    }

    return stars;
}

function getStarsShortVersion(n){
    for(var i=0; i<n; i++) {
        var x = Array.from(Array(n)).fill('_').fill('#', (n - 1 - i));
        console.log( x.join('').replace(/_/ig, ' ') );
    }
}

getStars(3);
getStars(5);
