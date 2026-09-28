    function switchTab(name) {
      document.querySelectorAll('.cred-tab').forEach(function(t) {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      document.querySelectorAll('.cred-panel').forEach(function(p) {
        p.hidden = true;
      });
      document.getElementById('tab-' + name).hidden = false;
      var btn = document.getElementById('btn-' + name);
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
