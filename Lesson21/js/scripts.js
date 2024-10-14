var queryURL = "http://apixm.devmaster.vn/api/Products"

const imageUrl = 'http://apixm.devmaster.vn'
var dataProduct = [];

$(document).ready(function () {
    $.ajax({
        type: 'GET',
        dataType: "json",
        url: 'http://apixm.devmaster.vn/api/Products',
        success: function (data, status, xhr) {
            console.log('data: ', data);
            dataProduct = data;
            console.log('dataProdcut: ', dataProduct);

            fn_showProduct(dataProduct);
        }
    });

    const fn_showProduct = (data) => {
        $('#product-list').html("");
        let list = "";
        data.forEach(product => {
            let item = `
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="product-item">
                        <div class="p-img">
                            <img src="${imageUrl}${product.image}" alt="${product.title}" class="w-100">
                        </div>
                        <div class="p-info">
                            <h5><a href="">${product.title}</a></h5>
                            <p>Gía:${fn_formatMoney(product.priceNew,0,',','.')}  <sup>đ</sup></p>
                        </div>
                    </div>
                </div>
            `;

            list += item;
        });
        $('#product-list').html(list);
    }
    
})
