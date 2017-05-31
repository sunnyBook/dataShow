'use strict';

import ComponentBaseFactory from './Components/ComponentBaseFactory.js';
import ComponentBarFactory from './Components/ComponentBarFactory.js';
import ComponentPolyLineFactory from './Components/ComponentPolyLineFactory.js';
import ComponentPieFactory from './Components/ComponentPieFactory.js';


let Manage = {
	init: function (name) {
		this.container = $('<div></div>').addClass(name || '').hide();

		$('body').append(this.container);
		
		return this;
	},
	addPage: function(name) {
		this.page = $('<div class="section"></div>').addClass(name || '');
		this.page.append( ComponentBaseFactory({
			type: 'Base',
			text: '694425950@qq.com',
			height:20,
			css: {
				position: 'absolute',
				left:0,
				right:0,
				height: 30,
				bottom: 0,
				lineHeight: '20px',
				backgroundImage: 'url(./src/img/bottom.png)',
				textAlign: 'center',
				opacity: 0
			},
			animateIn: {
				opacity: 1
			},
			animateOut: {
				opacity: 0
			}
		}) );
		this.container.append(this.page);
		
		return this;
	},
	addComponent: function (config) {
		let Component = null;
		switch (config.type) {
			case 'Bar':
				Component = ComponentBarFactory(config);
				break;
			case 'Poly':
				Component = ComponentPolyLineFactory(config);
				break;
			case 'Pie':
				Component = ComponentPieFactory(config);
				break;
			default:
				Component = ComponentBaseFactory(config);
		}
		

		this.page.append(Component);
		
		return this;
	},
	load: function () {
		this.container
			.show()
			.fullpage({
				sectionsColor: ['red','	green','blue'],
				onLeave: function (index, nextIndex, direction) {
					$('.section').eq(index - 1).trigger('pageLeave',index);
				},
				afterLoad: function (anchorLink, index) {
					$('.section').eq(index - 1).trigger('pageLoad',index);	
				}
		});

		$('.section').on('pageLeave',(e, data) => {
			$('.section').eq(data - 1).find('.ComponentBase').trigger('componentLeave');
		});

		$('.section').on('pageLoad',(e,data) => {
			$('.section').eq(data - 1).find('.ComponentBase').trigger('componentLoad');
		});

		$('.section').eq(0).trigger('pageLoad',1);
		
		return this;
	}
}


export default Manage;