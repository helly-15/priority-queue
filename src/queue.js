const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if(!maxSize){
			this.maxSize=30;
		}
		else this.maxSize=10;
		this.heap = new MaxHeap();
		this.length = 0;
		
	}

	push(data, priority) {

	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		if (this.length==0) return true;
	}
}

module.exports = PriorityQueue;
