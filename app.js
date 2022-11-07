/*
$('div').on('click', function() {
    $('#one').empty();
    $("#two").remove();
});
*/

var students = [
    { name: "john" }, 
    { name: "kareema"},
    {name: "doreen" }
];

students.forEach(function(student){
    console.log(student.name);
});

$('p').parent('#two').css('background-color', 'lightblue').css('color', 'white')

$('button[disabled]').next().text('This Button is disabled!')
