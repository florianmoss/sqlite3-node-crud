$(document).ready(() => {
    function randomArrayShuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    let nums = [];
    $.ajax({
        url: 'usersid',
        type: 'GET',
        dataType: 'json',
        success: (data) => {
            nums = Array.from(data);
        }
    });

    $('#shuffleButton').click(() => {
        console.log('click');
        console.log(nums.length);

        if (nums.length < 6) {
            $.ajax({
                url: 'shuffleTeam',
                type: 'POST',
                data: {
                    playing: nums,
                    notPlaying: [-1],
                }
            });
        } else {
            newArray = randomArrayShuffle(nums);
            playing = newArray.slice(0, 5);
            notPlaying = newArray.slice(5)
            $.ajax({
                url: 'shuffleTeam',
                type: 'POST',
                data: {
                    playing: playing,
                    notPlaying: notPlaying,
                }
            });
        }

        location.reload();

    });
});