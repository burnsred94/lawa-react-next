/**
 * service controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::service.service', ({strapi}: {strapi: Strapi}) => ({
    async top (ctx: Context) {
      console.log(ctx.params);
        const data = await strapi.db.query('api::service.service').findOne({
          where: {
            slug: ctx.params.slug,
          },
          populate: [
            "preview_img",
            "sub_services.preview_img",
            "table_we_and_you.img",
            "table",
            "cases.image",
            "reviews.logo",
          ]
        })
        console.log(data.table_we_and_you)

        let subSer = [];
        data.sub_services.map((item) => {
          subSer.push({
            id: item.id,
            title: item.title,
            description: item.descr_preview,
            slug: item.slug,
            img: {
              name: item.preview_img.name,
              url: item.preview_img.url,
            }
          });
        })

        let weT = [];
        data.table_we_and_you.We.map((item) => {
          weT.push(item.text)
        })

        let youT = [];
        data.table_we_and_you.You.map((item) => {
          youT.push(item.text)
        })

        let casesArr = [];
        data.cases.map((item) => {
          casesArr.push({
            id: item.id,
            description: item.description,
            link: item.link,
            img: {
              name: item.image.name,
              url: item.image.url,
            }
          })
        })

        let reviewsArr = [];
        data.reviews.map((item) => {
          reviewsArr.push({
            id: item.id,
            description: item.description,
            name: item.name,
            link: item.link,
            post: item.post,
            img: {
              name: item.logo.name,
              url: item.logo.url,
            }
          })
        })

        return {
          title: data.title,
          title_service: data.title_service,
          description: data.description,
          link_service: data.link_service,
          preview_img: {
            name: data.preview_img.name,
            url: data.preview_img.url,
          },
          sub_services: subSer,
          table_we_and_you: {
            we_title: data.title_we,
            we: weT,
            img: {
              name: data.table_we_and_you.img.name,
              url: data.table_we_and_you.img.url,
            },
            you_title: data.title_you,
            you: youT
          },
          title_cases: data.title_cases,
          cases_link: data.cases_link,
          cases: casesArr,
          title_review: data.title_review,
          link_review: data.link_review,
          reviews:reviewsArr,
          questions: data.questions,
        }

    }
}));
