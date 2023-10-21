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
const isshopall = window.location.pathname === '/hades%20project/Hades-Project/shop.html';

const urlParams = new URLSearchParams(window.location.search);
const categoryIds = urlParams.get('categoryId');
const productIds = urlParams.get('productId');
const x = parseInt(categoryIds);
const y = parseInt(productIds);
const searchInput = document.getElementById('search-input');
const searchResults = document.querySelector('.sanphamtimkiem')

const titleElement = document.querySelector('title');





let index = 0 

try {
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
    
        if (scrollTop > 50) {
            header.style.backgroundColor = 'rgb(255, 255, 255)'; 
            header.style.transition = 'background-color 0.3s ease'; 
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        }
    });
    // if (isIndexPage) {
    // function setSlidePosition() {
    //     slideimg.forEach((image, index) => {
    //         image.style.left = index * 100 + '%';
    
    //     });
    // }
    // function slide(direction) {
    //     if (direction === 'right') {
    //         index = (index + 1) % imgnumber;
    //     } else if (direction === 'left') {
    //         index = (index - 1 + imgnumber) % imgnumber;
    //     }
    //     slideshow.style.left = `-${index * 100}%`;
    // }
    // function slideauto(){
    //     slide('left')
    // }
    
    // btnright.addEventListener('click',() =>{
    //     slide('left')
    // })
    
    // btnleft.addEventListener('click',() =>{
    //     slide('left')
        
    // })
    
    
    // setSlidePosition();
    // setInterval(slideauto,15000)
    // }
    
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
    function showCart() {
        giohang.classList.add('active');
        body.classList.add('active2');
        bg.classList.add('active3');
    }
    btngiohang.addEventListener('click', showCart);
    
    btnclosegiohang.addEventListener('click',()=>{
        giohang.classList.remove('active')
        body.classList.remove('active2')
        bg.classList.remove('active3')
    })
    bg.addEventListener('click',()=>{
        giohang.classList.remove('active')
        timkiem.classList.remove('active')
        body.classList.remove('active2')
        bg.classList.remove('active3')
    })
  
} catch (error) {
  // Xử lý lỗi ở đây
  console.error('Đã xảy ra lỗi:108', error.message);
}



function fetchProducts() {
    return fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(products => {
            return products; // Trả về danh sách sản phẩm
        })
        .catch(error => {
            console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
        });
}


