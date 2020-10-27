// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};
    
var theme = getCookie("theme");
if (theme == "lite"){
    let date = new Date(Date.now());
    date.setMonth(date.getMonth + 12);
    date = date.toUTCString();
    document.cookie = "theme=dark; path=/; expires="+date;
    console.log(document.cookie);
}else{
    let date = new Date(Date.now());
    date.setMonth(date.getMonth + 12);
    date = date.toUTCString();
    document.cookie = "theme=lite; path=/; expires="+date;
    console.log(document.cookie);
}