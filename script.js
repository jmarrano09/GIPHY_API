const KEY = 'ZE8s91OKRV4yGc3zq5ogvvrI7kgBfxnx';
var last='';
function inputForm(){
  var userInput = $('#search-form').val();
  var button_div = $('#buttons');
  button_div.prepend('<input class="btn btn-primary gifButt" value="'+userInput+'">')
}


 $(document.body).on("click", ".gifButt", function() {

        var APISearchString = $(this).val().split(" ").join("+");


        if(APISearchString!=last || last!=''){
          last=APISearchString;
          $('#image-display').empty();
          var obj = $.get("http://api.giphy.com/v1/gifs/search?q=+"+APISearchString+"&api_key="+KEY+"&limit=10",
      function(response){return response;}).done(a => {
        var temp = obj.responseJSON.data;
        console.log(temp.length);
        for (let i=0 ; i<temp.length ; i++){
        var imUrl = temp[i].images.fixed_height_downsampled.url;
        $('#image-display').append("<div class='container-fluid image'><div class='row'>Rating: "+temp[i].rating+"</div><div class='row'><iframe src='"+temp[i].embed_url+"'></div>");
              
        }
        }); 
    }
});

