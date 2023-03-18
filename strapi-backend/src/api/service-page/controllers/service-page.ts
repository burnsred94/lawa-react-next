/**
 * service-page controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from "koa";

export default factories.createCoreController('api::service-page.service-page', ({ strapi }: { strapi: Strapi }) => ({

  async find(ctx: Context) {
    return await strapi.db.query('api::service-page.service-page').findMany({
      populate: ['services.preview_img', 'spheres.img', 'images_result', 'list_result.img', 'table.img', 'trust_images.img',]
    })
  }

}));
