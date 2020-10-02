<?php

    require_once 'php/model/portfolio.model.php';
    require_once 'php/view/portfolio.view.php';

    class PortfolioController {

        private $model;
        private $view;
        private $title;

        function __construct() {
            $this->model = new PortfolioModel();
            $this->view = new PortfolioView();
            $this->title = 'Gaspar Lara | Porfolio';
        }

        function getHome() {
            $this->view->renderHome($this->title);
        }
        
        function addClient() {
            $clientName = $_POST['clientName'];
            $clientEmail = $_POST['clientEmail'];
            $clientMessage = $_POST['clientMessage'];
            if( isset($clientName)&&!empty($clientName) &&
                isset($clientEmail)&&!empty($clientEmail) &&
                isset($clientMessage)&&!empty($clientMessage))
            {
                $this->model->addClient($clientName, $clientEmail, $clientMessage);
                $this->view->renderHome($this->title);
            }
        }

    }