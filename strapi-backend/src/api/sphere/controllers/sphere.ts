/**
 * sphere controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::sphere.sphere', ({ strapi }: { strapi: Strapi }) => ({
  async top(ctx: Context) {
    return await strapi.db.query('api::sphere.sphere').findOne({
      where: {
        slug: ctx.params.slug
      },
      populate: [
        "images",
        "services.preview_img",
        "cases.image",
        "reviews.logo",
        "seo.image",
        "we_and_you.img"
      ]
    })
  }
}));
