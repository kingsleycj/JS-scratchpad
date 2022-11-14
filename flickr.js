$(document).ready(function () {
    $('button').click(function (){
        $("button").removeClass("selected");
        $(this).addClass("selected");
        var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        var animals = $(this).text();
        var flickrOptions = {
            tags: animals,
            format: "json"
        };
        function displayPhotos (data) {
            var photoHTML = "<ul>";
            $.each(array, function(i, item) {
                
            });
        }
        $.getJSON(flickrAPI,flickrOptions, displayPhotos);
    });
}); //end ready
