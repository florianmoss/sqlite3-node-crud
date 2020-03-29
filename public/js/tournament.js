$(document).ready(() => {

    let size = $(".resultPadding").toArray().length;

    for (let i = 0; i < size; i += 2) {
        if ($(".resultPadding").eq(i).text() > $(".resultPadding").eq(i + 1).text()) {
            $(".resultPadding").eq(i).addClass('badge-success');
            $(".resultPadding").eq(i + 1).addClass('badge-danger');
        } else {
            $(".resultPadding").eq(i).addClass('badge-danger');
            $(".resultPadding").eq(i + 1).addClass('badge-success');
        }
    }
});