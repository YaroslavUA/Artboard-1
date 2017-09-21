function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

const header = document.getElementsByClassName("menu__header");

const toggleMenu = function() {
	if (hasClass(this, 'expanded')) {
    removeClass(this, 'expanded');
  } else {
    addClass(this, 'expanded');
  }
};

for (var i = 0; i < header.length; i++) {
  header[i].addEventListener('click', toggleMenu, false);
}
