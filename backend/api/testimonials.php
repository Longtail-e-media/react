<?php
//headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $data = [];
    $testimonials = Testimonial::get_alltestimonial();
    if (!empty($testimonials)) {
        foreach ($testimonials as $testimonialRec) {
            $data[] = [
                "id"            => $testimonialRec->id,
                "title"         => $testimonialRec->name,
                "subTitle"      => $testimonialRec->via_type,
                "img"           => IMAGE_PATH . 'testimonial/' . $testimonialRec->image,
                "content"       => strip_tags($testimonialRec->content)
            ];
        }
    }
    http_response_code(200);
    echo "var testimonialDetail = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
