
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

    // $(".devourBtn").on("click", function (e) {
    //     event.preventDefault();
    //     var id = $(this).data("id");
       

    //     userInput2 = $("#devoured").val().trim();

    //     var devour = {
    //         devoured: true
    //     };

    //     $.ajax({
    //         type: "PUT",
    //         url: "/" + id,
    //         data: devour
    //     }).then(
    //         function(){
    //             console.log("you ate it");
    //             location.reload();
    //         }
    //     );
    // });
})