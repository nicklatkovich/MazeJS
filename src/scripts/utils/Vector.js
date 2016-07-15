/**
 * Created by NickLatkovich on 15.07.2016.
 */

function Vector() {
    this.memory = [];
    this.length = 0;

    this.push = function (data) {
        this.memory[this.length++] = data;
    };

    this.pop = function () {
        return this.memory[--this.length];
    };

    this.get = function (index) {
        if (index >= 0 && index < this.length) {
            return this.memory[index];
        }
        else {
            return null;
        }
    };

    this.swap = function (a, b) {
        if (a >= 0 && a < this.length &&
            b >= 0 && b < this.length) {
            var temp = this.memory[a];
            this.memory[a] = this.memory[b];
            this.memory[b] = temp;
            return true;
        }
        else {
            return false;
        }
    }
}