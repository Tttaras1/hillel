function sidebarAnimation() {
    let sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('activeSidebar')) {
        sidebar.classList.remove('activeSidebar');
    } else {
        sidebar.classList.add('activeSidebar');
    }
}
document.getElementById('sidebarButton').addEventListener("click", sidebarAnimation);