﻿// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/Modes/Modes.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        }
    });
})();
function loadPara(x) {
    localStorage.setItem("currentMode",x);
    var msg = Windows.UI.Popups.MessageDialog("Mode Applied!");
    msg.showAsync();
}
function quickC() {
    //input validation
    var input = document.getElementById("QuickCustom").value;
    var re = /[#<>]/;
    var re2 = /[a-zA-Z0-9]+ [a-zA-Z0-9]+/;
    if (re.test(input)||!re2.test(input)) {
        msg = Windows.UI.Popups.MessageDialog("Not a valid paragraph, remove '<' , '>' , '#' and single words");
        msg.showAsync();
    }
    else {
        localStorage.setItem("currentMode", "quickcustom");
        localStorage.setItem("quickcustom", "1");
        localStorage.setItem("quickcustom1", input.trim());
        var msg = Windows.UI.Popups.MessageDialog("Mode Applied!");
        msg.showAsync();
    }
}