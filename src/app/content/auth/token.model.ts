
export class Token {
  get token(): string {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
  constructor(private _token: string, private _id?: string) {}
}
