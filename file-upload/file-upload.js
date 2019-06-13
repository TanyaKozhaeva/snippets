$(".file-upload input[type=file]").change(function(){
            let filename = $(this).val().replace(/.*\\/, "");
            $(this).closest('.file-upload').find('.file-upload__text').html(filename);
        });
