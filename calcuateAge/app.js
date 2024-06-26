
const calculate_age = (date) => {
const current_year = new Date().getFullYear()
const birth_year = date.getFullYear()
return current_year - birth_year
}
document.write(calculate_age(new Date(1982, 11, 4)))
