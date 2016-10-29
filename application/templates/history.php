<?php 
session_start();

    //если история не пустая, выводим её
    if (isset($_SESSION['history'])) {
        foreach ($_SESSION['history'] as $row){
            $url=explode("/",$row);
            echo '<li><a href="'.$row.'">'.(Model_Page::get_title_by_id($url[3])).'</a><li>';
        }
    }
    else
    {
        //добавление первой страницы в историю
        $_SESSION['history'][] = $_SERVER['REQUEST_URI'];
    }

    if (!in_array($_SERVER['REQUEST_URI'],$_SESSION['history'])){
    //если в истории уже есть 2 страницы, забираем одну страницу из стека
    if(count($_SESSION['history'])>1)   
        array_pop($_SESSION['history']);

    //добавляем страницу в стек
    array_unshift($_SESSION['history'], $_SERVER['REQUEST_URI']);
    }
//session_destroy();
?>
