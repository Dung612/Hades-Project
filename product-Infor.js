fetch('http://localhost:3000/products')
    .then(response => response.json())
    
    .then(products => {
        const productContainer = document.querySelector('.sanpham');
        const productContent = document.querySelector('.productContent');
        
        products.forEach(product => { 
            const x = 4
            if(product.categoryId === x && product.id === x){
                const productElement = document.createElement('div');
                productElement.className = 'ContentInfor';
                productElement.innerHTML = `
                    
                <div class="infors">
                <div class="infor">
                 <h3>THÔNG TIN</h3>
                 <ul class="product-info-list"> 
                     <li> Quần lưng thun có dây rút</li>
                     <li> Sử dụng kỹ thuật ráp nối vải toàn thân quần</li>
                     <li> Đường line phản quang tạo điểm nhấn</li>
                     <li> Chi tiết chữ "H" thêu nổi ở mặt trước</li>
                     <li> Các chi tiết kim loại khác</li>
                     <li> Có hai túi hai bên</li>
                     <li> Chất liệu: Dù</li>
                     <li>Vận chuyển từ 2-3 ngày. 
                         Thiết kế và sản xuất bởi HADES.</li>
                 </ul>
                </div>
             </div>
             <div class="imgProduct">
                 <div class="imgs">
                     <img src="${product.anh1}" alt="">
                     <img src="${product.anh2}" alt="">
                 </div>
             </div>
             <div class="PayProduct">
                 <div class="ContentPay">
                     <div class="name"><h2>${product.name}</h2></div>
                     <div class="price">
                     ${product.price} đ
                     </div>
                     <div class="size">
                     <h4>kích thước</h4>
                     <div class="btnsize">
                         <button>S</button>
                         <button>M</button>
                         <button>L</button>
                     </div>
                 </div>
                 <div class=" btnadd">THÊM VÀO GIỎ</div>
                 <div class=" btnpay">MUA NGAY</div>
                 </div>
             </div>
                    
                `;
                productContent.appendChild(productElement);
    
                }




            if(product.categoryId === 1){
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
                    <div class="tensanpham"><a href="./product-Info.html?productId=${product.id}&categoryId=${product.categoryId}">${product.name}</a></div>
                    <div class="price">${product.price} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);

            }
            
        });
    })
    .catch(error => console.error('Lỗi:', error));
    console.log(window.location.pathname);
