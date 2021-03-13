window.onload = function () {
    let tlacitko = document.getElementById("tlacitko");
    let cislo1 = document.getElementById("cislo1");
    let cislo2 = document.getElementById("cislo2");

    tlacitko.onclick = function () {
        alert(parseInt(cislo1.value) + parseInt(cislo2.value));
    };
}