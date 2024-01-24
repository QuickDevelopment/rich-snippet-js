import RichSnippetType from "../Types/RichSnippetType.ts";

export default class RichSnippet {
    protected data: RichSnippetType = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
    };

    public toJSON(): string {
        return JSON.stringify(this.data, null, 2);
    }

    public appendToHead(): void {
        if (document.head) {
            const jsonLdScript: HTMLScriptElement = document.createElement('script');
            jsonLdScript.type = 'application/ld+json';
            jsonLdScript.innerHTML = this.toJSON();
            document.head.appendChild(jsonLdScript);
        } else {
            console.error("Document head not found.");
        }
    }
}