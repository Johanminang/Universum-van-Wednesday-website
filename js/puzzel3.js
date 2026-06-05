const deuren = document.querySelectorAll(".door");

deuren.forEach((deur) => {

    deur.addEventListener("click", () => {

        const nummer = deur.textContent.trim();

        if (nummer === "3") {
            document.getElementById("popup").classList.remove("hidden");
        } else {
            document.getElementById("wrongPopup").classList.remove("hidden");
        }

    });

});

document.getElementById("verderBtn").addEventListener("click", () => {

    window.location.href = "puzzel4.html";

});

document.getElementById("opnieuwBtn").addEventListener("click", () => {

    document.getElementById("wrongPopup").classList.add("hidden");

});