
const puppeteer = require('puppeteer');
const randomUserAgent = require('random-useragent');
const getListStores = require('./data');
const getItems = require('./getItems');


let browser;

const initPuppeteerResults = async (io, socketID, data) => {

    const header = randomUserAgent.getRandom(function (ua) {
        return ua.deviceType === 'mobile';
    });
    
    browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.setUserAgent(header);

    await page.setViewport({width: 400, height: 706, isMobile: true});

    page.setDefaultNavigationTimeout(50000);

    const start = new Date();
    
    const listStores = getListStores(data.value);

    for(const store of listStores){
        
        const resultsStore = await getItems(page, store);

        if(resultsStore.length > 0){
            console.log(store.storeName);
            console.log(resultsStore);
            console.log('\n\n');
            io.to(socketID).emit('getItemsResults', resultsStore);
        }
    }
    
    const stop = new Date()

    console.log(start);
    console.log(stop);
    console.log(`Time Taken to execute = ${(stop - start)/10} seconds`);

    await browser.close();
}


module.exports = initPuppeteerResults;