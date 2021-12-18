import './bootstrap.bundle.min.js'

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

let firstItemShown = 1;
let lastItemShown = 4;
let leftArrow = document.querySelector('.bi-arrow-left-circle');
let rightArrow = document.querySelector('.bi-arrow-right-circle');

function leftMove() {
    if (firstItemShown == 1 && lastItemShown == 4) {
        console.log(firstItemShown);
        console.log("if")
        console.log(lastItemShown);
    } else {
        console.log(firstItemShown);
        console.log("hell")
        console.log(lastItemShown);
        $(document).ready(function () {
            $(".col-3.position-relative.last-item-shown").fadeOut();
        });

        var delayInMilliseconds = 100; //1 second
        setTimeout(function () {
            document.querySelector('.col-3.position-relative.last-item-shown').classList.remove('last-item-shown');
            lastItemShown--;
            document.querySelector(".horizontal-menu>div:nth-child(" + lastItemShown + ")").classList.add('last-item-shown');
            document.querySelector(".horizontal-menu>div:nth-child(" + firstItemShown + ")").classList.remove('first-item-shown');
            firstItemShown--;
            document.querySelector(".horizontal-menu>div:nth-child(" + firstItemShown + ")").classList.add('first-item-shown');
            console.log(document.querySelector(".horizontal-menu>div:nth-child(" + firstItemShown + ")"));
            $(document).ready(function () {
                $(".col-3.position-relative.first-item-shown").fadeIn();
            });
        }, delayInMilliseconds);

    }
}

function rightMove() {
    if (lastItemShown == 6) {
    } else {

        $(document).ready(function () {
            $(".col-3.position-relative.first-item-shown").fadeOut();

        });
        var delayInMilliseconds = 100; //1 second
        setTimeout(function () {
            document.querySelector('.col-3.position-relative.first-item-shown').classList.remove('first-item-shown');
            firstItemShown++;
            document.querySelector(".horizontal-menu>div:nth-child(" + firstItemShown + ")").classList.add('first-item-shown');
            document.querySelector(".horizontal-menu>div:nth-child(" + lastItemShown + ")").classList.remove('last-item-shown');
            lastItemShown++;
            document.querySelector(".horizontal-menu>div:nth-child(" + lastItemShown + ")").classList.add('last-item-shown');
            $(document).ready(function () {
                $(".col-3.position-relative.last-item-shown").fadeIn();
            });
        }, delayInMilliseconds);

    }
}
leftArrow.addEventListener("click", leftMove);
rightArrow.addEventListener("click", rightMove);