  <?php
require_once("/dompdf/dompdf_config.inc.php");
  $html = <<<'ENDHTML'
        <html>
        <body>
        <h1>Hello Dompdf</h1>
        </body>
        </html>
        ENDHTML;

        $dompdf = new DOMPDF();// Создаем обьект
        $dompdf->load_html($html); // Загружаем в него наш html код
        $dompdf->render(); // Создаем из HTML PDF
        $dompdf->stream('mypdf.pdf'); // Выводим результат (скачивание)
echo 'test';
?>