try {
    fetchProducts().then(products => {
        const productContainer = document.querySelector('.sanpham');
        let foundProduct = false;
         // Biến để kiểm tra xem đã tìm thấy sản phẩm phù hợp chưa
         products.sort((a, b) => a.price - b.price);
        products.forEach(product => { 
            
            if( product.categoryId === x){
                const productElement = document.createElement('div');
            productElement.className = 'sanpham1 col4s fontbasic';
            const formattedPrice = product.price.toLocaleString('vi-VN');
            productElement.innerHTML = `
                    
            <div class="anhsanpham">
            <img src="${product.anh1}" alt="">
            <a class="image-link" href="../Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
            <img class="anh2" src="${product.anh2}" alt="">
            <div class="chucnang">
                <div class="buy" onclick="redirectToThanhToan()"><a href="./thanhtoan.html">MUA NGAY</a></div>
                <div class="add" onclick="showCart()" >THÊM VÀO GIỎ</div>
            </div>
            </div>
            <div class="tensanpham"><a href="../Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}">${product.name}</a></div>
            <div class="price">${formattedPrice} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);
            const btnAddSpElements = productElement.querySelectorAll('.add');

            // Xử lý các phần tử có class "add" trong sản phẩm hiện tại
            btnAddSpElements.forEach(btn => {
                btn.addEventListener('click', function() {
                    Listgiohang.push(product)
                   
                    console.log('Đã thêm sản phẩm vào giỏ hàng');
                    Listgiohang.forEach(item => {
                        console.log(item);
                     
                        renderCartProducts(Listgiohang, contentElement);
                        updateTotalPrice(Listgiohang);
                        
                        
                    });
                    
                });
            });

            btnAddSpElements.forEach(addElement => {
              
                const linkElement = addElement.querySelector('a');
                if (linkElement) {
                   

                    const textContent = linkElement.textContent;
                    addElement.textContent = textContent;
                }
            });
            foundProduct = true; // Đánh dấu đã tìm thấy sản phẩm
        }
            if(isNaN(x)){
                const productElement = document.createElement('div');
            productElement.className = 'sanpham1 col4s fontbasic';
            const formattedPrice = product.price.toLocaleString('vi-VN');
            productElement.innerHTML = `
                
                    <div class="anhsanpham">
                        <img src="${product.anh1}" alt="">
                        <a class="image-link" href="../Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
                        <img class="anh2" src="${product.anh2}" alt="">
                        <div class="chucnang">
                            <div class="buy" onclick="redirectToThanhToan()"><a href="./thanhtoan.html">MUA NGAY</a></div>
                            <div class="add" onclick="showCart()" >THÊM VÀO GIỎ</div>
                        </div>
                    </div>
                    <div class="tensanpham"><a href="../Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}">${product.name}</a></div>
                    <div class="price">${formattedPrice} <span>đ</span></div>
                
            `;
            productContainer.appendChild(productElement);
            
            const btnAddSpElements = productElement.querySelectorAll('.add');

            // Xử lý các phần tử có class "add" trong sản phẩm hiện tại
            btnAddSpElements.forEach(btn => {
                btn.addEventListener('click', function() {
                    Listgiohang.push(product)
                    
                    
                    console.log('Đã thêm sản phẩm vào giỏ hàng');
                    
                    
                    Listgiohang.forEach(item => {
                        console.log(item);
                        
                        renderCartProducts(Listgiohang, contentElement);
                        updateTotalPrice(Listgiohang);
                        
                        
                    });
                    
                }); foundProduct = true; // Đánh dấu đã tìm thấy sản phẩm
            });

            btnAddSpElements.forEach(addElement => {
              
                const linkElement = addElement.querySelector('a');
                if (linkElement) {
                   

                    const textContent = linkElement.textContent;
                    addElement.textContent = textContent;
                }
            });
            }
            
        });
        if (!foundProduct ) {
            const emptyCategoryElement = document.createElement('div');
            emptyCategoryElement.className = 'empty-category';
            emptyCategoryElement.textContent = 'Chưa có sản phẩm nào trong danh mục này';
            productContainer.appendChild(emptyCategoryElement);
        }
    })
    .catch(error => console.error('Lỗi:', error));
    console.log('productId:', productIds);
    console.log('categoryId:', categoryIds);
    console.log('y:',y);
    console.log('x:',x);
  
} catch (error) {
    
  // Xử lý lỗi ở đây
  console.error('Đã xảy ra lỗi:253', error.message);
}




    
        let selectedSizeButton;
        fetchProducts().then(products => {
            
            const productContent = document.querySelector('.productContent');
            
            products.forEach(product => { 
                
                if(product.categoryId === x && product.id === y){
                    titleElement.textContent = `${product.name} - HADES STUDIO`;
                    const productElement = document.createElement('div');
                    productElement.className = 'ContentInfor';
                    const formattedPrice = product.price.toLocaleString('vi-VN');
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
                         ${formattedPrice} đ
                         </div>
                         <div class="size">
                         <h4>kích thước</h4>
                         <div class="btnsize">
                             <button class="btnsizes " data-size="S">S</button>
                             <button class="btnsizes selected" data-size="M">M</button>
                             <button class="btnsizes" data-size="L">L</button>
                         </div>
                     </div>
                     <div class=" btnadd" onclick="showCart()" >THÊM VÀO GIỎ</div>
                     <div class=" btnpay" onclick="redirectToThanhToan()">MUA NGAY</div>
                     </div>
                 </div>
                        
                    `;
                    productContent.appendChild(productElement);

                    const btnAddSpElements = productElement.querySelectorAll('.btnadd');

                    const buttonsize = productElement.querySelectorAll('.btnsizes');
                    const buttonsizearray = Array.from(buttonsize);
                    buttonsizearray.forEach(button => {
                        button.addEventListener('click', () => {
                            // Xóa lớp "selected" khỏi tất cả các nút
                            buttonsizearray.forEach(btn => {
                                btn.classList.remove('selected');
                            });
                            
                            // Thêm lớp "selected" cho nút được click
                            button.classList.add('selected');

                            selectedSizeButton = button;

                          
                            
                            
                        });
                    });
                    console.log("jadjakdja")

            // Xử lý các phần tử có class "add" trong sản phẩm hiện tại
            btnAddSpElements.forEach(btn => {
                btn.addEventListener('click', function() {
                    Listgiohang.push(product)
                    
                    console.log('Đã thêm sản phẩm vào giỏ hàng');
                    Listgiohang.forEach(item => {
                        console.log(item);
                        renderCartProducts(Listgiohang, contentElement);
                        updateTotalPrice(Listgiohang);
                        
                        
                    });
                    
                });
            });

            btnAddSpElements.forEach(addElement => {
              
                const linkElement = addElement.querySelector('a');
                if (linkElement) {
                   

                    const textContent = linkElement.textContent;
                    addElement.textContent = textContent;
                }
            });

                    
        
                    } 
            });
        })
    
    

    function searchProducts(keyword) {
        
        searchResults.innerHTML = '';
    
        // Lặp qua dữ liệu sản phẩm và tìm kiếm dựa trên từ khóa
       
        fetchProducts().then(products => {
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

                    <a href="../Hades-Project/product-Infor.html?productId=${product.id}&categoryId=${product.categoryId}"></a>
                `;
    
                // Thêm sản phẩm vào kết quả tìm kiếm
                searchResults.appendChild(productElement);
            }
        });
    })
    searchResults.style.display =' block';
}
    try {
    searchInput.addEventListener('input', () => {
        const keyword = searchInput.value.trim();
        
        if (keyword === '') {
            
            hideAllProducts();
        } else {
            searchProducts(keyword);
        }
    });
  
} catch (error) {
  // Xử lý lỗi ở đây
  console.error('Đã xảy ra lỗi:421', error.message);
}

    
    function hideAllProducts() {
       searchResults.style.display =' none';
    }



    let productIndex = 0;
    const contentElement = document.querySelector('.content');

    // const size = getSizeFromSelectedButton();
    const Listgiohang = [];
    function renderCartProducts(Listgiohang, contentElement) {
        
        // fixxxxxxxxxxxxxxxxxxxxxxxxxxx
        let indexspcart = 0
        if (Listgiohang.length === 0) {
            contentElement.innerHTML = 'Không có gì trong giỏ hàng';
        } else {
            
            contentElement.innerHTML = '';
            // const buttonText = selectedSizeButton.textContent;
            Listgiohang.forEach(product => {
                
                // Tạo và hiển thị sản phẩm trong giỏ hàng
                const productElement = document.createElement('div');
                productElement.className = 'contentform';
                const formattedPrice = product.price.toLocaleString('vi-VN');
                
                productElement.innerHTML = `
                    <div class="leftsp">
                        <div class="anh">
                            <img src="${product.anh1}" alt="">
                        </div>
                        <div class="thongtin">
                            <div class="name">${product.name}</div>
                            <div class="size">ĐEN / <span>${product.size}</span></div>
                            <div class="price">
                                <div class="soluong">1</div>
                                <div class="gia">${formattedPrice}đ</div>
                            </div>
                        </div>
                    </div>
                    <div class="closesmall" data-index="${indexspcart}"><i class="fa-solid fa-xmark"></i></div>
                `;
    
                contentElement.appendChild(productElement);
                indexspcart++;
                
                // Lấy danh sách tất cả các nút xóa

            });

            const btnremovesp = document.querySelectorAll('.closesmall');
            // Chuyển NodeList thành mảng
            const btnremovespArray = Array.from(btnremovesp);

            btnremovespArray.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Lấy vị trí (index) của nút xóa trong danh sách nút
                    const index = parseInt(this.getAttribute('data-index'));
            
                    if (index !== -1) {
                        // Sử dụng hàm splice để xóa sản phẩm tại vị trí index khỏi danh sách
                        Listgiohang.splice(index, 1);
                        
                        console.log('Đã xóa');
                        console.log(index);
            
                        // Cập nhật giao diện sau khi xóa sản phẩm
                        renderCartProducts(Listgiohang, contentElement);
                        updateTotalPrice(Listgiohang);

                    }
                });
            });
            
        }
    }
    function renderCartthanhtoan(Listgiohang, contentElement) {
        
        // fixxxxxxxxxxxxxxxxxxxxxxxxxxx
        let indexspcart = 0
        if (Listgiohang.length === 0) {
            contentElement.innerHTML = 'Không có gì trong giỏ hàng';
        } else {
            
            contentElement.innerHTML = '';
            // const buttonText = selectedSizeButton.textContent;
            Listgiohang.forEach(product => {
                
                // Tạo và hiển thị sản phẩm trong giỏ hàng
                const productElement = document.createElement('div');
                productElement.className = 'contentform';
                const formattedPrice = product.price.toLocaleString('vi-VN');
                
                productElement.innerHTML = `
                    <div class="leftsp">
                        <div class="anh">
                            <img src="${product.anh1}" alt="">
                        </div>
                        <div class="thongtin">
                            <div class="name">${product.name}</div>
                            <div class="size">ĐEN / <span>${product.size}</span></div>
                            <div class="price">
                                <div class="soluong">1</div>
                                <div class="gia">${formattedPrice}đ</div>
                            </div>
                        </div>
                    </div>
                   
                `;
    
                contentElement.appendChild(productElement);
                indexspcart++;

                // Lấy danh sách tất cả các nút xóa
                saveCartToLocalStorage(Listgiohang);
            });

            const btnremovesp = document.querySelectorAll('.closesmall');
            // Chuyển NodeList thành mảng
            const btnremovespArray = Array.from(btnremovesp);

            btnremovespArray.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Lấy vị trí (index) của nút xóa trong danh sách nút
                    const index = parseInt(this.getAttribute('data-index'));
            
                    if (index !== -1) {
                        // Sử dụng hàm splice để xóa sản phẩm tại vị trí index khỏi danh sách
                        Listgiohang.splice(index, 1);
                        
                        console.log('Đã xóa');
                        console.log(index);
            
                        // Cập nhật giao diện sau khi xóa sản phẩm
                        renderCartProducts(Listgiohang, contentElement);

                        

                    }
                });
            });
            
        }
    }


    
    
    function updateTotalPrice(Listgiohang) {
        let total = 0;
    
        Listgiohang.forEach(product => {
            total += product.price;
        });
    
        const spgiohang = document.querySelector('.spgiohang');
        
        // Tạo phần tử mới để hiển thị tổng tiền
        const totalpriceElement = document.createElement('div');
        totalpriceElement.className = 'pricetotal';
        const formattedPrice = total.toLocaleString('vi-VN');
        totalpriceElement.innerHTML = `
            <div class="titlepricetotal">TOTAL</div>
            <div class="totalprice">${formattedPrice}đ</div>
        `;
        
        // Xóa phần tử "totalprice" cũ nếu nó tồn tại
        const oldTotalPriceElement = spgiohang.querySelector('.pricetotal ');
        if (oldTotalPriceElement) {
            oldTotalPriceElement.remove();
        }
        

        
        // Chèn phần tử mới vào nơi bạn muốn hiển thị tổng tiền
        spgiohang.appendChild(totalpriceElement);
    }
    



    renderCartProducts(Listgiohang, contentElement);
    

    

    // function saveCartToLocalStorage() {
    //     localStorage.setItem('cart', JSON.stringify(Listgiohang));
    //   }
      
    //   // Hàm để lấy trạng thái giỏ hàng từ localStorage (nếu có)
    //   function getCartFromLocalStorage() {
    //     const cartData = localStorage.getItem('cart');
    //     return cartData ? JSON.parse(cartData) : [];
    //   }
    //   function getCartProducts() {
    //     return Listgiohang;
    //   }
    //   window.addEventListener('load', function () {
    //     Listgiohang = getCartFromLocalStorage();
    //     // Sau khi cập nhật biến Listgiohang, bạn có thể cập nhật giao diện theo nó
    //     // Ví dụ: renderCartProducts(Listgiohang, contentElement);
    //   });      

    function mess({title = '',textmess = '',type='info',duration=3000}){
        const main = document.getElementById('mess')
        if(main){ 
            const mess = document.createElement('div')
            mess.onclick = function(e){
                if(e.target.closest('.close')){
                    main.removeChild(mess)
                    clearTimeout(autoremove)
                }
            }
            const icons = {
                warning:'fa-solid fa-triangle-exclamation',
                success:'fa-solid fa-circle-check'

            }
            const icon = icons[type]
            const delay = (duration / 1000)
            mess.classList.add('mess' , `${type}`)         
            mess.style.animation=`slide ease .3s , fadeout linear 1s ${delay}s forwards`
            mess.innerHTML = `
            <div class="icon">
                <i class="${icon}"></i>
            </div>
            <div class="text">
                <div class="title">${title}</div>
                <div class="textmess">${textmess}</div>

            </div>
            <div class="close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            `
            main.appendChild(mess)

            const autoremove = setTimeout(function(){
                main.removeChild(mess)
            } ,duration + 1000)

        }
        

    }




  
    function  showmessSuccess(){
        mess({
        title:'success',
        textmess:'Bạn đã đăng kí thành công',
        type:'success',
        duration:1000,
    })
    

    }

    function  successCart(){
        mess({
        title:'success',
        textmess:'Bạn đã đặt hàng thành công',
        type:'success',
        duration:1000,
    })
    

    }
    function showmessWarning(){
        mess({
        title:'Warning',
        textmess:'Bạn đã đăng kí thất bại',
        type:'warning',
        duration:3000,
    })
    

    }
    function warning(){
        mess({
        title:'Warning',
        textmess:'Vui Lòng điền đủ thông tin',
        type:'warning',
        duration:3000,
    })
    

    }
    function  showmessCart(){
        mess({
        title:'success',
        textmess:'Thêm vào giỏ hàng thành công',
        type:'success',
        duration:1000,
    })

    }
    function redirectToThanhToan() {
        window.location.href = './thanhtoan.html';
      }
      function redirectToindex() {
        window.location.href = './index.html';
      }
      function redirectTologin() {
        window.location.href = './login.html';
      }

