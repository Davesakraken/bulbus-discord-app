import axios from "axios";

export async function getCat() {
    try {
        const response = await axios.get("https://api.thecatapi.com/v1/images/search");
        let data = response.data[0];
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getDog() {
    try {
        const response = await axios.get("https://api.thedogapi.com/v1/images/search");
        let data = response.data[0];
        return data;
    } catch (error) {
        console.error(error);
    }
}
