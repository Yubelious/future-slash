    var langclass = "en";
    $( document ).ready(function() {
        console.log("ready");
        $('#lang-select').change(function(){
            document.getElementById("flags").className = $("#lang-select").val();
        });
    });
