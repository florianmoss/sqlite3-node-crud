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

    $.ajax({
        url: 'playerscores',
        type: 'GET',
        dataType: 'json',
        success: (result) => {
            let keySet = new Set();
            let totalValues = {};
            result.forEach(el => {
                let d = JSON.parse(el['data']);
                for (key in d) {
                    keySet.add(key);
                }
            });
            const keys = [...keySet];

            for (i in keys) {
                totalValues[keys[i]] = 0;
            }

            result.forEach(el => {
                let d = JSON.parse(el['data']);
                for (key in d) {
                    totalValues[key] += parseInt(d[key]);
                }
            });

            for (key in totalValues) {
                $('#goals' + key).text(totalValues[key])
            }

            console.log(totalValues);





            $('#playerScores').text(result[0].data);
        }
    });
});