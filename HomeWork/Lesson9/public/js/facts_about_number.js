$(document).ready(function () {
    $("#submit").on('click', function () {
        $("#loading-bro").show();
        $.ajax({
            url: 'https://numbersapi.p.mashape.com/random/trivia',
            type: 'GET',
            data: { fragment: 'true',
                    max: $("#number").val(),
                    min: $("#number").val()
                    },
            datatype: 'json',
            success: function (data) {
                $("#loading-bro").hide();
                alert($("#number").val() + ' - ' +data);
            },
            error: function (err) {
                $("#loading-bro").hide();
                alert('Something went wrong');
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "MXEjIWfQmOmshh33Fh8IENN7oU7up14GWbGjsn71It7mRvRCGp");
            }
        });

    });
});
