const nextBtn = document.querySelector(".next-btn");

nextBtn.addEventListener("click", () => {

    const letters = document.querySelectorAll(".code-input");

    const code =
        letters[0].value.toUpperCase() +
        letters[1].value.toUpperCase() +
        letters[2].value.toUpperCase() +
        letters[3].value.toUpperCase();

    if (code === "DARK") {

        window.location.href = "eindscherm.html";

    } else {

        document.getElementById("wrongPopup").classList.remove("hidden");

    }

});

document.getElementById("opnieuwBtn").addEventListener("click", () => {

    document.getElementById("wrongPopup").classList.add("hidden");

    document.querySelectorAll(".code-input").forEach(input => {
        input.value = "";
    });

    document.querySelector(".code-input").focus();

});