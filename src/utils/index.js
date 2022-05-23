//utils/index.js is where I'm storing my fetch requests and non JSX code

export const fetchImages = async (setter) => {
    try {
        const response = await fetch("https://picsum.photos/v2/list?page=3&limit=9");
        const data = await response.json();
        setter(data);
    } catch (error) {
        console.log(error)
    }
};


export const signUp = async (username, email, password, setter) => {
    try {
        // this rsponse (res) from REST API
        // hiding rest api location in env. 
        //remember .env file always goes in parent directory, not src folder!
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await response.json();
        setter(data.user.username)
        localStorage.setItem("myToken", data.token);
        //local storage is built-in object .setItem method to set .getItem to get!
        //console.log(data);
    } catch (error) {
        console.log(error);
    }
};

export const login = async (setter) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "GET",
            headers: {Authorization: localStorage.getItem("myToken") },
        });
        const data = await response.json();
        setter(data.user)
    } catch (error) {
        console.log(error)
    }
};