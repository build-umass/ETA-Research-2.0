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

export function getMoreInfo() {
    const result = getData("moreItem");

    const moreInfo = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    moreInfo.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return moreInfo;
}

export function getFooterInfo() {
    const result = getData("footerItem");

    const footerInfo = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    footerInfo.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return footerInfo;
}

export function getHomeData() {
    return "We study the effects of state, institutional, and organizational policy, programs, and practices on young people as they transition to adulthood. We contribute to efforts to invest in infrastructure that supports equity for all young adults during this crucial time of personal, intellectual, and socio-political development. We partner with young people as well as interdisciplinary scholars, institutions, non-profits, and programs to ask critical and innovative questions informed by those seeking opportunities to work with young adult-led organizations and invite young adult voices to lead so that our lab embodies the practices we promote. Our work is motivated by our belief that young adults’ contributions are critical to solving an interlocking set of global crises. We are currently conducting qualitative studies in the Chicago region and Western Massachusetts that focus on marginalized students’ attempt to pursue equitable access to a college education."
}

export default getData;