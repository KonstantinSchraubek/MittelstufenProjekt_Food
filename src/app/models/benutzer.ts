export class Benutzer {
    username: string;
    password: string;
    email: string;
    constructor(username?: string, password?: string, email?: string) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    public getEmail() {
        return this.email;
    }
    public getPassword() {
        return this.password;
    }
    public getUsername() {
        return this.username;
    }
    public setUsername(username: string) {
        this.username = username;
    }
    public setPassword(password: string) {
        this.password = password;
    }
    public setEmail(email: string) {
        this.email = email;
    }

}
