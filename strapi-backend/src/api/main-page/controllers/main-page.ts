/**
 * main-page controller
 */
import { Strapi } from '@strapi/strapi';
import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::main-page.main-page', ({ strapi }: { strapi: Strapi }) => ({

  async find(ctx){
    ctx.body = await strapi.query('main-page').find();
    ctx.request.query = {
      populate: ['']
    }
  }
}));
