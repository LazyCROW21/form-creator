export type MySection = {
    title: string;
    questions: string[];
}

export type MyForm = {
    title: string;
    descrption: string,
    sections: MySection[]
}