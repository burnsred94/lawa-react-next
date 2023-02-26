interface Research {
        title: string,
        description: string,
        image: string,
        link: string
}

export interface DataPage { 
    slug: string,
    title: string,
    description: string,
    all_research: Research[],
    data_bp: {
        first_list: string[],
        last_list: string[],
    }
}