import Auth from '../security/auth';


export const checkResponseStatus = (response) => {
    if(response.status >= 200 && response.status < 300) {
        return response.json()
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
};

export const loginResponseHandler = (response, handler) => {
    Auth.logIn(response);
    console.log(response)
    if(handler) {
        handler.call();
    }
};