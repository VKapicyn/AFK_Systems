<?php

class Controller_pdf extends Controller
{
	
	function __construct(){
		$this->view = new View();
        //$this->model = new Model_Page();
	}
	
	function action_page($id){
        $page = Model::get_content_by_id($id);
        $content = Model_pdf::page_pdf($page);
        $this->view->generate('page_view.php', 'template_view.php', $content, $title);
    }
    
    function action_bookmarks(){
        $content = Model_pdf::bookmarks_pdf();
        $this->view->generate('page_view.php', 'template_view.php', $content, $title);
    }
}