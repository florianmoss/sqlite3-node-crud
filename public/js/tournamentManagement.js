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
            $('#extra' + i).remove();
            $.ajax({
                url: 'removematch',
                type: 'POST',
                data: {
                    num: i,
                }
            });
        });
    }

    for (let i = 1; i < 99; i++) {
        $('#extraBtn' + i).click(() => {
            if ($('#extraBtnIcon' + i).hasClass('fa-angle-down')) {
                $('#extraBtnIcon' + i).removeClass('fa-angle-down');
                $('#extraBtnIcon' + i).addClass('fa-angle-up');
            } else {
                $('#extraBtnIcon' + i).removeClass('fa-angle-up');
                $('#extraBtnIcon' + i).addClass('fa-angle-down');
            }

            let h = $('#extraBtn' + i).parent().parent().siblings("#row" + i).children().eq(0).children().eq(0).attr('src');
            let a = $('#extraBtn' + i).parent().parent().siblings("#row" + i).children().eq(2).children().eq(0).attr('src');

            h = h.slice(5, h.length).split('.')[0];
            a = a.slice(5, a.length).split('.')[0];

            if (h == 'lyit' || a == 'lyit') {

            } else {
                //$('#extra' + i).remove();
                $('#collapse' + i).html('<div class="h6 mb-4 text-center">Not a LYIT match.</div>');
            }
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