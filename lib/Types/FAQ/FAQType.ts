import QuestionType from "./QuestionType";
import RichSnippetType from "../RichSnippetType.ts";

export default interface FAQType extends RichSnippetType {
    "@context": string;
    "@type": "FAQPage";
    mainEntity?: QuestionType[];
}