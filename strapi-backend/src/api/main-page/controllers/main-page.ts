/**
 * main-page controller
 */

import { factories } from '@strapi/strapi'
import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default factories.createCoreController('api::main-page.main-page', ({strapi}: {strapi: Strapi})=> ({
    async find(ctx: Context ){
       ctx.request.query = {
         populate: ['header_image', 'services.preview_img', 'approach_image', 'cases.image', 'approach_list.img', 'reviews.logo', 'trust_images'],
       }


       const { data } = await super.find(ctx)
       console.log(data)
       const { attributes } = data

       let apList = [];
       console.log(attributes.approach_list)
       attributes.approach_list !== null ? attributes.approach_list.map((item) => {
          apList.push({
            id: item.id,
            title: item.title,
            description: item.description,
            img: {
              name: item.img.data.attributes.name,
              url: item.img.data.attributes.url
            }
          })
       }) : null

       let revList = [];
       attributes.reviews.data !== null ? attributes.reviews.data.map((item) => {
        revList.push({
            id: item.id,
            name: item.attributes.name,
            description: item.attributes.description,
            post: item.attributes.post,
            link: item.attributes.link,
            logo: {
              name: item.attributes.logo.data.attributes.name,
              url: item.attributes.logo.data.attributes.url
            }
          })
       }) : null

       let trustArr = [];
       attributes.trust_images.data !== null ? attributes.trust_images.data.map((item) => {
          trustArr.push({
            id: item.id,
            name: item.attributes.name,
            url: item.attributes.url
          })
       }) : null

       let serviceArr = [];
       attributes.services !== null ? attributes.services.data.map((item) => {
        serviceArr.push({
            id: item.id,
            title: item.attributes.title,
            slug: item.attributes.slug,
            img: {
               name: item.attributes.preview_img.data.attributes.name,
               url: item.attributes.preview_img.data.attributes.url
            },

          })
       }) : null

       let caseArr = [];
       attributes.cases !== null ? attributes.cases.data.map((item) => {
        caseArr.push({
          id: item.id,
          description: item.attributes.description,
          link: item.attributes.link,
          img: {
            name: item.attributes.image.data.attributes.name,
            url: item.attributes.image.data.attributes.url
          }
        })
       }) : null

       const dataset = {
        title: attributes.title !== null ? attributes.title: '' ,
        sub_title: attributes.sub_title !== null ? attributes.sub_title: '',
        time_work: attributes.time_work !== null ? attributes.time_work: '',
        header_img: attributes.header_image.data !== null ? {
          name: attributes.header_image.data.attributes.name,
          url: attributes.header_image.data.attributes.url,
        }: null,
        title_services: attributes.title_services !== null ?  attributes.title_services : '',
        services: serviceArr,
        title_approach: attributes.title_approach !== null ? attributes.title_approach  : '',
        approach_image: {
          name: attributes.approach_image.data !== null ? attributes.approach_image.data.attributes.name : '',
          url: attributes.approach_image.data !== null ? attributes.approach_image.data.attributes.url : '',
        },
        approach_list: apList,
        slogan: attributes.slogan !== null ? attributes.slogan  : '',
        title_form: attributes.title_form !== null ? attributes.title_form  : '',
        description_form: attributes.description_form !== null ? attributes.description_form  : '',
        title_cases: attributes.title_cases !== null ? attributes.title_cases  : '',
        link_case: attributes.link_case !== null ? attributes.link_case  : '',
        case: caseArr,
        title_review: attributes.title_review !== null ? attributes.title_review  : '',
        link_review: attributes.link_review !== null ? attributes.link_review  : '',
        reviews: revList,
        title_trust: attributes.title_trust !== null ? attributes.title_trust  : '',
        trust_images: trustArr,
        title_questions: attributes.title_qustions !== null ? attributes.title_qustions  : '',
        link_question: attributes.link_question !== null ? attributes.link_question  : '',
      }

      console.log(dataset);
      return dataset;
    }
}));
