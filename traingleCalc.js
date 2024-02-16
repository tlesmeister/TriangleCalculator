//JavaScript Code
function triangleCalculator() {
    let height = document.getElementById('tbTriangleHeight').value;
    let width = document.getElementById('tbTriangleWidth').value;
    let triangleOutput = (height * width) / 2;
    let calcCalcTriangle = document.getElementById('triangleOutput');
    calcCalcTriangle.textContent = triangleOutput + ' is your total ';
}
