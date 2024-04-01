$(function(){
    $("img").hover(showname);
})
showname(){
    var image = $(this);
    // let imag = par.attr("src");
    // myid.innerHTML = imag.value;


    var source = document.getElementById("src").val();
    var input= document.getElementById("input");
    input.innerHTML=source.value;
};