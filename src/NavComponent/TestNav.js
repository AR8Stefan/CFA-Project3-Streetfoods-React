<div>
	<nav>

	<div className="navWide">
        <div className="wideDiv">
            <li onClick={this.burgerToggle}><Link to="/">Home</Link></li>
          	<li onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></li>
         	<li onClick={this.burgerToggle}><Link to="/order">Order</Link></li>
          	<li onClick={this.burgerToggle}><Link to="/contact">Contact</Link></li>
        </div>
    </div>

		<div className="navNArrow">
			<i className="fa fa-bars fa-2x" onClick={this.burgerToggle}>
				<div className="narrowLinks">
          		<li className="NavItems" onClick={this.burgerToggle}><Link to="/">Home</Link></li>
          		<li className="NavItems" onClick={this.burgerToggle}><Link to="/menus/mainmenu">Menus</Link></li>
         		<li className="NavItems" onClick={this.burgerToggle}><Link to="/order">Order</Link></li>
          		<li className="NavItems" onClick={this.burgerToggle}><Link to="/contact">Contact</Link></li>
          	</div>
  		</i>
	</div>

	</nav>

	<div>
		<Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/menus/mainmenu" component={MainMenu}/>
        <Route path="/order" component={Order}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/the_mediteranian" component={Mediteranian}/>
        <Route path="/south_of_the_border" component={SouthBorder}/>
        <Route path="/the_uk" component={Uk}/>
        <Route exact path="/the_far_east" component={FarEast}/>
        <Route exact path="/the_caribbean" component={Caribbean}/>
    </Switch>
</div>
</div>
