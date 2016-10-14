<?php

class Controller_page extends Controller
{

	function __construct(){
		$this->view = new View();
	}
	
	function action_id($id){
		//запросы к БД с параметром по id
        $content = Model_Page::get_content_by_id($id);
        $title = Model_Page::get_title_by_id($id);
		$this->view->generate('page_view.php', 'template_view.php', $content, $title);
	}
}