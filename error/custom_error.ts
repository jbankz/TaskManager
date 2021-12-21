class CustomApiError extends Error{
    constructor(message: string, code: number){
        super(message);   
    }
}

const createCustomError = (msg: string, code: number) => {
    return new CustomApiError(msg, code);
}

export {createCustomError, CustomApiError}