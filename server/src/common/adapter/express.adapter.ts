import { constructor } from 'tsyringe/dist/typings/types';

export interface IHttpResponse {
  status?: number;
  body?: object | string;
  cookies?: { name: string; value: string };
}

export type IController = (body, params?, next?) => Promise<IHttpResponse>;
export function ExpressAdapter(controller: IController) {
  return async function (req, res) {
    const body = req?.body;
    const params = req?.params;

    try {
      const result = await controller(body, params);
      const cookies = result.cookies;

      if (cookies) {
        res.cookie(cookies.name, cookies.value, { httpOnly: true });
      }

      return res.status(result?.status || 200).json(result?.body);
    } catch (error) {
      return res.status(500).json('error: internal, contact an administrator');
    }
  };
}
