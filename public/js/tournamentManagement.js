$(document).ready(() => {
    for (let i = 1; i < 99; i++) {
        $('#randomButton' + i).click(() => {
            $('#homeValue' + i).val(Math.floor(Math.random() * 11));
            $('#awayValue' + i).val(Math.floor(Math.random() * 11));
            $('#saveButton' + i).click();
        });
    }

    for (let i = 1; i < 99; i++) {
        $('#deleteButton' + i).click(() => {
            $('#row' + i).remove();
            $.ajax({
                url: 'removematch',
                type: 'POST',
                data: {
                    num: i,
                }
            });
        });

    }

    $('#removeAllButton').click(() => {
        $.ajax({
            url: 'removeallmatches',
            type: 'POST'
        });
        $('#contentTable').remove();
    })

    $('#matchInput').css("visibility", "hidden");

    $('#addMatchButton').click(() => {
        if ($('#matchInput').css("visibility") == 'hidden') {
            $('#matchInput').css("visibility", "visible");
            $('#addMatchButton').css("visibility", "hidden");
        } else {
            $('#matchInput').css("visibility", "hidden");
        }
    })

    $('#insertMatch').click(() => {
        console.log($('#inputHome').val().toLowerCase());

        $.ajax({
            url: 'addmatch',
            type: 'POST',
            data: {
                home: $('#inputHome').val(),
                away: $('#inputAway').val(),
                homeResult: 0,
                awayResult: 0,
                homeImage: '/img/' + $('#inputHome').val().toLowerCase() + '.png',
                awayImage: '/img/' + $('#inputAway').val().toLowerCase() + '.png'
            },
            success: (data) => {
                location.reload();
            }
        });
        $('#matchInput').css("visibility", "hidden");
        $('#addMatchButton').css("visibility", "visible");
    })

    $('#cancelMatch').click(() => {
        $('#matchInput').css("visibility", "hidden");
        $('#addMatchButton').css("visibility", "visible");
    })

});