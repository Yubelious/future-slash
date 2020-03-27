    var langclass = "en";
    $( document ).ready(function() {
        console.log("ready");
        $('#lang-select').change(function(){
            document.getElementById("flags").className = $("#lang-select").val();
        });
    });
const langSelect = $("#lang-select");
$(document).ready(function() {
	console.log("ready");
  let focused = false;
  let updateArrow = function() {
	  console.log("update");
    $("#flags").toggleClass("active", focused);
	document.getElementById("arrow").innerHTML = focused ? "⮙" : "⮛";
  };
  langSelect.click(function(ev) {
    if (ev.target !== langSelect[0]) return;
    focused = !focused;
	console.log("select");
    updateArrow();
  });

  let onDeselect = function() {
	  console.log("deselect");
    if (!focused) return;
    focused = false;
    updateArrow();
  };
  langSelect.focusout(function() {
    onDeselect();
  });
  langSelect.change(function() {
    onDeselect();
  });
  langSelect.find("option").click(function() {
    onDeselect();
  })
});
