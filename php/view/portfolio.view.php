<?php

    require_once 'libs/Smarty.class.php';
    
    class PortfolioView {

        private $title;
        private $smarty;

        function __construct() {
            $this->smarty = new Smarty();
        }

        function renderHome($title) {
            $this->title = $title;
            $this->smarty->assign('title', $title);
            $this->smarty->display('templates/index.tpl');
        }
        
        function showHomeLocation(){
            header('Location:'.BASE_URL);
        }

    }