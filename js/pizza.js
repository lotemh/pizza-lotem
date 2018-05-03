var Pizza = {};

Pizza.start = function(){
    Pizza.bindMenuActions();
};

Pizza.bindMenuActions = function(){
    var newBtn = document.getElementById("new");
    newBtn.addEventListener("click", Pizza.new);
    var saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", Pizza.save);
    var loadBtn = document.getElementById("load");
    loadBtn.addEventListener("click", Pizza.load);
}

Pizza.new = function(){
    console.log("pizza.new working");
}

Pizza.save = function(){
    console.log("pizza.save is working");
}

Pizza.load = function(){
    console.log("pizza.load is working");
}

Pizza.start();