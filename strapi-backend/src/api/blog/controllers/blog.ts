/**
 * blog controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::blog.blog', ({ strapi }: { strapi: Strapi }) => ({
  async find(ctx: Context) {
    const data = await strapi.db.query('api::blog.blog').findMany({
      populate: ['seo.image', 'question', 'posts.img']
    })

    const dataPopulate = []

    let dataSet = []

    for (let i = 0; i < data.length; i++) {
      dataSet.push(data[i])

      if (dataSet.length === 9) {
        dataPopulate.push(dataSet)
        dataSet = []
      }
    }

    if (dataSet.length > 0) {
      dataPopulate.push(dataSet)
    }

    return dataPopulate
  }
}));
