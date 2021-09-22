$(document).ready(function(){
var txtbtn = $('.delete-btn').html();
var count = 0;
	//coding of selectable mode
	$(".b-mode").click(function(){
		//btn design coding
		$(this).css({
			background:'blue',
			color:'white',
		});
		$(".uses").html("Select list and click on delete");
		$(".uses").delay(1300).fadeOut();
		$(".b-mode").click(function(){
			location.reload();
		});
		//delete and select coding 
		$(".email-list").selectable({
			selected:function(event,ui){
				$(".delete-btn").html("Delete");
			},
			unselected:function(event,ui){
				$(".delete-btn").html(txtbtn);
			},
			stop:function(event,ui){
				$(".delete-btn").click(function(){
					count += $(".ui-selected").length;
					var del_record = $('.ui-selected');
					$(".delete-btn").html(count+" item deleted !");
					$(".ui-selected").remove();
					$(".restore-btn").fadeIn();
					$(".restore-btn").click(function(){
						$(".email-list").append(del_record);
						$(this).fadeOut(function(){
							$(".notice").html(count+" item restored");
							$(".delete-btn").html("Delete");
							$(".notice").delay(2000).fadeOut(function(){
								location.reload(); 
							});
						});
					});
				});
			}
		});
	});

	//coding of dragable mode
	$(".c-mode").click(function(){
		//stope select mode when click
		//on draggable btn
				$(".b-mode").css({
					background:'white',
					color:'black',
				});
				$(".email-list li").draggable();
				$(".b-mode").click(function(){
					location.reload();
				});
		$(".uses").html("Drag item to delete");
		$(".uses").delay(1300).fadeOut();
		$(this).css({
			background:'blue',
			color:'white',
		});
		$(".c-mode").click(function(){
			location.reload();
		});
		//change delete btn coding
		//btn to fa fa icon
		$(".delete-btn,restore-btn").fadeOut();
		$(".del").delay(700).fadeIn();
		$(".email-list li").draggable({
			cursor:'move',
    		helper:function(event,ui){
    			return $("<i class='fa fa-trash del' style='font-size:50px;text-shadow:0px 0px 20px grey;'></i>");
    		},
    		revert:'invalid',
    		containment:'.inside',
		});
		//delete and restore coding by 
		//drag and drop method
		$(".del").droppable({
			drop:function(event,ui){
				var del_record = ui.draggable;
				count += ui.draggable.length;
				$(ui.draggable).remove();
				$(".undo").fadeIn();
				$(".undo").click(function(){
					$(".email-list").append(del_record);
					$(this).fadeOut(function(){
						$(".notice").html(count+" item restored");
						$(".delete-btn").html("Delete");
						$(".notice").delay(2000).fadeOut(function(){
							location.reload(); 
						});
					});
				});
			}
		});
	});
});