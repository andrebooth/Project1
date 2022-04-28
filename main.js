


//colors array
let colors = ['blue', 'yellow', 'orange', 'white', 'red', 'white', 'black']



$("body").append("<button>Change Color</button")
$("button").css("cursor","pointer")
$("button").css("background-color") 


$("button").click(function changeBackground() {

    let randomBackgroundColor = Math.floor(Math.random() * colors.length)

    $("body").css("background-color", randomBackgroundColor)
})