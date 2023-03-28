/**
 * contact-page controller
 */

import { factories, Strapi } from '@strapi/strapi'

export default factories.createCoreController('api::contact-page.contact-page', ({ strapi }: { strapi: Strapi }) => ({

  async find() {
    return await strapi.db.query('api::contact-page.contact-page').findMany()
  }

}));
