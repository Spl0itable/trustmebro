document.write("<zap-threads anchor=\"\"\/>");
window.addEventListener('load', function() {
    const currentURL = window.location.href;
    const anchorElement = document.querySelector('zap-threads');
    anchorElement.setAttribute('anchor', currentURL);
  });