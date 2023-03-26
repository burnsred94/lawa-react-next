/**
 * review controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::review.review', ({ strapi }: { strapi: Strapi }) => ({

  async slug(ctx: Context) {

    return await strapi.db.query('api::review.review').findOne({
      where: {
        link: ctx.params.slug
      },
      populate: [
        "logo",
        "photo"
      ]
    })
  }
}));
