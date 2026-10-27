// квадратное уравнение
function square() {
    var a = +document.querySelector('#A').value || 0;
    var b = +document.querySelector('#B').value || 0;
    var c = +document.querySelector('#C').value || 0;
    var box = document.querySelector('#korni');

    box.innerHTML = '';

    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                box.innerHTML = '<li class="list-group-item">Верно при любом x</li>';
            } else {
                box.innerHTML = '<li class="list-group-item">Решений нет</li>';
            }
        } else {
            box.innerHTML = '<li class="list-group-item">Линейное уравнение</li>' +
                            '<li class="list-group-item">x = ' + (-c / b).toFixed(2) + '</li>';
        }
    } else {
        var D = b * b - 4 * a * c;

        if (D > 0) {
            var x1 = (-b + Math.sqrt(D)) / (2 * a);
            var x2 = (-b - Math.sqrt(D)) / (2 * a);
            box.innerHTML = '<li class="list-group-item">D = ' + D.toFixed(2) + '</li>' +
                            '<li class="list-group-item">x&#8321; = ' + x1.toFixed(2) + '</li>' +
                            '<li class="list-group-item">x&#8322; = ' + x2.toFixed(2) + '</li>';
        } else if (D === 0) {
            var x = -b / (2 * a);
            box.innerHTML = '<li class="list-group-item">D = 0</li>' +
                            '<li class="list-group-item">x = ' + x.toFixed(2) + '</li>';
        } else {
            box.innerHTML = '<li class="list-group-item">D = ' + D.toFixed(2) + '</li>' +
                            '<li class="list-group-item">Корней нет</li>';
        }
    }
}

function calculate() {
    var money = +f.money.value || 0;
    var months = +f.months.value || 0;
    var rate = (+f.stavka.value || 0) / 100;

    var years = months / 12;

    var result = Math.round(money * (1 + rate) ** years);

    document.querySelector('#mon-before').innerHTML = money + ' (за ' + months + ' мес.)';
    document.querySelector('#mon-after').innerHTML = result;

    var gist = document.querySelector('#gist');
    if (money > 0) {
        gist.style.height = Math.round(100 * result / money) + 'px';
    } else {
        gist.style.height = '0px';
    }
}

var f = document.forms.calculator;
f.money.onchange = calculate;
f.months.onchange = calculate;
f.stavka.oninput = calculate;

calculate();