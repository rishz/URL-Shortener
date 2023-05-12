/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    console.log('my first change');
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Short URL: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        })
    })
})