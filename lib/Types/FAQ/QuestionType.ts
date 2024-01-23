import AnswerType from "./AnswerType";

export default interface QuestionType {
    "@type": "Question";
    name: string;
    acceptedAnswer: AnswerType;
}