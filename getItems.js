

const scrollPage = require("./scrollPage");


const getItems = async (pagePuppeteer, storeValues) => {

    let results = [];

    try {
        await pagePuppeteer.goto(storeValues.storeLink);

        if(storeValues.storeName === 'Elektra'){
            await pagePuppeteer.waitForNavigation({waitUntil: 'domcontentloaded'});
        }
        
        await pagePuppeteer.waitForTimeout(1000);
    
        const containerItems = 
            await pagePuppeteer.waitForSelector(storeValues.containerItemsClassName);
            
        await scrollPage(pagePuppeteer, storeValues.storeName);
        
        const listItems = await containerItems.$$(storeValues.listItemsClassNames);
        
        for(const item of listItems){
            
            const itemResult = 
                await getItemValues(pagePuppeteer, item, storeValues);
            
            if(itemResult){
                results.push(itemResult);
            }
        }
                
    } catch (err) {
        // console.log('ERROR IN FUNCTION GET ITEMS---' + storeValues.storeName);
        // console.log(err);
    }
           
    return results;
};


const getItemValues = async (pagePuppeteer, item, storeValues) => {

    let result;

    try {
        const objLink = await item.$(storeValues.itemLinkClassName);

        const objImage = await item.$(storeValues.itemImageClassName);

        const objPrice = await item.$(storeValues.itemPriceClassName);
        
        const objName = await item.$(storeValues.itemNameClassName);
        
        let link;

        if(storeValues.storeName === 'Shein'){

            let sku = await pagePuppeteer.evaluate(
                objLink => objLink.getAttribute('data-sku'), objLink
            );
            let id = await pagePuppeteer.evaluate(
                objLink => objLink.getAttribute('data-id'), objLink
            );
            let catId = await pagePuppeteer.evaluate(
                objLink => objLink.getAttribute('data-cat_id'), objLink
            );
            let dataScici = await pagePuppeteer.evaluate(
                objLink => objLink.getAttribute('data-scici'), objLink
            );

            link = `https://m.shein.com.mx/${sku}-p-${id}-cat-${catId}.html?scici=${dataScici}`

        } else {
            link = await pagePuppeteer.evaluate(
                objLink => objLink.getAttribute('href'), objLink
            );
        }

        let imageSrc = await pagePuppeteer.evaluate(
            objImage => objImage.getAttribute('src'), objImage
        );
        
        const price = await pagePuppeteer.evaluate(
            objPrice => objPrice.innerText, objPrice
        );

        const name = await pagePuppeteer.evaluate(
            objName => objName.innerText, objName
        );
        
        const updateLinkAndImage =
            updateLink(storeValues.storeName, link, imageSrc);

        link = updateLinkAndImage[0];

        imageSrc = updateLinkAndImage[1];

        result = {
            storeName: storeValues.storeName,
            name,
            price,
            imageSrc,
            link
        };

    } catch (err) {
        // console.log('ERROR FUNCTION GET ITEM VALUES---' + storeValues.storeName);
        // console.log(err);
    }

    return result;
};


const updateLink = (storeName, oldLink, oldImageSrc) => {
    
    let linkResult = oldLink;
    let imageSrcResult = oldImageSrc;

    if(storeName === 'Amazon'){
        linkResult = `amazon.com.mx/${link}`;

    } else if(storeName === 'Costco'){
        linkResult = `costco.com.mx${link}`;
        imageSrcResult = `costco.com.mx${imageSrc}`;

    } else if(storeName === 'Chedraui'){
        linkResult = `chedraui.com.mx${link}`;
        imageSrcResult = `chedraui.com.mx${imageSrc}`;

    } else if(storeName === 'Sears'){
        linkResult = `sears.com.mx${link}`;

    } else if(storeName === 'Suburbia'){
        linkResult = `suburbia.com.mx${link}`;

    } else if(storeName === 'Linio'){
        linkResult = `linio.com.mx${link}`;
        imageSrcResult = `https:${imageSrc}`;

    } else if(storeName === 'Liverpool'){
        linkResult = `liverpool.com.mx${link}`;
        
    } else if(storeName === 'Walmart'){
        linkResult = `walmart.com.mx${link}`;

    } else if(storeName === 'Elektra'){
        linkResult = `elektra.com.mx${link}`;

    } else if(storeName === 'Cuidado con el perro'){
        linkResult = `cuidadoconelperro.com.mx/${link}`;
    }

    return [linkResult, imageSrcResult];
};


module.exports = getItems;