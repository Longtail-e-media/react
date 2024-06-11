<link href="<?php echo ASSETS_PATH; ?>uploadify/uploadify.css" rel="stylesheet" type="text/css" />
<?php
$moduleTablename = "tbl_member"; // Database table name
$moduleId = 310;             // module id >>>>> tbl_modules
$moduleFoldername = "";     // Image folder name

if (isset($_GET['page']) && $_GET['page'] == "member" && isset($_GET['mode']) && $_GET['mode'] == "list") :
    clearImages($moduleTablename, "member");
    clearImages($moduleTablename, "member/thumbnails");
?>
    <h3>
        List Members
        <a class="loadingbar-demo btn medium bg-blue-alt float-right" href="javascript:void(0);" onClick="addNew();">
            <span class="glyph-icon icon-separator">
                <i class="glyph-icon icon-plus-square"></i>
            </span>
            <span class="button-content"> Add New </span>
        </a>
    </h3>
    <div class="my-msg"></div>
    <div class="example-box">
        <div class="example-code">
            <table cellpadding="0" cellspacing="0" border="0" class="table" id="example">
                <thead>
                    <tr>
                        <th style="display:none;"></th>
                        <th class="text-center"><input class="check-all" type="checkbox" /></th>
                        <th class="text-center">Name</th>
                        <th class="text-center">Position</th>
                        <th class="text-center"><?php echo $GLOBALS['basic']['action']; ?></th>
                    </tr>
                </thead>

                <tbody>
                    <?php $records = Member::find_by_sql("SELECT * FROM " . $moduleTablename . " ORDER BY sortorder DESC ");
                    foreach ($records as $key => $record) : ?>
                        <tr id="<?php echo $record->id; ?>">
                            <td style="display:none;"><?php echo $key + 1; ?></td>
                            <td><input type="checkbox" class="bulkCheckbox" bulkId="<?php echo $record->id; ?>" /></td>
                            <td>
                                <div class="col-md-7">
                                    <a href="javascript:void(0);" onClick="editRecord(<?php echo $record->id; ?>);" class="loadingbar-demo" title="<?php echo $record->name; ?>"><?php echo $record->name; ?></a>
                                </div>
                            </td>
                            <td><?php echo $record->position; ?></td>
                            <td class="text-center">
                                <?php
                                $statusImage = ($record->status == 1) ? "bg-green" : "bg-red";
                                $statusText = ($record->status == 1) ? $GLOBALS['basic']['clickUnpub'] : $GLOBALS['basic']['clickPub'];
                                ?>
                                <a href="javascript:void(0);" class="btn small <?php echo $statusImage; ?> tooltip-button statusToggler" data-placement="top" title="<?php echo $statusText; ?>" status="<?php echo $record->status; ?>" id="imgHolder_<?php echo $record->id; ?>" moduleId="<?php echo $record->id; ?>">
                                    <i class="glyph-icon icon-flag"></i>
                                </a>
                                <a href="javascript:void(0);" class="loadingbar-demo btn small bg-blue-alt tooltip-button" data-placement="top" title="Edit" onclick="editRecord(<?php echo $record->id; ?>);">
                                    <i class="glyph-icon icon-edit"></i>
                                </a>
                                <a href="javascript:void(0);" class="btn small bg-red tooltip-button" data-placement="top" title="Remove" onclick="recordDelete(<?php echo $record->id; ?>);">
                                    <i class="glyph-icon icon-remove"></i>
                                </a>
                                <input name="sortId" type="hidden" value="<?php echo $record->id; ?>">
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
        <div class="pad0L col-md-2">
            <select name="dropdown" id="groupTaskField" class="custom-select">
                <option value="0"><?php echo $GLOBALS['basic']['choseAction']; ?></option>
                <option value="delete"><?php echo $GLOBALS['basic']['delete']; ?></option>
                <option value="toggleStatus"><?php echo $GLOBALS['basic']['toggleStatus']; ?></option>
            </select>
        </div>
        <a class="btn medium primary-bg" href="javascript:void(0);" id="applySelected_btn">
            <span class="glyph-icon icon-separator float-right">
                <i class="glyph-icon icon-cog"></i>
            </span>
            <span class="button-content"> Submit </span>
        </a>
    </div>

<?php elseif (isset($_GET['mode']) && $_GET['mode'] == "addEdit") :
    if (isset($_GET['id']) && !empty($_GET['id'])) :
        $memberId = addslashes($_REQUEST['id']);
        $memberInfo = Member::find_by_id($memberId);
        $status = ($memberInfo->status == 1) ? "checked" : " ";
        $unstatus = ($memberInfo->status == 0) ? "checked" : " ";
    endif;
