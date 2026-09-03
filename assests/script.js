// Tab switching for the dashboard portfolio (Power BI / Tableau)
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = 'panel-' + btn.dataset.tab;

      // Reset all tabs
      tabButtons.forEach(b => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
        b.tabIndex = -1;
      });
      document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('is-active');
        panel.hidden = true;
      });

      // Activate selected tab
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');
      btn.tabIndex = 0;

      const targetPanel = document.getElementById(targetId);
      targetPanel.classList.add('is-active');
      targetPanel.hidden = false;
    });
  });
});