function getArea(length, width){
    let area = length * width,
    result = document.getElementById("result1");
    result.innerText = area;
    return area;
}
getArea(3, 4.5);

function getPerimeter(length, width) {
    let perimeter = 2*(length + width),
        result = document.getElementById("result2");
        result.innerText = perimeter;
    return perimeter
}
getPerimeter(3, 4.5);