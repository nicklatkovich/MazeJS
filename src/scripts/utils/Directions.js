/**
 * Created by NickLatkovich on 7/15/2016.
 */

function Directions() {
}

Directions.directions = [2, 3, 5, 7];

Directions.get = function (i) {
    return Directions.directions[i % 4];
};

Directions.NAMES = {
    RIGHT : 0,
    UP : 1,
    LEFT : 2,
    DOWN : 3
};