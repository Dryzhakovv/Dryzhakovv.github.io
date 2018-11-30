(function() {
    var URL = "form.php";
    window.upload = function(data, onSuccess) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("load",function() {
        	onSuccess();
        });
        xhr.open("POST", URL);
        xhr.send(data);
    }
})();