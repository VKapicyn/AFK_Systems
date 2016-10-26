<?php   
    if(!empty($_COOKIE['bookmarks'])){
        $cont = unserialize($_COOKIE['bookmarks']);
    }

    $menu=Model::get_pages();
    
    if (!empty($cont)){
        
        if(Model::get_lang()==true)
            echo '<li><a href="/mypages/delete"><i>Очистить избранное</i></a><li></ul><ul>
            <li><a href="/pdf/bookmarks"><i>Избранное в PDF</i></a><li></ul><ul>';
        else
            echo '<li><a href="/mypages/delete"><i>Delete all bookmarks</i></a><li></ul><ul>
            <li><a href="/pdf/bookmarks"><i>Bookmarks in PDF</i></a><li></ul><ul>';
    
        foreach($cont as $mypage){
            foreach($menu as $page){
                if($page[1]==$mypage)
                    echo '<a href="/page/id/'.$page[1].'">'.$page[0].'</a> - 
                    <a href="/mypages/delone/'.$page[1].'"><i> Удалить </i></a></br>';
            }
        }        
    }
    else
    {

    }
?>