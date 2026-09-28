    function switchTab(name) {
      var scope = document.querySelector('[data-mode-section="pax"]');
      scope.querySelectorAll('.cred-tab').forEach(function(t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      scope.querySelectorAll('.cred-panel').forEach(function(p) {
        p.hidden = true;
      });
      document.getElementById('tab-' + name).hidden = false;
      var btn = document.getElementById('btn-' + name);
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      if (window.__retranslate) window.__retranslate();
    }
    function switchCargoTab(name) {
      var scope = document.querySelector('.cred-cargo');
      scope.querySelectorAll('.cred-tab').forEach(function(t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      scope.querySelectorAll('.cred-panel').forEach(function(p) {
        p.hidden = true;
      });
      document.getElementById('tab-' + name + '-cargo').hidden = false;
      var btn = document.getElementById('btn-' + name + '-cargo');
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      if (window.__retranslate) window.__retranslate();
    }
    function toggleCard(btn) {
      var body = btn.closest('.cred-card').querySelector('.cred-body');
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      body.hidden = expanded;
    }
