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

const somInput = document.querySelector('#som');
const usdInput = document.querySelector('#usd');
const eurInput = document.querySelector('#eur');

const converter = (element1, element2, element3) => {
    element1.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            const value = parseFloat(element1.value);

            if (element1.value === '') {
                element2.value = '';
                element3.value = '';
                return;
            }

            if (element1.id === 'som') {
                element2.value = (value / data.usd).toFixed(2);
                element3.value = (value / data.eur).toFixed(2);
            }
            if (element1.id === 'usd') {
                const somValue = value * data.usd;
                element2.value = somValue.toFixed(2);
                element3.value = (somValue / data.eur).toFixed(2);
            }
            if (element1.id === 'eur') {
                const somValue = value * data.eur;
                element2.value = somValue.toFixed(2);
                element3.value = (somValue / data.usd).toFixed(2);
            }
        }
    }
}

converter(somInput, usdInput, eurInput);
converter(usdInput, somInput, eurInput);
converter(eurInput, somInput, usdInput);



