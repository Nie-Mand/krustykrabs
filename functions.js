/*common foodd bloc*/
const foodcontainer = document.getElementById("common-food");
let i;
let foodpic = [
    `<img src="img/rglrburger.png" />`,
    `<img src="img/classicchickenburger.png" />`,
    `<img src="img/pizzargl.png" />`,
    `<img src="img/sand.png"  />`,
    `<img src="img/salad.png"  />`,
    `<img src="img/icecream.png"  />`,
];
let foodtitle = [
    `Regular Burger`,
    `Chicken Burger`,
    `Pizza`,
    `Sandwich`,
    `Salad`,
    `IceCream`
];
let dollarsign = `<i class="fa fa-usd" aria-hidden="true"></i>`;
let foodprice = [
    `12.00 ${dollarsign}`,
    `08.00 ${dollarsign}`,
    `27.00 ${dollarsign}`,
    `11.50 ${dollarsign}`,
    `03.30 ${dollarsign}`,
    `25.00 ${dollarsign}`
];
for(i = 0;i<6;i++ ){
    foodcontainer.innerHTML += `
    <div class="foodcard">
        ${foodpic[i]}
        <br/>
        <b>${foodtitle[i]}</b>
        <p>${foodprice[i]}</p>
        <button class="orderbtn">Order ${foodtitle[i]}</button>
    </div>
    `;
    if (i === 2){
        foodcontainer.innerHTML += "<br/><br/>";
    }
}

window.addEventListener('contextmenu', function (e) { 
    // do something here... 
    e.preventDefault(); 
  }, false);




  (function (global) {

    if(typeof (global) === "undefined") {
        throw new Error("window is undefined");
    }
    var _hash = "!";
    var noBackPlease = function () {
        global.location.href += "#";

        // Making sure we have the fruit available for juice (^__^)
        global.setTimeout(function () {
            global.location.href += "!";
        }, 50);
    };

    global.onhashchange = function () {
        if (global.location.hash !== _hash) {
            global.location.hash = _hash;
        }
    };



    global.onload = function () {
        noBackPlease();

        // Disables backspace on page except on input fields and textarea..
        document.body.onkeydown = function (e) {
            var elm = e.target.nodeName.toLowerCase();
            if (e.which === 8 && (elm !== 'input' && elm  !== 'textarea')) {
                e.preventDefault();
            }
            // Stopping the event bubbling up the DOM tree...
            e.stopPropagation();
        };
    }
})(window);


document.body.addEventListener('keydown', event => {
    if (event.ctrlKey && 'cvxspwuaz'.indexOf(event.key) !== -1) {
      event.preventDefault()
    }
  })

  

  

/*jQuery Code*/
$(document).ready(function(){
    $(".nv").click(function(){
        $(".navbar").slideToggle();

    })
    $(".close").click(function(){
        $(".navbar").slideToggle();
    })
    
})

