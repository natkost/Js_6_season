$(document).ready(function () {
    $("#btnTrigger").on('click', function () {
        $("#loading-bro").show();
        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {sentence: $("#boxArea").val()}, // Additional parameters here
            datatype: 'json',
            success: function (data) {
                $("#loading-bro").hide();
                alert(data);
            },
            error: function (err) {
                $("#loading-bro").hide();
                alert('Something went wrong');
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "MXEjIWfQmOmshh33Fh8IENN7oU7up14GWbGjsn71It7mRvRCGp"); // Enter here your Mashape key
            }
        });

    });
});
