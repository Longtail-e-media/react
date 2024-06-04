<?php
//headers
// header('Acess-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {

    http_response_code(500);

    $siteRegular = Config::find_by_id(1);

    if (isset($_REQUEST['logo'])) {
        http_response_code(200);
        echo json_encode(BASE_URL . 'images/preference/' . $siteRegular->logo_upload);
        exit();
    }

    $data = [
        "siteName"      => $siteRegular->sitename,
        "author"        => "SMS",
        "emailAddress"  => $siteRegular->email_address,
        "telephone"     => $siteRegular->contact_info,
        "address"       => $siteRegular->fiscal_address
    ];

    http_response_code(200);
    echo json_encode($data);
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
