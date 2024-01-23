import FAQType from "../Types/FAQ/FAQType";
import QuestionType from "../Types/FAQ/QuestionType";

export default class FAQ {
    private readonly data: FAQType;

    constructor() {
        this.data = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
        };
    }

    addQuestion(name: string, answer: string): this {
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

    addQuestions(questions: QuestionType[]): this {
        if (!this.data.mainEntity) {
            this.data.mainEntity = [];
        }

        questions.forEach(({ name, acceptedAnswer }) =>
            this.addQuestion(name, acceptedAnswer.text)
        );

        return this;
    }

    toJSON(): string {
        return JSON.stringify(this.data, null, 2);
    }
}