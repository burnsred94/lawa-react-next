"use strict";
/**
 * main-page controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController('api::main-page.main-page', ({ strapi }) => ({
    async find(ctx) {
        ctx.request.query = {
            populate: ['header_image', 'services.preview_img', 'approach_image', 'cases.image', 'approach_list.img', 'reviews.logo', 'trust_images'],
        };
        console.log(ctx);
        const { data } = await super.find(ctx);
        const { attributes } = data;
        let apList = [];
        attributes.approach_list.map((item) => {
            apList.push({
                id: item.id,
                title: item.title,
                description: item.description,
                img: {
                    name: item.img.data.attributes.name,
                    url: item.img.data.attributes.url
                }
            });
        });
        let revList = [];
        attributes.reviews.data.map((item) => {
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
            });
        });
        let trustArr = [];
        attributes.trust_images.data.map((item) => {
            trustArr.push({
                id: item.id,
                name: item.attributes.name,
                url: item.attributes.url
            });
        });
        let serviceArr = [];
        attributes.services.data.map((item) => {
            serviceArr.push({
                id: item.id,
                title: item.attributes.title,
                slug: item.attributes.slug,
                img: {
                    name: item.attributes.preview_img.data.attributes.name,
                    url: item.attributes.preview_img.data.attributes.url
                },
            });
        });
        let caseArr = [];
        attributes.cases.data.map((item) => {
            caseArr.push({
                id: item.id,
                description: item.attributes.description,
                link: item.attributes.link,
                img: {
                    name: item.attributes.image.data.attributes.name,
                    url: item.attributes.image.data.attributes.url
                }
            });
        });
        console.log(caseArr);
        return {
            title: attributes.title,
            sub_title: attributes.sub_title,
            time_work: attributes.time_work,
            header_img: {
                name: attributes.header_image.data.attributes.name,
                url: attributes.header_image.data.attributes.url,
            },
            title_services: attributes.title_services,
            services: serviceArr,
            title_approach: attributes.title_approach,
            approach_image: {
                name: attributes.approach_image.data.attributes.name,
                url: attributes.approach_image.data.attributes.url,
            },
            approach_list: apList,
            slogan: attributes.slogan,
            title_form: attributes.title_form,
            description_form: attributes.description_form,
            title_cases: attributes.title_cases,
            link_case: attributes.link_case,
            case: caseArr,
            title_review: attributes.title_review,
            link_review: attributes.link_review,
            reviews: revList,
            title_trust: attributes.title_trust,
            trust_images: trustArr,
            title_questions: attributes.title_qustions,
            link_question: attributes.link_question
        };
    }
}));
