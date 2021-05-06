/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
         var x = Math.floor(Math.random()*256);
         var y = Math.floor(Math.random()*256);
         var z = Math.floor(Math.random()*256);
         var bgColor = "rgb(" + x + "," + y + "," + z + ")";
         console.log(bgColor);
         document.body.style.background = bgColor;
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Short URL: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        },)
    })
})
