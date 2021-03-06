dojo.provide("unieap.tree.DndSelector");
dojo.require("unieap.tree.Tree");
dojo.require("unieap.tree.DndContainer")
dojo.declare("unieap.tree.DndSelector", unieap.tree.DndContainer, {
	// 关于选择节点相关的逻辑代码，是uneap.tree.DndSource的父类

	constructor : function(params) {
		// 被选中节点的对象
		this.selection = {};
		// 用来记录前一个选中的节点的信息
		this.anchor = [];
		this.anchorId = null;
		this.simpleSelection = false;
		this.isCtrl = false;
		this.events.push(
			dojo.connect(dojo.body(), "onkeydown", this, "onKeyDown"),
			dojo.connect(dojo.body(), "onkeyup", this, "onKeyUp"),
			dojo.connect(this.tree.domNode, "onmousedown", this,"onMouseDown"), 
			dojo.connect(this.tree.domNode, "onmouseup",this, "onMouseUp")
		);
	},
	
	onKeyDown: function(evt){
		if(evt.keyCode == dojo.keys.CTRL) this.isCtrl = true;
	},

	onKeyUp: function(evt){
		if(evt.keyCode == dojo.keys.CTRL) this.isCtrl = false;
	},
	
	// 得到选中节点组成的对象
	getSelectedNodes : function() {
		return this.selection;
	},

	// 清除选中节点
	selectNone : function() {
		return this._removeSelection()._removeAnchor();
	},

	// 销毁操作
	destroy : function() {
		unieap.tree.DndSelector.superclass.destroy.call(this);
		this.selection = this.anchor = null;
	},

	// 鼠标down的监听事件，目前只支持选择一个节点
	onMouseDown : function(e) {
		if (!this.current) {
			return;
		}
		// 屏蔽右键
		if (e.button == 2) {
			return;
		}
		if(!(this.isCtrl&&this.canMultiDrag)){
			 if (this.currentId in this.selection) {
	            this.simpleSelection = true;
	            dojo.stopEvent(e);
	            return;
	         }
			//将原来已经选中的节点取消掉，并将当前节点选中
	      	if (!(this.currentId in this.selection)) {
	            this.selectNone();
				this.selection[this.currentId] = this.current;
	            this.anchor = this.current;
				this.anchorId = this.currentId;
	            this._addItemClass(this.current, "Anchor");
	           
	        }
		}
		dojo.stopEvent(e);
		
	},

	// 鼠标up时的监听事件
	onMouseUp : function(e) {
		if(!(this.isCtrl&&this.canMultiDrag)){
			if (!this.simpleSelection) {
	            return;
	        }
	        this.simpleSelection = false;
	        this.selectNone();
	        if (this.current) {
	            this.anchor = this.current;
	            this._addItemClass(this.anchor, "Anchor");
	            this.selection[this.current.id] = this.current;
	        }
		}else{
			if (!this.current) {
				return;
			}
			// 屏蔽右键
			if (e.button == 2) {
				return;
			}
			
			if(!(this.isCtrl&&this.canMultiDrag)){
				this._removeSelection();
			}
			
			if(!this.dragNotLeaf&&!this.tree.getNodeByDom(this.getTreeNodeDom(this.current)).isLeaf())
				return;
			// 当前节点已经处于选中状态时的操作
			if (this.currentId in this.selection) {
				this._removeItemClass(this.current, "Anchor");
				delete this.selection[this.currentId];
	//			this.simpleSelection = true;
				dojo.stopEvent(e);
				return;
			}
			// 将原来已经选中的节点取消掉，并将当前节点选中
			if (!(this.currentId in this.selection) && ((this.isCtrl&&this.canMultiDrag) || this._isSelectionEmpty(this.selection))) {
	//			this.selectNone();
				this.selection[this.currentId] = this.current;
	//			this.anchor = this.current;
	//			this.anchorId = this.currentId;
				this._addItemClass(this.current, "Anchor");
				
			}
		}
		
	},
	
	_isSelectionEmpty: function(selection){
		var isEmpty = true;
		for(var i in selection){
			isEmpty = false;
			return isEmpty;
		}
		return isEmpty;
	},

	// 清空选中节点
	_removeSelection : function() {
		var e = dojo.dnd._empty;
		for ( var i in this.selection) {
			if (i in e) {
				continue;
			}
			var node = this.selection[i];
			if (node) {
				this._removeItemClass(node, "Selected");
				this._removeItemClass(node, "Anchor");
			}
		}
		this.selection = {};
		return this;
	},

	// 移除节点的样式
	_removeAnchor : function() {
		if (this.anchor) {
			this._removeItemClass(this.anchor, "Anchor");
			this.anchor = null;
		}
		return this;
	}
});
