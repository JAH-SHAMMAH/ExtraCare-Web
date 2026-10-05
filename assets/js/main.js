(function () {
  document.documentElement.classList.add('js');

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  // Enquiry form: opens WhatsApp with the message ready to send. Nothing is stored.
  var form = document.getElementById('enquiry');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.elements['name'].value.trim();
      var need = form.elements['need'].value.trim();
      var kind = form.elements['kind'] ? form.elements['kind'].value : '';
      var text = 'Hello ExtraCare, my name is ' + name + '.' +
        (kind ? ' I am looking for: ' + kind + '.' : '') +
        ' ' + need;
      window.open('https://wa.me/2348036745916?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }
})();
