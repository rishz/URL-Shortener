/**
 * Created by rishabhshukla on 09/03/17.
 */
$(function () {
    // Hide the shortcode div initially
    $('#shortcode').hide(); 

    $('#submit').click(function () {
        var url = $('#url').val();
        
        // Ensure URL input is not empty
        if (url.trim() === "") {
            alert("Please enter a valid URL.");
            return;
        }
        
        // Send POST request to shorten the URL
        $.post('/api/v1/shorten', {
            url: url
        }, function (data) {
            // Create a short URL and update the content
            $('#shortcode').html("Short URL: " + '<a href="/' + data.shortcode + '">' + window.location.href + data.shortcode + '</a>');
            
            // Show the shortcode div only if data is available
            $('#shortcode').show();
        })
        .fail(function() {
            // Handle any errors
            alert("There was an error shortening the URL. Please try again.");
        });
    });
});
