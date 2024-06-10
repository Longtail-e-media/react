<?php
//headers
header('Content-id: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $id   = (isset($_REQUEST["id"]) and !empty($_REQUEST["id"])) ? $_REQUEST["id"] : 1;

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