?>
    <h3>
        <?php echo (isset($_GET['id'])) ? 'Edit Member' : 'Add New Member'; ?>
        <a class="loadingbar-demo btn medium bg-blue-alt float-right" href="javascript:void(0);" onClick="viewList();">
            <span class="glyph-icon icon-separator">
                <i class="glyph-icon icon-arrow-circle-left"></i>
            </span>
            <span class="button-content"> Back </span>
        </a>
    </h3>

    <div class="my-msg"></div>
    <div class="example-box">
        <div class="example-code">
            <form action="" class="col-md-12 center-margin" id="member_frm">
                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Name :
                        </label>
                    </div>
                    <div class="form-input col-md-6">
                        <input placeholder="Name" class="col-md-6 validate[required,length[0,200]]" type="text" name="name" id="name" value="<?php echo !empty($memberInfo->name) ? $memberInfo->name : ""; ?>">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Position :
                        </label>
                    </div>
                    <div class="form-input col-md-6">
                        <input placeholder="Position" class="col-md-6 " type="text" name="position" id="position" value="<?php echo !empty($memberInfo->position) ? $memberInfo->position : ""; ?>">
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Image :
                        </label>
                    </div>

                    <?php if (!empty($memberInfo->image)) : ?>
                        <div class="col-md-3" id="removeSavedimg<?php echo $memberInfo->id; ?>">
                            <div class="infobox info-bg">
                                <div class="button-group" data-toggle="buttons">
                                    <span class="float-left">
                                        <?php
                                        if (file_exists(SITE_ROOT . "images/member/" . $memberInfo->image)) :
                                            $filesize = filesize(SITE_ROOT . "images/member/" . $memberInfo->image);
                                            echo 'Size : ' . getFileFormattedSize($filesize);
                                        endif;
                                        ?>
                                    </span>
                                    <a class="btn small float-right" href="javascript:void(0);" onclick="deleteSavedImage(<?php echo $memberInfo->id; ?>);">
                                        <i class="glyph-icon icon-trash-o"></i>
                                    </a>
                                </div>
                                <img src="<?php echo IMAGE_PATH . 'member/thumbnails/' . $memberInfo->image; ?>" style="width:100%" />
                            </div>
                        </div>
                    <?php endif; ?>
                    <div class="form-input col-md-10 uploader <?php echo !empty($memberInfo->image) ? "hide" : ""; ?>">
                        <input type="file" name="image" id="image_upload" class="transparent no-shadow">
                        <label>
                            <small>Image Dimensions (800 px X 850 px)</small>
                        </label>
                    </div>
                    <div id="preview_Image"><input type="hidden" name="imageArrayname" value="<?php echo !empty($memberInfo->image) ? $memberInfo->image : ""; ?>" class="" /></div>
                </div>

                <div class="form-row">
                    <div class="form-label col-md-2">
                        <label for="">
                            Published :
                        </label>
                    </div>
                    <div class="form-checkbox-radio col-md-9">
                        <input type="radio" class="custom-radio" name="status" id="check1" value="1" <?php echo !empty($status) ? $status : "checked"; ?>>
                        <label for="">Published</label>
                        <input type="radio" class="custom-radio" name="status" id="check0" value="0" <?php echo !empty($unstatus) ? $unstatus : ""; ?>>
                        <label for="">Un-Published</label>
                    </div>
                </div>

                <button btn-action='0' type="submit" name="submit" class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4" id="btn-submit" title="Save">
                    <span class="button-content">
                        Save
                    </span>
                </button>
                <button btn-action='1' type="submit" name="submit" class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4" id="btn-submit" title="Save">
                    <span class="button-content">
                        Save & More
                    </span>
                </button>
                <button btn-action='2' type="submit" name="submit" class="btn-submit btn large primary-bg text-transform-upr font-bold font-size-11 radius-all-4" id="btn-submit" title="Save">
                    <span class="button-content">
                        Save & quit
                    </span>
                </button>
                <input myaction='0' type="hidden" name="idValue" id="idValue" value="<?php echo !empty($memberInfo->id) ? $memberInfo->id : 0; ?>" />
            </form>
        </div>
    </div>

    <script type="text/javascript" src="<?php echo ASSETS_PATH; ?>uploadify/jquery.uploadify.min.js"></script>
    <script type="text/javascript">
        // <![CDATA[
        $(document).ready(function() {
            $('#image_upload').uploadify({
                'swf': '<?php echo ASSETS_PATH; ?>uploadify/uploadify.swf',
                'uploader': '<?php echo ASSETS_PATH; ?>uploadify/uploadify.php',
                'formData': {
                    PROJECT: '<?php echo SITE_FOLDER; ?>',
                    targetFolder: 'images/member/',
                    thumb_width: 265,
                    thumb_height: 170
                },
                'method': 'post',
                'cancelImg': '<?php echo BASE_URL; ?>uploadify/cancel.png',
                'auto': true,
                'multi': false,
                'hideButton': false,
                'buttonText': 'Upload Image',
                'width': 125,
                'height': 21,
                'removeCompleted': true,
                'progressData': 'speed',
                'uploadLimit': 100,
                'fileTypeExts': '*.gif; *.jpg; *.jpeg;  *.png; *.GIF; *.JPG; *.JPEG; *.PNG;',
                'buttonClass': 'button formButtons',
                /* 'checkExisting' : '/uploadify/check-exists.php',*/
                'onUploadSuccess': function(file, data, response) {
                    $('#uploadedImageName').val('1');
                    var filename = data;
                    $.post('<?php echo BASE_URL; ?>apanel/member/uploaded_image.php', {
                        imagefile: filename
                    }, function(msg) {
                        $('#preview_Image').html(msg).show();
                    });

                },
                'onDialogOpen': function(event, ID, fileObj) {},
                'onUploadError': function(file, errorCode, errorMsg, errorString) {
                    alert(errorMsg);
                },
                'onUploadComplete': function(file) {
                    //alert('The file ' + file.name + ' was successfully uploaded');
                }
            });
        });
        // ]]>
    </script>

<?php endif; ?>