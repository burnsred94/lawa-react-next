import { MainPage } from "@/interfaces/main-page.interface";

export const mutationStructureMainPage = (props: MainPage) => {
    const { attributes } = props.data;
    console.log(attributes.approach_list)
    return {
        title: attributes.title,
        sub_title: attributes.sub_title,
        time_work: attributes.time_work,
        title_services: attributes.title_services,
        title_approach: attributes.title_approach,
        approach_image: attributes.approach_image.data.attributes.url,
        slogan: attributes.slogan,
        title_trust: attributes.title_trust,
        title_form: attributes.title_form,
        description_form: attributes.description_form,
        title_qustions: attributes.title_qustions,
        link_question: attributes.link_question,
        approach_list: attributes.approach_list.map((item) => ({
            title: item.title,
            description: item.description,
            img: item.img.data.attributes.url,
        })),
        trust_images: attributes.trust_images.data.map((item) => ({url: item.attributes.url})),
        header_image: attributes.header_image.data.attributes.url

    }

}