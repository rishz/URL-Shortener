/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/shorturl/new', {
            url:url
        },function (data) {
            $('#shortcode').html("Short URL: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        })
    })
})