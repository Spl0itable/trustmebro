document.write("<div class=\"note_wrapper\"><zap-threads anchor=\"\"\/><\/div>");
window.addEventListener('load', function() {
    const currentURL = window.location.href;
    const anchorElement = document.querySelector('zap-threads');
    anchorElement.setAttribute('anchor', currentURL);
  });
  