

<?php
require_once('/var/www/html/mpdf/vendor/autoload.php');
class Model_pdf extends Model
{       
    public static function page_pdf($page){
        $html = $page;
        $mpdf = new mPDF();
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
    
    public static function bookmarks_pdf(){
        $html='';
        
        if(!empty($_COOKIE['bookmarks'])){
            $cont = unserialize($_COOKIE['bookmarks']);
        }

        $menu=Model::get_pages();
    
        if (!empty($cont)){
            foreach($cont as $mypage){
                foreach($menu as $page){
                    if($page[1]==$mypage)
                        $html.='<br>'.Model::get_content_by_id($page[1]);
                }
            }
        }
        $mpdf = new mPDF();
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
    
}