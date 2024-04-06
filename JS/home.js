try {
    var switcher = document.getElementById('switchColor');
    var all_box = document.querySelectorAll('.box');
    function switchTarget(){
        for (let i = 0; i < all_box.length; i++) {
            if (all_box[i].classList.contains('active')){
                if (i+1 >= all_box.length){
                    all_box[0].classList.add('active');
                    all_box[all_box.length - 1].classList.remove('active');
                    return true;
                }
                all_box[i+1].classList.add('active');
                all_box[i].classList.remove('active');
                return true;
            }
        }
        return false; 
    };
    setInterval(() => switchTarget(), 5000);
} catch {
    console.warn("SDEV - Can't load color switcher.")
}

try {
    var sector_box = document.querySelectorAll('.selector-btn');
    var price_box = document.querySelectorAll('.price-list');
    for (let i = 0; i < sector_box.length; i++) {
        sector_box[i].addEventListener('click', () => {
            for (let i = 0; i < sector_box.length; i++) {
                sector_box[i].classList.remove('active');
            };
            for (let i = 0; i < sector_box.length; i++) {
                price_box[i].classList.remove('price-active');
            };
            sector_box[i].classList.add('active');
            price_box[i].classList.add('price-active');
        });
    };
} catch {
    console.warn("SDEV - Can't load proxy type selector.")
}

try {
    var features_box = document.querySelectorAll('.features-box');
    function switchTarget(){
        for (let i = 0; i < features_box.length; i++) {
            if (features_box[i].classList.contains('active')){
                if (i+1 >= features_box.length){
                    features_box[0].classList.add('active');
                    features_box[features_box.length - 1].classList.remove('active');
                    return true;
                }
                features_box[i+1].classList.add('active');
                features_box[i].classList.remove('active');
                return true;
            }
        }
        return false; 
    };
    setInterval(() => switchTarget(), 5000);
} catch {
    console.warn("SDEV - Can't load proxy type selector.")
}

try {
    var accordion_answer = document.querySelectorAll('.accordion-answer');
    var accordion_box = document.querySelectorAll('.accordion-btn');
    var closeup = document.querySelectorAll('.close');
    for (let i = 0; i < accordion_box.length; i++) {
        accordion_box[i].addEventListener('click', () => {
            if (accordion_box[i].classList.contains('active') == true){
                accordion_answer[i].classList.remove('dn');
                accordion_answer[i].classList.remove('active');
                closeup[i].classList.remove('dn');
                accordion_box[i].classList.remove('active');
            } else {
                accordion_answer[i].classList.add('dn');
                accordion_answer[i].classList.add('active');
                closeup[i].classList.add('dn');
                accordion_box[i].classList.add('active');
            };
        });
    };
} catch {
    console.warn("SDEV - Can't load FAQ JS.");
}