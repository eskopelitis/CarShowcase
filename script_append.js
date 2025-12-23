
// --- Mobile Tabs ---

function setupMobileTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panelLeft = document.querySelector('.panel-left');
    const panelRight = document.querySelector('.panel-right');

    const checkMobile = () => window.innerWidth <= 768;

    // Initial State for Mobile: Specs Active
    if (checkMobile()) {
        panelLeft.classList.add('mobile-active');
        panelRight.classList.remove('mobile-active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent touch issues
            e.stopPropagation();

            // Updated Active Tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            // Show Target
            const target = tab.getAttribute('data-target');
            if (target === 'panel-left') {
                panelLeft.classList.add('mobile-active');
                panelRight.classList.remove('mobile-active');
            } else {
                panelRight.classList.add('mobile-active');
                panelLeft.classList.remove('mobile-active');
            }
        });
    });
}
