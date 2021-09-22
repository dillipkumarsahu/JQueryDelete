

//start coding of delete by drag and drop
$(document).ready(function(){
  $(".gallery li").draggable({
    revert:'invalid',
    stack:'.gallery li',
    containment:'.ui-widget',
  });
  $("#trash").droppable({
    drop:function(event,ui){
      $("#trash").append(ui.draggable);
      $(ui.draggable).show();
    }
  });
});