import { DataImg, Image, ImageObject } from "./image.interface";
export interface ApproachList {
    id: number;
    title: string;
    description: string;
    img: DataImg;
}

export interface Attributes {
    title: string;
    sub_title: string;
    time_work: string;
    title_services: string;
    title_approach: string;
    slogan: string;
    title_trust: string;
    title_form: string;
    description_form: string;
    title_qustions: string;
    link_question: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    approach_list: ApproachList[];
    approach_image: Image;
    trust_images: {data: [ImageObject]};
    header_image: Image;
}


export interface MainPage {
    data: {
        id: number;
        attributes:Attributes
    }
}


