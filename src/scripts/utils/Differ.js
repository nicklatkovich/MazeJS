/**
 * Created by NickLatkovich on 7/15/2016.
 */

function Differ() {
}

Differ.dx = function (i) {
    switch (i) {
        case 0:
            return 1;
        case 1:
        case 3:
            return 0;
        case 2:
            return -1;
    }
};

Differ.dy = function (i) {
    switch (i) {
        case 0:
        case 2:
            return 0;
        case 1:
            return -1;
        case 3:
            return 1;
    }
};