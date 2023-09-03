/**
 * mail controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::mail.mail', ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx: Context) {
    const { data } = ctx.request.body

    await strapi.plugins['email'].services.email.send({
      to: 'hello@lawa.by',
      from: data.email,
      subject: data.name,
      text: data.text_mail,
      html: `<h4>${data.name}</h4><p>${data.text_mail}</p><span>${data.phone_number}</span><span>${data.url_site}</span>`,
    });

    return await super.create(ctx)
  }
}));
