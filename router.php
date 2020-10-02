<?php
    require_once 'RouterClass.php';
    require_once 'php/controller/portfolio.controller.php';

    define('BASE_URL', '//'.$_SERVER['SERVER_NAME'] . ':' . $_SERVER['SERVER_PORT'] . dirname($_SERVER['PHP_SELF']).'/');

    $r = new Router();

    $r->addRoute('home', 'GET', 'PortfolioController', 'getHome');
    $r->addRoute('addClient', 'POST', 'PortfolioController', 'addClient');

    $r->setDefaultRoute('PortfolioController', 'getHome');

    $r->route($_GET['action'], $_SERVER['REQUEST_METHOD']);