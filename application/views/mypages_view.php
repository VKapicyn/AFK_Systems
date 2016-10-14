
<?php

    if(Model::get_lang()==true)
        echo '<h2>Мои закладки</h2>
              <p style="font-size:16pt"><a href="mypages/delete">Удалить все залкдаки</a></p><br>';
    else
        echo '<h2>Bookmarks</h2>
              <p style="font-size:16pt"><a href="mypages/delete">Delete all bookmarks</a></p><br>';
  
    $menu=Model::get_pages();
    
    if (!empty($content)){
        foreach($content as $mypage){
            foreach($menu as $page){
                if($page[1]==$mypage)
                    echo '<a href=/page/id/'.$page[1].'>'.$page[0].'</a> - 
                    <a href=mypages/delone/'.$page[1].'>Убрать из закладок</a></br>';
            }
        }        
    }
    else
    {

    }
?>
