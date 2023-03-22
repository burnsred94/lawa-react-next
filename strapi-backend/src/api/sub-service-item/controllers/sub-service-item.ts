/**
 * sub-service-item controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from "@strapi/strapi"
import { Context } from "koa"

export default factories.createCoreController('api::sub-service-item.sub-service-item', ({strapi}:{strapi: Strapi}) => ({
  async top(ctx: Context){
    return await strapi.db.query('api::sub-service-item.sub-service-item').findOne({
      where: {
        slug: ctx.params.slug,
      },
      populate: ['images', 'arsenal.img', 'we_and_you.img', 'cases.image', 'reviews.logo', 'seo.image', 'sub_service', "service"]
    })
  }
}));
