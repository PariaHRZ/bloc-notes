document.addEventListener("DOMContentLoaded", function () {
    let note = document.getElementById("note");
    let boutonexport = document.getElementById("boutonexport");

    // chargement de la note en local
    note.value = localStorage.getItem("savedNote") || "";

    // sauvgarde en local
    note.addEventListener("input", function () {
        localStorage.setItem("savedNote", note.value);
    });

    // exportation
    boutonexport.addEventListener("click", function () {
        let textToSave = note.value;
        let blob = new Blob([textToSave], { type: "text/plain" });
        let link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "Note.txt";
        link.click();
    });
});