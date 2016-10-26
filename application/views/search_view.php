<?php

    if(Model::get_lang()==true)
        echo '<p>Результаты поиска: </p>'.$content;
    else
        echo '<p>Searching results: </p>'.$content;
?>