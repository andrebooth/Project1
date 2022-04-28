$("button").css("cursor","pointer")

$("#background-changer").on("click", function () {

    const colors = ['blue', 'yellow', 'orange', 'white', 'red', 'green', 'brown', 'pink', 'black']
    const randomIndex = Math.floor(Math.random() * colors.length)
    const randomBackgroundColor = colors[randomIndex]
    
    $("body").css("background-color", randomBackgroundColor)
 })