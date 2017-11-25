const {loadPromotions, loadAllItems} = require('./datbase');

module.exports = function printInventory(inputs) {

    let promotions = loadPromotions();
    let allItems = loadAllItems();
    let promotedList = [];

    //得到买的商品详情
    let allProducts = allItems.map(function (item, index) {
        const {name, barcode, unit, price} = item;

        let count = 0;

        inputs.forEach((input) => {
            if (input === barcode) {
                count++
            } else if (input !== barcode && input.startsWith(barcode)) {
                count = count + parseInt(input.split('-')[1])
            }
        })
        // return productCount > 0 ? `名称：${name}，数量：${productCount}${unit}，单价：${price}(元)，小计：${(productCount * price).toFixed(2)}(元)` : ''
        return {name, barcode, count, unit, price}
    });

    //去除数量为0的商品
    const inventoryProducts = allProducts.filter((product) => !!product.count);

    //优惠后商品详情
    const promotedProducts = inventoryProducts.map((product) => {

        //选择优惠
        const BUY_TWO_GET_ONE_FREE = promotions[0];
        const promotionBarCodes = BUY_TWO_GET_ONE_FREE.barcodes;

        if (promotionBarCodes.indexOf(product.barcode) > -1) {
            if (product.count >= 2) {
                const {name, unit} = product;
                promotedList.push({name, unit});
                return {...product, count: product.count - 1}
            }
        }
        return product
    })

    //原价
    const inventoryPrice = inventoryProducts.map((product) => product.price * product.count)
        .reduce((sum, current) => sum + current)

    //优惠后价格
    const promotedProductsPrice = promotedProducts.map((product) => product.price * product.count)
        .reduce((sum, current) => sum + current)

    //节省的钱数
    const savedPrice = inventoryPrice - promotedProductsPrice;

    for (let i in inventoryProducts) {
        for (let j in promotedProducts) {
            let buyProducts = inventoryProducts[i];
            let buyProductsPrice = promotedProducts[i]
            console.log(`***<没钱赚商店>购物清单***\n`
            `名称：${inventoryProducts.name}，数量：${inventoryProducts.count}${inventoryProducts.unit}，单价：${inventoryProducts.price}(元)，小计：${(promotedProducts.count * promotedProducts.price).toFixed()}`
            )
        }
    }


    //console.log(inventoryProducts)
    //console.log(promotedProducts);
    // console.log(promotedList);
    // console.log(promotedProductsPrice);
    //console.log(savedPrice);

    // console.log('***<没钱赚商店>购物清单***\n' +
    //   '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n' +
    //   '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
    //   '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n' +
    //   '----------------------\n' +
    //   '挥泪赠送商品：\n' +
    //   '名称：雪碧，数量：1瓶\n' +
    //   '名称：方便面，数量：1袋\n' +
    //   '----------------------\n' +
    //   '总计：51.00(元)\n' +
    //   '节省：7.50(元)\n' +
    //   '**********************');
    //return 'Hello World!';
};