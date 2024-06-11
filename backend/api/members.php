<?php
//headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $data = [];
    $members = Member::get_all();
    if (!empty($members)) {
        foreach ($members as $member) {
            $data[] = [
                "id"    => $member->id,
                "title" => $member->name,
                "img"   => IMAGE_PATH . 'member/' . $member->image,
                "job"   => $member->position
            ];
        }
    }
    http_response_code(200);
    echo "var memberDetails = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
