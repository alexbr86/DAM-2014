$(function(){
    var li = document.querySelectorAll('.user');
    for (var i = 0; i < li.length; i++) {
        console.log(li[i].dataset);
        if (li[i].dataset.lang === "es"){
            li[i].dataset.lang = "es_ES";
            console.log(li[i].dataset.lang);
        }
        if(li[i].dataset.delete && li[i].dataset.delete === "true"){
            li[i].parentNode.removeChild(li[i]);
        }
    }
});