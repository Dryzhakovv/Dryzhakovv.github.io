$(document).ready(function () {
    $(".calculator__input").keypress(function (keyObj) {
        if (keyObj.key < 0 || keyObj.key == "-") return false;
    });
});

$(".calculator").click(function (event) {
    calc_work(event);
});
$(".calculator__form").on("submit",function(event) {
    event.preventDefault();
    calc_work(event);
});

function calc_work(event) {
    var a = parseFloat($('#input__S1').val()), //площадь стен в Сухих помещениях
        f = parseFloat($('#input__S2').val()), //площадь потолка в сухих помещениях
        b = parseFloat($('#input__G1').val()), //площадь стен во Влажных помещениях
        d = parseFloat($('#input__G2').val()), //откос во влажном помещении
        c = parseFloat($('#input__F1').val()),
        m = parseFloat($('#input__F2').val()),
        e = parseFloat($('#sq__s1').val()), //толщина
        g = parseFloat($('#sq__g1').val()),
        k = parseFloat($("#sq__f1").val()),
        s = parseFloat($("#sqWarm").val()),
        sum1 = false,
        sum2 = false, //толщина 
        sum3 = false,
        sum4 = false,
        cost = 0,
        itogo = 0,
        e_ = {
            '0': 0,
            '5': 469,
            '10': 499,
            '15': 534,
            '20': 569,
            '25': 604,
            '30': 639
        },
        g_ = {
            '0': 0,
            '5': 476,
            '10': 537,
            '15': 598,
            '20': 659,
            '25': 720,
            '30': 781
        };
    k_ = {
        '0': 0,
        '5': 476,
        '10': 537,
        '15': 598,
        '20': 659,
        '25': 720,
        '30': 781
    };

    if (!a) {
        a = 0;
    }
    if (!b) {
        b = 0;
    }
    if (!c) {
        c = 0;
    }
    if (!d) {
        d = 0;
    }
    if (!e) {
        e = 0;
    }
    if (!f) {
        f = 0;
    }
    if (!g) {
        g = 0;
    }
    if (!m) {
        m = 0;
    }
    if (!s) {
        s = 0;
    }
    if (!k) {
        k = 0;
    }
    //расчет стоимости
    if (a + b + f <= 150) {
        cost = e_[e] * a + g_[g] * b + k_[k] * c + (350 + 303) * s + (350 + 95 + 50) * d + (350 + 95 + 50) * m + (350 + 157 + 50) * f;
        if  ( (e_[e] * a  + (350 + 157 + 50) * f) >= 0 ) {
             var sumInside =  e_[e] * a  + (350 + 157 + 50) * f;
              sum1 = true;
        }  if ( g_[g] * b  + (350 + 95 + 50) * d >= 0) {
            var sumDec =  g_[g] * b  + (350 + 95 + 50) * d;
            sum2 = true;
        } if (  k_[k] * c + (350 + 95 + 50) * m >= 0 ) {
            var sumFasad =  k_[k] * c + (350 + 95 + 50) * m ;
             sum3 = true;
        }  if ((350 + 303) * s >= 0) {
            var sumWarm = (350 + 303) * s;
            sum4= true;
        }
    } else {
        cost = e_[e] * a + g_[g] * b + k_[k] * c + (350 + 303) * s + (350 + 95) * d + (350 + 95 + 50) * m + (350 + 157) * f;
        if  ( (e_[e] * a  + (350 + 157 + 50) * f) >= 0 ) {
            var sumInside =  e_[e] * a  + (350 + 157 + 50) * f;
             sum1 = true;
       } if ( g_[g] * b  + (350 + 95 + 50) * d >= 0) {
           var sumDec =  g_[g] * b  + (350 + 95 + 50) * d;
           sum2 = true;
       }  if (  k_[k] * c + (350 + 95 + 50) * m > 0 ) {
           var sumFasad =  k_[k] * c + (350 + 95 + 50) * m ;
            sum3 = true;
       }  if ((350 + 303) * s >= 0) {
           var sumWarm = (350 + 303) * s;
           sum4= true;
       }
    }
    //расчет скидки от суммы
    // if (cost >= 100000 && cost < 200000) {
    // 	skidka = 1.5;
    // }else if (cost >= 200000 && cost < 300000) {
    // 	skidka = 3.3;
    // }else if (cost >= 300000 && cost < 400000) {
    // 	skidka = 4;
    // }else if (cost >= 400000) {
    // 	skidka = 5;
    // }
    // sale = skidka / 100;

    //итоговая стоимость со сидкой
    //itogo = cost - cost * sale;
    if (event.type == "submit") {
        if (sum1) {
            $("#first").text("Внутр. штукатурка " + sumInside + " руб");
            sum1 = false;
        }
        if (sum2) {
            $("#second").text("Дек. штукатурка " + sumDec + " руб" );
            sum2 = false; 
        }
        if (sum3) {
            $("#third").text("Фас. штукатурка " + sumFasad + " руб" );
            sum3 = false;
        }
        if (sum4) {
            $("#fourth").text("Утип. фасада " + sumWarm + " руб" );
            sum4 = false;
        }
        $(".total-price").text(  " " + +(sumInside + sumDec + sumFasad + sumWarm) + " руб");
    }
    itogo = cost;
    $(".calculator-price__money").text(itogo);
}
