function asdsad() {
    let containers = document.getElementsByClassName('sidebar__link');
    let homeWorkContainer = document.getElementById('HW_14');

    Array.prototype.forEach.call(containers, function(item) {
        item.addEventListener("click", sidebarLinks);
    }) 

    function sidebarLinks() {
        homeWorkContainer.classList.remove('content__homeWorks-active');

        Array.prototype.forEach.call(containers, function (item) {
            item.classList.remove('sidebar__link-active');
        })

        homeWorkContainer = document.getElementById(this.textContent.toString());
        if (homeWorkContainer) {
            homeWorkContainer.classList.add('content__homeWorks-active');
            this.classList.add('sidebar__link-active');
        } else {
            homeWorkContainer = document.getElementById('HW_14');
            this.classList.add('sidebar__link-active');
        }
        
    }
}

asdsad()

