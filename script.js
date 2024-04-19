const countdown_name = document.getElementById("countdown-name")
const countdown_time = document.getElementById("countdown-time")
const timer = document.getElementById("timer-wrapper")
let currentdate = new Date()

const countdown = () => {
    label = countdown_name.value
    target_time = new Date(countdown_time.value)
    if (label != "" && target_time > currentdate) {
        timer.innerHTML = ""

        title = document.createElement("p")
        title.id = "countdown-title"
        title.textContent = label
        timer.append(title)

        wrapper = document.createElement("div")
        wrapper.className = "countdown-subwrapper"
        timer.append(wrapper)
        titles = ["Days","Hours","Minutes","Seconds"]
        titles.forEach(title => {
            subwrapper = document.createElement("div")
            subwrapper.className = "countdown-time-box"
            wrapper.append(subwrapper)

            time_left = document.createElement("p")
            time_left.textContent = "00"
            time_left.className = "time-left"
            time_left.id = title
            subwrapper.append(time_left)

            time_part = document.createElement("p")
            time_part.textContent = title
            time_part.className = "time-part"
            subwrapper.append(time_part)

            colon = document.createElement("p")
            colon.textContent = ":"
            colon.className = "colon"
            if (title != "Seconds") {
                wrapper.append(colon)
            }
        });

        titles.forEach(element => {
            Update_time_left = setInterval(() => {
                currentdate = new Date()
                timepart = document.getElementById(element)
                if (element === "Seconds") {
                    current = 60 - currentdate.getSeconds()
                    if (current === 60) {
                        current = 0
                    }
                    if (current < 10) {
                        current = "0" + current
                    }
                    timepart.textContent = current
                }
                if (element === "Minutes") {
                    current = 60 - currentdate.getMinutes()
                    if (current === 60) {
                        current = 0
                    }
                    if (current < 10) {
                        current = "0" + current
                    }
                    timepart.textContent = current
                }
                if (element === "Hours") {
                    current = 24 - currentdate.getHours()
                    if (current === 24) {
                        current = 0
                    }
                    if (current < 10) {
                        current = "0" + current
                    }
                    timepart.textContent = current
                }
                if (element === "Days") {
                    current = target_time.getDate() - currentdate.getDate() - 1
                    if (current < 10) {
                        current = "0" + current
                    }
                    timepart.textContent = current
                }
                if (currentdate === target_time) {
                    clearInterval(Update_time_left)
                }
            }, 100);
        });
    }
}
