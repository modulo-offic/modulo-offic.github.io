const switchTumblerHandler = () => {
const wrapper = document.querySelector('.tumbler__wrapper');
    wrapper.addEventListener('click', () => {
    toggleNightMode();
    });
}; 

const toggleNightModeLoad = () => {
    document.body.classList.toggle('body--night-mode');
    document.querySelector('.tumbler').classList.toggle('tumbler--night-mode');
    document.querySelectorAll('.post').forEach(post => {
        post.classList.toggle('post--night-mode');
    });
};

const toggleNightMode = () => {
    document.body.classList.toggle('body--night-mode');
    document.querySelector('.tumbler').classList.toggle('tumbler--night-mode');
    document.querySelectorAll('.post').forEach(post => {
        post.classList.toggle('post--night-mode');
    
    });
    let theme_click = getCookie("theme");
    if (theme_click == "lite"){
        let date = new Date(Date.now());
        date.setFullYear(date.getFullYear + 12);
        date = date.toUTCString();
        document.cookie = "theme=dark; path=/; expires="+date;
    
    }else{
        let date = new Date(Date.now());
        date.setFullYear(date.getFullYear + 12);
        date = date.toUTCString();
        document.cookie = "theme=lite; path=/; expires="+date;
    };
    };

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
};


var theme = getCookie("theme");
if (theme == "dark"){
    toggleNightModeLoad();
}


switchTumblerHandler();