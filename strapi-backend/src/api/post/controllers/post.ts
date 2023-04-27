/**
 * post controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::post.post', ({ strapi }: { strapi: Strapi }) => ({

  async top(ctx: Context) {
    return await strapi.db.query('api::post.post').findOne({
      where: {
        slug: ctx.params.slug,

      },
      populate: [
        "img",
      ]
    })
  }

}));
