<?php
    if(Model::get_lang()==true)
        echo '<h1>Добро пожаловать!</h1>
            <p>
            Главная страница
            </p>';
    else
        echo '<h1>Welcome!</h1>
            <p>
            General page
            </p>';

?>