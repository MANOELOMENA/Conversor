function convertPraFah() {
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").innerText = fahrenheit.toFixed(2);
}