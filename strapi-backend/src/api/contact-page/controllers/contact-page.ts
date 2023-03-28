/**
 * contact-page controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::contact-page.contact-page', ({ strapi }: { strapi: Strapi }) => ({

  async find(ctx: Context) {
    return await strapi.db.query('api::contact-page.contact-page').findMany({
      populate: ["question"]
    })
  }

}));
