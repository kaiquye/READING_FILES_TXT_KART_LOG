export interface IDto {
  validate();
}

export function ValidateTransferObject(DTO: IDto | any, path: 'BODY' | 'PARAMS') {
  return async function (req, res, next) {
    try {
      let result;
      let error;

      switch (path) {
        case 'BODY':
          result = new DTO({ ...req.body });
          error = await result.validate();
          break;
        case 'PARAMS':
          result = new DTO({ ...req.params });
          error = await result.validate();
          break;
      }

      if (error === undefined) next();
    } catch (errorAdapter) {
      return res.status(400).json(errorAdapter);
    }
  };
}
