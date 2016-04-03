$(function(){
	
// *******************   CONTENT   *************************	
	var Content = React.createClass({

  showMenu: function() {$(".menu").css("margin-right", "0");},
  changeAddingLayout: function() {
	  $(".add_list_simple")
	  	.removeClass("add_list_simple")
			.addClass("add_list_active")
			.prependTo('.input_wrapper');
			$(".input_wrapper").css("display", "inline-block");
			$(".input_wrapper").find('input').focus();
	},
	closeAddingLayout: function() {
	  $(".add_list_active")
			.appendTo('.content_wrapper')
			.removeClass("add_list_active")
			.addClass("add_list_simple");
			$(".input_wrapper").hide();
	},
	activateAdd: function() {
	  $(".activate_add").hide();
		$(".adding_wrapper").show().find('input').focus();
	},
	deactivateAdd: function() {
	  $(".adding_wrapper").hide();
		$(".activate_add").show();
	},
	addNewCard: function() {
		var theValue = $('.adding_input').val();
	  if(theValue.length>0){
	  $(".task_wrapper").append('<div class="task_title">' + theValue + '</div>');
	  $('.adding_input').val('')
    } 
	}, 
	addNewTask: function() {
		var theValue = $('.add_list_active').val();
		if(theValue.length>0){
		  $(".task_wrapper").append('<div class="task_title">' + theValue + '</div>');
		  $('.add_list_active').val('') 
    } 
	}, 

	render: function() {
		return (
			<div className="content_wrapper">
				<span className="testboard">Testboard</span>
				<span className="content-icon"><i className="fa fa-star-o"></i></span>
				<a href="#" className="private_wrapper">
						<span className="private-icon"><i className="fa fa-lock"></i></span>
						<span className="private">Private</span>
				</a>
				<a href="#" className="show_menu" onClick={this.showMenu}>
						<span className="show-icon"><i className="fa fa-ellipsis-h"></i></span>
						<span className="show">Show menu</span>
				</a> 
				
				<div className="lists">
					<input className="add_list_simple" placeholder="Add a card to the column..." onFocus={this.changeAddingLayout}/>
					<div className="input_wrapper">
						<button className="add_task" onClick={this.addNewTask}>Save</button><i className="fa fa-times close_list" onClick={this.closeAddingLayout}></i> 
					</div>
					
					
					<div className="list_table">
						<div className="list_title">Column </div>
							<div className="task_wrapper">
								<div className="task_title">Name of a card</div> 
							</div>
						<div className="activate_add" onClick={this.activateAdd}>Add a card...</div>
						<div className="adding_wrapper">
							<input className="adding_input" />  
							<button className="add" onClick={this.addNewCard}>Add</button><i className="fa fa-times close_list" onClick={this.deactivateAdd}></i> 
						</div>
					</div>
					
				</div>
				
			</div>
    );
  }
});


	ReactDOM.render(
	  <Content />,
	  document.getElementById('content')
	);
	
// *****************     MENU (CHANGING OF BG COLORS)    *********************************************************	
	var Menu = React.createClass({

	blueColor:       function() {$("body").css("background-color", "#0079BF"); },
  orangeColor:     function() {$("body").css("background-color", "#D29034");},
  greenColor:      function() {$("body").css("background-color", "#519839");},
  brownColor:      function() {$("body").css("background-color", "#B04632");},
  violetColor:     function() {$("body").css("background-color", "#89609E");},
  pinkColor:       function() {$("body").css("background-color", "#CD5A91");},
  lightGreenColor: function() {$("body").css("background-color", "#4BBF6B");},
  lightBlueColor:  function() {$("body").css("background-color", "#00AECC");},
  grayColor:       function() {$("body").css("background-color", "#838C91");},
  
  closeMenu:       function() {$(".menu").css("margin-right", "-340px");},
  
	render: function() {
		return (
			<div className="menu">
				<div className="menu_title">Change Background<i className="fa fa-times" onClick={this.closeMenu}></i></div>
				<hr />
				<div className="colors">
					<span className="color_1" onClick={this.blueColor}></span>
					<span className="color_2" onClick={this.orangeColor}></span>
					<span className="color_3" onClick={this.greenColor}></span>
					<span className="color_4" onClick={this.brownColor}></span>
					<span className="color_5" onClick={this.violetColor}></span>
					<span className="color_6" onClick={this.pinkColor}></span>
					<span className="color_7" onClick={this.lightGreenColor}></span>
					<span className="color_8" onClick={this.lightBlueColor}></span>
					<span className="color_9" onClick={this.grayColor}></span>
				</div>
			</div>
    );
  }
});
	
	ReactDOM.render(
	  <Menu />,
	  document.getElementById('menu')
	);
	

});