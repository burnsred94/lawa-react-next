/**
 * sphere-page controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from "koa"

export default factories.createCoreController('api::sphere-page.sphere-page', ({ strapi }: { strapi: Strapi }) => ({

  async find(ctx: Context) {
    return await strapi.db.query('api::sphere-page.sphere-page').findMany({
      populate: [
        "images_header",
        "spheres.img",
        "spheres.sphere",
        "we_and_you.img",
        "cases.image",
        "reviews.logo",
        "question",
        "seo.image"

      ]
    })
  }
}));
