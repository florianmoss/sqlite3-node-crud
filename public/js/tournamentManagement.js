$(document).ready(() => {
    const maxVal = 999;
    let availablePoints;
    let pla;

    pla = $.ajax({
        url: 'users',
        async: false,
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            pla = Array.from(data);
        }
    }).responseJSON;
    console.log(pla);

    for (let i = 1; i < maxVal; i++) {
        $('#randomButton' + i).click(() => {
            $('#homeValue' + i).val(Math.floor(Math.random() * 11));
            $('#awayValue' + i).val(Math.floor(Math.random() * 11));
            $('#saveButton' + i).click();
        });

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

            if (h == 'lyit') {
                availablePoints = $('#homeValue' + i).val();
            } else if (a == 'lyit') {
                availablePoints = $('#awayValue' + i).val();
            } else {
                //$('#extra' + i).remove();
                $('#collapse' + i).html('<div class="h6 mb-4 text-center">Not a LYIT match.</div>');
            }
            console.log(availablePoints);
            console.log(i);

        });

        pla.forEach(el => {
            $('#scoreMinus' + i + el).click(() => {
                let v = parseInt($('#scoreCard' + i + el).text()) - 1;
                if (v >= 0) {
                    $('#scoreCard' + i + el).text(v);
                    availablePoints++;
                }

            });

            $('#scorePlus' + i + el).click(() => {
                let v = parseInt($('#scoreCard' + i + el).text()) + 1;
                if (availablePoints > 0) {
                    $('#scoreCard' + i + el).text(v);
                    availablePoints--;
                }

            });
        });

        $('#updatePlayerScores' + i).click(() => {
            let arr = {};
            pla.forEach(el => {
                arr[el] = $('#scoreCard' + i + el).text().trim();
            });
            $.ajax({
                url: 'addplayerscores',
                type: 'POST',
                data: {
                    data: JSON.stringify(arr),
                    num: i,
                },
                success: (data) => {
                    $('#extraBtn' + i).click();
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