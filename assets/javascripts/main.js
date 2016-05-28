!function() {
    $(document).on("ready", function() {
        var t=$(".js-main");
        $(".js-hamburger").on("click", function() {
            $(this).toggleClass("is-active"), t.toggleClass("is-showing-mobile-nav")
        }
        ),
        $("img[data-retina]").each(function() {
            $(this).attr("src", $(this).attr("data-retina"))
        }
        )
    }
    )
}
();