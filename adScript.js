const adContainer = document.querySelector('.container-ads');

const ads = {
    firstAd: {
        imgSrc: {
            firstSrc: 'img/vino.png',
            secondSrc: 'img/cheese.png'
        },
        titleAd: {
            firstTitle: 'Vine',
            secondTitle: 'Cheese'
        },
        paraphraf: {
            firstParaphraf: `Wine is one of the oldest and most beloved beverages in the world, 
                made by fermenting the juice of grapes.`,
            secondParaphraf: `Italy is world-famous for its incredible variety of cheese, 
                each with its own unique flavor, texture, and story.`
        }
    },
    secondAd: {
        imgSrc: {
            firstSrc: 'img/img4face.png',
            secondSrc:  'img/img1face.png'
        },
        titleAd: {
            firstTitle: 'Prosecco',
            secondTitle: 'Pecorine'
        },
        paraphraf: {
            firstParaphraf: `Wine is one of the oldest and most beloved beverages in the world, 
                made by fermenting the juice of grapes.`,
            secondParaphraf: `Italy is world-famous for its incredible variety of cheese, 
                each with its own unique flavor, texture, and story.`
        }
    },
    thirdAd: {
        imgSrc: {
            firstSrc: 'img/img5face.png',
            secondSrc:  'img/img2face.png'
        },
        titleAd: {
            firstTitle: 'Chainti',
            secondTitle: 'Gorgonzola'
        },
        paraphraf: {
            firstParaphraf: `Wine is one of the oldest and most beloved beverages in the world, 
                made by fermenting the juice of grapes.`,
            secondParaphraf: `Italy is world-famous for its incredible variety of cheese, 
                each with its own unique flavor, texture, and story.`
        }
    },
    fourthAd: {
        imgSrc: {
            firstSrc: 'img/img6face.png',
            secondSrc:  'img/img3face.png'
        },
        titleAd: {
            firstTitle: 'Barolo',
            secondTitle: 'Taleggio'
        },
        paraphraf: {
            firstParaphraf: `Wine is one of the oldest and most beloved beverages in the world, 
                made by fermenting the juice of grapes.`,
            secondParaphraf: `Italy is world-famous for its incredible variety of cheese, 
                each with its own unique flavor, texture, and story.`
        }
    }
}

const createImgBlock = function (src1, src2) {
    const imagesBlock = document.createElement('div');
    imagesBlock.classList.add('images-ad');

    const firstImg = document.createElement('img');
    firstImg.classList.add('vino');
    firstImg.src = src1;

    const secondImg = document.createElement('img');
    secondImg.classList.add('cheese');
    secondImg.src = src2;

    imagesBlock.appendChild(firstImg)
    imagesBlock.appendChild(secondImg);

    return imagesBlock;
}

const createInfoBlock = function (title, p) {
    const infoBlockAd = document.createElement('div');
    infoBlockAd.classList.add('block-info-ad');

    const titleInfo = document.createElement('span');
    titleInfo.classList.add('title-of-block-info');
    titleInfo.innerText = title;

    const paraphrafInfo = document.createElement('p');
    paraphrafInfo.classList.add('paraphraf-info');
    paraphrafInfo.innerText = p;


    infoBlockAd.append(titleInfo, paraphrafInfo);
    return infoBlockAd;
};

const createBtnBlock = function (clas) {
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-block');

    const labelBlock = document.createElement('div');
    labelBlock.classList.add('top-btn-block');

    const label1 = document.createElement('span');
    label1.classList.add( ... clas);
    const label2 = document.createElement('span');
    label2.classList.add( ... clas);
    
    labelBlock.append(label1, label2);
    const btn = document.createElement('button');
    btn.classList.add('btn-info');
    btn.innerText = 'Try it';
    
    btnContainer.append(labelBlock, btn);

    return btnContainer;
};


const addnewAd = function (el, adData) {
    const addSectionAd = document.createElement('section');
    addSectionAd.classList.add('ad-section');

    const imagesBlock = createImgBlock(adData.imgSrc.firstSrc, adData.imgSrc.secondSrc);


    const infoAdContainer = document.createElement('div');
    infoAdContainer.classList.add('info-ad');
    
    const infoBlock1 = createInfoBlock(adData.titleAd.firstTitle, adData.paraphraf.firstParaphraf);
    const infoBlock2 = createInfoBlock(adData.titleAd.secondTitle, adData.paraphraf.secondParaphraf);

    const btnAd1 = createBtnBlock(['top-btn-label', 'vine-top-btn-label']);
    const btnAd2 = createBtnBlock(['top-btn-label', 'cheese-top-btn-label']);

    infoBlock1.append(btnAd1);
    infoBlock2.append(btnAd2);
    infoAdContainer.append(infoBlock1, infoBlock2);

    addSectionAd.append(imagesBlock, infoAdContainer);
    el.appendChild(addSectionAd);


    infoBlock2.style.border = "none";
};

const adsArray = Object.values(ads);
let currentIndex = 0;
let autoSlideInterval;

const updateSlider = () => {
    adContainer.innerHTML = "";

    const adSection = document.createElement("section");
    adSection.classList.add("ad-section");
    adSection.style.opacity = "0";

    addnewAd(adSection, adsArray[currentIndex]);
    adContainer.appendChild(adSection);

    setTimeout(() => {
        adSection.style.opacity = "1";
        adSection.style.transition = "opacity 0.5s ease-in-out";
    }, 50);

    adSection.addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval);
    });

    adSection.addEventListener("mouseleave", () => {
        startAutoSlide();
    });
};


const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % adsArray.length;
        updateSlider();
    }, 5000);

};

updateSlider();
startAutoSlide();
