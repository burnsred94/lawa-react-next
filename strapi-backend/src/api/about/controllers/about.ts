/**
 * about controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from "@strapi/strapi"
import { Context } from "koa"

export default factories.createCoreController('api::about.about', ({ strapi }: { strapi: Strapi }) => ({
  async find(ctx: Context) {
    return await strapi.db.query('api::about.about').findMany(
      {
        populate: ['images', 'image_director', "executives.img", "questions", "seo.image", 'questions']
      }
    )
  }
}));
