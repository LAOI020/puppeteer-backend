
const getListStores = (valueSearch) => {
    
    let searchSplit = [];

    valueSearch.split(' ').forEach((word) => {
        if(word.length > 0){
            searchSplit.push(word);
        }
    });

    let convertListStores = listStores;

    convertListStores = convertListStores.map(store => {

        let createLink;

        switch (store.storeName) {
            case 'Mercado libre':
                createLink = `https://listado.mercadolibre.com.mx/${searchSplit.join('-')}#D[A:${searchSplit.join('%20')}]`;
                break;

            case 'Amazon':
                createLink = `https://www.amazon.com.mx/s?k=${searchSplit.join('+')}&ref=nb_sb_noss`;
                break;

            case 'Linio':
                createLink = `https://www.linio.com.mx/search?scroll=&q=${searchSplit.join('+')}`;
                break;

            case 'Liverpool':
                createLink = `https://www.liverpool.com.mx/tienda?s=${searchSplit.join('+')}`;
                break;

            case 'Walmart':
                createLink = `https://www.walmart.com.mx/productos?Ntt=${searchSplit.join('%20')}`;
                break;

            case 'Costco':
                createLink = `https://www.costco.com.mx/search?text=${searchSplit.join('%20')}`;
                break;

            case 'Elektra':
                createLink = `https://www.elektra.com.mx/${searchSplit.join('%20')}?_q=${searchSplit.join('%20')}&map=ft`;
                break;

            case 'Shein':
                createLink = `https://m.shein.com.mx/pdsearch/${searchSplit.join('%20')}/?ici=s1%60EditSearch%60${searchSplit.join('%20')}%60fb0%60d0%60PageHome&scici=Search~~EditSearch~~1~~${searchSplit.join('%20')}~~~~0`;
                break;

            case 'Suburbia':
                createLink = `https://www.suburbia.com.mx/tienda?s=${searchSplit.join('+')}`;
                break;

            case 'Sears':
                createLink = `https://www.sears.com.mx/resultados/q=${searchSplit.join('%20')}/1`;
                break;

            case 'Cuidado con el perro':
                createLink = `https://www.cuidadoconelperro.com.mx/search?words=${searchSplit.join('+')}`;
                break;
            
            case 'Pcel':
                createLink = `https://pcel.com/index.php?route=product/search&filter_name=${searchSplit.join('%20')}`;
                break;
        
            default:
                break;
        }

        return {
            ...store,
            storeLink: createLink
        };
    });

    return convertListStores;
}


