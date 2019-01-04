import * as noUiSlider from "nouislider";

const wNumb = require("wnumb");

export function initRangeSlider() {
    // Exist when component don't exist
    if (!$(".cpt-range-slider").length) {
        return;
    }
   //  buildRangesSliders();
    var handlesSlider = document.getElementById('cpt-id-range-slider');

    noUiSlider.create(handlesSlider, {
        start: [4000, 8000],
        range: {
            'min': [2000],
            'max': [10000]
        }
    });
    console.log("handlesSlider .... ");
    
}

function buildRangesSliders() {
    // default parametrage slider
    const defaultConfig = {
        connect: true,
        format: wNumb({
            decimals: 0
        })
    };
    const range = $(".cpt-range-slider .slide-range");
    let i;
    let rangeItem;
    for (i = 0; i < range.length; i++) {
        const currentRange = $(range[i]);
        const localConfig = {
            start: [currentRange.data("minCurrent") || currentRange.data("min"),
            currentRange.data("maxCurrent") || currentRange.data("max")],
            step: currentRange.data("step"),
            range: {
                min: currentRange.data("min"),
                max: currentRange.data("max")
            }
        };
        const finalConfig = Object.assign({}, localConfig, defaultConfig);
        if (currentRange.data("unit")) {
            const format = finalConfig.format;
            format.suffix = currentRange.data("unit");
            finalConfig.format = wNumb(format);
        }
        rangeItem = noUiSlider.create(currentRange[0], finalConfig);
        currentRange[0].noUiSlider.on("update", handleBudgetUpdate.bind(currentRange[0]));
    }

    console.log("buildRangesSliders OK !!!! 453");
    
}

/**
 * handle budget is updated, bind to element owns slider
 * @param values
 */
function handleBudgetUpdate(values) {
    const slider = $(this);
    const sliderLabels = slider.siblings(".slider-label");
    const budgetLabels = slider.siblings(".slider-values");
    budgetLabels.removeClass("hidden");
    budgetLabels.find(".min-value").html(values[0]);
    budgetLabels.find(".max-value").html(values[1]);
    sliderLabels.find(".label-min").html(values[0]);
    sliderLabels.find(".label-max").html(values[1]);
    let min;
    let max;
    let inputValue;
    if (String(slider.data("min")) !== values[0].replace("€", "")) {
        min = values[0].replace("€", "");
    }
    if (String(slider.data("max")) !== values[1].replace("€", "")) {
        max = values[1].replace("€", "");
    }
    if (min) {
        inputValue = min;
        if (max) {
            inputValue += "," + max;
        }
    } else if (max) {
        inputValue = "0," + max;
    }
    const input = slider.siblings(".price-input");
    if (inputValue) {
        input.attr("disabled", false);
        input.val(inputValue);
    } else {
        input.attr("disabled", true);
    }

}