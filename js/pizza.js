var Pizza =  {};
Pizza.toppings = ["tomatoes", "olives", "mushrooms", "pineapple"];
Pizza.selectedTopping = "";

Pizza.start = function(){
    Pizza.bindMenuActions();
    Pizza.generateDynamicToppings();
    Pizza.bindPizzaClick();
};


Pizza.bindMenuActions = function(){
    var newBtn = document.getElementById("new");
    newBtn.addEventListener("click", Pizza.new);
    var saveBtn = document.getElementById("save");
    saveBtn.addEventListener("click", Pizza.save);
    var loadBtn = document.getElementById("load");
    loadBtn.addEventListener("click", Pizza.load);
};


Pizza.bindPizzaClick = function(){
    var pizza = document.getElementById("pizza");
    pizza.addEventListener("click",Pizza.placeToppings);
};


Pizza.placeToppings = function(e){
    var pizza = document.getElementById("pizza");
    if (Pizza.selectedTopping != ""){
        var toppingsImg = document.createElement("img"); 
        toppingsImg.src = "./images/" + Pizza.selectedTopping + "_topping.png";
        pizza.appendChild(toppingsImg);
        toppingsImg.style.top = e.pageY - this.offsetTop + "px";
        toppingsImg.style.left = e.pageX - this.offsetLeft + "px";
    }else{
        alert("please select toppings!")
    }
};


Pizza.showModal = function(title, message){
    var modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper.style.display = "block";
};

Pizza.new = function(){
    var pizzaName = prompt("What is the name of your new pizza?");
    var pizzaTitle = document.getElementById("pizza-title");
    pizzaTitle.innerHTML = pizzaName;
    Pizza.clear();
    Pizza.show();
};

Pizza.clear = function(){
    var pizza = document.getElementById("pizza");
    var allToppings = pizza.getElementsByTagName('img');
    for (var i = allToppings.length - 1; i >= 0; i--) {
        pizza.removeChild(allToppings[i]);
    }
};

Pizza.save = function(){
    var pizza = document.getElementById("pizza");
    var pizzaLeft = pizza.getBoundingClientRect().left;
    var pizzaTop =  pizza.getBoundingClientRect().top;
    var pizzaObj = {};
    pizzaObj["name"] = document.getElementById("pizza-title").innerHTML;
    pizzaObj["toppings"] = [];
    var allToppings = pizza.getElementsByTagName('img');
    for (var i = 0; i < allToppings.length ; i++) {
        var currentTopping = allToppings[i];
        var toppingObj = {};
        toppingObj["img"] = currentTopping.src;
        toppingObj["top"] = currentTopping.getBoundingClientRect().top - pizzaTop;
        toppingObj["left"] = currentTopping.getBoundingClientRect().left - pizzaLeft;
        pizzaObj["toppings"].push(toppingObj);
    }
    localStorage.setItem('pizza', JSON.stringify(pizzaObj));
    alert("Pizza Saved");
};

Pizza.load = function(){
    var loadedPizza = localStorage.getItem('pizza');
    var pizzaObj = JSON.parse(loadedPizza);
    Pizza.clear();
    var pizzaTitle = document.getElementById("pizza-title");
    pizzaTitle.innerHTML = pizzaObj["name"];
    var allToppings = pizzaObj["toppings"];
    for (var i = 0; i < allToppings.length ; i++) {
        var currentTopping = allToppings[i];
        var toppingsImg = document.createElement("img"); 
        toppingsImg.src = currentTopping["img"];
        pizza.appendChild(toppingsImg);
        toppingsImg.style.top =  currentTopping["top"] + "px";
        toppingsImg.style.left = currentTopping["left"] + "px";
    }
    Pizza.show();
    alert("Pizza Loaded");
};

 Pizza.show = function(){
    var pizza = document.getElementById("pizza");
    pizza.style.display = "block";
 };


Pizza.generateDynamicToppings = function(){
    var toppingsHolder = document.getElementById("toppings-menu");
    for (var i = 0; i < Pizza.toppings.length ; i++){
        var buttonItem =  document.createElement("li"); 
        var newButton = document.createElement("button"); 
        var buttonLabel = document.createTextNode(Pizza.toppings[i]);
        newButton.style.backgroundImage = "url(./images/" + Pizza.toppings[i] + ".jpg)";
        newButton.className = "cover-bg toppings-btn";
        newButton.id = Pizza.toppings[i];
        buttonItem.appendChild(newButton);
        newButton.appendChild(buttonLabel);
        toppingsHolder.appendChild(buttonItem);
        newButton.addEventListener("click",function(e){
            var clickedTopping = this;
            Pizza.selectedTopping = clickedTopping.id;
            allToppingsButtons = document.getElementsByClassName("toppings-btn")
            for( var j = 0; j < allToppingsButtons.length; j++ ){
                allToppingsButtons[j].classList.remove("selected");
            }
            clickedTopping.classList.add("selected");
        });
    }
};

Pizza.start();