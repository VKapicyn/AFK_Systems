<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">

            <?php if(!empty($title)){
                 echo '<title>'.$title.'</title>';
            }
            else
                echo '<title>АФК Система</title>'; ?>
<meta name="description" content="Отчет об устойчивом развитии АФК-система 2015">
<meta name="author" content="">

  <!-- Favicon-->
  <link href="/img/favicon.ico" rel="icon" type="image/x-icon">

  <!-- Styles -->
  <link href="/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="/fonts/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" type="text/css" href="/css/responsive.css">
  <link href="/css/styles.css" rel="stylesheet">
  <link id="dec" href="" rel="stylesheet">

  <!--LESS-->
  <link rel="stylesheet/less" href="/css/styles.less"> <!--сначала стиль-->
  <link id="dec_less" rel="" href="">
  <script src="/js/less.js"></script> <!--потом скрипт-->
  <script>less = { env: 'development' };</script>
  <script>less.watch();</script>

  <!-- Scripts -->
  <script src="/js/jquery-3.1.1.min.js"></script>
  <script src="/js/bootstrap.min.js"></script>
  <script src="/js/graphs.js"></script>

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>

<script src="/js/kegl.js"></script>
<div class="container navigation"> 
    <!-- Navigation -->
    <nav class="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div class="container topnav">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand logo" href="/"><img src="/img/afk-logo.JPG" alt="logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav navbar-right">
              <div class="btn-group">
                <a class="btn dropdown-toggle" data-toggle="dropdown" href="#"><i class="icons fa fa-cogs"></i> <i class="icons fa fa-sort-desc"></i></a>
                  <ul class="dropdown-menu">
                    <li>
                      <a href="#">Скачать весь отчет в PDF (14.9 Mb)</a>
                    </li>
                    <li>
                        <?php
                        $url=explode('/',$_SERVER['REQUEST_URI']);
                        $ref=$url[3];
                        echo '<a href="/pdf/page/'.$ref.'">Скачать текущую страницу в PDF</a>'; ?>
                    </li>
                    <li>
                      <a href="/pdf/page/bookmarks">Скачать избранные страницы в PDF</a>
                    </li>                      
                    <li>
                      <a href="#" onclick="kegl_plus()">Aa+ Увеличить кегль </a>
                    </li>                      
                    <li>
                      <a href="#" onclick="kegl_minus()">Aa- Уменьшить кегль</a>
                    </li>
                  </ul>
                  </div> 

                  <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#" onclick="contrast()"><i class="icons fa fa-adjust"></i></a>
                    </li>
                    <li>
                        <a href="/lang/choose/en"><i class="icons en"></i>EN</a>
                    </li>
                    <li>
                        <a href="#"><i class="icons fa fa-sitemap"></i></a>
                    </li>
                    <li>

                    <form class="navbar-form pull-left navbar-search " action="/search/words" method="POST">
                      <input type="text" class="search-query" placeholder="Search">
                      <button type="submit" class="btn"><i class="fa fa-search my-fa-2"></i></button>
                    </form>
                    </li>                           
                </ul>
                </ul>
            </div> <!-- /.navbar-collapse -->
        </div>        <!-- /.container -->
    </nav>
</div>
