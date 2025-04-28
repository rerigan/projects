
const video = document.getElementById("background");
const video2 = document.getElementById("background2");
video2.addEventListener("ended", () => {
    setTimeout(() => {
        video2.currentTime = 0; // Reset to the start
        video2.play();
    }, 1000); // 1 second pause
});
video2.play();

video.addEventListener("ended", () => {
    setTimeout(() => {
        video.currentTime = 0; // Reset to the start
        video.play();
    }, 1000); // 1 second pause
});

// Start playing when page loads
video.play();
let elements = document.getElementsByClassName("buttons");

document
    .getElementById("themechange")
    .addEventListener("click", function () {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle("fundobotao");
        }

        document
            .getElementById("background2")
            .classList.toggle("backgroundchange");
        document
            .getElementsByClassName("buttons")
            .classList.toggle("fundobotao");
        document.getElementById("background").classList.toggle("hidden");
    });

function toggleHtmlClass() {
    document.documentElement.classList.toggle("light");
}
