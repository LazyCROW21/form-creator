export type Option = {
    label: string;
    value: string;
}

export type TextQuestion = {
    label: string;
    placeholder: string;
}

export type CheckBoxQuestion = {
    label: string;
}

export type RadioQuestion = {
    groupLabel: string;
    options: Option[];
}

export type SelectQuestion = {
    label: string;
    options: Option[];
}

export enum QuestionTypes {
    Text,
    CheckBox,
    Radio,
    Select
}

export type Question = {
    type: QuestionTypes;
    key: string;
    props: any;
}

export type MySection = {
    title: string;
    questions: Question[];
}

export type MyForm = {
    title: string;
    descrption: string,
    sections: MySection[]
}