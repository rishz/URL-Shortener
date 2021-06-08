/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Baccha URL: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        })
    })
})