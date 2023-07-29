function sortByName(a, b) {
    let compare = 0

    if (a.name > b.name) {
        compare = 1
    } else if (a.name < b.name) {
        compare = -1
    }

    return compare
}

function sortByType(a, b) {
    let compare = 0

    if (a.type > b.type) {
        compare = 1
    } else if (a.type < b.type) {
        compare = -1
    }

    return compare
}

function sortByWeight(a, b) {
    return a.weight - b.weight;
}

export default {
    name: sortByName,
    type: sortByType,
    weight: sortByWeight
}