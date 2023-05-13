/**
 * mail controller
 */

import { factories, Strapi } from '@strapi/strapi'
import { Context } from 'koa'

export default factories.createCoreController('api::mail.mail', ({ strapi }: { strapi: Strapi }) => ({
  async create(ctx: Context) {
    const { } = ctx.request.body

    await strapi.plugins['email'].services.email.send({
      to: 'hello@lawa.by',
      from: 'someone2@example.com',
      subject: ctx.request.body.name,
      text: ctx.request.body.text_mail,
      html: `<h4>${ctx.request.body.name}</h4><p>${ctx.request.body.text_mail}</p><span>${ctx.request.body.phone_number}</span>`,
    });

    return await super.create(ctx)
  }
}));
