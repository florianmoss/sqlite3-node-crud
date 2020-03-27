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
                if (data.name && data.appearances && data.height && data.position) {
                    $('#status').html('Successfully fetched data at URL: ' + requestURL);
                    $('#nameOut').html('My name is ' + data.name + '. ');
                    $('#appOut').html('I played ' + data.appearances + " games so far. ");
                    $('#heightOut').html('My height is ' + data.height + "cm. ");
                    $('#positionOut').html('My position is ' + data.position + ". ");
                    $('#nameBox').html(' ');

                } else {
                    $('#status').html('Error: could not find user at URL: ' + requestURL);
                    // clear the display
                    $('#nameOut').html(' ');
                    $('#appOut').html(' ');
                    $('#heightOut').html(' ');
                    $('#positionOut').html(' ');
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
            }
        });
    });

    $('#deleteButton').click(() => {
        $.ajax({
            url: 'deluser',
            type: 'POST',
            data: {
                name: $('#deleteNameBox').val()
            },
            success: (data) => {
                $('#status').html(data.message);
            }
        });
        $('#deleteNameBox').html(' ');
    });

    // define a generic Ajax error handler:
    // http://api.jquery.com/ajaxerror/
    $(document).ajaxError(() => {
        $('#status').html('Error: unknown ajaxError!');
    });
});