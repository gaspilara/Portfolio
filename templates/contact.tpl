<div class="thanks js-show-content">
    <button id="js-btn-close-thanks"></button>
    <div class="thanksBox">
        <h1>Thanks!</h1>
        <p>I will try to respond within the next 48 hours.</p>
    </div>
</div>

<section id="contactLocation" class="sectionContact">
    <article class="letsTalkArticle">
        <h5>
            Got a project?<br/>
            Let’s talk.
        </h5>
    </article>

    <form class="contactForm" method="POST" action="addClient">
        <input class="inpName" type="text" name="clientName" placeholder="What’s your name?" required/>
        <input class="inpEmail" type="email" name="clientEmail" placeholder="Your fancy email" required/>
        <div class="textAreaWithBtn">
            <input name="clientMessage" rows="4" cols="50" class="textAreaClient" type="text" placeholder="Tell me about your project" required/>
            <div class="btnFormBox">
                <button type="file" class="btnClip"><i class="fas fa-paperclip"></i></button>
                <button id="js-btn-ClientSubmit" type="submit" class="btnSubmit"><i class="fas fa-arrow-right"></i></button>    
            </div>
        </div>
    </form>
</section>