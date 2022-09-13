function show_hours (hours: number) {
	
}
function show_directions () {
	
}
function calculate_time () {
	
}
function step_count (steps: number) {
	
}
function show_minutes (minutes: number) {
	
}
let minutes = 25
let hours = 0
let steps = 0
let options = 0
let setting = 0
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
