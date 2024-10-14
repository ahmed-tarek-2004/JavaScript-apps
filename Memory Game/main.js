document.querySelector(".control-buttons span").onclick = ()=> {
    let name = prompt("Enter Your Name Please");
    if (name == "" || name == null) {
        document.querySelector(".info-container .name span").innerHTML="Unknown";
    }
    else {
        document.querySelector(".info-container .name span").innerHTML=name;
    }
    document.querySelector(".control-buttons").remove();
}
let duration = 1000;
let game_Content = document.querySelector(".game-content");
let block = [...game_Content.children];
let order = [...Array(block.length).keys()];
console.log(block)
shuffle(order)
console.log(order)
let count = 0;
let target1;
let target12;
let trial = 0;
block.forEach((Element, index) => {
    Element.style.order = order[index];
    Element.addEventListener('click', () => {
        Element.classList += ' isflipped';
        if (count === 0) target1 = Element;
        else target12 = Element;
        console.log(Element.classList);
        count++;
        if (count == 2) {
            if (target1.dataset.tech === target12.dataset.tech) {
                console.log("YEs");
            }
            else {
                setTimeout(() => {
                    console.log("NO");
                    target1.classList.remove("isflipped");
                    target12.classList.remove("isflipped");
                    trial++;
                    let wrong = document.querySelector(".trial span");
                    // wrong.innerHTML=trial;
                    console.log(trial)
                    wrong.innerHTML = trial;
                }, duration);
            }
            count = 0;
        }
    })
});


function shuffle(order) {
    let current = order.length;
    let temp;
    let Rand;
    while (current > 0) {
        Rand = Math.floor(Math.random() * current);
        current--;
        temp = order[current];
        order[current] = order[Rand];
        order[Rand] = temp;
    }
    return order;
}