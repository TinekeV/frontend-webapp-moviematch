function createDateString(date) {
    const nlDate = new Date(date)
    return nlDate.toLocaleDateString('nl-NL', {year: 'numeric', month: 'numeric', day: 'numeric'})
}

export default createDateString;