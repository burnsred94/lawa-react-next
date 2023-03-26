/**
 * case controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from '@strapi/strapi';
import { Context } from "koa"

export default factories.createCoreController('api::case.case', ({ strapi }: { strapi: Strapi }) => ({

  async top(ctx: Context) {
    return await strapi.db.query('api::case.case').findOne({
      where: {
        link: ctx.params.slug
      },
      populate: [
        "image",
        "seo",
        "slider_images",
        "questions"
      ]
    })
  }
}));
