<?php

class Model_Page extends Model
{       
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
}