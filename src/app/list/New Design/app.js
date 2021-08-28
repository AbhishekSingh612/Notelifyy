function onScroll(){
//    var sc =  window.scrollY;
//     console.log(sc);
    // var a = document.getElementById("one").getBoundingClientRect();
    // var current = current();
    // console.log(a);
}


function onClick(temp){
    el = temp.style;
    el.position = 'fixed';
    //console.log(window.innerHeight);
    document.body.height = '100vh'
    document.body.style.overflow = 'hidden';
    el.height = '95vh';
    el.width = '95vw';
    console.log(el.height);
    el.top = '2vh';
    el.left = 0;
    el.zIndex = 999;
    el.WebkitTransition = 'any 0.7s';
    el.border = '1px solid yellow';
}