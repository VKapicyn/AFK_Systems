<?php

class Controller_Mypages extends Controller
{

	function __construct(){
		$this->view = new View();
	}
    
    //удалить одну закладку
    function action_delone($param){

        $get_cook = unserialize($_COOKIE['bookmarks']);
        $del=array_search($param, $get_cook);
        unset($get_cook[$del]);
        setcookie('bookmarks', serialize($get_cook), time() + 3600, '/');
        header("Location:".$_SERVER['HTTP_REFERER']);
    }
    
    //добавить в закладки
    function action_add(){

        $url=explode('/',$_SERVER['HTTP_REFERER']);
        $ref=$url[5];
        
        if(!empty($_COOKIE['bookmarks'])){
            
            $get_cook = unserialize($_COOKIE['bookmarks']);
            
          //проверка на повторения(переделать на array_unique )
            $i=0;
            foreach($get_cook as $key=>$row){
                if ($row==$ref)
                {
                    $i++;
                    break;
                }
            }
            
            if($i==0){
                array_push($get_cook,$ref);
                setcookie('bookmarks', serialize($get_cook), time() + 3600, '/');
            } 
          //
        }
        else{
            $cook_val = array($ref);
            setcookie('bookmarks', serialize($cook_val), time() + 3600, '/');
        }
        header("Location:".$_SERVER['HTTP_REFERER']);
    }
    
    //удалить все закладки
    function action_delete(){
        $get_cook=array();
        setcookie('bookmarks', serialize($get_cook), time() + 3600, '/');
        header("Location:/mypages");
    }
	
	function action_index(){
        $content='';
        if(!empty($_COOKIE['bookmarks'])){
            $content = unserialize($_COOKIE['bookmarks']);
        }
        
		$this->view->generate('mypages_view.php', 'template_view.php', $content);
	}
}
