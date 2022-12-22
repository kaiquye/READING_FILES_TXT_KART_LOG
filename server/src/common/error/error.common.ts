export class Result<TypeError> {
  public status = 500;
  public success: false;
  public message: string;
  public value?: TypeError | any;

  private constructor(status, success, message?, value?) {
    this.status = status;
    this.success = success || false;
    this.message = message;
    this.value = value;
  }

  public static ok<TypeValue>(status: number, message?: string, value: TypeValue) {
    return new Result<TypeValue>(status, true, message, value);
  }

  public static fail<TypeValue>(status: number, message: string, value?: TypeValue) {
    return new Result<TypeValue>(status, false, message, value);
  }
}
