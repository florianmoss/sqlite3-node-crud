$(document).ready(() => {
    let nums = [];
    $.ajax({
        url: 'usersid',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            nums = Array.from(data);
            nums.forEach(el => {
                $('#posBox' + el).val($('#posHeld' + el + " p").text());
            });
        }
    });



    $('#addPlayer').click(() => {
        $('#addPlayerContainer').css("visibility", "visible");
        $('#addPlayer').css("visibility", "hidden");
    });

    $('#insertButton').click(() => {
        $.ajax({
            url: 'users',
            type: 'POST',
            data: {
                name: $('#insertNameBox').val(),
                appearances: $('#insertAppBox').val(),
                height: $('#insertHeightBox').val(),
                position: $('#insertPosBox').val(),
            },
            success: (data) => {
                location.reload();
            }
        });

        $.ajax({
            url: 'users',
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                let size = Array.from(data).length;
                if (size < 9) {
                    $('#addPlayer').css("visibility", "visible");
                } else {
                    $('#addPlayer').css("visibility", "hidden");
                }
            }
        });

    });

    $('#delButton').click(() => {
        if ($('#addPlayerContainer').css("visibility") == 'hidden') {
            $('#addPlayer').css("visibility", "visible");
        }
    });

    $('#submitButton').click(() => {
        $.ajax({
            url: 'usersall',
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log("usersall");
                console.log(data);
            },
        });
    });


    // $(document).ajaxError(() => {
    //     $('#status').html('Error: unknown ajaxError!');
    // });
});