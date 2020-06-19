export class User {
    constructor(
        public username: string,
        public password: string,
        public secretKey: string,
        public email?: string
    ) { }
}
