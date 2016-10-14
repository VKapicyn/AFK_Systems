<?php   
if(!empty($_COOKIE['bookmarks'])){
        $data = unserialize($_COOKIE['bookmarks']);
        $url=explode('/',$_SERVER['REQUEST_URI']);
        $ref=$url[3]; 
       
        $flag=true;
        foreach($data as $row){
            if($row==$ref){
                $flag=false;
                echo '<a href="/mypages/delone/'.$ref.'">Delete</a><br>';
                break;
            }
        }
        if($flag==true){
            echo '<a href="/mypages/add">Add</a><br>';
        }
    }
    else
    {
        echo '<a href="/mypages/add">Add</a><br>';
    }
?>