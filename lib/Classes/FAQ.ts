import QuestionType from "../Types/FAQ/QuestionType";
import AnswerType from "../Types/FAQ/AnswerType";
import RichSnippet from "../Core/RichSnippet";
import FAQType from "../Types/FAQ/FAQType.ts";

export default class FAQ extends RichSnippet<FAQType> {
    public constructor() {
        super({
            "@context": "https://schema.org",
            "@type": "FAQPage",
        });
    }

    private addQuestion(name: string, answer: string): this {
        const newQuestion: QuestionType = {
            "@type": "Question",
            name: name,
            acceptedAnswer: {
                "@type": "Answer",
                text: answer,
            },
        };

        if (!this.data.mainEntity) {
            this.data.mainEntity = [];
        }
        this.data.mainEntity.push(newQuestion);
        return this;
    }

    public addQuestions(questions: QuestionType[] | QuestionType): this {
        if (Array.isArray(questions)) {
            questions.forEach(({ name, acceptedAnswer }: {name: string, acceptedAnswer: AnswerType}) =>
                this.addQuestion(name, acceptedAnswer.text)
            );
        } else {
            this.addQuestion(questions.name, questions.acceptedAnswer.text);
        }
        return this;
    }
}