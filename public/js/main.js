document.addEventListener('DOMContentLoaded', () => {
    'use strict'
    
    initializePortfolio()
    
    function initializePortfolio() {
        
        const root = document.querySelector('.root');
        
        renderNav()

        function renderNav() {
            fetch('components/nav/nav.html')
            .then(resp => resp.text())
            .then(nav => {
                root.innerHTML += nav
                renderHeader()
            })
        }

        function renderHeader() {
            fetch('components/header/header.html')
            .then(resp => resp.text())
            .then(header => {
                root.innerHTML += header
                renderAbout()
            })
        }

        function renderAbout() {
            fetch('components/about/about.html')
            .then(resp => resp.text())
            .then(about => {
                root.innerHTML += about
                renderWorks()
            })
        }

        function renderWorks() {
            fetch('components/works/works.html')
            .then(resp => resp.text())
            .then(works => {
                root.innerHTML += works
                renderTehcnologies()
            })
        }

        function renderTehcnologies() {
            fetch('components/technologies/technologies.html')
            .then(resp => resp.text())
            .then(technologies => {
                root.innerHTML += technologies
                renderContact()
            })
        }

        function renderContact() {
            fetch('components/contact/contact.html')
            .then(resp => resp.text())
            .then(contact => {
                root.innerHTML += contact
                renderFooter()
            })
        }

        function renderFooter() {
            fetch('components/footer/footer.html')
            .then(resp => resp.text())
            .then(footer => {
                root.innerHTML += footer
                activateEvents();
            })
        }

// Activate Events

        function activateEvents() {
            // redirect location
            document.querySelector('#btnWorksLocation').addEventListener('click', setLocationRedirect);
            document.querySelector('#btnAboutLocation').addEventListener('click', setLocationRedirect);
            document.querySelector('#btnAboutLocation2').addEventListener('click', setLocationRedirect);
            document.querySelector('#btnContactLocation').addEventListener('click', setLocationRedirect);
            document.querySelector('#logoFooter').addEventListener('click', setLocationRedirect);
            // about info
            document.querySelector('#js-showMoreAbout').addEventListener('click', showMoreAbout);
            document.querySelector('.aboutSection').addEventListener('click', switchBackgroundAbout);
            createGalery();
            // Show more works
            document.querySelector('#js-showMoreWorks').addEventListener('click', showMoreGalery);
            // Technologies color
            let techLogos1 = document.querySelectorAll('.green1');
            for (let techLogo of techLogos1) {
                techLogo.addEventListener('touchstart', () => switchColor(techLogo));
                techLogo.addEventListener('touchend', () => switchColor(techLogo));
            }
            let techLogos2 = document.querySelectorAll('.circle1');
            for (let techLogo of techLogos2) {
                techLogo.addEventListener('touchstart', () => switchColor(techLogo));
                techLogo.addEventListener('touchend', () => switchColor(techLogo));
            }
            // contact actions
            document.querySelector('#js-btn-ClientSubmit').addEventListener('click', createUser);
            document.querySelector('.thanks').addEventListener('click', closeThanks);
        }
    }

// Redirect Locations
    
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

    function showMoreAbout() {
        window.location.href = '#moreAboutLocation';
        document.querySelector('.moreAboutTextBox').classList.toggle('js-show-content');
        document.querySelector('.iconMoreAbout').classList.toggle('fa-minus-circle');
        document.querySelector('.iconMoreAbout').classList.toggle('fa-plus-circle');
    }

    function switchBackgroundAbout() {
        let btnMore = document.querySelector('#js-showMoreAbout');
        this.classList.toggle('js-setColor');
        this.classList.toggle('js-setBgColor');
        btnMore.classList.toggle('js-setColor');
    }

// Create galery

    function createGalery() {
        let boardContainer = document.querySelector('.galeryWorksSection');
        for(let i=0; i<12; i++) {
            let square = document.createElement('div');
            let niceImg = document.createElement('img');
            let nicevideo = document.createElement('video');
            boardContainer.appendChild(square);
            square.setAttribute('data-id', i);
            square.className = 'squareClass';
            if(i!==0&&i%2!==0&&i<=15) {
                square.appendChild(nicevideo);
                nicevideo.autoplay = true;
                nicevideo.muted = true;
                nicevideo.loop = true;
                nicevideo.src = 'components/works/img/compressed/'+i+'vid.mp4';
            } else {
                square.appendChild(niceImg);
                niceImg.src = 'components/works/img/compressed/'+i+'img.jpg';
            }
        }

        let squares = document.querySelectorAll('.squareClass');
        for (let square of squares) {
            square.addEventListener('click', () => openNiceImg(square));
            square.addEventListener('touchstart', () => setBorder(square));
            square.addEventListener('touchend', () => setBorder(square));
        }
    }
    
// Create MORE galery

    function showMoreGalery() {
        createMoreGalery();
        this.classList.add('js-show-content');
    }

    function createMoreGalery() {
        let boardContainer = document.querySelector('.galeryWorksSection-more');
        for(let i=12; i<24; i++) {
            let square = document.createElement('div');
            let niceImg = document.createElement('img');
            let nicevideo = document.createElement('video');
            boardContainer.appendChild(square);
            square.setAttribute('data-id', i);
            square.className = 'squareClass-more';
            if(i!==0&&i%2!==0&&i<=15) {
                square.appendChild(nicevideo);
                nicevideo.autoplay = true;
                nicevideo.muted = true;
                nicevideo.loop = true;
                nicevideo.src = 'components/works/img/compressed/'+i+'vid.mp4';
            } else {
                square.appendChild(niceImg);
                niceImg.src = 'components/works/img/compressed/'+i+'img.jpg';
            }
        }

        let squares = document.querySelectorAll('.squareClass-more');
        for (let square of squares) {
            square.addEventListener('click', () => openNiceImg(square));
            square.addEventListener('touchstart', () => setBorder(square));
            square.addEventListener('touchend', () => setBorder(square));
        }
    }
    
    function openNiceImg(square) {
        const carouselSection = document.querySelector('.carouselSection');
        let id_img = square.dataset.id;
        carouselSection.classList.toggle('js-show-content');
        let loading = document.createElement('div');
        carouselSection.appendChild(loading);
        loading.className = 'loadingBox';
        fetch('components/works/carousel.html')
        .then(resp=>{return resp.text()})
        .then(carousel=>{
            carouselSection.innerHTML = carousel;
            document.querySelector('#js-btn-close-carousel').addEventListener('click', closeCarousel);
            let imgBox = document.querySelector('.imgCarouselBox');
            if(id_img!==0&&id_img%2!==0&&id_img<=15) {
                let video = document.createElement('video');
                imgBox.appendChild(video);
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.src = 'components/works/img/'+id_img+'vid.mp4';
            } else {
                let img = document.createElement('img');
                imgBox.appendChild(img);
                img.src = 'components/works/img/'+id_img+'img.jpg';
            }
        })
    }
    
    function setBorder(square) {
        let id_img = square.dataset.id;
        square.classList.toggle('js-setBorder');
    }

    function closeCarousel() {
        const carouselSection = document.querySelector('.carouselSection');
        carouselSection.innerHTML = '';
        carouselSection.classList.toggle('js-show-content');
    }

// Technologies

    function switchColor(techLogo) {
        let id = techLogo.dataset.id;
        document.querySelector(`.techLogo-${id}`).classList.toggle('js-setColor');
        document.querySelector(`.techLogo-${id}`).classList.toggle('js-setColor-fill');
        document.querySelector(`.techLogo-${id}`).classList.toggle('js-setBgColor');
    }

// Contact

// FIREBASE

    const firebaseConfig = {
        apiKey: "AIzaSyBRollxYqEmwfhVsdn2n1d-zzdLXztwwoU",
        authDomain: "gasparlaraworks.firebaseapp.com",
        databaseURL: "https://gasparlaraworks.firebaseio.com",
        projectId: "gasparlaraworks",
        storageBucket: "gasparlaraworks.appspot.com",
        messagingSenderId: "464980624946",
        appId: "1:464980624946:web:7bd466f9c37a03c2885e2b",
        measurementId: "G-1W8XQV3FHL"
    }
    firebase.initializeApp(firebaseConfig);

    const auth = firebase.auth();
    const db = firebase.firestore();
    const storage = firebase.storage();
    firebase.analytics();

    function createUser(e) {
        e.preventDefault()
        let thanksContain = document.querySelector('.thanks')
        thanksContain.classList.toggle('js-show-content')
        let loading = document.createElement('div');
        loading.className = 'loadingBox';
        thanksContain.appendChild(loading);

        const formUser = document.querySelector('.contactForm')
        let name = formUser['name'].value
        let email = formUser['email'].value
        let message = formUser['message'].value
        let password = formUser['email'].value

        console.log( '//Name: '+name+'// Email: '+email+' // Message: '+message+'// Password: '+password)

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(cred => {
            let userID = cred.user.uid
            let dateTime = getContactTime()
            addClientMessage(userID, name, email, message, dateTime)
        })
        .catch(error => {
            showError();
        })
    }

    function getContactTime() {
        let d = new Date();
        let date = d.toLocaleDateString();
        let time = d.toLocaleTimeString();
        return date+' '+time
    }

    function addClientMessage(userID, name, email, message, time) {
        db.collection('clients').add({
            userID: userID,
            email: email,
            message: message,
            name: name,
            time: time,
        })
        .then(docref => {
            showThanks(name);
        })
        .catch(error => {
            console.log('Catch addClientMessage() error: '+ error);
        });
    }
    
    function showThanks(name) {
        let thanksContain = document.querySelector('.thanks')
        fetch('components/contact/thanks.html')
        .then(resp => resp.text())
        .then(thanks => {
            thanksContain.innerHTML = thanks
            document.querySelector('.thanks-clientName').innerHTML = name;        
        })
    }
    
    function showError() {
        let thanksContain = document.querySelector('.thanks')
        fetch('components/contact/error.html')
        .then(resp => resp.text())
        .then(error => {
            thanksContain.innerHTML = error       
        })
    }

    function closeThanks() {
        this.classList.toggle('js-show-content');
        document.querySelector('.contactForm').reset();
    }






})