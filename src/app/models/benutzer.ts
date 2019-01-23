export class Benutzer {
    username: string;
    password: string;
    email: string;
    constructor(username: string, password: string, email: string) {
        this.email = email;
        this.password = password;
        this.username = username;
    }
}
