chrome.storage.sync.get({hab: false},function(val){
    if (val.hab){
        var items = document.body.children;
        for (var i = 0; i < items.length; i++) {
            var pepe =  items[i].innerHTML.replace(/>([^<]+)</g, function(a){
                return a.replace(/[aeiou]/g, 'e');
            });
            items[i].innerHTML = pepe;
        }
    }
});
