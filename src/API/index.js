// import Index from '../index';
export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'


export async function fetchUserPosts() {
    try {
        const response = await fetch(`${BASE_URL}posts`);
        const data = response.json();
        return data;
    } catch(error) {
        throw error;
    }
}

export async function logInRequest(user){
    try {
        localStorage.setItem('username', user.username);
        const response = await fetch(`${BASE_URL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                  username: `${user.username}`,
                  password: `${user.password}`
                }
              })
        }).then(response => response.json())
        .then(result => {
            console.log(result)
            localStorage.setItem('token', result.data.token);
            
            
        })
    } catch (error) {
        (console.error);
    }
}

export async function createNewUser(newUser) {
    try{ 
        const response = await fetch(`${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                    username: `${newUser.username}`,
                    password: `${newUser.password}`
                    }
                })
        })
        const result = await response.json()
        if(result.data){
            localStorage.setItem('token', result.data.token);
        }
        console.log(result);
        return
    
    }catch(error){
        (console.error);
    }
}