export class PortionAuthenticationError extends Error {
    constructor(msg: string) {
        super();
        this.message = msg;
        this.name = "PortionAuthenticationError"
    }
}