/**
 * service-page controller
 */

import { factories } from '@strapi/strapi';
import { Strapi } from '@strapi/strapi';
import { Context } from "koa";

export default factories.createCoreController('api::service-page.service-page', ({strapi}: {strapi: Strapi}) => ({

    async find(ctx: Context){
      const  data = await strapi.db.query('api::service-page.service-page').findMany({
        populate: ['services.preview_img', 'spheres.img', 'images_result', 'list_result.img', 'table.img', 'trust_images.img', ]
      })

      let servicesArr = [];
      data[0].services !== null ? data[0].services.map((service) => {
        servicesArr.push({
          title: service.title,
          slug: service.slug,
          img : {
            url: service.preview_img.url,
            alt: service.preview_img.name,
          }
        })
      }): null;

      let spheresArr = [];
      data[0].spheres!== null? data[0].spheres.map((sphere) =>{
        spheresArr.push({
          title: sphere.title,
          img : {
            url: sphere.img.url,
            alt: sphere.img.name,
          }
        })
      }): null;

      let imageResult = [];
      data[0].images_result!== null? data[0].images_result.map((img) =>{
         imageResult.push({
          description: img.description,
          url: img.url,
          alt: img.name,
         })
      }): null;

      let listResult = [];
      data[0].list_result!== null? data[0].list_result.map((item) =>{
        listResult.push({
          description: item.description,
          img : {
            url: item.img.url,
            alt: item.img.name,
          }
        })
      }): null;


        return {
          title: data[0].title ? data[0].title : '',
          title_services: data[0].title_services ? data[0].title_services : '',
          title_sphere: data[0].title_sphere? data[0].title_sphere : '',
          link_sphere: data[0].link_sphere? data[0].link_sphere : '',
          title_results: data[0].title_results? data[0].title_results : '',
          title_images: data[0].title_images? data[0].title_images : '',
          title_question: data[0].title_question? data[0].title_question : '',
          link_question: data[0].link_question? data[0].link_question : '',
          services: servicesArr,
          spheres: spheresArr,
          images_result: imageResult,
          list_result: listResult,
          table: data[0].table? data[0].table : '',
          trust_images: data[0].trust_images? data[0].trust_images : '',
        };
    }

}));
