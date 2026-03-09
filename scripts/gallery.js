// Данные галереи (массив объектов с изображениями)
const galleryImages = [
    {
        src: "../assets/gallery/convoy2.png",
        thumbnail: "../assets/gallery/thumb/convoy2.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy3.png",
        thumbnail: "../assets/gallery/thumb/convoy3.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy4.png",
        thumbnail: "../assets/gallery/thumb/convoy4.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy5.png",
        thumbnail: "../assets/gallery/thumb/convoy5.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy6.png",
        thumbnail: "../assets/gallery/thumb/convoy6.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy7.png",
        thumbnail: "../assets/gallery/thumb/convoy7.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy8.png",
        thumbnail: "../assets/gallery/thumb/convoy8.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy9.png",
        thumbnail: "../assets/gallery/thumb/convoy9.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
	{
        src: "../assets/gallery/convoy10.png",
        thumbnail: "../assets/gallery/thumb/convoy10.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy11.png",
        thumbnail: "../assets/gallery/thumb/convoy11.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy12.png",
        thumbnail: "../assets/gallery/thumb/convoy12.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy13.png",
        thumbnail: "../assets/gallery/thumb/convoy13.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
	{
        src: "../assets/gallery/convoy14.png",
        thumbnail: "../assets/gallery/thumb/convoy14.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy15.png",
        thumbnail: "../assets/gallery/thumb/convoy15.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy16.png",
        thumbnail: "../assets/gallery/thumb/convoy16.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy17.png",
        thumbnail: "../assets/gallery/thumb/convoy17.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
			    {
        src: "../assets/gallery/convoy18.png",
        thumbnail: "../assets/gallery/thumb/convoy18.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy19.png",
        thumbnail: "../assets/gallery/thumb/convoy19.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy20.png",
        thumbnail: "../assets/gallery/thumb/convoy20.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy21.png",
        thumbnail: "../assets/gallery/thumb/convoy21.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
			    {
        src: "../assets/gallery/convoy22.png",
        thumbnail: "../assets/gallery/thumb/convoy22.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy23.png",
        thumbnail: "../assets/gallery/thumb/convoy23.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy24.png",
        thumbnail: "../assets/gallery/thumb/convoy24.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
    },
    {
        src: "../assets/gallery/convoy25.png",
        thumbnail: "../assets/gallery/thumb/convoy25.png",
        caption: "Конвой Vabis Transport | Vabis Transport Convoy",
        captionRu: "Конвой Vabis Transport",
        captionEn: "Vabis Transport Convoy"
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