export function initIncrementalField() {
    console.log("initIncrementalField ok!");
    $("body").on("click", ".incremental-controller .btn-increment", handleClickIncrement);
    $("body").on("click", ".incremental-controller .btn-decrement", handleClickDecrement);
}
/**
 * handle click decrement btn element
 * @param {JQuery.Event} evt
 */
let oldValue = 0;
let currentValue = 0;
function handleClickDecrement(evt) {
    const btnDecrementClicked = $(evt.currentTarget);
    const currentIncrementalField = btnDecrementClicked.parents(".cpt-incremental-field");
    const minValue = currentIncrementalField.data("min") * 1;
    oldValue = currentIncrementalField.data("current") * 1;
    if (oldValue === minValue) { return; }
    currentValue = oldValue - 1;
    currentIncrementalField.data("current", currentValue);
    btnDecrementClicked.next("input").val(currentValue);
    btnDecrementClicked.next("input").trigger("change");
}

function handleClickIncrement(evt) {
    const btnIncrementClicked = $(evt.currentTarget);
    const currentIncrementalField = btnIncrementClicked.parents(".cpt-incremental-field");
    const maxValue = currentIncrementalField.data("max") * 1;
    oldValue = btnIncrementClicked.siblings("input").val() * 1;
    if (oldValue === maxValue) { return; }
    currentValue = oldValue + 1;
    currentIncrementalField.data("current", currentValue);
    btnIncrementClicked.siblings("input").val(currentValue);
    btnIncrementClicked.siblings("input").trigger("change");
}