basic.forever(function () {
    if (input.acceleration(Dimension.X) > 20) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
    } else {
        if (input.acceleration(Dimension.X) > 5) {
            basic.showLeds(`
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                `)
        } else {
            if (input.acceleration(Dimension.X) > -5) {
                basic.showLeds(`
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    `)
            } else {
                if (input.acceleration(Dimension.X) > -20) {
                    basic.showLeds(`
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . # .
                        `)
                } else {
                    basic.showLeds(`
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        `)
                }
            }
        }
    }
})
