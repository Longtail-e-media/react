<?php
//headers
header('Content-id: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $id     = (isset($_REQUEST["id"]) and !empty($_REQUEST["id"])) ? $_REQUEST["id"] : 1;
    $field  = (isset($_REQUEST["field"]) and !empty($_REQUEST["field"])) ? $_REQUEST["field"] : '';
    if (!empty($field) and !empty($id)) {
        $data = new stdClass();
        $articleRec = Article::field_by_id($id, $field);
        if (!empty($articleRec)) {
            if ($field == 'image') {
                $imageArr = unserialize($articleRec);
                if (!empty($imageArr)) {
                    $file_path = SITE_ROOT . 'images/articles/' . $imageArr[0];
                    if (file_exists($file_path)) {
                        $data->$field = IMAGE_PATH . 'articles/' . $imageArr[0];
                    }
                }
            } else {
                $data->$field = $articleRec;
            }
        }
        http_response_code(200);
        echo "var fieldDetail = " . json_encode($data) . ";";
        exit();
    }

    $data = new stdClass();
    $articleRec = Article::find_by_id($id);
    if (!empty($articleRec)) {
        $data->id       = $articleRec->id;
        $data->title    = $articleRec->title;
        $data->subtitle = $articleRec->sub_title;
        $data->subtext  = $articleRec->content;
    }
    http_response_code(200);
    echo "var articleDetail = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
