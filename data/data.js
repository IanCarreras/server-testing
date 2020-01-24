const db = ['first piece of data', 'second piece of data']

function add(data) {
    return db.push(data)
}

function remove(position) {
    if (position === 'last') {
        db.pop()
    }
}

module.exports = {
    db,
    add,
    remove
}