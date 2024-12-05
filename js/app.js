function bars() {
    const bars = document.querySelector('#bars'),
    closebars = document.querySelector('#closebars')

    bars.addEventListener('click', () => {
        bars.classList.toggle('active')
    })
    closebars.addEventListener('click', () => {
        bars.classList.toggle('active')
    })
}
bars()
function videoCard(){
    let video = document.querySelector('.container .video-container video');
    let videoLinks = document.querySelectorAll('.container .side-bar .list li');

videoLinks.forEach(link =>{
    link.onclick = () =>{
        let src = link.getAttribute('data-src');
        video.src = src;
        sideBar.classList.remove('active');
        videoLinks.forEach(remove =>{remove.classList.remove('active')});
        link.classList.add('active');
    }
})
}
videoCard()

function searchButton() {
    // Elementlarni olish
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".products .product");

// Qidiruv funksiyasi
searchInput.addEventListener("keyup", () => {
  const filter = searchInput.value.toLowerCase(); // Foydalanuvchi yozgan matnni oling va kichik harflarga o'tkazing

  // Har bir mahsulotni tekshirish
  products.forEach(product => {
    const productName = product.querySelector("h3").textContent.toLowerCase(); // Mahsulot nomini oling

    // Qidiruv so'ziga mos kelish-tekshirish
    if (productName.includes(filter)) {
      product.style.display = ""; // Ko'rsatish
    } else {
      product.style.display = "none"; // Yashirish
    }
  });
});
}
searchButton()

function topBtn(){
// Scroll to Top tugmasini tanlab olamiz
const scrollTopBtn = document.querySelector(".scrool-top-btn");

// Sahifa skroll qilinganda tugmani ko'rsatish
window.addEventListener("scroll", () => {
    if (window.scrollY > 400) { // 300px dan pastga skroll qilinsa
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

// Tugma bosilganda sahifaning yuqorisiga qaytarish
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0, // Yuqoriga qaytish
        behavior: "smooth" // Silliq harakat
    });
});

}

topBtn()



// JSON formatda bloglar ro'yxati
const blogs = [
    {
      image: "https://picsum.photos/400/?random=1",
      title: "Mevalarning Foydasi",
      content: "Mevalar inson sog'lig'iga juda foydali. Ular vitamin va minerallarga boy bo'lib, immunitetni kuchaytiradi."
    },
    {
      image: "https://picsum.photos/400/?random=1",
      title: "Sabzavotlar va Salomatlik",
      content: "Sabzavotlarni kundalik ratsioningizga qo'shing. Ular organizmni tozalaydi va sog'lom ovqatlanish uchun zarurdir.",
    },
    {
      image: "https://picsum.photos/400/?random=1",
      title: "Sog'lom Nonushta",
      content: "Nonushta kunning eng muhim taomi. Sog'lom va to'yimli nonushta energiya beradi va unumdorlikni oshiradi."
    },
  ];
  
  // HTMLga chiqarish uchun funksiya
  const renderBlogs = () => {
    const container = document.getElementById("blog-container");
  
    blogs.forEach((blog) => {
      // Blog elementini yaratish
      const blogElement = document.createElement("div");
      blogElement.className = "blog";
  
      // Rasm elementi
      const img = document.createElement("img");
      img.src = blog.image;
      img.alt = blog.title;
  
      // H3 sarlavha
      const h3 = document.createElement("h3");
      h3.textContent = blog.title;
  
      // Paragraf matni
      const p = document.createElement("p");
      p.textContent = blog.content;
  
      // Elementlarni blog elementiga qo'shish
      blogElement.appendChild(img);
      blogElement.appendChild(h3);
      blogElement.appendChild(p);
  
      // Blog elementini konteynerga qo'shish
      container.appendChild(blogElement);
    });
  };
  
  // Sahifa yuklanganida bloglarni chiqarish
  window.onload = () => {
    renderBlogs();
  };
  