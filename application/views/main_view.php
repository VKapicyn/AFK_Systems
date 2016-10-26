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
        <!--Меню на время тестирования -->
        <?php 
            if(Model::get_lang()==true) 
                echo '<a href="/">Главная</a><br>';
            else 
                echo '<a href="/">General</a><br>';
            $mass=Model::get_pages();
            if(!empty($mass)){
	             foreach($mass as $row){
                 echo '<a href="/page/id/'.$row[1].'">'.$row[0].'</a><br>';
	           }
            }
        ?>
        <hr>
        <!--Меню на время тестирования -->