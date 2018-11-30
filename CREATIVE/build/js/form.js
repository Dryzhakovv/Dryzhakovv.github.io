
var form = document.querySelector(".feedback-form");

form.addEventListener("submit", function(evt) {

    var re = /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/;
    var flag;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid) {
        var output = 'Номер телефона введен правильно!';
        flag = 1;
    } else {
        var output = 'Номер телефона введен неправильно!';
        flag = 0;
    }

    console.log(output);

    if (flag) {
        window.upload(new FormData(form),function() {
            alert("Данные отправлены");
        })
    } else { alert("Данные не отправлись");
    }
    evt.preventDefault();
});