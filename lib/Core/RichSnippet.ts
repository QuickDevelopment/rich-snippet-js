export default class RichSnippet<T> {
    protected data: T;

    constructor(initialData: T) {
        this.data = initialData;
    }

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