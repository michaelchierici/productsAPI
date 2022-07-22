export class AppError extends Error {
  status: number;

  data: any;

  message: string;

  constructor(status: number, message: string, data: any = {}) {
    super();

    Object.setPrototypeOf(this, new.target.prototype);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }

    this.name = this.constructor.name;
    this.data = data;
    this.status = status;
    this.message = message;
  }
}
