/**
 * service controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::service.service', ({ strapi }: { strapi: Strapi }) => ({
  async top(ctx: Context) {

    return await strapi.db.query('api::service.service').findOne({
      where: {
        slug: ctx.params.slug,
      },
      populate: [
        "preview_img",
        "sub_services.preview_img",
        "table_we_and_you.img",
        "table",
        "cases.image",
        "reviews.logo",
      ]
    })

  }
}));
