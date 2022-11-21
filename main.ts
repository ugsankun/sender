input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
	
})
input.onButtonPressed(Button.A, function () {
    isLong = 0
    ismae += 1
    if (ismae == 2) {
        isLong = 0
        isshort = 0
        ismae = 0
        isusiro = 0
        radio.sendNumber(1)
        basic.showNumber(1)
        basic.pause(50)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    isLong = 0
    isusiro += 1
    if (isusiro == 2) {
        isLong = 0
        isshort = 0
        ismae = 0
        isusiro = 0
        radio.sendNumber(2)
        basic.showNumber(2)
        basic.pause(50)
        basic.clearScreen()
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
let isusiro = 0
let ismae = 0
let isLong = 0
let isshort = 0
isshort = 0
isLong = 0
radio.setGroup(1)
radio.setTransmitPower(7)
let id = 1
basic.showNumber(id)
basic.pause(200)
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        isLong = 0
        isshort = 0
        ismae = -1
        isusiro = -1
        radio.sendNumber(0)
        basic.showNumber(0)
        basic.pause(50)
        basic.clearScreen()
    }
    if (input.buttonIsPressed(Button.A)) {
        isLong += 1
        if (isLong > 10) {
            isshort = 1
            ismae = 0
            isusiro = 0
            radio.sendNumber(3)
            basic.showNumber(3)
            basic.pause(50)
            basic.clearScreen()
        }
    } else {
        if (isshort == 1) {
            isLong = 0
            isshort = 0
            radio.sendNumber(1)
            basic.showNumber(1)
            basic.pause(50)
            basic.clearScreen()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        isLong += 1
        if (isLong > 10) {
            isshort = 2
            ismae = 0
            isusiro = 0
            radio.sendNumber(4)
            basic.showNumber(4)
            basic.pause(50)
            basic.clearScreen()
        }
    } else {
        if (isshort == 2) {
            isLong = 0
            isshort = 0
            radio.sendNumber(1)
            basic.showNumber(1)
            basic.pause(50)
            basic.clearScreen()
        }
    }
    basic.pause(10)
})
