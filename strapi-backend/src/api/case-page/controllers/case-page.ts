/**
 * case-page controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::case-page.case-page', ({strapi}:{strapi: Strapi}) => ({
    async find(ctx: Context) {
      return await strapi.db.query('api::case-page.case-page').findMany({
        populate:['seo.image', 'cases.image', 'questions']
      })
    }
}));
