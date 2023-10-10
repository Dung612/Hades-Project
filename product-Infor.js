fetch('http://localhost:3000/products')
.then(response => response.json())
.then(products => {
    const productContainer = document.querySelector('.sanpham');
    const productContent = document.querySelector('.productContent');
    
    products.forEach(product => { 
        
        if(product.categoryId === x && product.id === y){
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
             <div class=" btnadd" id="addbtn">THÊM VÀO GIỎ</div>
             <div class=" btnpay">MUA NGAY</div>
             </div>
         </div>
                
            `;
            productContent.appendChild(productElement);

            }





        
    });
})

    .catch(error => console.error('Lỗi:', error));
    console.log(window.location.pathname);
