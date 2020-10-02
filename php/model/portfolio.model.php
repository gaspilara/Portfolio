<?php

    class PortfolioModel {

        private $db;

        function __construct() {
            $host = 'host=localhost;';
            $dbname = 'dbname=portfolio;charset=utf8';
            $user = 'root';
            $password = '';
            try {
                $pdo = new PDO( 'mysql:'.$host.$dbname, $user, $password );
                //echo 'Successful connection.';
            } catch ( PDOException $exc ) {
                echo 'Connection error: '.$exc ->getMessage();
            }
            $this->db = $pdo;
        }
        
        function addClient($name, $email, $message) {
            $query = $this->db->prepare('INSERT INTO client (name, email, message) VALUES (?, ?, ?)');
            $query->execute(array($name, $email, $message));
        }

    }