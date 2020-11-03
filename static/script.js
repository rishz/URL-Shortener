/**
 * Created by rishabhshukla on 09/03/17.
 */
function myfunct(){
   /* Select the text field */
   copyText.select();
   copyText.setSelectionRange(0, 99999); /*For mobile devices*/
 
   /* Copy the text inside the text field */
   document.execCommand("copy");
 
   /* Alert the copied text */
   alert("Copied the text: " + copyText.value);
}
$(function () {
    $('#submit').click(function () {
        var url = $('#url').val();
        $.post('/api/v1/shorten', {
            url:url
        },function (data) {
            $('#shortcode').html("Short URL: " + '<a href="/' + data + '">'+window.location.href+data + '</a>');
            var copyText= window.location.href+data;
            myfunct(); 
        })
    })
})