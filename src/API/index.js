export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'

export async function fetchUserPosts() {
    try {
        const response = await fetch(`${BASE_URL}posts`);
        const data = response.json();
        console.log(data);
        return data;
    } catch(error) {
        throw error;
    }
}