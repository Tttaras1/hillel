function sidebarAnimation() {
    let sidebar = document.getElementById('sidebar');
    let content = document.querySelector('.content');
    if (sidebar.classList.contains('activeSidebar')) {
        sidebar.classList.remove('activeSidebar');
        content.classList.remove('contentSidebarOn');
    } else {
        sidebar.classList.add('activeSidebar');
        content.classList.add('contentSidebarOn');
    }
}

document.getElementById('sidebarButton').addEventListener("click", sidebarAnimation);