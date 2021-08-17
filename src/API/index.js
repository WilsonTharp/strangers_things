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
            localStorage.setItem('message', result.data.message);
        })
    } catch (error) {
        alert (error);
    }
}

export async function createNewUser(newUser) {
    fetch(`${BASE_URL}/users/register`, {
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
    }).then(response => response.json())
    .then(result => {
        localStorage.setItem('message', result.data.message);
        localStorage.setItem('token', result.data.token);
        console.log(result);
    })
    .catch(console.error);
}