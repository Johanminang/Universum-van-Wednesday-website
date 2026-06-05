const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", () => {

    const antwoorden = document.querySelectorAll(".answer");

    const invoer =
        antwoorden[0].value.toUpperCase() +
        antwoorden[1].value.toUpperCase() +
        antwoorden[2].value.toUpperCase() +
        antwoorden[3].value.toUpperCase();

    if (invoer === "VOID") {
        document.getElementById("popup").classList.remove("hidden");
    } else {
        document.getElementById("wrongPopup").classList.remove("hidden");
    }
});

document.getElementById("verderBtn").addEventListener("click", () => {
    window.location.href = "Image_AR.html";
});

document.getElementById("opnieuwBtn").addEventListener("click", () => {
    document.getElementById("wrongPopup").classList.add("hidden");
});