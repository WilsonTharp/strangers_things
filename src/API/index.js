export const BASE_URL = 'https://strangers-things.herokuapp.com/api/2105-OKU-RM-WEB-PT/'
const token = localStorage.getItem('token');

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

export async function postUserPost(post){
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title: `${post.title}`,
                    description: `${post.description}`,
                    price: `${post.price}`,
                    location: `${post.location}`,
                    willDeliver: `${post.willDeliver}`
                }
              })
        }).then(response => response.json())
        .then(result => {
            console.log(result)
        })
    } catch (error) {
        console.error(error);
    }
}

export function deleteUserPost(postId) {
    fetch(`${BASE_URL}posts/${postId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        })
}

export function fetchUserPosts(setUserPosts) {
    fetch(`${BASE_URL}posts`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }) .then(response => response.json())
        .then(result => {
            setUserPosts(result.data.posts)
        })
        .catch(error => {
            console.error(error);
        })
}

export function postUserMessage(id, message) {
    fetch(`${BASE_URL}posts/${id}/messages`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
        message: {
        content: `${message.content}`
        }
        })
    }).then(response => response.json())
        .then(result => {
        console.log(result);
    })
        .catch(console.error);
}
