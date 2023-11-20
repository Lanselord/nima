var Form = document.querySelector(".form")
var inputName = document.querySelector(".inputName");
var inputYosh = document.querySelector(".inputYosh");
var inputIsh = document.querySelector(".inputIsh");
var text = document.querySelector(".text");
// var btn = document.querySelector(".btn");

Form.addEventListener("submit", function(evt) {
    evt.preventDefault();

    var ism = inputName.value.trim()
    var yosh = inputYosh.value.trim()
    var iw = inputIsh.value.trim()

    text.textContent = `Sening yoshing ${ism}, Sening yoshing ${yosh}da , Sening ish joying ${iw} da`
})