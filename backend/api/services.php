<?php
//headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $data = [];
    $services = Services::getservice_list();
    if (!empty($services)) {
        foreach ($services as $serviceRec) {
            $data[] = [
                "id"            => $serviceRec->id,
                "title"         => $serviceRec->title,
                "icon_library"  => $serviceRec->sub_title,
                "icon"          => $serviceRec->icon,
                "content"       => strip_tags($serviceRec->content)
            ];
        }
    }
    http_response_code(200);
    echo "var serviceDetails = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
