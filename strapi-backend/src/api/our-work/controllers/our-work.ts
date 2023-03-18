/**
 * our-work controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa'

export default factories.createCoreController('api::our-work.our-work', ({strapi}:{strapi: Strapi}) => ({
    async find(ctx: Context) {
      return await strapi.db.query('api::our-work.our-work').findMany({
        populate: ['seo.image', 'cases.image', 'question']
      });
    }
}));
