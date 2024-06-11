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
    $socials = SocialNetworking::find_by_sql("SELECT * FROM tbl_social_networking WHERE status=1 AND type='{$type}' ORDER BY sortorder ASC");
    if (!empty($socials)) {
        foreach ($socials as $social) {
            $data[] = [
                "id"    => $social->id,
                "title" => $social->title,
                "link"  => $social->linksrc,
                "class" => $social->icon,
                "img"   => IMAGE_PATH.'social/'.$social->image
            ];
        }
    }
    http_response_code(200);
    echo "var socialList = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
