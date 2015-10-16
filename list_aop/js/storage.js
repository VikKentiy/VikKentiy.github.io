Storage = function(){
    this.data = [];
    this.dataMap = {};
};
Storage.prototype.data = [];
Storage.prototype.dataMap = {};
Storage.prototype.add = function (object){
    if(this.dataMap[object.id]) {
        throw new Error("item with id '" + object.id + "' already exists");
    }
    this.dataMap[object.id] = object;
    this.data.push(object);
    this.onAdd(object);
};
Storage.prototype.remove = function (id){
    var
        item = this.dataMap[id],
        itemIdx = this.data.indexOf(item);
    this.data.splice(itemIdx, 1);
    delete this.dataMap[id];

    this.onRem(item);
};
Storage.prototype.edit = function (id, property, value){

    var item = this.dataMap[id];
    item[property] = value;
    this.onEdit(item, property, value);
};

Storage.prototype.on = function(eventName, callback){
    $.aop.after({method: eventName, target: this}, callback);
};

Storage.prototype.onAdd = function(object) {
    return object;
};
Storage.prototype.onRem = function(object) {
    return object;
};
Storage.prototype.onEdit = function(item, prop, val) {
    return {item: item, prop: prop, val: val};
};