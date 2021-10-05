
const scrollPageToBottom = require('puppeteer-autoscroll-down');


const scrollPage = async (pagePuppeteer, storeName) => {

    if(storeName === 'Mercado libre'){
        await scrollPageToBottom(pagePuppeteer);
        
    } else if(storeName === 'Suburbia'){

        for(let i = 1; i < 33; i++){
            let pixelsDistance = 250 * i;

            await pagePuppeteer.evaluate((pixelsDistance) => {                
                window.scrollTo(0, pixelsDistance);
            }, pixelsDistance);
    
            await pagePuppeteer.waitForTimeout(250);
        }

    } else if (storeName === 'Cuidado con el perro'){
        await scrollPageToBottom(pagePuppeteer);

    } else if(storeName === 'Pcel'){
        await scrollPageToBottom(pagePuppeteer);

    } else if(storeName === 'Shein'){

        for(let i = 1; i < 50; i++){
            let pixelsDistance = 250 * i;

            await pagePuppeteer.evaluate((pixelsDistance) => {                
                window.scrollTo(0, pixelsDistance);
            }, pixelsDistance);
    
            await pagePuppeteer.waitForTimeout(100);
        }

    } else if(storeName === 'Liverpool'){
        await scrollPageToBottom(pagePuppeteer);

        await scrollPageToBottom(pagePuppeteer);
        
        await scrollPageToBottom(pagePuppeteer);

    } else if(storeName === 'Walmart'){        
        
        for(let i = 1; i < 34; i++){
            let pixelsDistance = 250 * i;

            await pagePuppeteer.$eval('#scrollContainer', 
                (e, pixelsDistance) => {                
                    e.scrollTo(0, pixelsDistance);
                    return e

            }, pixelsDistance);
    
            await pagePuppeteer.waitForTimeout(190);
        }

    } else if(storeName === 'Elektra'){
        await scrollPageToBottom(pagePuppeteer, 280, 280);
    }
}


module.exports = scrollPage;