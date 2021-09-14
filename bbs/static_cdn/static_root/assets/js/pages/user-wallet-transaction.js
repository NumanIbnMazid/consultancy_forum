// ************************************** User Wallet Transaction Scripts **************************************

$(function ($) {
    // inputs
    let userInput = $("#id_user")
    let transactionTypeInput = $("#id_transaction_type")
    let pointPlanInput = $("#id_point_plan")
    let flatRatePlanInput = $("#id_flat_rate_plan")
    // groups
    let userInputGroup = $("#id_user-group")
    let transactionTypeInputGroup = $("#id_transaction_type-group")
    let pointPlanInputGroup = $("#id_point_plan-group")
    let flatRatePlanInputGroup = $("#id_flat_rate_plan-group")

    // add required tag
    $("#id_point_plan-label").append("<small class='text-danger'> *</small>")
    $("#id_flat_rate_plan-label").append("<small class='text-danger'> *</small>")


    function handleInputs(transactionTypeInputVal=null) {
        if (transactionTypeInputVal === null) {
            transactionTypeInputVal = parseInt(transactionTypeInput.val())
        }
        if (transactionTypeInputVal === 0) {
            pointPlanInputGroup.removeClass("hidden")
            flatRatePlanInputGroup.addClass("hidden")
            pointPlanInput.prop("required", true)
            flatRatePlanInput.prop("required", false)
            flatRatePlanInput.val(null)
        } else {
            pointPlanInputGroup.addClass("hidden")
            flatRatePlanInputGroup.removeClass("hidden")
            pointPlanInput.prop("required", false)
            flatRatePlanInput.prop("required", true)
            pointPlanInput.val(null)
        }
    }

    handleInputs()

    $(transactionTypeInput).change(function () {
        handleInputs(transactionTypeInputVal=parseInt($(this).val()))
    })

    // select2 arrow customization
    $(".select2-selection__arrow").html("<i class='fas fa-caret-square-down font-23'></i>")

})

// ************************************** /User Wallet Transaction Scripts **************************************