const listStores = [
    {
        storeName: 'Mercado libre',
        storeLink: 'https://listado.mercadolibre.com.mx/tenis-negros#D[A:tenis%20negros]',
        containerItemsClassName: '.ui-search-row',
        listItemsClassNames: '.ui-search-row__item',
        itemLinkClassName: '.ui-row-card__link',
        itemImageClassName: '.ui-row-card__image',
        itemPriceClassName: '.price-tag-fraction',
        itemNameClassName: '.ui-row-item__title',
    },
    {
        storeName: 'Amazon',
        storeLink: 'https://www.amazon.com.mx/s?k=tenis+negros&ref=nb_sb_noss',
        containerItemsClassName: '.s-main-slot',
        listItemsClassNames: '.s-card-container',
        itemLinkClassName: '.a-link-normal',
        itemImageClassName: '.s-image',
        itemPriceClassName: '.a-price-whole',
        itemNameClassName: 'span[class="a-size-small a-color-base a-text-normal"]',
    },
    {
        storeName: 'Linio',
        storeLink: 'https://www.linio.com.mx/search?scroll=&q=tenis+negros',
        containerItemsClassName: '#catalogue-product-container',
        listItemsClassNames: '.catalogue-product',
        itemLinkClassName: 'a',
        itemImageClassName: 'img[class="image"]',
        itemPriceClassName: '.price-main-md',
        itemNameClassName: '.title-section',
    },
    {
        storeName: 'Liverpool',
        storeLink: 'https://www.liverpool.com.mx/tienda?s=tenis+negros',
        containerItemsClassName: '.m-product__listingPlp',
        listItemsClassNames: '.m-product__card',
        itemLinkClassName: 'a',
        itemImageClassName: 'img[extraClass="reduce-size"]',
        itemPriceClassName: '.a-card-discount',
        itemNameClassName: '.card-title',
    },
    {
        storeName: 'Walmart',
        storeLink: 'https://www.walmart.com.mx/productos?Ntt=tenis%20negros',
        containerItemsClassName: '.flex_noMargin__2nisT',
        listItemsClassNames: '.product_container__3DSm4',
        itemLinkClassName: '.nav-link_navLink__2oJ29',
        itemImageClassName: '.image_image__3RXgV',
        itemPriceClassName: 'p[data-automation-id="sale-price"]',
        itemNameClassName: '.ellipsis',
    },
    {
        storeName: 'Costco',
        storeLink: 'https://www.costco.com.mx/search?text=tenis%20negros',
        containerItemsClassName: '.product-listing',
        listItemsClassNames: '.product-list-item',
        itemLinkClassName: '.thumb',
        itemImageClassName: 'img[class="ng-star-inserted"]',
        itemPriceClassName: 'span[class="notranslate ng-star-inserted"]',
        itemNameClassName: 'span[class="notranslate"]',
    },
    {
        storeName: 'Elektra',
        storeLink: 'https://www.elektra.com.mx/tenis%20negros?_q=tenis%20negros&map=ft',
        containerItemsClassName: '.vtex-search-result-3-x-gallery',
        listItemsClassNames: '.vtex-product-summary-2-x-container',
        itemLinkClassName: 'a',
        itemImageClassName: 'img[class="vtex-product-summary-2-x-imageNormal vtex-product-summary-2-x-image"]',
        itemPriceClassName: '.vtex-store-components-3-x-sellingPrice',
        itemNameClassName: '.vtex-product-summary-2-x-productBrand',
    },
    {
        storeName: 'Shein',
        storeLink: 'https://m.shein.com.mx/pdsearch/tenis%20negros/?ici=s1%60EditSearch%60tenis%20negros%60fb0%60d0%60PageHome&scici=Search~~EditSearch~~1~~tenis%20negros~~~~0',
        containerItemsClassName: 'div[code="productList"]',
        listItemsClassNames: '.product-item-ctn',
        itemLinkClassName: '.product-item__main',
        itemImageClassName: '.product-item__main-img',
        itemPriceClassName: '.product-item__prices_origin',
        itemNameClassName: '.product-item__goods-name',
    },
    {
        storeName: 'Suburbia',
        storeLink: 'https://www.suburbia.com.mx/tienda?s=tenis+negros',
        containerItemsClassName: '.m-product__listingPlp',
        listItemsClassNames: '.m-product__card',
        itemLinkClassName: 'a',
        itemImageClassName: 'img[extraClass="reduce-size"]',
        itemPriceClassName: '.a-card-discount',
        itemNameClassName: '.card-title',
    },
    {
        storeName: 'Sears',
        storeLink: 'https://www.sears.com.mx/resultados/q=tenis%20negros/1',
        containerItemsClassName: '#products',
        listItemsClassNames: '.cardProduct',
        itemLinkClassName: 'a',
        itemImageClassName: '.lazyload',
        itemPriceClassName: '.money',
        itemNameClassName: 'p',
    },
    // {
    //     storeName: 'Cyberpuerta',
    //     storeLink: 'https://www.cyberpuerta.mx/Computadoras/PC-s-de-Escritorio/?cpsp[search]=gamer&pgNr=2',
    //     containerItemsClassName: 'ul[class="grid-x grid-padding-x grid-padding-y small-up-1 medium-up-2 large-up-3"]',
    //     listItemsClassNames: '.cp-list-item-wrapper',
    //     itemLinkClassName: '.cp-info-container',
    //     itemImageClassName: 'img[data-bind="attr: { src: picture, alt: title }"]',
    //     itemPriceClassName: '.cp-price',
    //     itemNameClassName: '.cp-title',
    // },
    {
        storeName: 'Cuidado con el perro',
        storeLink: 'https://www.cuidadoconelperro.com.mx/search?words=tenis+negros',
        containerItemsClassName: '.row',
        listItemsClassNames: 'div[class="col-6 col-md-3"]',
        itemLinkClassName: 'a',
        itemImageClassName: 'img',
        itemPriceClassName: '.product-price',
        itemNameClassName: '.product-title',
    },
    {
        storeName: 'Pcel',
        storeLink: 'https://pcel.com/index.php?route=product/search&filter_name=pc%20gamer',
        containerItemsClassName: '.main-search',
        listItemsClassNames: '.prod-result',
        itemLinkClassName: 'a',
        itemImageClassName: 'img',
        itemPriceClassName: 'strong',
        itemNameClassName: 'p',
    },
];


module.exports = getListStores;