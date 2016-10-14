<html>
<!-- заголовок из БД -->
<!--?php
    
        echo '<h2>'.$row.'</h2>';
  
?-->   
        
<!-- типовая страница из БД -->

<?php    
        echo '<h4>'.$content.'</h4>';
?>
    
<?php   
    echo '--------------------';
    
    //<!-- история -->
    if(Model::get_lang()==true)
        echo '<h3>История</h3>';
    else
        echo '<h3>History</h3>';

    include 'application/templates/history.php';  

    echo '--------------------';
    //<!--закладки-->
    echo '<br>';
    include 'application/templates/bookmarks.php';
?>      
</html>
