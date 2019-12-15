document.addEventListener("DOMContentLoaded", function() {

// Mobile menu
var menuToggle = document.querySelector('#menu-toggle');
var mobileNav = document.querySelector('.mobile-nav');

menuToggle.onclick = function() {
	menuToggle.classList.toggle('toggler__active');
	mobileNav.classList.toggle('mobile-nav__show');
};

// Reference the parent element
let faqSection = document.getElementById('faq');
/* Register main to the click event 
|| when clicked ANYWHERE within main 
|| toggle() is called
*/
faqSection.addEventListener('click', toggle, false);
function toggle(e) {
  /* Determine if the current element in the
  || event chain is the anchor that was 
  || clicked.
  */
  if (e.target !== e.currentTarget && e.target.nodeName === "H3") {
    /* tgt is the clicked link
    || txt is the div that follows tgt
    */
    let tgt = e.target;
    let txt = tgt.parentElement;
    // Toggle classes .on and .off
    txt.classList.toggle('faq-card--opened');
    
  }

}

// Footer Navigation
let footerNav = document.getElementById('footer-navs');

footerNav.addEventListener('click', toggleFooterNav, false);
function toggleFooterNav(e) {

  if (e.target !== e.currentTarget && e.target.nodeName === "H3") {
    /* tgt is the clicked link
    || txt is the div that follows tgt
    */
    let tgtFn = e.target;
    let txtFn = tgtFn.parentElement;
    // Toggle classes .on and .off
    txtFn.classList.toggle('footer__nav--opened');
    
  }

}

});
