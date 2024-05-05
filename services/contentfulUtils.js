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

export function getFacultyData() {
    const result = getData("facultyItem");

    const facultyData = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    facultyData.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return facultyData;
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

export function getHeaderInfo() {
    const result = getData("headerItem");

    const headerInfo = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    headerInfo.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return headerInfo;
}

export function formatEmail(email) {
    if (email === null || email === undefined) {
      return null
    }
    // Email: TEST(AT)TEST.COM
    return "Email: " + email.toUpperCase().split('@').join('(AT)')
}

export function getHomeData() {
    const result = getData("homeItem");

    const homeData = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    homeData.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return homeData;
}

export function getHomeSlidesData() {
    const result = getData("homePageCarouselSlide");

    const homeData = result.then(data => {
        // do error handling here
        return data;
    });

    // if there is an error, it will be caught here
    homeData.catch(err => {
        console.error("An error occurred:", err);
        throw err;
    });

    
    return homeData;
}
