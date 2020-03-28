$(document).ready(() => {
    $('#readButton').click(() => {
        const requestURL = 'users/' + $('#nameBox').val();
        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType: 'json', // this URL returns data in JSON format
            success: (data) => {
                console.log('You received some data!', data);
                if (data.id && data.name && data.appearances && data.height && data.position) {
                    $('#status').html('Successfully fetched data at URL: ' + requestURL);
                    $('#updateIdBox').val(data.id);
                    $('#updateNameBox').val(data.name);
                    $('#updateAppBox').val(data.appearances);
                    $('#updateHeightBox').val(data.height);
                    $('#updatePosBox').val(data.position);
                    $('#updateDiv').css("visibility", "visible");
                } else {
                    $('#status').html('Error: could not find user at URL: ' + requestURL);
                    // clear the display
                    $('#updateNameBox').html(' ');
                    $('#updateAppBox').html(' ');
                    $('#updateHeightBox').html(' ');
                    $('#updatePosBox').html(' ');
                }
            },
        });
    });

    $('#allUsersButton').click(() => {
        $.ajax({
            url: 'users',
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                console.log('You received some data!', data);
                $('#status').html('All users: ' + data);
            },
        });
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
                $('#status').html(data.message);
                $('#insertNameBox').val(' ');
                $('#insertAppBox').val(' ');
                $('#insertHeightBox').val(' ');
                $('#insertPosBox').val(' ');
            }
        });
    });

    $('#deleteButton').click(() => {
        $.ajax({
            url: 'deluser',
            type: 'POST',
            data: {
                name: $('#nameBox').val()
            },
            success: (data) => {
                $('#status').html(data.message);
                $('#deleteNameBox').html(' ');
            }
        });

    });

    $('#updateButton').click(() => {
        $.ajax({
            url: 'updateById',
            type: 'POST',
            data: {
                id: $('#updateIdBox').val(),
                name: $('#updateNameBox').val(),
                appearances: $('#updateAppBox').val(),
                height: $('#updateHeightBox').val(),
                position: $('#updatePosBox').val(),
            },
            success: (data) => {
                $('#status').html(data.message);
                $('#updateIdBox').html(' ');
                $('#updateNameBox').html(' ');
                $('#updateAppBox').html(' ');
                $('#updateHeightBox').html(' ');
                $('#updatePosBox').html(' ');
                $('#updateDiv').css("visibility", "hidden");
                $('#nameBox').html(' ');
            }
        });
    });

    $(document).ajaxError(() => {
        $('#status').html('Error: unknown ajaxError!');
    });
});