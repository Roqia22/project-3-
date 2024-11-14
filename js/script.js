var btn=document.querySelectorAll("#btn");
btn.forEach(function(item){
    item.onclick=function(){
        item=alert("The Text is Copied")
    }
}
)
