const cookies_box = document.createElement('div');
cookies_box.id = "cookies-box-div";

const information_section = document.createElement('section');

const headline = document.createElement('h3');
headline.id = "cookies-box-header";

const message = document.createElement('div');
message.id = "cookies-box-message";

const buttons_section = document.createElement('section');
buttons_section.id = "cookies-box-section";

const btn1 = document.createElement('button');
btn1.id = "btn-necessary";
btn1.innerHTML = "<h2>Necessary Only</h2>";


const btn2 = document.createElement('button');
btn2.id = "btn-all";
btn2.innerHTML = "<h2>Accept All</h2>";
btn2.style.marginLeft = "auto";
btn2.style.marginRight = "10px";

const btn3div = document.createElement('div');
btn3div.style.width = "100%";
btn3div.style.display = "flex";
btn3div.style.justifyContent = "center";

const btn3 = document.createElement('button');
btn3.id = "btn-deny-all";
btn3.innerText = "Deny All Cookies";
btn3.style.fontSize = "16px";
btn3.style.padding = "5px";

btn3div.appendChild(btn3);

cookies_box.appendChild(headline);

information_section.appendChild(message);

buttons_section.appendChild(btn1);
buttons_section.appendChild(btn2);

information_section.appendChild(buttons_section);

cookies_box.appendChild(information_section);
cookies_box.appendChild(btn3div);

headline.innerText = "Please manage your Cookies before continuing!!";

/*Uses backticks to make multiline for readability*/
message.innerHTML = `<p>Hello! We use cookies to give you the best possible experience.
We value your privacy and handle the data we collect with the utmost care..</p>
<p style="font-size: 13px">Necessary cookies are only used to make the website work.</p>`;

for (const button of [btn1, btn2, btn3]) {
    Object.assign(button.style, {
    borderStyle: "outset",
    borderWidth: "1px",
    borderRadius: "15px",
    });
}

Object.assign(cookies_box.style, {
    width: "fit-content",
    backgroundColor: "AliceBlue",
    borderRadius: "15px",
    padding: "15px",
    position: "fixed",
    bottom: "0",
    left: "0",
    marginLeft: "40px",
    marginBottom: "40px"
});

Object.assign(headline.style, {
    borderStyle: "outset",
    borderWidth: "1px",
    borderRadius: "10px",
    padding: "8px",
    marginBottom: "0px"
});

Object.assign(message.style, {
    fontFamily: "Quicksand, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif", /*Fonts should fallback to work on all relevant platforms*/
    maxWidth: "400px",
    marginTop: "0px",
    marginBottom: "0px",
});

Object.assign(information_section.style, {
    width: "auto",
    height: "20px",
    padding: "5px",
    display: "inline",
    margin: "0px"
});

Object.assign(buttons_section.style, {
    width: "auto",
    height: "auto",
    padding: "5px",
    display: "flex",
    marginBottom: "0px"
});


function hide_cookies_box() {
    cookies_box.style.display = "none";

    const choice = document.getElementById("cookies-choice-footer");
    if (choice !== null) {
        cookieChoice = localStorage.getItem("cookies_answered");

        if (cookieChoice === "necessary") {
            choice.innerText = "You have allowed us to use only necessary cookies for your experience.";
        } else if (cookieChoice === "all") {
            choice.innerText = "You have allowed us to use all cookies for your best experience!";
        } else if (cookieChoice === "deny") {
            choice.innerText = "You have forbidden the use of cookies. We collect no information, but can not guarantee your experience.";
        }
    }
}

function show_cookies_box() {
    cookies_box.style.display = "block";
}

function try_show_cookies() {

    if (!localStorage.getItem("cookies_answered")) {
        show_cookies_box();
    } else {
        hide_cookies_box();
    }

    cookieChoice = localStorage.getItem("cookies_answered");

    const choice = document.getElementById("cookies-choice-footer");
    if (choice !== null) {
        cookieChoice = localStorage.getItem("cookies_answered");

        if (cookieChoice === "necessary") {
            choice.innerText = "You have allowed us to use only necessary cookies for your experience.";
        } else if (cookieChoice === "all") {
            choice.innerText = "You have allowed us to use all cookies for your best experience!";
        } else if (cookieChoice === "deny") {
            choice.innerText = "You have forbidden the use of cookies. We collect no information, but can not guarantee your experience.";
        }
    }
}

function accept_all_cookies() {
    localStorage.setItem("cookies_answered", "all");
    hide_cookies_box();
}

function accept_necessary_cookies() {
    localStorage.setItem("cookies_answered", "necessary");
    hide_cookies_box();
}

function deny_all_cookies() {
    localStorage.setItem("cookies_answered", "deny");
    hide_cookies_box();
}

btn1.addEventListener("click", accept_necessary_cookies);
btn2.addEventListener("click", accept_all_cookies);
btn3.addEventListener("click", deny_all_cookies);
try_show_cookies();

const footerBtn = document.getElementById('manage-cookies-btn');

if (footerBtn) {
    footerBtn.onclick = show_cookies_box;
}

document.body.appendChild(cookies_box);
