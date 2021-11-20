/**
 * Created by Subhraneel on 20/11/21.
 */
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Shorten URL : " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
        })
    })
})