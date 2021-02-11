//create object to be able to call localStorage
var lsTask = (function () {
    //constructor to create more
    var Constructor = function (id) {
        this.id = id;
    };

    //prototype method to set local storage items
    Constructor.prototype.set = function (data) {
        localStorage.setItem(this.id, JSON.stringify({
            timestamp: new Date().getTime(),
            data: data
        }));
    };

    return Constructor
})();