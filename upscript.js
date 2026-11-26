let currentMenu = 0;

let menus = [
    // SLIDE 1: MAIN COURSES
    `
    <h1>MAIN COURSES</h1>

    <div class="food-item">
        <img src="images/fruit_sandos.png">
        <div class="food-info">
            <h2>Fruit Sandos</h2>
            <p>A sandwich with fresh fruit and whipped cream in the middle.</p>
            <p>₱50</p>
        </div>
    </div>

    <div class="food-item reverse">
        <img src="images/omurice.png">
        <div class="food-info">
            <h2>Omurice</h2>
            <p>Savory fried rice topped with a soft, fluffy omelette.</p>
            <p>₱55</p>
        </div>
    </div>
    `,

    // SLIDE 2: SIDE DISHES
    `
    <h1>SIDE DISHES</h1>

    <div class="food-item">
        <img src="images/bunny_apples.png">
        <div class="food-info">
            <h2>Bunny Apples</h2>
            <p>-Apple slices cut into a shape resembling bunnies.</p>
            <p>₱129</p>
        </div>
    </div>

    <div class="food-item reverse">
        <img src="images/octopus_sausages.png">
        <div class="food-info">
            <h2>Octopus Sausages</h2>
            <p>-Sausages cut into the shape of octopi with sesame seeds.</p>
            <p>₱150</p>
        </div>
    </div>
    `,

    // SLIDE 3: DESSERTS
    `
    <h1>DESSERTS</h1>

    <div class="food-item">
        <img src="images/flan.png">
        <div class="food-info">
            <h2>Flan</h2>
            <p>-A delicacy with a smooth custard baseand caramel top.</p>
            <p>₱120</p>
        </div>
    </div>

    <div class="food-item reverse">
        <img src="images/mochi.png">
        <div class="food-info">
            <h2>Mochi</h2>
            <p>-A chewy delight with ice cream in the middle.</p>
            <p>₱120</p>
        </div>
    </div>
    `,

    // SLIDE 4: DRINKS
    `
    <h1>DRINKS</h1>

    <div class="food-item">
        <img src="images/ramune.png">
        <div class="food-info">
            <h2>Ramune</h2>
            <p>-A drink with carbonated soda and sugar.</p>
            <p>₱60</p>
        </div>
    </div>

    <div class="food-item reverse">
        <img src="images/strawberry_milk.png">
        <div class="food-info">
            <h2>Strawberry Milk</h2>
            <p>-A drink with fresh strawberries and sweet milk.</p>
            <p>₱50</p>
        </div>
    </div>
    `
];

function showMenu() {
    document.getElementById("menu").innerHTML = menus[currentMenu];
}

function nextMenu() {
    if (currentMenu < menus.length - 1) {
        currentMenu++;
        showMenu();
    }
}

function previousMenu() {
    if (currentMenu > 0) {
        currentMenu--;
        showMenu();
    }
}

showMenu();