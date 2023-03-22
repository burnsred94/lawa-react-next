/**
 * sub-service controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from "@strapi/strapi"
import {Context } from 'koa'

export default factories.createCoreController('api::sub-service.sub-service', ({ strapi }: { strapi: Strapi }) => ({
    async top(ctx: Context){
      return await strapi.db.query('api::sub-service.sub-service').findOne({
        where: {
          slug: ctx.params.slug,
          sub_service_items: {
            publishedAt: {
              $notNull: true
            }
          }
        },
        populate: [
          "preview_img",
          "sub_services.preview_img",
          "sub_service_items.image_preview",
          "table_we_and_you.img",
          "table.img",
          "cases.image",
          "reviews.logo",
          "list.img",
          "questions",
          "images",
          "seo.image",
          "images.img",
          "service"

        ]
      })

    }
}));
