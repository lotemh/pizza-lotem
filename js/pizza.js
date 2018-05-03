var Pizza = {};
Pizza.toppings = ["mushrooms", "olives", "pineapple", "tomatoes"];

Pizza.start = function(){
    Pizza.bindMenuActions();
    Pizza.generateDynamicToppings();
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

Pizza.generateDynamicToppings = function(){
    var toppingMenu = document.getElementById("toppings-menu");
    for (var i=0; i<Pizza.toppings.length; i++){
        var toppingwrapper = document.createElement("li");
        var toppingButton = document.createElement("button");
        var toppingText = document.createTextNode(Pizza.toppings[i]);
        toppingButton.style.backgroundImage = "url(./images/" + Pizza.toppings[i] + ".jpg)";
        toppingButton.className = "cover-bg toppings-btn";
		toppingwrapper.id = Pizza.toppings[i];
        toppingButton.appendChild(toppingText);
        toppingwrapper.appendChild(toppingButton);
        toppingMenu.appendChild(toppingwrapper);
    }
}

Pizza.start();