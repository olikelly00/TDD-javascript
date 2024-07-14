

module.exports = searchCandies;


// INITIAL IMPLEMENTATION

// function searchCandies(name, price, list) {
//     let resultList = []
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].name.startsWith(name) && list[i].price <= price) {
//             resultList.push(list[i].name)
//         }
//     }
//     return resultList
// };

// REFACTORED TO PRACTICE USING CALLBACK FUNCTIONS

function isObjectValid(list, name, price) {
    return list.name.startsWith(name) && list.price <= price
};

function getObjectName(object) {
    return object.name
};

function searchCandies(name, price, list) {
        let filteredList = list.filter(candy => isObjectValid(candy, name, price))
        let mappedList = filteredList.map(getObjectName)
        return mappedList
}