def on_forever():
    if input.acceleration(Dimension.X) > 20:
        basic.show_leds("""
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            """)
    else:
        if input.acceleration(Dimension.X) > 5:
            basic.show_leds("""
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                . # . . .
                """)
        else:
            if input.acceleration(Dimension.X) > -5:
                basic.show_leds("""
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    . . # . .
                    """)
            else:
                if input.acceleration(Dimension.X) > -20:
                    basic.show_leds("""
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . # .
                        """)
                else:
                    basic.show_leds("""
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        """)
basic.forever(on_forever)
