// detecting button press

var numberOfDrumButtons = document.querySelectorAll(".drum").length;
console.log(numberOfDrumButtons)

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });

}

// detecting keybord press

document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);

});



function makeSound(key) {

    switch (key) {

        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        default:

    }


}



function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");


    setTimeout(function () {
        activeButton.classList.remove("pressed");

    }, 100);
}


// --------- My additional features ---------

// ✅ Prevent double-tap zoom (extra safety for iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = new Date().getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Optional: prevent pinch zoom
document.addEventListener('gesturestart', e => e.preventDefault());

// ✅ Fullscreen toggle
const fullscreenBtn = document.getElementById('fullscreenBtn');
fullscreenBtn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting fullscreen: ${err.message}`);
        });
        fullscreenBtn.textContent = "Exit Fullscreen";
    } else {
        document.exitFullscreen();
        fullscreenBtn.textContent = "Enter Fullscreen";
    }
});

// ✅ Landscape orientation lock (only works in fullscreen on mobile)
const landscapeBtn = document.getElementById('landscapeBtn');
landscapeBtn.addEventListener('click', async () => {
    try {
        if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock("landscape");
            alert("Switched to landscape!");
        } else {
            alert("Orientation lock not supported on this device.");
        }
    } catch (err) {
        alert("Landscape lock failed: " + err.message);
    }
});