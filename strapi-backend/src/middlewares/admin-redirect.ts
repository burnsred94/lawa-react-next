import { Context } from 'koa';
import { Strapi } from '@strapi/strapi';

interface Redirect {
  method: string;
  path: string;
  handler: (ctx: Context) => void;
  config: {
    auth: boolean;
  };
}

export default (_config, { strapi }: { strapi: Strapi }) => {
  const redirects: Redirect[] = ['/', '/index.html'].map((path) => ({
    method: 'GET',
    path,
    handler: (ctx) => ctx.redirect('/admin'),
    config: { auth: false },
  }));

  strapi.server.routes(redirects);
};
