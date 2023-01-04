// var url = 'employee.php';
// var data = {
//     firstname: "Kingsley",
//     lastname : "Nweke"
// };
// var callback = function (response) {
//     // do something with the response
// };
// $.get(url, data, callback);



class Rectangle {
    constructor (_width, _height, _color ){
        console.log('the rectangle is being created')
        this.height = _width;
        this.width = _height;
        this.color = _color;
    }
}
    const rectangle = new Rectangle(3, 5, "blue");
