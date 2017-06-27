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

Pizza.new = function(){
    var pizzaName = prompt("What is the name of your new pizza?");
    var pizzaTitle = document.getElementById("pizza-title");
    pizzaTitle.innerHTML = pizzaName;
    Pizza.show();
};

Pizza.save = function(){
    alert("save");
};

Pizza.load = function(){
      alert("load");
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