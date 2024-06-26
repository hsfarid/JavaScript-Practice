
const days_beg_year = () => {
const currentDate = new Date()
const prevDate = new Date(currentDate.getFullYear(), 0, 1)

const diff_timestamps = currentDate.getTime() - prevDate.getTime()
const diff_days = diff_timestamps / 1000 / 60 / 60 / 24

console.log(`The number of days since the beginning of ${currentDate.getFullYear()} is: ${Math.ceil(diff_days)} days`)

}
days_beg_year()