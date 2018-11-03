function sidebarAdaptive() {
    let sidebar = document.getElementById('sidebar');
    window.addEventListener("resize", removeSidebar);
    function removeSidebar() {
        if (document.documentElement.clientWidth < 768) {
            sidebar.classList.remove('activeSidebar');
            content.classList.remove('contentSidebarOn');
        }
    }
}

sidebarAdaptive()