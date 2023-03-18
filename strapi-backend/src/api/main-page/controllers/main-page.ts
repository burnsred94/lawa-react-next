/**
 * main-page controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';
import api from '../../../../config/api';

export default factories.createCoreController('api::main-page.main-page', ({ strapi }: { strapi: Strapi }) => ({
  async find(ctx: Context) {
    ctx.request.query = {
      populate: ['header_image', 'services.preview_img', 'approach_image', 'cases.image', 'approach_list.img', 'reviews.logo', 'trust_images'],
    }

    return await strapi.db.query('api::main-page.main-page').findOne({
      where: {
        id: 1
      },
      populate: ['header_image', 'services.preview_img', 'approach_image', 'cases.image', 'approach_list.img', 'reviews.logo', 'trust_images']
    })
  }

}));
