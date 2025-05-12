const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParents = document.querySelector('.tab_content_items');

let activeTabIndex = 0;

const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    });

    tabs.forEach(tab => {
        tab.classList.remove('tab_content_item_active');
    });
};

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block';
    tabs[index].classList.add('tab_content_item_active');
};

hideTabContent();
showTabContent(activeTabIndex);

setInterval(() => {
    activeTabIndex = (activeTabIndex + 1) % tabs.length;
    hideTabContent();
    showTabContent(activeTabIndex);
}, 5000);

tabsParents.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent();
                showTabContent(tabIndex);
                activeTabIndex = tabIndex;
            }
        });
    }
};
