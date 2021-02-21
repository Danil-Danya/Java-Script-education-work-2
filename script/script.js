////////////////////////////////////////////////////
var a = +prompt(" Введите число ");
var b = +prompt(" Введите число ");
var c = +prompt(" Введите число ");

if (b > a && b < c || b < a && b > c ){
    alert(b);
}else if (a > b && a < c || a < b && a > c){
    alert(a);
}else if ( c > b && c < a || c < b && c > a){
    alert(c);
}else if (a == b || c){
    alert(a);
}else if (c == a || b){
    alert(c);
}else if (b == a || c){
    alert(b);
}else{
    alert(" Что-то пошло не так");
}
///////////////////////////////////////////////////


//////////////////////////////////////////////////
 var d = +prompt("Введите ваш возраст");

if (d == 0) {
    alert(" Вы еще не родились");
}else if (d <= 7){
    alert("Иди в садик");
}else if (d <= 19){
    alert("Иди уроки учи");
}else if (d <= 25){
    alert("Вы женились");
}else if (d <= 30){
    alert("У вас дети");
}else if (d <= 40){
    alert("Вы спиваетесь");
}else if (d <= 50){
    alert("Вы стареете");
}else if (d <= 100){
    alert ("Вы пенсионер");
}else if (d > 100){
    alert("Вы мертвы");
}else{
    alert("Что-то пошло не так")
}
/////////////////////////////////////////////////


/////////////////////////////////////////////////
var e = +prompt("Введите час")


switch(e){
    case 1:
        alert("Сейчас час ночи");
        break;
    case 2:
        alert("Сейчас два часов ночи");
        break;
    case 3:
        alert("Сейчас три часов ночи");
        break;
    case 4:
        alert("Сейчас четыре часов ночи");
        break;
    case 5:
        alert("Сейчас пять утра");
        break;
    case 6:
        alert("Сейчас шесть утра, вставай!");
        break;
    case 7:
        alert("Сейчас семь утра");
        break;
    case 8:
        alert("Сейчас восемь утра, иди в школу!");
        break;
    case 9:
        alert("Сейчас девять утра");
        break;
    case 10:
        alert("Сейчас десять утра");
        break;
    case 11:
        alert("Сейчас одинадцать утра");
        break;
    case 12:
        alert("Сейчас подень");
        break;
    case 13:
        alert("Сейчас час дня");
        break;
    case 14:
        alert("Сейчас два часа дня");
        break;
    case 15:
        alert("Сейчас три часа дня");
        break;
    case 16:
        alert("Сейчас четыре вечера");
        break;
    case 17:
        alert("Сейчас пять вечера");
        break;
    case 18:
        alert("Сейчас шесть вечера");
        break;
    case 19:
        alert("Сейчас семь вечера");
        break;
    case 20:
        alert("Сейчас восемь вечера");
        break;
    case 21:
        alert("Сейчас девять вечера");
        break;
    case 22:
        alert("Сейчас десять ночи");
        break;
    case 23:
            alert("Сейчас одинадцать ночи");
            break;
    case 24:
        alert("Сейчас двенадцать ночи, иди спать, а не за своим комупктером сиди");
        break;
    default:
        alert("А ты знал что в сутках 24 часа?")
}