$(document).ready(function() { setEventTip(); })

/************************************************************************************************/
/****************************************************************************************************/
// подсказки
function setEventTip()
{
	$("*[label]").off("mouseover");
	$("*[label]").on("mouseover", function(){
		Tip.show($(this));
	});
}







