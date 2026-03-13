// Данные галереи (массив объектов с изображениями)
const galleryImages = [
    {
        src: "../assets/gallery/meetup1.jpg",
        thumbnail: "../assets/gallery/meetup1.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup2.jpg",
        thumbnail: "../assets/gallery/meetup2.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup3.jpg",
        thumbnail: "../assets/gallery/meetup3.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup4.jpg",
        thumbnail: "../assets/gallery/meetup4.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup5.jpg",
        thumbnail: "../assets/gallery/meetup5.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup6.jpg",
        thumbnail: "../assets/gallery/meetup6.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup7.jpg",
        thumbnail: "../assets/gallery/meetup7.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup8.jpg",
        thumbnail: "../assets/gallery/meetup8.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup9.jpg",
        thumbnail: "../assets/gallery/meetup9.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup10.jpg",
        thumbnail: "../assets/gallery/meetup10.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup11.jpg",
        thumbnail: "../assets/gallery/meetup11.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup12.jpg",
        thumbnail: "../assets/gallery/meetup12.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup13.jpg",
        thumbnail: "../assets/gallery/meetup13.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup14.jpg",
        thumbnail: "../assets/gallery/meetup14.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup15.jpg",
        thumbnail: "../assets/gallery/meetup15.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup16.jpg",
        thumbnail: "../assets/gallery/meetup16.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup17.jpg",
        thumbnail: "../assets/gallery/meetup17.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup18.jpg",
        thumbnail: "../assets/gallery/meetup18.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup19.jpg",
        thumbnail: "../assets/gallery/meetup19.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup20.jpg",
        thumbnail: "../assets/gallery/meetup20.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup21.jpg",
        thumbnail: "../assets/gallery/meetup21.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup22.jpg",
        thumbnail: "../assets/gallery/meetup22.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup23.jpg",
        thumbnail: "../assets/gallery/meetup23.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    },
    {
        src: "../assets/gallery/meetup24.jpg",
        thumbnail: "../assets/gallery/meetup24.jpg",
        caption: "Встреча Vabis Transport | Vabis Transport Meeting",
        captionRu: "Встреча Vabis Transport",
        captionEn: "Vabis Transport Meeting"
    }
];

// Текущее состояние галереи
let currentImageIndex = 0;
let isModalOpen = false;

// Элементы DOM
const galleryGrid = document.getElementById('gallery-grid');
const modal = document.getElementById('gallery-modal');
const modalImage = document.getElementById('modal-image');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalCounter = document.getElementById('modal-counter');

// Функция для определения текущего языка
function getCurrentLanguage() {
    const currentPage = window.location.pathname.split('/').pop();
    return currentPage.includes('-en') ? 'en' : 'ru';
}

// Функция для загрузки галереи
function loadGallery() {
    if (!galleryGrid) return;
    
    const lang = getCurrentLanguage();
    
    galleryGrid.innerHTML = '';
    
    galleryImages.forEach((image, index) => {
        const caption = lang === 'en' ? image.captionEn : image.captionRu;
        
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.index = index;
        
        galleryItem.innerHTML = `
            <div class="image-wrapper" style="background-color: #2a2a2a;">
                <img src="${image.thumbnail || image.src}" 
                    alt="${caption}" 
                    loading="lazy"
                    style="width: 100%; height: 100%; object-fit: cover; image-rendering: crisp-edges;">
            </div>
            <div class="gallery-caption">${caption}</div>
        `;
        
        galleryItem.addEventListener('click', () => openModal(index));
        
        galleryGrid.appendChild(galleryItem);
    });
}

// Функция для открытия модального окна
function openModal(index) {
    currentImageIndex = index;
    isModalOpen = true;
    
    updateModalImage();
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Запрещаем прокрутку страницы
}

// Функция для закрытия модального окна
function closeModal() {
    isModalOpen = false;
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Возвращаем прокрутку
}

// Функция для обновления изображения в модальном окне
function updateModalImage() {
    const image = galleryImages[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.caption;
    
    const lang = getCurrentLanguage();
    const total = galleryImages.length;
    const current = currentImageIndex + 1;
    
    modalCounter.textContent = lang === 'en' 
        ? `${current} of ${total}` 
        : `${current} из ${total}`;
}

// Функция для переключения на следующее изображение
function nextImage() {
    if (currentImageIndex < galleryImages.length - 1) {
        currentImageIndex++;
    } else {
        currentImageIndex = 0; // Зацикливаем
    }
    updateModalImage();
}

// Функция для переключения на предыдущее изображение
function prevImage() {
    if (currentImageIndex > 0) {
        currentImageIndex--;
    } else {
        currentImageIndex = galleryImages.length - 1; // Зацикливаем
    }
    updateModalImage();
}

// Обработчики событий для клавиатуры
document.addEventListener('keydown', (e) => {
    if (!isModalOpen) return;
    
    switch(e.key) {
        case 'Escape':
            closeModal();
            break;
        case 'ArrowLeft':
            prevImage();
            break;
        case 'ArrowRight':
            nextImage();
            break;
    }
});

// Обработчики событий для кнопок
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalPrev) {
    modalPrev.addEventListener('click', prevImage);
}

if (modalNext) {
    modalNext.addEventListener('click', nextImage);
}

// Закрытие модального окна при клике вне изображения
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Загружаем галерею при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    
    // Перезагружаем галерею при смене языка
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Небольшая задержка, чтобы страница успела перезагрузиться
            setTimeout(loadGallery, 100);
        });
    });
});