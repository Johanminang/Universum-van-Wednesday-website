const hotspots = document.querySelectorAll(".hotspot");
const progress = document.querySelector(".progress");

let gevonden = 0;
const totaal = hotspots.length;

hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {

        if (hotspot.classList.contains("gevonden")) {
            return;
        }

        hotspot.classList.add("gevonden");
        gevonden++;

        progress.textContent = `Bewijsstukken: ${gevonden}/${totaal}`;

        if (gevonden === totaal) {
            progress.textContent = "Alle bewijsstukken gevonden!";

            document.getElementById("popup").classList.remove("hidden");
        }
    });
});

document.getElementById("verderBtn").addEventListener("click", () => {
    window.location.href = "Puzzel2.html";
});