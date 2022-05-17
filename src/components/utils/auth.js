class Auth{
    static SetAuth(email, password)
    {
        localStorage.setItem('auth', JSON.stringify({'e': email, 'p': password}));
    }

    static GetAuth()
    {
        const authString = localStorage.getItem('auth');
        const userAuth = JSON.parse(authString);
        return userAuth;
    }
}


export default Auth;