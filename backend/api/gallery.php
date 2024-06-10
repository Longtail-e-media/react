<?php
//headers
header('Content-Type: application/javascript');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../includes/initialize.php';
$request_method = $_SERVER['REQUEST_METHOD'];

if ($request_method == 'GET') {
    http_response_code(500);

    $data = [];
    $mainGalleries = Gallery::getGallery();
    if (!empty($mainGalleries)) {
        foreach ($mainGalleries as $mainGallery) {
            $galleries = GalleryImage::getImagelist_by($mainGallery->id);
            foreach ($galleries as $gallery) {
                $file_path = SITE_ROOT . 'images/gallery/galleryimages/' . $gallery->image;
                if (file_exists($file_path)) {
                    $data[] = [
                        "id"        => $gallery->id,
                        "url"       => IMAGE_PATH . 'gallery/galleryimages/' . $gallery->image,
                        "title"     => $gallery->title,
                        "category"  => $mainGallery->title
                    ];
                }
            }
        }
    }
    http_response_code(200);
    echo "var galleryDetails = " . json_encode($data) . ";";
} else {
    http_response_code(405);
    echo json_encode(array("action" => "error", "message" => "Method not allowed."));
}
