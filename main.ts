let n = 0
input.onGesture(Gesture.LogoUp, function () {
    n += 1
    basic.showString("" + (n))
})
input.onGesture(Gesture.LogoDown, function () {
    n += -1
    basic.showNumber(n)
})
input.onButtonPressed(Button.A, function () {
    n = 0
    basic.showNumber(n)
})
input.onGesture(Gesture.Shake, function () {
    n += 1
    basic.showString("" + (n))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("E - E - E - E - ", 250)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    music.playMelody("A A A A A A A A ", 7)
})
