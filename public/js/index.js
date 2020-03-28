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

    let size = $(".positional").toArray().length;
    console.log(size);

    let positions = ['bottom-left', 'top-left', 'top-right', 'bottom-right', 'centered'];
    for (let i = 0; i < size; i++) {
        $(".positional").eq(i).addClass(positions[i]);
    }
});