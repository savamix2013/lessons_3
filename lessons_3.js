const num = Math.floor(Math.random() * 101);
const num_s = num.toString();
let first_d, second_d; // Оголошуємо змінні тут

if (num_s.length === 1) {
    // Опрацювання однозначного числа
    secondNum(num_s);
} else if (num_s.length === 2) {
    // Опрацювання двозначного числа
    firstNum(num_s[0]);
    secondNum(num_s[1]);
}

function firstNum(x) {
    switch (x) {
        case "2":
            first_d = "Twenty";
            break;
        case "3":
            first_d = "Thirty";
            break;
        case "4":
            first_d = "Forty";
            break;
        case "5":
            first_d = "Fifty";
            break;
        case "6":
            first_d = "Sixty";
            break;
        case "7":
            first_d = "Seventy";
            break;
        case "8":
            first_d = "Eighty";
            break;
        case "9":
            first_d = "Ninety";
            break;
        default:
            first_d = ""; // Додайте обробку інших випадків за потреби
    }
}

function secondNum(y) {
    switch (y) {
        case "0":
            second_d = "Zero";
            break;
        case "1":
            second_d = "One";
            break;
        case "2":
            second_d = "Two";
            break;
        case "3":
            second_d = "Three";
            break;
        case "4":
            second_d = "Four";
            break;
        case "5":
            second_d = "Five";
            break;
        case "6":
            second_d = "Six";
            break;
        case "7":
            second_d = "Seven";
            break;
        case "8":
            second_d = "Eight";
            break;
        case "9":
            second_d = "Nine";
            break;
        default:
            second_d = ""; // Додайте обробку інших випадків за потреби
    }
}

console.log(num, "=>", first_d, second_d);
