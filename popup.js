chrome.storage.sync.get({hab: false},function(val){
        document.getElementById("toggle").value = val.hab?"Deshabilitar":"Habilitar";
});



document.getElementById("toggle").addEventListener("click", tog);

function tog() {
    chrome.storage.sync.get({hab: false},function(val){
        var c = !val.hab;

        chrome.storage.sync.set({hab: c}, function() {
            document.getElementById("toggle").value = c?"Deshabilitar":"Habilitar";
        });
    });
    
}
