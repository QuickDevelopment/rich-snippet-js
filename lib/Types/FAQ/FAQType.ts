import QuestionType from "./QuestionType";

export default interface FAQType {
    "@context": string;
    "@type": "FAQPage";
    mainEntity?: QuestionType[];
}