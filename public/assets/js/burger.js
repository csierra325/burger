$(function () {
    $(".button").on("click", function (e) {
        e.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
        };
        console.log(newBurger)
    

        $.ajax({
            method: "POST",
            url: "/api/burgers",
            data: newBurger
        }).then(function (res) {
            console.log( res );
            location.reload();
        });
    });
})