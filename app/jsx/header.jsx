$(function(){
	
	var Header = React.createClass({
	  render: function() {
		return (
			<div>
				<a href="#" className="boards_wrapper">
					<span className="boards-icon"><i className="fa fa-trello"></i></span>
					<span className="boards">Boards</span>
				</a>
				<input className="search" type="text"/>
				<span className="search-icon"><i className="fa fa-search"></i></span>
				<span className="logo"></span>
				<a href="#">
					<span className="icon"><i className="fa fa-bell"></i></span>
				</a>
				<a href="#">
					<span className="icon"><i className="fa fa-info-circle"></i></span>
				</a>
				<a href="#" className="user_wrapper">
					<span className="user-icon"></span>
					<span className="user">{this.props.user}</span>
				</a> 
				<a href="#">
					<span className="icon"><i className="fa fa-plus"></i></span>
				</a>
			</div>
			);
	  }
	});

	ReactDOM.render(
	  <Header user="Master Yoda"/>,
	  document.getElementById('header')
	);
//------------------------------------------------------------


});