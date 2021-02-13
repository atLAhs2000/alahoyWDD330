//create object to be able to call localStorage
var lsTask = (function () {
    //constructor to create more
    var Constructor = function (name) {
        this.name = name;
    };

    //prototype method to set local storage items
    Constructor.prototype.set = function (name, completion) {
        localStorage.setItem(this.name, JSON.stringify({
            id: new Date().getTime(),
            name: name,
            completed: completion
        }));
    };

    //method to get items from local storage
    Constructor.prototype.get = function () {
        var data = localStorage.getItem(this.id);
        data = data ? JSON.parse(data) : null;
        if (data) return data;
    }

    return Constructor
})();

export default lsTask;