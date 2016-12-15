// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
jQuery(function(){

     jQuery.get('http://localhost:8080/rest/people', function(response){
         if (response === null || response.length <= 0){
             $("#personName").append('<option></option>');
             return;
         }

        $.each(response, function (i, item) {
            $('#personName').append($('<option>', { 
                value: item,
                text : item 
            }));
        });
        
    });

});