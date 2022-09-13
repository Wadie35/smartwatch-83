function show_hours (hours: number) {
	
}
function show_directions () {
	
}
function calculate_time () {
	
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (setting == 0) {
        if (options == 0) {
            options = -1
            basic.clearScreen()
            minutes = 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    setting += 1
    if (setting == 3) {
        setting = 0
    } else if (setting == 1) {
        show_minutes(minutes)
    } else if (setting == 2) {
        show_hours(hours)
    } else if (setting == 3) {
        basic.showString("s")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    options += 1
    if (options > 2) {
        options = 0
    }
})
function step_count (steps: number) {
	
}
function show_minutes (minutes: number) {
	
}
let setting = 0
let options = 0
let hours = 0
let minutes = 0
minutes = 25
hours = 0
let steps = 0
options = 0
setting = 0
basic.forever(function () {
    calculate_time()
    if (setting == 0) {
        if (options == 0) {
            show_minutes(minutes)
            show_hours(hours)
        } else if (options == 1) {
            show_directions()
        } else if (options == 2) {
            basic.clearScreen()
            step_count(steps)
        }
    }
})
