var ItemName = ["Asparagus","Baked Potato","Broccoli","Carrots","Chicken Fingers","Cordon Bleu","French Fries","Green Beans","Hamburger","Lasagna","Peas","Salad","Vegetable Delight","Stir Fry","T-Bone Steak","Sweet Potatoes","Fried Chicken"];

var ItemDescription = ["Fresh asparagus steamed with lemon and butter.",
"Loaded Potato with everything!!",
"Steamed Broccoli.",
"Fresh cooked Carrots in a lemon glaze.",
"Country Fried Chicken Fingers.",
"Famous the world over. Cordon Bleu contains chicken, ham, and swiss cheese.",
"French Fried Potato snacks.",
"Fresh Green Beans cooked with a special sauce.",
"Home Cooked Hamburger: anyway you like it!!",
"Old Italian recipe: Lasagna cooked by our famous chef.",
"Garden Peas cooked to perfection.",
"Tossed Green Salad with garden fresh tomatos and our famous house dressing.",
"Straight from the Orient. Wok cooked vegetables with a tantilizing sauce from China.",
"Another savory dish from the Orient.",
"Cooked over our Hickory Fireplace, this steak will melt in your mouth!",
"Fresh cooked sweet potatoes in a sweet glaze.", "Southern Fried Chicken: the way you like it."];

var ItemPrice = [2.99,2.99,2.99,2.99,5.99,9.99,1.99,2.99,5.99,9.99,2.99,3.99,8.99,8.99,12.99,3.99,8.99];

var ItemPic = ["Asparagus.gif","BakedPotatoe.gif","Broccoli.gif","Carrots.gif","ChickenFingers.gif","CordonBleu.gif","FrenchFries.gif","GreenBeans.gif","Hamburger.gif","Lasagna.gif","Peas.gif","Salad.gif","VegetableDelight.gif","StirFry.gif","TboneSteak.gif","SweetPotatoes.gif","FriedChicken.gif"];

var DrinkName = ["Water","Sweet Tea"];

var DrinkDescription = ["Cold refreshing Spring Water on the House!","Southern Sweet Tea"];

var DrinkPrice = [0.00, 1.50];

var DrinkPic = ["Water.png","SweetTea.png"];

function nextC(){
    window.location.reload();
}
function orderMeal(){
    var menu = document.getElementById("menu");
    menu.style.display = "none";
    var dintable = document.getElementById("dinnerTable");
    dintable.style.display = "flex";
    var orderbtn = document.getElementById("orderbutton");
    orderbtn.style.display = "none";
    var nextbtn = document.getElementById("next");
    nextbtn.style.display = "flex";
    document.getElementById("main").style.backgroundColor = "transparent";
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    var foodvalues = [];
    var drinkvalues = [];
    var foodcheckboxes = document.querySelectorAll('input[type=checkbox]:checked.food');
    var drinkcheckboxes = document.querySelectorAll('input[type=checkbox]:checked.drink');
    var foodP = document.getElementById("plateP");
    for (let i = 0; i < foodcheckboxes.length; i++) {
	let td = document.createElement('td');
	foodvalues.push(foodcheckboxes[i].value);
	var image = document.createElement('img');
	image.setAttribute("src","./images/" + ItemPic[foodvalues[i]]);
	image.setAttribute("class","foodImg");
	td.appendChild(image);
	if(i <= 5){
	    let row1 = document.getElementById("row1");
	    row1.appendChild(td);
	}
	else if(i > 5 && i < 10){
	    let row2 = document.getElementById("row2");
	    row2.appendChild(td);
	}
	else if(i > 10){
	    let row3 = document.getElementById("row3");
	    row3.appendChild(td);
	}
    };

    /*
      The following code iterates over the drinkcheckboxes array, places the checked values into the drinkvalues array, then places the selected drinks onto the table above the plate.
    */
    var drinkP = document.getElementById("drinkPlacement");
    var bill = document.getElementById("billTable");
    //Loop to add drinkPics to table
    for (var i = 0; i < drinkcheckboxes.length; i++){
	drinkvalues.push(drinkcheckboxes[i].value);
	var td = document.createElement('td');
	var image = document.createElement('img');
	image.setAttribute("src","./images/" + DrinkPic[drinkvalues[i]]);
	image.setAttribute("class","drinkImg");
	td.appendChild(image);
	drinkP.appendChild(td);
    };
    //bill vars and creation
    var total = 0;
    for (let i = 0; i < drinkvalues.length; i++){
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var td2 = document.createElement('td');
	var name = document.createElement('p');
	var price = document.createElement('p');
	name.innerText = DrinkName[drinkvalues[i]];
	tr.appendChild(td);
	td.appendChild(name);
	if (i < drinkvalues.length)
	    price.innerText = "$" + DrinkPrice[drinkvalues[i]];
	total += DrinkPrice[drinkvalues[i]];
	tr.appendChild(td2);
	td2.appendChild(price);
	bill.appendChild(tr);
    }
    for (let i = 0; i < foodvalues.length; i++){
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var td2 = document.createElement('td');
	var name = document.createElement('p');
	var price = document.createElement('p');
	name.innerText = ItemName[foodvalues[i]];
	price.innerText ="$" + ItemPrice[foodvalues[i]];
	total += ItemPrice[foodvalues[i]];
	td.appendChild(name);
	td2.appendChild(price);
	tr.appendChild(td);
	tr.appendChild(td2);
	bill.appendChild(tr);
    }
    var subtotal = total;
    var tipAmount = total * 0.15;
    var tipAmountF = tipAmount.toFixed(2);
    var taxAmount = total * 0.07;
    var taxAmountF = taxAmount.toFixed(2);
    var trueTotal = subtotal + tipAmount + taxAmount;
    var trueTotalF = trueTotal.toFixed(2);
    var billHeadings = ["Subtotal","Tip","Tax","Total"];
    var billPrice = [subtotal,tipAmountF,taxAmountF,trueTotalF];

    for (let i = 0; i < billHeadings.length; i++){
	var tr = document.createElement('tr');
	var td = document.createElement('td');
	var td2 = document.createElement('td');
	var name = document.createElement('p');
	var price = document.createElement('p');
	bill.appendChild(tr);
	name.innerText = billHeadings[i];
	price.innerText = "$" + billPrice[i];
	td.appendChild(name);
	td2.appendChild(price);
	tr.appendChild(td);
	tr.appendChild(td2);
    }
    var next = document.getElementById("next");
}

