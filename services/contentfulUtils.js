// Set up contentful client
import { createClient, getAsset } from 'contentful';

const client = createClient({
    space: "72na10vz3n2a",
    accessToken: "dW-vL_XZ7d0NVV-1XZcwLf5srRlwxN8h71e5W24WLaE"
});


async function getData(content_type) {
    const response = await client.getEntries({content_type: content_type});
    return response.items;
}

export function getStudentData() {
    const result = getData("studentItem");

    const studentData = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    studentData.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return studentData;
}

export function getResearchData() {
    const result = getData("researchItem");

    const researchData = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    researchData.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return researchData;
}

export default getData;