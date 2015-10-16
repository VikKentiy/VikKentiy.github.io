/**
 * Created by samoylova on 19.06.15.
 */

    List = function(id, options){
        $.extend(this, options);
        this.$element = $(id);
        this.$ul      = $('<ul></ul>');
        this.$element.append(this.$ul);

    };

    List.prototype.namespace = 'List';
    List.prototype.addItem  = function(value, id) {
        id = id || List.autoincrement();
        id = this.namespace + id;

        if(this.$ul.find('#' + id).length) {
            throw new Error("item with id '" + id + "' already exists");
        }
        this.$ul.append('<li id="'+ id + '">' + value + '</li>');
    };

    List.prototype.removeItem = function(id) {
        this.$ul.find('#' + this.namespace + id).remove();
    };
    List.prototype.editItem = function(id, value) {
        id = this.namespace + id;
        var idx  = this.$ul.find('#' + id);
        idx.html(value);
    };


    List.__counter__ = 0;
    List.autoincrement = function(){
         List.__counter__++;
        return List.__counter__;
    };

    StorageAwareList = function(id, options) {

        List.apply(this, arguments);
        var self      = this;
        
        this.storage.on('onAdd', function(object){
            self.addItem(object.name, object.id);
        });
        this.storage.on('onRem', function(object){
            self.removeItem(object.id);
        });
        this.storage.on('onEdit', function(params){
            self.editItem(params.item.id, params.val);
        })
    };

    StorageAwareList.prototype = Object.create(List.prototype);












