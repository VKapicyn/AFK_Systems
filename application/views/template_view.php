<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
        <?php
            if(!empty($title)){
                 echo '<title>'.$title.'</title>';
            }
            else
                echo '<title>АФК Система</title>';
        ?>
		
		<link rel="stylesheet" type="text/css" href="/css/style.css" />
		<script src="/js/jquery-1.6.2.js" type="text/javascript"></script>
		<script type="text/javascript">

		</script>
	</head>
    
    
    
	<body>
        <div id="header">
            <!-- Подключаем шапку -->
            <?php
            
            if(Model::get_lang()==true)
                include 'application/templates/header_ru.php';
            else
                include 'application/templates/header_en.php';
            
            ?>
        </div>
        
        
        
        
        <!--Меню на время тестирования -->
        <?php 
            if(Model::get_lang()==true) 
                echo '<a href="/">Главная</a><br>
                      <a href="/mypages">Закладки</a><br>'; 
            else 
                echo '<a href="/">General</a><br>
                      <a href="/mypages">Bookmarks</a><br>'; 
            $mass=Model::get_pages();
            if(!empty($mass)){
	             foreach($mass as $row){
                 echo '<a href="/page/id/'.$row[1].'">'.$row[0].'</a><br>';
	           }
            }
        ?>
        <hr>
        <!--Меню на время тестирования -->
        
        
        
        
        <div class="content">
        <!-- Подключаем контент -->    
        <?php include 'application/views/'.$content_view; ?>
            
        </div>

		<div id="footer">
            <!-- Подключаем футер -->
            <?php
            
            if(Model::get_lang()==true)
                include 'application/templates/footer_ru.php';
            else
                include 'application/templates/footer_en.php';
            
            ?>
		</div>
	</body>
</html>