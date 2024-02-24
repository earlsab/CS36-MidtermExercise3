// EARLAN JOSH Q. SABILLANO
// SUBMITTED FOR COMPSCI36

const PI = 3.141592653589793238462643;
function functionTest() {
    var rad;
    rad = document.getElementById("radius").value;
    dia = calculateDiameter(rad);
    area = calculateArea(rad);
    cir = calculateCircumference(rad);

    // Correct Case
    if (rad > 0)
    {
        document.getElementById("results").innerHTML = `
        <div>   
        <h1>Results</h1>
        <h4>Diameter</h4>
        <p id="dia"></p>
        <h4>Area</h4>
        <p id="area"></p>
        <h4>Circumference</h4>
        <p id="cir"></p>
        </div>
        `
        document.getElementById("dia").innerHTML = dia;
        document.getElementById("area").innerHTML = area;
        document.getElementById("cir").innerHTML = cir;
    } 
    
    // Error Cases
    else if (rad < 0) {
        document.getElementById("results").innerHTML = `
        <div>   
        <h1>ERROR: Radius cannot be a negative number.</h1>
        </div>
        `
    } else {
        document.getElementById("results").innerHTML = `
        <div>   
        <h1>ERROR: Value is required.</h1>
        </div>
        `
    }
}

function calculateDiameter(rad) {
    return rad * 2;
}
function calculateArea(rad) {
    return PI * rad * rad;
}
function calculateCircumference(rad) {
    return 2 * PI * rad;
}
