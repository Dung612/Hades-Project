const header = document.querySelector('.header');
const slideimg = document.querySelectorAll('.slideshow img')
const slideshow = document.querySelector('.slideshow')
const imgnumber = slideimg.length
const btnleft = document.querySelector('.btnleft')
const btnright = document.querySelector('.btnright')
const timkiem = document.querySelector('.timkiem')
const btntimkiem = document.querySelector('.btntimkiem')
const body = document.querySelector('body')
const btnclose = document.querySelector('.close')
const btnclosegiohang = document.querySelector('.closegiohang')
const bg = document.querySelector('.backgroundmo')
const  btngiohang = document.querySelector('.btngiohang')
const giohang = document.querySelector('.giohang')
const isIndexPage = window.location.pathname === '/Hades-Project/index.html';
const isinfo = window.location.pathname === '/Hades-Project/product-Infor.html'
const urlParams = new URLSearchParams(window.location.search);
const categoryIds = urlParams.get('categoryId');
const productIds = urlParams.get('productId');
const x = parseInt(categoryIds);
const y = parseInt(productIds);
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.sanphamtimkiem')




let index = 0 

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        header.style.backgroundColor = 'rgb(255, 255, 255)'; 
        header.style.transition = 'background-color 0.3s ease'; 
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
});
if (isIndexPage) {
function setSlidePosition() {
    slideimg.forEach((image, index) => {
        image.style.left = index * 100 + '%';

    });
}
function slide(direction) {
    if (direction === 'right') {
        index = (index + 1) % imgnumber;
    } else if (direction === 'left') {
        index = (index - 1 + imgnumber) % imgnumber;
    }
    slideshow.style.left = `-${index * 100}%`;
}
function slideauto(){
    slide('left')
}

btnright.addEventListener('click',() =>{
    slide('left')
})

btnleft.addEventListener('click',() =>{
    slide('left')
    
})


setSlidePosition();
setInterval(slideauto,15000)
}

btntimkiem.addEventListener('click',()=>{
    timkiem.classList.add('active')
    body.classList.add('active2')
    bg.classList.add('active3')
})
btnclose.addEventListener('click',()=>{
    timkiem.classList.remove('active')
    body.classList.remove('active2')
    bg.classList.remove('active3')
})
btngiohang.addEventListener('click',()=>{
    giohang.classList.add('active')
    body.classList.add('active2')
    bg.classList.add('active3')
})
btnclosegiohang.addEventListener('click',()=>{
    giohang.classList.remove('active')
    body.classList.remove('active2')
    bg.classList.remove('active3')
})
bg.addEventListener('click',()=>{
    timkiem.classList.remove('active')
    body.classList.remove('active2')
    bg.classList.remove('active3')
})




fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productContainer = document.querySelector('.sanpham');
        products.forEach(product => { 
            
            if( product.categoryId === x){
                const productElement = document.createElement('div');
            productElement.className = 'sanpham1 col4s fontbasic';
            productElement.innerHTML = `
                    
                    <div class="anhsanpham">
                    
                        <img src="${product.anh1}" alt=""></a>
                        <a class="image-link" href="/Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
                        <img class="anh2" src="${product.anh2}" alt=""> 
                        <div class="chucnang">
                            <div class="buy"><a href="">MUA NGAY</a></div>
                            <div class="add"><a href="">THÊM VÀO GIỎ</a></div>
                        </div>
                    </div>
                    <div class="tensanpham"><a href="/Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}">${product.name}</a></div>
                    <div class="price">${product.price} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);
            }
            if(isNaN(x)){
                const productElement = document.createElement('div');
            productElement.className = 'sanpham1 col4s fontbasic';
            productElement.innerHTML = `
                
                    <div class="anhsanpham">
                        <img src="${product.anh1}" alt="">
                        <a class="image-link" href="/Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
                        <img class="anh2" src="${product.anh2}" alt="">
                        <div class="chucnang">
                            <div class="buy"><a href="">MUA NGAY</a></div>
                            <div class="add" id="addbtn">THÊM VÀO GIỎ</div>
                        </div>
                    </div>
                    <div class="tensanpham"><a href="/Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}">${product.name}</a></div>
                    <div class="price">${product.price} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);
            }
            
        });
    })
    .catch(error => console.error('Lỗi:', error));
    console.log('productId:', productIds);
    console.log('categoryId:', categoryIds);
    console.log('y:',y);
    console.log('x:',x);


    if(isinfo){
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
    }

    function searchProducts(keyword) {
        
        searchResults.innerHTML = '';
    
        // Lặp qua dữ liệu sản phẩm và tìm kiếm dựa trên từ khóa
        fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
        products.forEach(product => {
            if (product.name.toLowerCase().includes(keyword.toLowerCase())) {
                // Tạo phần tử sản phẩm kết quả
                const productElement = document.createElement('div');
                productElement.className = 'spsearch';
                productElement.innerHTML = `
                    <div class="ifspsearch">
                        <div class="namespsearch">${product.name}</div>
                        <div class="pricespsearch">${product.price} <span>đ</span></div>
                    </div>
                    <div class="imgspsearch">
                        <img src="${product.anh1}" alt="${product.name}">
                    </div>
                    <a href="/Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
                `;
    
                // Thêm sản phẩm vào kết quả tìm kiếm
                searchResults.appendChild(productElement);
            }
        });
    })
    searchResults.style.display =' block';
}
    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.trim();
        
        if (keyword === '') {
            
            hideAllProducts();
        } else {
            searchProducts(keyword);
        }
    });
    
    function hideAllProducts() {
       searchResults.style.display =' none';
    }
    
   
