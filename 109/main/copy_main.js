const {loadPromotions, loadAllItems} = require('./datbase');

module.exports = function printInventory(inputs) {
    //调用外部函数
    let promotions = loadPromotions();
    let allItems = loadAllItems();
    
    //遍历所有商品
    let  allProducts = allItems.map(function (item, index) {
        //取出item的属性
        let {name, unit, price, barcode} = item;

        let count = 0;

        //forEach列出inputs的每个元素与item的barCode比较，得出count
        inputs.forEach((input) => {
            if (input === barcode) {
                count++
            }else if (input !== barcode && input.startsWith(barcode)) {//startsWith检测barCode是否是根据input开头的
                count = count + parseInt(input.split('-')[1])
            }
        });
        //返回input的属性
        return {name, count, unit , price, barcode}
    });

    //剔除count为0的原价product
    const inventoryProducts = allProducts.filter((product) => !!product.count);

    const promotedProducts = inventoryProducts.map((product) => {

        //选择优惠
        const BUY_TWO_GET_ONE_FREE = promotions[0];
        //优惠的商品编码
        const promotionBarCodes = BUY_TWO_GET_ONE_FREE.barcodes;

        //通过商品编码，找到有优惠的商品，进行优惠计算
        if (promotionBarCodes.indexOf(product.barcode) > -1) {
            if (product.count >= 2) {
                const {name, unit} = product;
                //商品符合优惠条件，计算商品数量减1
                return {...product,count: product.count -1}
            }
        }
        return product
    });

    //原价
    const inventoryPrice = inventoryProducts.map((product) => product.price * product.count)
        .reduce((sum, current) => sum + current);

    //优惠后价格
    const promotedProductsPrice = promotedProducts.map((product) => product.price * product.count)
        .reduce((sum, current) => sum + current);

    //节省的钱数
    const savedPrice = inventoryPrice - promotedProductsPrice;
    console.log(`***<没钱赚商店>购物清单***\n 名称：${inventoryProducts[0].name}，数量：${inventoryProducts[0].count}${inventoryProducts[0].unit}，单价：${(inventoryProducts[0].price).toFixed(2)}(元)，小计：${(promotedProducts[0].count * inventoryProducts[0].price).toFixed(2)}(元)\n
名称：${inventoryProducts[1].name}，数量：${inventoryProducts[1].count}${inventoryProducts[1].unit}，单价：${(inventoryProducts[1].price).toFixed(2)}(元)，小计：${(promotedProducts[1].count * inventoryProducts[1].price).toFixed(2)}(元)\n
名称：${inventoryProducts[2].name}，数量：${inventoryProducts[2].count}${inventoryProducts[2].unit}，单价：${(inventoryProducts[2].price).toFixed(2)}(元)，小计：${(promotedProducts[2].count * inventoryProducts[2].price).toFixed(2)}(元)\n
------------------------------------------------------------------
挥泪赠送商品：\n名称：${promotedProducts[0].name}，数量：${inventoryProducts[0].count - promotedProducts[0].count}${promotedProducts[0].unit}\n名称：${inventoryProducts[1].name}，数量：${promotedProducts[1].count - promotedProducts[1].count}${promotedProducts[1].unit}\n
名称：${promotedProducts[2].name}，数量：${inventoryProducts[2].count - promotedProducts[2].count}${promotedProducts[2].unit}\n-------------------------------------------------------------------
总计：${promotedProductsPrice.toFixed(2)}(元)\n节省：${savedPrice.toFixed(2)}\n***************************************`)
}