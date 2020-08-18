/**
 * Created by Aakash_goyal on 18/08/2020.
 */
$(document).ready(function () {
    $("#button1").click(function () {
        $.ajax({
            type: "POST",
            url: "/home/GetShortURL",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            data: '{ "longUrl" : "' + $("#text1").val() + '" }',
            success: function (results) {
                $("#text2").val(results);
            },
            error: function (err) {
                alert(err.status + " - " + err.statusText);
            }
        });
    });
});
