$(document).ready(() => {
    for (let i = 1; i < 7; i++) {
        $('#randomButton' + i).click(() => {
            $('#homeValue' + i).val(Math.floor(Math.random() * 11));
            $('#awayValue' + i).val(Math.floor(Math.random() * 11));
            $('#saveButton' + i).click();
        });
    }

});