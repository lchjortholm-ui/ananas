input.onButtonPressed(Button.A, function () {
    if (x == bombe_x + 1) {
        if (y == bombe_y) {
            for (let index = 0; index < 1e+70; index++) {
                led.plot(randint(0, 4), randint(0, 4))
                basic.pause(100)
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (y == 5) {
        x = 0
        y = 0
    }
    if (x == 5) {
        y += 1
        x = 0
        led.toggle(4, y - 1)
    } else {
        led.toggle(x, y)
        led.toggle(x - 1, y)
        x += 1
    }
})
let bombe_y = 0
let bombe_x = 0
let y = 0
let x = 0
x = 0
y = 0
bombe_x = randint(0, 4)
bombe_y = randint(0, 4)
basic.forever(function () {
    led.toggle(bombe_x, bombe_y)
    basic.pause(200)
})
