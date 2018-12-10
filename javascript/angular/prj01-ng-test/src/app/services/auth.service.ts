export class AuthService {

    isAuth = false;

    signIn() { // methode qui simulera l'authentifcation par un comportement asynchrone (promise)
        return new Promise(
            (resolve, reject) => {
                setTimeout(
                    () => {
                        this.isAuth = true;
                        resolve(true);
                    }, 2000
                );
            }
        );
    }

    signOut() {
        this.isAuth = false;
    }
}