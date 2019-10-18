class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;
	}

	appendChild(node) {
		if (this.right == null){
			if (this.left != null){
				this.right=node;
				this.right.parent=this;
				return this.right
			}

			this.left=node;
			this.left.parent=this;
			return 	this.left;
		}
		

	}

	removeChild(node) {
		if (node==this.left) {
			this.left.parent = null;
			this.left = null
		} else if (node == this.right) { 
			this.right.parent = null;
			this.right = null
		}
		else throw "Error"
	}

	remove() {
		if (this.parent == null) return;
		this.parent.removeChild(this);
	}

	setLeft(left) {
		this.left = left;
		if (left != null) left.parent = this;
	}

	setRight(right) {
		this.right = right;
		if (right != null) right.parent = this;
	}

	swapWithParent() {
		if (this.parent == null) return;

		if (this.parent.parent != null) {
			if (this.parent.parent.left == this.parent) {
				this.parent.parent.left = this;
			} else {
				this.parent.parent.right = this;
			}
		}
		var parent = this.parent;
		this.parent = this.parent.parent;
		parent.parent = this;

		if (parent.left == this) {
			var left = this.left;
			this.left = parent;
			parent.left = left;

			var parentRight = parent.right;
			parent.right = this.right;
			this.setRight(parentRight);

		} else if (parent.right == this) {
			var right = this.right;
			this.right = parent;
			parent.right = right;

			var parentLeft = parent.left;
			parent.left = this.left;
			this.setLeft(parentLeft);
		}
	}
}

module.exports = Node;
