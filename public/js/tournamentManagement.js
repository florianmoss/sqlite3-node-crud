$(document).ready(() => {
    for (let i = 1; i < 7; i++) {
        $('#randomButton' + i).click(() => {
            $('#homeValue' + i).val(Math.floor(Math.random() * 11));
            $('#awayValue' + i).val(Math.floor(Math.random() * 11));
            $('#saveButton' + i).click();
        });
    }

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
        $('#matchInput').css("visibility", "hidden");
        $('#addMatchButton').css("visibility", "visible");
    })

    $('#cancelMatch').click(() => {
        $('#matchInput').css("visibility", "hidden");
        $('#addMatchButton').css("visibility", "visible");
    })

});