// const hero = document.querySelector(".hero");
// let heroX = 0;
// let heroY = 0;
// const speed = 50;
// let heroSize = 100;
// const toIncrease = 50;

// const count = document.querySelector(".count");
// let score = 0;

// const food = document.createElement("div");
// food.classList.add("food");
// document.body.append(food);
// const foodSize = 50;

// let foodX = getRandom(0, window.innerWidth - 50);
// let foodY = getRandom(0, window.innerHeight - 50);

// food.style.left = foodX + "px";
// food.style.top = foodY + "px";

// function getRandom(min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function foodRandom() {
//     foodX = getRandom(0, window.innerWidth - 50);
//     foodY = getRandom(0, window.innerHeight - 50);

//     if (
//         heroX + heroSize >= foodX &&
//         foodX + foodSize >= heroX &&
//         heroY + heroSize >= foodY &&
//         foodY + foodSize >= heroY
//     ) {
//         foodRandom();
//     } else {
//         food.style.left = foodX + "px";
//         food.style.top = foodY + "px";
//     }
// }

// window.addEventListener("keydown", function (event) {
//     console.log(event.key);
//     if (event.key === "d") {
//         heroX += speed;
//         hero.style.left = heroX + "px";
//     }
//     if (event.key === "a") {
//         heroX -= speed;
//         hero.style.left = heroX + "px";
//     }
//     if (event.key === "s") {
//         heroY += speed;
//         hero.style.top = heroY + "px";
//     }
//     if (event.key === "w") {
//         heroY -= speed;
//         hero.style.top = heroY + "px";
//     }
//     if (
//         heroX + heroSize >= foodX &&
//         foodX + foodSize >= heroX &&
//         heroY + heroSize >= foodY &&
//         foodY + foodSize >= heroY
//     ) {
//         foodRandom();
//         score++;
//         count.innerHTML = `Eaten count:  ${score}`;

//         if (score % 2 === 0) {
//             heroSize += toIncrease;
//             hero.style.width = heroSize + "px";
//             hero.style.height = heroSize + "px";
//         }
//     }
// });
const hero = document.querySelector(".hero");
let heroX = 0;
let heroY = 0;
const speed = 50;
let heroSize = 100;
const toIncrease = 50;

const count = document.querySelector(".count");
let score = 0;

const food = document.createElement("div");
food.classList.add("food");
document.body.append(food);
const foodSize = 50;

let foodX = getRandom(0, window.innerWidth - 50);
let foodY = getRandom(0, window.innerHeight - 50);

food.style.left = foodX + "px";
food.style.top = foodY + "px";

// Create a cactus element
const cactus = document.createElement("div");
cactus.classList.add("cactus");
document.body.append(cactus);
const cactusSize = 80;

let cactusX = getRandom(0, window.innerWidth - 80);
let cactusY = getRandom(0, window.innerHeight - 80);

cactus.style.left = cactusX + "px";
cactus.style.top = cactusY + "px";

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function foodRandom() {
    foodX = getRandom(0, window.innerWidth - 50);
    foodY = getRandom(0, window.innerHeight - 50);

    if (
        (heroX + heroSize >= foodX &&
            foodX + foodSize >= heroX &&
            heroY + heroSize >= foodY &&
            foodY + foodSize >= heroY) ||
        (heroX + heroSize >= cactusX &&
            cactusX + cactusSize >= heroX &&
            heroY + heroSize >= cactusY &&
            cactusY + cactusSize >= heroY)
    ) {
        foodRandom();
    } else {
        food.style.left = foodX + "px";
        food.style.top = foodY + "px";
    }
}

window.addEventListener("keydown", function (event) {
    console.log(event.key);
    if (event.key === "d") {
        heroX += speed;
        hero.style.left = heroX + "px";
    }
    if (event.key === "a") {
        heroX -= speed;
        hero.style.left = heroX + "px";
    }
    if (event.key === "s") {
        heroY += speed;
        hero.style.top = heroY + "px";
    }
    if (event.key === "w") {
        heroY -= speed;
        hero.style.top = heroY + "px";
    }

    // Check for collision with food
    if (
        heroX + heroSize >= foodX &&
        foodX + foodSize >= heroX &&
        heroY + heroSize >= foodY &&
        foodY + foodSize >= heroY
    ) {
        foodRandom();
        score++;
        count.innerHTML = `Eaten count:  ${score}`;

        if (score % 2 === 0) {
            heroSize += toIncrease;
            hero.style.width = heroSize + "px";
            hero.style.height = heroSize + "px";
        }
    }

    if (
        heroX + heroSize >= cactusX &&
        cactusX + cactusSize >= heroX &&
        heroY + heroSize >= cactusY &&
        cactusY + cactusSize >= heroY
    ) {
        alert("Game Over! You collided with a cactus.");
    }
});
