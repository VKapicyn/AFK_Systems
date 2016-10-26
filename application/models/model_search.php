<?php

class Model_Search extends Model
{
    
    public static function search($query){
        Model::connect();
        
        $query = trim($query);
        $query = htmlspecialchars($query);
        
        
        
        if (!empty($query))
        {
            if(strlen($query)<3)
            {
                if(Model::get_lang())
                    $text = '<p>Слишком короткий поисковый запрос.</p>';
                else
                    $text = '<p>Too short a search query.</p>';
            } 
            else if (strlen($query)>128)
            {
                if(Model::get_lang())
                    $text = '<p>Слишком длинный поисковый вопрос.</p>';
                else
                    $text = '<p>Search query is too long</p>';
            } 
            else 
            {
                if(Model::get_lang())
                {
                    $_id = Model::$dbh->query("SELECT * FROM `content` WHERE `title_ru` LIKE '%$query%' 
                    OR `text_ru` LIKE '%$query%'");
                    
                    if($_id->rowCount()>0)
                    {
                        $text = '<p>По запросу "'.$query.'" найдено: <br><br>';
                        foreach($_id as $key){
                            $text .= '<a href="/page/id/'.$key['id'].'">'.$key['title_ru'].'</a> <br>';
                        }
                    }
                    else
                        $text = '<p>Ничего не найдено.</p>';
                }
                else
                {
                    $_id = Model::$dbh->query("SELECT * FROM `content` WHERE `title_en` LIKE '%$query%' 
                    OR `text_en` LIKE '%$query%'");
                    
                     if($_id->rowCount()>0)
                    {
                        $text = '<p> On request"'.$query.'" found: <br><br>';
                        foreach($_id as $key){
                            $text .= '<a href="/page/id/'.$key['id'].'">'.$key['title_en'].'</a> <br>';
                        }
                    }
                    else
                        $text = '<p>Nothing found.</p>';

                }
                


            }
            
        }
        else
        {
            if(Model::get_lang())
                $text='Пустой запрос.';
            else
                $text='Empty request.';
        }
         return $text;
    
    }
}