<?php
//headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $type   = (isset($_REQUEST["type"]) and !empty($_REQUEST["type"])) ? $_REQUEST["type"] : 1;

    $data = [];
    $menus = Menu::getMenuByParent(0, $type);
    if (!empty($menus)) {
        foreach ($menus as $menuRec) {
            $data[] = ["id" => $menuRec->id, "title" => $menuRec->name, "link" => $menuRec->linksrc];
        }
    }
    http_response_code(200);
    echo json_encode($data);
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
