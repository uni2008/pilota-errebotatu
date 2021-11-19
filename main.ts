input.onPinPressed(TouchPin.P0, function () {
    game.resume()
})
input.onButtonPressed(Button.A, function () {
    pausa = 200
})
input.onButtonPressed(Button.AB, function () {
    game.pause()
})
input.onButtonPressed(Button.B, function () {
    pausa = 60
})
let pausa = 0
let pilota = game.createSprite(2, 2)
pausa = 50
basic.forever(function () {
    pilota.move(1)
    pilota.ifOnEdgeBounce()
    basic.pause(pausa)
})
