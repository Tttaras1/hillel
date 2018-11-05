function asdsad() {
    let containers = document.getElementsByClassName('sidebar__item');

    Array.prototype.forEach.call(containers, function(item) {
        item.addEventListener("click", sidebarLinks);
    }) 

    function sidebarLinks() {
        Array.prototype.forEach.call(containers, function(item) {
            item.classList.remove('active')
        }) 
        console.log(this.textContent);
        console.log(document.querySelector("#" + this.TextContent));



        this.classList.add('active');
    }
}

asdsad()