function makeMenu(){
    var table = document.createElement('table');
    table.setAttribute("id","menuTable")
    document.getElementById("menu").appendChild(table);
    var i;
    for (i = 0; i < ItemName.length; i++){
	var tr = document.createElement('tr');
	table.appendChild(tr);
	var tdata = document.createElement('td');
	var inp = document.createElement('input');
	inp.setAttribute("type","checkbox");
	inp.setAttribute("value",i);
	inp.setAttribute("class","food")
	tdata.appendChild(inp);
	var para = document.createElement('p');
	para.setAttribute("class","itemName")
	var desc = document.createElement('p');
	var price = document.createElement('p');
	tdata.appendChild(para);
	tdata.appendChild(desc);
	tdata.appendChild(price);
	para.innerText = ItemName[i];
	desc.innerText = ItemDescription[i];
	price.innerText = ItemPrice[i];
	tr.appendChild(tdata);
	tr.setAttribute("class","menuRow");
	tdata.setAttribute("class","menuTdata");
    }
    var orderbtn = document.createElement('button');
    orderbtn.setAttribute("onclick","orderMeal()");
    orderbtn.setAttribute("id","orderbutton");
    orderbtn.innerText = "Order Meal";
    makeDrinksMenu();
    document.getElementById("menu").appendChild(orderbtn);
}

function makeButton(){
    var btn = document.createElement("button");
    btn.innerHTML = "Click Me!";
    document.getElementById("menu").appendChild(btn);
}

function makeDrinksMenu(){
    var menu = document.getElementById("menu");
    var drinkH = document.createElement('h3');
    drinkH.innerText = "Drinks Menu";
    menu.appendChild(drinkH);
    var drinkTab = document.createElement('table');
    drinkTab.setAttribute("id","drinkMenu");
    menu.appendChild(drinkTab);
    for (let i = 0; i < DrinkName.length; i++){
	var tr = document.createElement('tr');
	tr.setAttribute("class","drinkRow");
	var td = document.createElement('td');
	drinkTab.appendChild(tr);
	var inp = document.createElement('input');
	inp.setAttribute("type","checkbox");
	inp.setAttribute("value",i);
	inp.setAttribute("class","drink")
	var name = document.createElement('p');
	name.setAttribute("class","drinkName");
	var desc = document.createElement('p');
	var price = document.createElement('p');
	tr.appendChild(td);
	td.appendChild(inp);
	td.appendChild(name);
	name.innerText = DrinkName[i];
	td.appendChild(desc);
	desc.innerText = DrinkDescription[i];
	td.appendChild(price);
	price.innerText = DrinkPrice[i];
    }
}
