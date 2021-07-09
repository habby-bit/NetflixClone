const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item
function selectItem(e) {
    removeBorder();
    
    // Add Border To Current Tab
    this.classList.add('tab-border');
}

// Remove Border From Unclicked Tabs
function removeBorder() {
    tabItems.forEach(item => {
        item.classList.remove('tab-border')
    })
}

// Listen For Tab CLick
tabItems.forEach(item => {
    item.addEventListener('click', selectItem)
});