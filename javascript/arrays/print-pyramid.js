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

getStars(3);
getStars(5);
