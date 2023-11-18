document.addEventListener("DOMContentLoaded", function() {
    const counter = document.getElementById("counter");
    let count = 0;

    function updateCounter() {
        count++;
        counter.textContent = count;
    }

    setInterval(updateCounter, 1000); // Update the counter every second
});
