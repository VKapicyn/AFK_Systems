<?php

class Controller_search extends Controller
{

	function __construct(){
		$this->view = new View();
	}
	
	function action_words(){
        if(!empty($_POST['search']))
            $_words = $_POST['search'];
        else
            $_words = '';
        $title = 'Поиск'.$_words;
        $content = Model_Search::search($_words);
        
        $this->view->generate('search_view.php', 'template_view.php', $content, $title);

	}
}