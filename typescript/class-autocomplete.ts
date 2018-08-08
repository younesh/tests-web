/**
 * The string template for the autocomplete UI
 * @type {{templateFlight templateHotel templateDestination}}
 */
export class Template {

    /**
     * Function to format suggestion entry inside suggestions container.
     * @param {string} value
     * @param {string} currentValue
     * @return {string} The search value
     */
    public searchValue(value: string, currentValue: string): string {
        // Do not replace anything if there current value is empty
        if (!currentValue) {
            return value;
        }

        // Make strong the suggestion value
        const escapeRegExChars = val => val.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        const pattern = "(" + escapeRegExChars(currentValue) + ")";

        return value
            .replace(new RegExp(pattern, "gi"), "<strong>$1<\/strong>")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/&lt;(\/?strong)&gt;/g, "<$1>");
    }

    /**
     * The string template for flight data
     * @param {string} value The destructuring parameter
     * @param {any} data The destructuring parameter
     * @param {string} currentValue The search value
     * @return {string} The flight template
     */
    public flight({value, data}: AutocompleteSuggestion, currentValue: string): string {
        console.log("this flight: ", this);
        console.log("Template: ", Template);
        const strongify = this.searchValue(value, currentValue);
        const {countryLabel, code} = data;

        return `
                    <span>${strongify}</span>, <span class="">${countryLabel}</span>
                    <span class="code">${code}</span>
                `;
    }

    /**
     * The string template for hotel data
     * @param {string} value The destructuring parameter
     * @param {any} data The destructuring parameter
     * @param {string} currentValue The search value
     * @returns {string} The hotel template
     */
    public hotel({value, data}: AutocompleteSuggestion, currentValue: string): string {
        const strongify = this.searchValue(value, currentValue);
        const {productAvailable} = data;

        return `
                    <span>${strongify}</span>
                    <span class="product-available">${productAvailable}</span>
                `;
    }

    /**
     * The string template for destination data
     * @param {string} value The destructuring parameter
     * @param {any} data The destructuring parameter
     * @param {string} currentValue The search value
     * @returns {string} The destination template
     */
    public destination({value, data}: AutocompleteSuggestion, currentValue: string): string {
        const strongify = this.searchValue(value, currentValue);
        const {code, countryLevel} = data;

        return `<span class="level-${countryLevel}" data-code="${code}">${strongify}</span>`;
    }

}