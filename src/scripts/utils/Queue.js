/**
 * Created by NickLatkovich on 15.07.2016.
 */

function QueueElement(data) {
    this.data = data;
    this.next = null;
}

function Queue() {
    this.head = this.last = null;

    this.pop = function () {
        if (this.head) {
            var result = this.head.data;
            this.head = this.head.next;
            if (this.head == null) {
                this.last = null;
            }
            return result;
        }
        else {
            return null;
        }
    };

    this.push = function(data) {
        var newElement = new QueueElement(data);
        if (this.last) {
            this.last = this.last.next = newElement;
        }
        else {
            this.head = this.last = newElement;
        }
    };

    this.isEmpty = function() {
        return (this.head == null);
    }
}