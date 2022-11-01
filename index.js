/*
$('li').on('click', function() {
    $(this).text('clicked!').delay(800).fadeOut(400);
});
*/

console.log($('a').attr('href'));

$('a').not('[href *= "my-domain.com"]').attr("target", "_blank");

$('button').on('click', function(){
    $('a').attr('href', 'https://www.github.com');
    console.log($('a').attr('href'));
});
