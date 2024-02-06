function autoResize($textarea) {
    $textarea.css("height", "auto").css("height", $textarea.prop('scrollHeight') + "px");
}

$(function () {

    $(".options").on("input", function () {
        autoResize($(this));
    });

    $(".options").on("focusout", function () {

        $(this).val($(this).val().trim());

        if ($(this).val() === "") {
            $(this).val($(this).prop("placeholder"));
        }

        autoResize($(this))
    });

    $("#option-1").click(function () {

        if ($("#option-2").prop("checked") === true) {
            $("#be-coherent").prop("checked", false);
        }
    });

    $("#option-2").click(function () {

        if ($("#be-coherent").prop("checked") === true) {
            $("#option-1").prop("checked", false);
        }
    });

    $("#be-coherent").click(function () {

        if ($("#option-1").prop("checked") === true) {
            $("#option-2").prop("checked", false);
        }
    });

    $("#color-theme").click(function () {

        const $html = $("html");
        const colorTheme = $html.attr("data-bs-theme");

        if (colorTheme === "light") {
            $html.attr("data-bs-theme", "dark");
            $(this).find("i").replaceWith(`<i class="bi bi-moon-stars"></i>`);
        } else {
            $html.attr("data-bs-theme", "light");
            $(this).find("i").replaceWith(`<i class="bi bi-sun"></i>`);
        }
    })
});
