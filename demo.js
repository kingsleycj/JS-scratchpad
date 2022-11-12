var url = 'employee.php';
var data = {
    firstname: "Kingsley",
    lastname : "Nweke"
};
var callback = function (response) {
    // do something with the response
};
$.get(url, data, callback);

