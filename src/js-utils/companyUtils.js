import companiesJson from '../data/companies.json';


// Function to sort Map by a string key within the values
function sortMapByStringKey(map, key) {
    const sortedArray = Array.from(map.entries()).sort(([, valueA], [, valueB]) => {
        return valueA[key].localeCompare(valueB[key]);
    });

    return new Map(sortedArray);
}

export function getCompanyDetails(id) {
    return companiesJson[id];
}

export function getAllCompanies() {
    return sortMapByStringKey(new Map(Object.entries(companiesJson)), "name");
}

export function getCompaniesByTags(tags) {
    const allCompanies = getAllCompanies();
    const companiesForGivenTags = new Map();
    allCompanies.forEach((value, key) => {
        tags.forEach(tag => {
            if(value.tags.includes(tag)) {
                companiesForGivenTags.set(key, value)
            }
        });
    });

    return Array.from(companiesForGivenTags.values());
}

export function getAllTags() {
    const allCompanies = getAllCompanies();
    const allTags = new Set();
    allCompanies.forEach((value, key) => {
        if(value.tags !== undefined) {
            value.tags.forEach(tag => {
                allTags.add(tag);
            });
        }
    });

    return [...allTags].sort();
}