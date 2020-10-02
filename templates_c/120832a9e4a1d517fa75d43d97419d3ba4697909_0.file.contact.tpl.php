<?php
/* Smarty version 3.1.34-dev-7, created on 2020-10-01 20:34:49
  from 'C:\xampp\htdocs\proyectos\04. octubre\templates\contact.tpl' */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.34-dev-7',
  'unifunc' => 'content_5f7621494b16a7_40865796',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '120832a9e4a1d517fa75d43d97419d3ba4697909' => 
    array (
      0 => 'C:\\xampp\\htdocs\\proyectos\\04. octubre\\templates\\contact.tpl',
      1 => 1601577248,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5f7621494b16a7_40865796 (Smarty_Internal_Template $_smarty_tpl) {
?><div class="thanks js-show-content">
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
</section><?php }
}
