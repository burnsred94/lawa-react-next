/**
 * blog controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::blog.blog', ({strapi}:{strapi: Strapi})=>({
    async find(ctx: Context) {
      return await strapi.db.query('api::blog.blog').findMany({
        populate: ['seo.image', 'question', 'post.img']
      })
    }
}));
