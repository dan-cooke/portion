export class ShowcaseThemeError extends Error {
  constructor(msg: string) {
    super();
    this.message = msg;
    this.name = "ShowcaseThemeError";
  }
}
