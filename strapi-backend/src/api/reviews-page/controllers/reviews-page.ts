/**
 * reviews-page controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from "koa"

export default factories.createCoreController('api::reviews-page.reviews-page', ({strapi}: {strapi: Strapi}) => ({

  async find (ctx: Context) {
    return await strapi.db.query('api::reviews-page.reviews-page').findMany({
      populate: ['reviews.logo', 'seo.image']
    });
  }

}));
