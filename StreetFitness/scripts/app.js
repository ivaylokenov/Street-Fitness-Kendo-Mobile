(function (global) {
    
    var app = global.app = global.app || {};

    document.addEventListener("deviceready", function () {
        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout", transition: "slide" });
    }, false);
    
})(window);