// Expand the left sidebar when it's collapsed.
// Used by POST /expand-left-sidebar.

export const EXPAND_LEFT_SIDEBAR_SCRIPT = `
  (async () => {
    const sidebars = document.querySelectorAll('.bg-sidebar');
    let leftRoot = null;
    for (const el of sidebars) {
      if (el.getAttribute('role') === 'navigation' || el.querySelector('[data-tab-id]') == null && el.classList.contains('flex-col')) {
        leftRoot = el;
        break;
      }
    }
    if (!leftRoot) leftRoot = sidebars[0];
    const isCollapsed = !leftRoot || leftRoot.offsetParent === null;
    if (!isCollapsed) return { ok: true, wasCollapsed: false };
    // Click the sidebar toggle button to expand
    const toggleBtn = document.querySelector('[data-testid="sidebar-toggle"]');
    if (!toggleBtn) return { ok: false, error: 'Toggle button not found' };
    toggleBtn.click();
    return { ok: true, wasCollapsed: true };
  })()
`;
