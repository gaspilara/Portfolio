document.addEventListener('DOMContentLoaded', ()=> {
    'use strict';
    
// Redirect Locations

    document.querySelector('#btnWorksLocation').addEventListener('click', setLocationRedirect);
    document.querySelector('#btnAboutLocation').addEventListener('click', setLocationRedirect);
    document.querySelector('#btnAboutLocation2').addEventListener('click', setLocationRedirect);
    document.querySelector('#btnContactLocation').addEventListener('click', setLocationRedirect);
    document.querySelector('#logoFooter').addEventListener('click', setLocationRedirect);

    function setLocationRedirect() {
        let flagWorks = document.querySelector('.flagWorks');
        let flagAbout = document.querySelector('.flagAbout');
        let flagContact = document.querySelector('.flagContact');
        switch(this) {
            case document.querySelector('#btnWorksLocation'):
                getLocationRedirect('#worksLocation', flagWorks, flagAbout, flagContact);
                break;
            case document.querySelector('#btnAboutLocation'):
            case document.querySelector('#btnAboutLocation2'):
                getLocationRedirect('#aboutLocation', flagAbout, flagWorks, flagContact); 
                break;
            case document.querySelector('#btnContactLocation'):
                getLocationRedirect('#contactLocation', flagContact, flagWorks, flagAbout); 
                break;
            case document.querySelector('#logoFooter'):
                window.location.href = '#homeLocation';
                break;
        }
    }
    
    function getLocationRedirect(href, flag1, flag2, flag3) {
        window.location.href = href;
        let className = 'js-setColor'
        if(!(flag1.classList.contains(className)))
            flag1.classList.add(className);
        if(flag2.classList.contains(className))
            flag2.classList.remove(className);
        if(flag3.classList.contains(className))
            flag3.classList.remove(className);
    }

// Show more About

    document.querySelector('#js-showMoreAbout').addEventListener('click', showMoreAbout);

    function showMoreAbout() {
        window.location.href = '#moreAboutLocation';
        document.querySelector('.moreAboutTextBox').classList.toggle('js-show-content');
        document.querySelector('.iconMoreAbout').classList.toggle('fa-minus-circle');
        document.querySelector('.iconMoreAbout').classList.toggle('fa-plus-circle');
    }

// Create galery

    function createGalery() {
        const boardContainer = document.querySelector('.galeryWorksSection');
        for(let i=0; i<9; i++) {
            let square = document.createElement('div');
            let niceImg = document.createElement('img');
            let nicevideo = document.createElement('video');
            boardContainer.appendChild(square);
            square.setAttribute('data-id', i);
            square.className='squareSelect';
            if(i!==0&&i%2!==0) {
                square.appendChild(nicevideo);
                nicevideo.autoplay = true;
                nicevideo.muted = true;
                nicevideo.loop = true;
                nicevideo.src = 'img/carousel/test/'+i+'vid.mp4';
            } else {
                square.appendChild(niceImg);
                niceImg.src = 'img/carousel/test/'+i+'img.jpg';
            }
        }
        let squares = document.querySelectorAll('.squareSelect');
        for (let square of squares) {
            square.addEventListener('click', () => {
                openNiceImg(square); 
            });
        }
    }
    createGalery();

    const carouselSection = document.querySelector('.carouselSection');
    function openNiceImg(square) {
        let id_img = square.dataset.id;
        carouselSection.classList.toggle('js-show-content');
        let loading = document.createElement('div');
        carouselSection.appendChild(loading);
        loading.className = 'loadingBox';
        fetch('html/carousel.html')
        .then(resp=>{return resp.text()})
        .then(carousel=>{
            carouselSection.innerHTML = carousel;
            document.querySelector('#js-btn-close-carousel').addEventListener('click', closeCarousel);
            let imgBox = document.querySelector('.imgCarouselBox');
            if(id_img!==0&&id_img%2!==0) {
                let video = document.createElement('video');
                imgBox.appendChild(video);
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.src = 'img/carousel/test/'+id_img+'vid.mp4';
            } else {
                let img = document.createElement('img');
                imgBox.appendChild(img);
                img.src = 'img/carousel/test/'+id_img+'img.jpg';
            }
        })
    }

    function closeCarousel() {
        carouselSection.innerHTML = '';
        carouselSection.classList.toggle('js-show-content');
    }

// js-btn-ClientSubmit

    document.querySelector('#js-btn-ClientSubmit').addEventListener('submit', clientSubmit);
    function clientSubmit(e) {
        e.preventDefault();
        let inpName = document.querySelector('.inpName').value;
        let inpEmail = document.querySelector('.inpEmail').value;
        let textAreaClient = document.querySelector('.textAreaClient').value;
        if(inpName.length === 0 ||inpEmail.length === 0 ||textAreaClient.length === 0) {
            console.log('sadfaef')  
        } else {
            document.querySelector('.thanks').classList.toggle('js-show-content');
        }        
    }

    document.querySelector('#js-btn-close-thanks').addEventListener('click', closeThanks);
    function closeThanks() {
        document.querySelector('.thanks').classList.toggle('js-show-content');
        document.querySelector('.contactForm').reset();
    }










    


})