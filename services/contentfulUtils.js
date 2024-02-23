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

export function getHomeData() {
    // const result = getData("studentItem");

    // const studentData = result.then(data => {
    //     // do error handling here
    //     return data;
    // });

    // // if there is an error, it will be caught here
    // studentData.catch(err => {
    //     console.error("An error occurred:", err);
    //     throw err;
    // });

    
    return "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam, libero vel euismod vehicula, urna arcu pellentesque neque, eget consectetur massa nisl in felis. Sed pretium sem tortor, vel mollis turpis facilisis vel. Fusce pulvinar elit vel massa vestibulum vulputate. Curabitur viverra sapien diam, vel sodales justo placerat eu. Morbi facilisis nibh vel diam aliquam sagittis. Sed facilisis, sem ut iaculis fringilla, sem metus consequat nunc, pellentesque efficitur mi lectus id est. Nullam eu vulputate orci, a eleifend est. Fusce est risus, vestibulum quis nunc eget, varius facilisis nisi. Nulla sed arcu tortor. Vestibulum mollis eleifend nulla nec mattis. Etiam ut purus a purus sodales scelerisque. In arcu felis, pellentesque ut dolor a, gravida tincidunt ex. Praesent turpis neque, dignissim vel tellus quis, ultricies ultrices purus. Proin id nisi nec ipsum lacinia accumsan ac non libero. Integer pharetra, urna non pharetra luctus, metus sapien commodo mauris, sed feugiat ipsum quam ac purus. Fusce volutpat leo vitae ullamcorper molestie."
}

export default getData;