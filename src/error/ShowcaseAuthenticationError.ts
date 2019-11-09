export class ShowcaseAuthenticationError extends Error {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.name = "ShowcaseAuthenticationError";
  }
}
