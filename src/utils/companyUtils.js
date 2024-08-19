import companiesJson from '../data/companies.json';

const COMPANIES_NODE_KEY = "companies";



export function getCompanyDetails(id) {
    return companiesJson[COMPANIES_NODE_KEY][id];
}
