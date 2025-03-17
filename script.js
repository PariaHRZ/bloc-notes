document.addEventListener("DOMContentLoaded", function () {
    let note = document.getElementById("note");
    let exportBtn = document.getElementById("exportBtn");

    // Charger la note enregistrée si elle existe
    note.value = localStorage.getItem("savedNote") || "";

    // Sauvegarder la note à chaque modification
    note.addEventListener("input", function () {
        localStorage.setItem("savedNote", note.value);
    });

    // Fonction pour exporter en .txt
    exportBtn.addEventListener("click", function () {
        let textToSave = note.value;
        let blob = new Blob([textToSave], { type: "text/plain" });
        let link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "Ma_Note.txt";
        link.click();
    });
});
