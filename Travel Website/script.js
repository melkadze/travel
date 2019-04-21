/*  made by nick melkadze   */

document
  .querySelectorAll('link[rel=stylesheet].alternate')
  .forEach(disableStylesheet);

function disableStylesheet (node) {
  node.disabled = true;
}

function scrollLock() {
	if (document.getElementById("scrollLock").innerHTML == "🔒") {
		document.body.style.overflow = "hidden";
		document.getElementById("scrollLock").innerHTML = "🔓";
	} else {
		document.body.style.overflow = "visible";
		document.getElementById("scrollLock").innerHTML = "🔒";
	}
}

/*  now, all of the following anim functions
    require us to first remove any animation
    class, so that it can be added again with
    the animation occuring on a second button
    press. */

function animGallery() {
	$('#gallery').removeClass('headTextAnimated');
    setTimeout(function () { 
	$('#gallery').addClass('headTextAnimated');
    }, 1);
    
	$('#secondButtonContainer').removeClass('buttonContainerAnimated');
    setTimeout(function () { 
	$('#secondButtonContainer').addClass('buttonContainerAnimated');
    }, 1);
    
	$('#galleryImageContainer').removeClass('galleryContainerAnimated');
    setTimeout(function () { 
	$('#galleryImageContainer').addClass('galleryContainerAnimated');
    }, 1);
}

function animCards() {
	$('#cardHeader').removeClass('headTextAnimated');
    setTimeout(function () { 
	$('#cardHeader').addClass('headTextAnimated');
    }, 1);
    
	$('#cardSubheadText').removeClass('buttonContainerAnimated');
    setTimeout(function () { 
	$('#cardSubheadText').addClass('buttonContainerAnimated');
    }, 1);
    
	$('#cardStore').removeClass('galleryContainerAnimated');
    setTimeout(function () { 
	$('#cardStore').addClass('galleryContainerAnimated');
    }, 1);
}

function animCongrats() {
	$('#congratsHeader').removeClass('headTextAnimated');
    setTimeout(function () { 
	$('#congratsHeader').addClass('headTextAnimated');
    }, 1);
    
	$('#congratsSubheadText').removeClass('buttonContainerAnimated');
    setTimeout(function () { 
	$('#congratsSubheadText').addClass('buttonContainerAnimated');
    }, 1);
    
	$('#congratsAnim').removeClass('plane-loaderAnimated');
    setTimeout(function () { 
	$('#congratsAnim').addClass('plane-loaderAnimated');
    }, 1);
}

function congratsMtskheta() {
    document.getElementById("congratsSubheadText").innerHTML = "We hope you enjoy your stay in Mtskheta, Georgia's holy city!";
}

function congratsTbilisi() {
    document.getElementById("congratsSubheadText").innerHTML = "Have a nice trip to Tbilisi! Say hi to the rest of the Melkadzes for us.";
}

function congratsBatumi() {
    document.getElementById("congratsSubheadText").innerHTML = "Even though Batumi's the least Georgian place here, we're glad you're still coming.";
}

function CSSMenuClick(node) {
	$('#CSSMenuID').removeClass('CSSMenuActive');
	$('#CSSMenuID').removeClass('CSSMenuInactive');
    setTimeout(function () { 
	$('#CSSMenuID').addClass('CSSMenuInactive');
    }, 1);
    document
        .querySelectorAll('link[rel=stylesheet].alternate')
        .forEach(disableStylesheet);
    node.disabled = false;
}

function enterMenu() {
	$('#CSSMenuID').addClass('CSSMenuActive');
}

function enterPopup() {
	$('#creditsPopupBackground').addClass('creditsPopupActive');
	$('#creditsPopupBackground').removeClass('creditsPopupInactive');
	$('#creditsPopupBackground').removeClass('creditsPopupInactiveEnd');
}

function exitPopup() {
	$('#creditsPopupBackground').removeClass('creditsPopupActive');
	$('#creditsPopupBackground').addClass('creditsPopupInactive');
    setTimeout(function () { 
	$('#creditsPopupBackground').addClass('creditsPopupInactiveEnd');
    }, 400);
}