fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.querySelector('.sanpham');
        products.forEach(product => { 
            
                const productElement = document.createElement('div');
            productElement.className = 'sanpham1 col4s fontbasic';
            productElement.innerHTML = `
                
                    <div class="anhsanpham">
                        <img src="${product.anh1}" alt="">
                        <img class="anh2" src="${product.anh2}" alt="">
                        <div class="chucnang">
                            <div class="buy"><a href="">MUA NGAY</a></div>
                            <div class="add"><a href="">THÊM VÀO GIỎ</a></div>
                        </div>
                    </div>
                    <div class="tensanpham"><a href="">${product.name}</a></div>
                    <div class="price">${product.price} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);

            
            
        });
    })
    .catch(error => console.error('Lỗi:', error));