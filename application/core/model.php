<?php

class Model
{   
    //БД
    protected static $dbh;
    
    //определяем язык
    public function get_lang()
    {
        if(empty($_COOKIE['lang'])){
            return true;
        }
        else
        {
            $get_cook = unserialize($_COOKIE['lang']);
            
            if($get_cook[0]=='ru')
                return true; 
            
            if($get_cook[0]=='en')
                return false;
        }
    }
    
    /*возвращает массив заголовков вида array[i][j],
    где i - номер кортежа, j=0 - заголовок, j=1 - id, j=2 - enum. 
    */
    public static function get_pages(){
        Model::connect();
        //запрос к БД с сортировкой по оглавлению
        $text = Model::$dbh->query('SELECT * FROM content ORDER BY enum');
        
        //ловим пустой запрос
        if($text->rowCount()>0){
            $i=0;
            //фильтр по языку
            if(Model::get_lang()){        
                foreach($text as $row){
                    $mas[0] = $row['title_ru'];
                    $mas[1] = $row['id'];
                    $mas[2] = $row['enum'];
                    $array[$i]=$mas;
                    $i++;
	           }
            }
            else
            {
                foreach($text as $row){
                    $mas[0] = $row['title_en'];
                    $mas[1] = $row['id'];
                    $mas[2] = $row['enum'];
                    $array[$i]=$mas;
                    $i++;
	           }
            }
        }
        else
        {
            Route::ErrorPage404();
        }

        return $array;
    }
    
    //соединение с БД
    protected static function connect()
    {
        try{
        $user='root';
        $pass='ctkuub';
        
        Model::$dbh = new PDO('mysql:host=localhost;dbname=afk_systems;charset=utf8', $user, $pass);
        } catch (PDOException $e) {
        print "Error: обратитесь к админситратору Базы дыннх";
        die();
        }
    } 
    
    public static function get_title_by_id($_id){
        //получаем соединение
        Model::connect();
        
        //приведение типа у парамтреа для корректной работы PDO
        $id[0]=$_id;
        
        //запрос к БД
        $text = Model::$dbh->prepare('SELECT * FROM content WHERE id = ?');
        $text->execute($id);
        
        //ловим пустой запрос
        if($text->rowCount()>0){
            $i=0;
            //фильтр по языку
            if(Model::get_lang()){        
                foreach($text as $row){
                    $array[$i]=$row['title_ru'];
                    $i++;
	           }
            }
            else
            {
                foreach($text as $row){
                    $array[$i]=$row['title_en'];
                    $i++;
	           }
            }
        }
        else
        {
            Route::ErrorPage404();
        }

        return $array[0];
    }
    
    public static function get_content_by_id($_id){
        //получаем соединение
        Model::connect();
        
        //приведение типа у парамтреа для корректной работы PDO
        $id[0]=$_id;
        
        //запрос к БД
        $text = Model::$dbh->prepare('SELECT * FROM content WHERE id = ?');
        $text->execute($id);
        
        //ловим пустой запрос
        if($text->rowCount()>0){
            $i=0;
            //фильтр по языку
            if(Model::get_lang()==true){        
                foreach($text as $row){
                    $array[$i]=$row['text_ru'];
                    $i++;
	           }
            }
            else
            {
                foreach($text as $row){
                    $array[$i]=$row['text_en'];
                    $i++;
	           }
            }
        }
        else
        {
            Route::ErrorPage404();
        }

        return $array[0];
    }

}