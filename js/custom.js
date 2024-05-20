function openLangTab(evtEd, codeName) {
    var indexEditor, proglanguage, progtablinks;
    proglanguage = document.getElementsByClassName("proglang");
    for (indexEditor = 0; indexEditor < proglanguage.length; indexEditor++) {
        proglanguage[indexEditor].style.display = "none";
    }
    progtablinks = document.getElementsByClassName("codeeditorbr-tablink");
    for (indexEditor = 0; indexEditor < proglanguage.length; indexEditor++) {
        progtablinks[indexEditor].className = progtablinks[indexEditor].className.replace(" ws-grey", "");
    }
    document.getElementById(codeName).style.display = "block";
    evtEd.currentTarget.className += " ws-grey";
}

function w3_open() {
    var x = document.getElementById("myAccordion");
    if (x.style.display === 'none') {
        x.style.display = 'block';
        if (document.getElementById("navbtn_menu")) {
            document.getElementById("navbtn_menu").getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("navbtn_menu").getElementsByTagName("i")[1].style.display = "inline";
        }
    } else {
        x.style.display = 'none';
        if (document.getElementById("navbtn_menu")) {
            document.getElementById("navbtn_menu").getElementsByTagName("i")[0].style.display = "inline";
            document.getElementById("navbtn_menu").getElementsByTagName("i")[1].style.display = "none";
        }
    }
}
function w3_close() {
    document.getElementById("myAccordion").style.display = "none";
}
function open_xs_menu(x) {
    if (document.getElementById("sectionxs_" + x).innerHTML == "") {
        document.getElementById("sectionxs_" + x).innerHTML = document.getElementById("nav_" + x).innerHTML;
    } else {
        document.getElementById("sectionxs_" + x).innerHTML = "";
    }
}
function w3_open_nav(x) {
    if (document.getElementById("nav_" + x).style.display == "block") {
        w3_close_nav(x);
    } else {
        w3_close_nav("tutorials");
        w3_close_nav("references");
        w3_close_nav("exercises");
        document.getElementById("nav_" + x).style.display = "block";
        if (document.getElementById("navbtn_" + x)) {
            document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "none";
            document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "inline";
            document.getElementById("navbtn_" + x).classList.add("mystyle");
        }
        if (x == "search") {
            if (document.getElementById("gsc-i-id1")) { document.getElementById("gsc-i-id1").focus(); }
        }
    }
}
function w3_close_all_nav() {
    w3_close_nav("tutorials");
    w3_close_nav("references");
    w3_close_nav("exercises");
    w3_close();
}
function w3_close_nav(x) {
    document.getElementById("nav_" + x).style.display = "none";
    if (document.getElementById("navbtn_" + x)) {
        document.getElementById("navbtn_" + x).getElementsByTagName("i")[0].style.display = "inline";
        document.getElementById("navbtn_" + x).getElementsByTagName("i")[1].style.display = "none";
        document.getElementById("navbtn_" + x).classList.remove("mystyle");
    }
}
// function mouseoverdarkicon() {
//   var a = document.getElementById("darkmodemenu");
//   a.style.top = "75px";
// }
// function mouseoutofdarkicon() {
//   var a = document.getElementById("darkmodemenu");
//   a.style.top = "5px";
// }
function changepagetheme(n) {
    var a = document.getElementById("radio_darkcode");
    var b = document.getElementById("radio_darkpage");
    document.body.className = document.body.className.replace("darktheme", "");
    document.body.className = document.body.className.replace("darkpagetheme", "");
    document.body.className = document.body.className.replace("  ", " ");
    if (a.checked && b.checked) {
        localStorage.setItem("preferredmode", "light");
        localStorage.setItem("preferredpagemode", "light");
        a.checked = false;
        b.checked = false;
        // document.getElementById("wavepath").style.fill = "#282A35";
    } else {
        document.body.className += " darktheme";
        document.body.className += " darkpagetheme";
        localStorage.setItem("preferredmode", "dark");
        localStorage.setItem("preferredpagemode", "dark");
        a.checked = true;
        b.checked = true;
        // document.getElementById("wavepath").style.fill = "rgb(13,23,33)";
    }
}


function click_darkpage() {
    var b = document.getElementById("radio_darkpage");
    if (b.checked) {
        document.body.className += " darkpagetheme";
        document.body.className = document.body.className.replace("  ", " ");
        localStorage.setItem("preferredpagemode", "dark");
        // document.getElementById("wavepath").style.fill = "rgb(13,23,33)";

    } else {
        document.body.className = document.body.className.replace("darkpagetheme", "");
        document.body.className = document.body.className.replace("  ", " ");
        localStorage.setItem("preferredpagemode", "light");
        // document.getElementById("wavepath").style.fill = "#282A35";
    }
}

function click_darkcode() {
    var a = document.getElementById("radio_darkcode");
    if (a.checked) {
        document.body.className += " darktheme";
        document.body.className = document.body.className.replace("  ", " ");
        localStorage.setItem("preferredmode", "dark");
    } else {
        document.body.className = document.body.className.replace("darktheme", "");
        document.body.className = document.body.className.replace("  ", " ");
        localStorage.setItem("preferredmode", "light");
    }
}

function changecodetheme() {
    var cc = document.body.className;
    if (cc.indexOf("darktheme") > -1) {
        document.body.className = cc.replace("darktheme", "");
        localStorage.setItem("preferredmode", "light");
    } else {
        document.body.className += " darktheme";
        localStorage.setItem("preferredmode", "dark");
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en',
        autoDisplay: false,
        gaTrack: true,
        gaId: 'UA-3855518-1',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
    }, 'google_translate_element');
}
function clickFBLike() {
    document.getElementById("fblikeframe").style.display = 'block';
    document.getElementById("popupDIV").innerHTML = "<iframe src='/fblike.asp?r=" + Math.random() + "' frameborder='no' style='height:200px;width:250px;'></iframe><br><button onclick='hideFBLike()' class='w3-button w3-round w3-large black-color'>Close</button>";
}
function hideFBLike() {
    document.getElementById("fblikeframe").style.display = 'none';
}


(
    function setThemeMode() {
        var x = localStorage.getItem("preferredmode");
        var y = localStorage.getItem("preferredpagemode");
        if (x == "dark") {
            document.body.className += " darktheme";
            document.getElementById("radio_darkcode").checked = true;

        }
        if (y == "dark") {
            document.body.className += " darkpagetheme";
            // document.getElementById("wavepath").style.fill = "rgb(13,23,33)";
            document.getElementById("radio_darkpage").checked = true;

        }
    })();