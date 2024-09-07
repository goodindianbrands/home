import {nanoid} from "nanoid";
import {readFile, writeFile} from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
import Papa from 'papaparse';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const companiesCsvFilepath = path.join(__dirname, '../data/companies.csv');

const COMPANY_NAME_KEY = "Company Name";
const DESCRIPTION_KEY = "Description";
const COMPANY_WEBSITE_KEY = "Company Website";
const IMAGE_NAME_KEY = "Image";
const YOUTUBE_KEY = "Youtube";
const INSTAGRAM_KEY = "Instagram";
const TAGS_KEY = "Tags";


function capitalizeWord(word) {
    // Capitalize the first letter and make the rest lowercase
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

function stringToList(inputString) {
    // Split the string by commas to get an array of words
    const wordsArray = inputString.split(',');

    // Trim whitespace from each word, capitalize, and filter out any empty strings
    const cleanedAndCapitalizedList = wordsArray
        .map(word => word.trim())           // Trim whitespace
        .filter(word => word.length > 0)   // Remove empty strings
        .map(word => capitalizeWord(word)); // Capitalize each word

    return cleanedAndCapitalizedList;
}



function csvToJson(csvFilePath) {
    return new Promise((resolve, reject) => {
        // Resolve the full path to the CSV file
        const filePath = path.resolve(__dirname, csvFilePath);

        // Read the CSV file
        readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(`Error reading file: ${err}`);
                return;
            }

            // Parse CSV to JSON
            const jsonData = Papa.parse(data, {
                header: true,
                dynamicTyping: true
            }).data;

            resolve(jsonData);
        });
    });
}

csvToJson(companiesCsvFilepath)
    .then(jsonData => {
        const companiesJson = {}

        jsonData.forEach((row, index) => {
            //console.log(`Row ${index + 1}:`, row);
            // Example: Access a specific column value
            console.log('Specific column value:', row['Company Name']);

            if (row) {
                const id = nanoid(8);
                const name = row[COMPANY_NAME_KEY];
                const description = row[DESCRIPTION_KEY];
                const imagename = row[IMAGE_NAME_KEY] !== null ? row[IMAGE_NAME_KEY] : "coming-soon.jpeg";
                const websiteLink = row[COMPANY_WEBSITE_KEY];
                const youtubeLink = row[YOUTUBE_KEY];
                const instagramLink = row[INSTAGRAM_KEY];
                const tags = row[TAGS_KEY];

                if(name === null || description === null || websiteLink === null) {
                    console.log("Ignoring value at index " + index);
                }
                else{
                    const companyValue = {};
                    companyValue["name"] = name;
                    companyValue["description"] = description;
                    companyValue["websiteLink"] = websiteLink;

                    if(imagename !== null) {
                        companyValue["imagePath"] = "/my-react-app/images/companies/" + imagename;
                    }

                    if(youtubeLink !== null) {
                        companyValue["youtubeLink"] = youtubeLink;
                    }

                    if(instagramLink !== null) {
                        companyValue["instagramLink"] = instagramLink;
                    }

                    if(tags !== null) {
                        companyValue["tags"] = stringToList(row[TAGS_KEY]);
                    }

                    companiesJson[id] = companyValue;
                }


            }
        });

        const jsonString = JSON.stringify(companiesJson, null, 2); // Pretty-print with 2-space indentation
        const fileLocation = "./companies.json";
        writeFile(fileLocation, jsonString, 'utf8', (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('File has been saved successfully at ' + fileLocation);
        });
    })
    .catch(error => {
        console.error(error);
    });




