$(document).ready(() => {
    $('#readButton').click(() => {
        const requestURL = 'users/' + $('#nameBox').val();
        console.log('making ajax request to:', requestURL);

        $.ajax({
            // all URLs are relative to http://localhost:3000/
            url: requestURL,
            type: 'GET',
            dataType: 'json', // this URL returns data in JSON format
            success: (data) => {
                console.log('You received some data!', data);

                if (data.job && data.pet) {
                    $('#status').html('Successfully fetched data at URL: ' + requestURL);
                    $('#jobDiv').html('My job is ' + data.job);
                    $('#petImage').attr('src', 'img/' + data.pet).attr('width', '300px');
                } else {
                    $('#status').html('Error: could not find user at URL: ' + requestURL);
                    // clear the display
                    $('#jobDiv').html('');
                    $('#petImage').attr('src', '').attr('width', '0px');
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
            // all URLs are relative to http://localhost:3000/
            url: 'users',
            type: 'POST', // <-- this is POST, not GET
            data: {
                name: $('#insertNameBox').val(),
                job: $('#insertJobBox').val(),
                pet: $('#insertPetBox').val()
            },
            success: (data) => {
                $('#status').html(data.message);
            }
        });
    });

    $('#deleteButton').click(() => {
        console.log("deleteButton called.");
        $.ajax({
            url: 'deluser',
            type: 'POST',
            data: {
                name: $('#deleteNameBox').val()
            },
            success: (data) => {
                $('#status').html(data.message);
            }
        })

    });

    // define a generic Ajax error handler:
    // http://api.jquery.com/ajaxerror/
    $(document).ajaxError(() => {
        $('#status').html('Error: unknown ajaxError!');
    });
});