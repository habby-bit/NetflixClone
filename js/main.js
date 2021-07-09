const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item
function selectItem(e) {
    removeBorder();
    removeShow();

    // Add Border To Current Tab
    this.classList.add('tab-border');
    
    // Grab Content Item From DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);

    // Add Show Class
    tabContentItem.classList.add('show');
}

// Remove Border From Unclicked Tabs
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border')
    })
}

// Remove Content From Display Area
function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show')
    })
}

// Listen For Tab CLick
tabItems.forEach(item => {
    item.addEventListener('click', selectItem)
});