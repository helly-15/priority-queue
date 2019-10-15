class Node {
	constructor(data, priority) {
		this.data=data;
		this.priority=priority;
		this.parent=null;
		this.left=null;
		this.right=null;

	}

	appendChild(node) {
		if ( this.right==null){
			if(this.left){
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
		if (node==this.left){ 
			this.left.parent=null;
			this.left=null
		}
		else if (node==this.right){ 
			this.right.parent=null;
			this.right=null
		}
		else throw "Error"
		

	}

	remove() {
		

	}

	swapWithParent() {
		if(this.parent!=null){
			return this.parent=this.left;

		
		}
		
	}
}

module.exports = Node;
