//create object to be able to call localStorage
var lsTask = (function () {
    //constructor to create more
    var Constructor = function (id) {
        this.id = id;
    };

    //prototype method to set local storage items
    Constructor.prototype.set = function (name, completion) {
        localStorage.setItem(this.id, JSON.stringify({
            timestamp: new Date().getTime(),
            name: name,
            completed: completion
        }));
    };

    Constructor.prototype.get = function () {
        var data = localStorage.getItem(this.id);
        data = data ? JSON.parse(data) : null;
        if (data) return data;
    }

    return Constructor
})();