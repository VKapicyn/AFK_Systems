<!--!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
        <!--?php
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
    
    
    
	<body-->
        <div>
            <!-- Подключаем шапку -->
            <?php
            
            if(Model::get_lang()==true)
                include 'application/templates/header_ru.php';
            else
                include 'application/templates/header_en.php';
            
            ?>
        </div>
        
        
        
        
        <!-- Подключаем контент -->  
     <?php include 'application/views/'.$content_view; ?>
        
        
    

       
            
            
            
            
            <!-- Подключаем футер -->
            <?php
            
            if(Model::get_lang()==true)
                include 'application/templates/footer_ru.php';
            else
                include 'application/templates/footer_en.php';
            
            ?>
