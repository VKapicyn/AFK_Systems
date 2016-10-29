<div class="container sidebar">

  <!-- Sidebar -->
  <div class="space-for-navbar"></div>

        <div id="sidebar-wrapper">
            <div class="panel-group" id="accordion">
      <!-- 1 панель СОДЕРЖАНИЕ-->
      <div class="panel panel-default panel-contents">
        <div class="panel-heading">
          <h2 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseContents"><i class="fa fa-list"></i>Содержание</a>
          </h2>
        </div>
        <div id="collapseContents" class="panel-collapse collapse in">
        <!-- Содержимое 1 панели -->
        <div class="panel-body">
          <ul>
            <?php
              $mass=Model::get_pages();
            if(!empty($mass)){
	             foreach($mass as $row){
                 echo '<li><a href="/page/id/'.$row[1].'">'.$row[0].'</a></li>';
	           }
            }  
              ?>
          </ul>
        </div>
        </div>
      </div><!--/panel-contents-->

      <!-- 2 панель ИСТОРИЯ-->
      <div class="panel panel-default panel-history">
        <div class="panel-heading">
          <h2 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseHist"><i class="fa fa-repeat"></i>
                <?php if(Model::get_lang()==true)
                          echo 'История';
                      else
                          echo 'History'; 
                ?>
              </a>
          </h2>
        </div>
        <div id="collapseHist" class="panel-collapse collapse">
          <!-- Содержимое 2 панели -->
          <div class="panel-body">
          <ul>
              <?php include 'application/templates/history.php'; ?>
          </ul>
          </div>
        </div>
      </div><!--/panel-history-->

      <!-- 3 панель ИЗБРАННОЕ-->
      <div class="panel panel-default panel-likes">
        <div class="panel-heading">
          <h2 class="panel-title">
            <a data-toggle="collapse" data-parent="#accordion" href="#collapseLikes"><i class="fa fa-star"></i>
               <?php if(Model::get_lang()==true)
                          echo 'Избранное';
                      else
                          echo 'Bookmarks'; 
                ?>
              </a>
          </h2>
        </div>
        <div id="collapseLikes" class="panel-collapse collapse">
          <!-- Содержимое 3 панели -->
          <div class="panel-body">
            <ul>
             <?php include 'application/templates/bookmarks.php'; ?>
            </ul>
          </div>
        </div>
      </div><!--/panel-likes-->

    </div><!--/accordeon-->

 </div><!-- /#sidebar-wrapper -->
 </div> <!--/container sidebar-->

<!-- <div class="space-for-navbar"></div> -->

<div class="col-md-offset-3 col-md-9 col-xs-12 print-and-likes">
  <a title="Печать" onclick="window.print();"><i class="fa fa-print"></i></a>
        <?php if(!empty($_COOKIE['bookmarks'])){
        $data = unserialize($_COOKIE['bookmarks']);
        $url=explode('/',$_SERVER['REQUEST_URI']);
        $ref=$url[3]; 
       
        $flag=true;
        foreach($data as $row){
            if($row==$ref){
                $flag=false;
                echo '<a title="Добавить в Избранное" href="/mypages/delone"><i class="fa fa-star"></i></a>';
                break;
            }
        }
        if($flag==true){
            echo '<a title="Добавить в Избранное" href="/mypages/add"><i class="fa fa-star-o"></i></a>';
        }
    }
    else
    {
        echo '<a title="Добавить в Избранное" href="/mypages/add"><i class="fa fa-star-o"></i></a>';
    } ?>
</div>
<?php echo $content; ?>