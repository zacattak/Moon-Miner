let clickUpgrades = [
    {
        name: 'pickaxe',
        price: 100,
        quantity: 0,
        multiplier: 10
    }
    ,
    {
        name: 'spoon',
        price: 20,
        quantity: 0,
        multiplier: 5
    }
    ,
    {
        name: 'spork',
        price: 1,
        quantity: 0,
        multiplier: 2
    }
];

let automaticUpgrades = [
    {
        name: 'robot-mouse',
        price: 50,
        quantity: 0,
        multiplier: 20
    }
];



let cheese = 0


function drawCheese() {
    document.getElementById("totalCheese").innerText = cheese
    console.log('cheese', cheese);
}

function mine() {
    let clickTotal = 0

    // calculateClick()

    // const multiplier = calculateClick()

    // let clickTotal = 0

    // for (let i = 0; i < clickUpgrades.length; i++) {
    //     const upgrade = clickUpgrades[i];
    //     clickTotal += upgrade.multiplier * upgrade.quantity;
    // }

    clickUpgrades.forEach(upgrade => {
        clickTotal += upgrade.multiplier * upgrade.quantity;
    });



    cheese += 1 + clickTotal
    const totalCheese = cheese + clickTotal;

    // document.getElementById("totalCheese").innerText = totalCheese;
    drawCheese()

}



// function calculateClick() {
//     let clickTotal = 0;

//     for (let i = 0; i < clickUpgrades.length; i++) {
//         const upgrade = clickUpgrades[i];
//         clickTotal += upgrade.multiplier * upgrade.quantity;
//     }
//     console.log('click total', clickTotal);

// }







function buyPickaxe() {

    const axe = clickUpgrades.find(clickUpgrades => clickUpgrades.name == 'pickaxe')
    console.log('pickaxe', axe);

    if (cheese >= axe.price) { axe.quantity++; cheese -= axe.price; axe.price += 10 }

    else console.log('Not enough cheese!')

    document.getElementById("axe").innerText = axe.quantity

    // calculateClick()

    drawCheese()

}


function buySpoon() {

    const spoons = clickUpgrades.find(clickUpgrades => clickUpgrades.name == 'spoon')
    console.log('spoons', spoons);

    if (cheese >= spoons.price) { spoons.quantity++; cheese -= spoons.price; spoons.price += 7 }

    else console.log('Not enough cheese!')

    document.getElementById("spoons").innerText = spoons.quantity

    // calculateClick()

    drawCheese()

}



function buySpork() {

    const sporks = clickUpgrades.find(clickUpgrades => clickUpgrades.name == 'spork')
    console.log('sporks', sporks);

    if (cheese >= sporks.price) { sporks.quantity++; cheese -= sporks.price; sporks.price += 5 }

    else console.log('Not enough cheese!')

    document.getElementById("sporks").innerText = sporks.quantity

    // calculateClick()

    drawCheese()

}


function buyRobotMouse() {

    const robotMice = automaticUpgrades.find(automaticUpgrades => automaticUpgrades.name == 'robot-mouse')
    console.log('robot-mouse', robotMice);

    if (cheese >= robotMice.price) { robotMice.quantity++; cheese -= robotMice.price += 20 }

    else console.log('Not enough cheese!')

    document.getElementById("robotMice").innerText = robotMice.quantity

    // calculateClick()

    drawCheese()

}



function collectAutoUpgrades() {

    const robotMice = automaticUpgrades.find(automaticUpgrades => automaticUpgrades.name == 'robot-mouse')
    if (robotMice.quantity >= 1) { cheese += 20 * robotMice.quantity }
    else console.log('no mice!')
    drawCheese()

}

// calculateClick()
setInterval(collectAutoUpgrades, 3000);
drawCheese()


