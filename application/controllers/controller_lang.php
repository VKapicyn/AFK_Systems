<?php

class Controller_Lang extends Controller
{
    public function action_choose($param){
        
        if($param=="ru" || $param=='en')
        {
            if(!empty($_COOKIE['lang'])){
                $get_cook=array();
                setcookie('lang', serialize($get_cook), time() + 3600, '/');
            }
            $cook_val = array($param);
            setcookie('lang', serialize($cook_val), time() + 3600, '/');
        }

        header("Location:".$_SERVER['HTTP_REFERER']);
    }
}