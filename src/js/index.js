import './jquery-ui.min.js';
import './jqueryFullpage.js';
import '../less/ComponentBase.less';
import '../less/ComponentBar.less';
import '../less/ComponentPoly.less';
import '../less/ComponentPie.less';
import '../less/index.less';
import Manage from './PageComponentManage.js';

Manage
			.init('container')
				.addPage('index')
					.addComponent({
						type: 'Base',
						width: 428,
						height: 92,
						center: true,
						css: {
							backgroundImage: 'url(./src/img/logoIndex.png)',
							position: 'absolute',
							top: -40,
							opacity: 0
						},
						animateIn: {
							top: 100,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						}
					})
					.addComponent({
						type: 'Base',
						name: 'shake',
						width: 369,
						height: 95,
						center: true,
						css: {
							backgroundImage: 'url(./src/img/slogan.png)',
							position: 'absolute',
							top: 220,
							left: -400,
							opacity: 0
						},
						animateIn: {
							left: '50%',
							opacity: 1
						},
						animateOut: {
							left: -400,
							opacity: 0
						},
						delay: 300
					})
					.addComponent({
						type: 'Base',
						name: 'left',
						width: 345,
						height: 493,
						css: {
							backgroundImage: 'url(./src/img/left.png)',
							position: 'absolute',
							left: -345,
							bottom: -20,
							opacity: 0
						},
						animateIn: {
							left: 0,
							opacity: 1
						},
						animateOut: {
							left: -345,
							opacity: 0
						},
						delay: 500
					})
					.addComponent({
						type: 'Base',
						name: 'right',
						width: 324,
						height: 449,
						css: {
							backgroundImage: 'url(./src/img/right.png)',
							position: 'absolute',
							right: -324,
							bottom: -20,
							opacity: 0
						},
						animateIn: {
							right: 0,
							opacity: 1
						},
						animateOut: {
							right: -324,
							opacity: 0
						},
						delay: 700
					})
				.addPage()
					.addComponent({
						type: 'Base',
						width: 500,
						height: 124,
						css: {
							backgroundImage: 'url(./src/img/mind.png)',
							position: 'absolute',
							top: -40,
							left: 0,
							opacity: 0
						},
						animateIn: {
							top: 40,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						}
					})
					.addComponent({
						type: 'Base',
						width: 500,
						height: 340,
						text: '用实力让情怀落地',
						center: true,
						css: {
							position: 'absolute',
							top: -40,
							opacity: 0,
							color: '#f40',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						animateIn: {
							top: 140,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						},
						delay:500
					})
					.addComponent({
						type: 'Base',
						width: 521,
						height: 326,
						text: '用地用实力让情怀落地用实力力让情怀落地用实力让情怀落地用实力让情怀落地用实力让情怀落地',
						center: true,
						css: {
							position: 'absolute',
							bottom: 30,
							opacity: 0,
							color: '#000',
							textAlign: 'justify',
							fontSize: '16px',
							lineHeight: '24px',
							fontWeight: 500,
							padding: 5,
							backgroundImage: 'url(./src/img/dialog.png)'
						},
						animateIn: {
							bottom: 280,
							opacity: 1
						},
						animateOut: {
							bottom: 30,
							opacity: 0
						},
						delay:1000
					})
					.addComponent({
						type: 'Base',
						width: 515,
						height: 305,
						center: true,
						css: {
							position: 'absolute',
							bottom: -20,
							opacity: 0,
							backgroundImage: 'url(./src/img/people.png)'
						},
						animateIn: {
							bottom: 80,
							opacity: 1
						},
						animateOut: {
							bottom: -20,
							opacity: 0
						},
						delay:1500
					})
				.addPage()
					.addComponent({
						type: 'Base',
						width: 500,
						height: 124,
						css: {
							backgroundImage: 'url(./src/img/bar.png)',
							position: 'absolute',
							top: -40,
							left: 0,
							opacity: 0
						},
						animateIn: {
							top: 40,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						}
					})
					.addComponent({
						type: 'Base',
						width: 500,
						height: 340,
						text: '课程体系水平柱状图',
						center: true,
						css: {
							position: 'absolute',
							top: -40,
							opacity: 0,
							color: '#f40',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						animateIn: {
							top: 160,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						},
						delay:500
					})
					.addComponent({
						type: 'Bar',
						width: 530,
						height: 600,
						center: true,
						css: {
							position: 'absolute',
							bottom: -40,
							opacity: 0,
							color: '#f00',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						data: [
							['javascript', 0.3, '#af3345'],
							['css', 0.1, '#567ccc'],
							['html', 0.1, '#aaa222'],
							['vue', 0.4, '#534cba']
						],
						animateIn: {
							bottom: 120,
							opacity: 1
						},
						animateOut: {
							bottom: -40,
							opacity: 0
						},
						delay:500
					})
				.addPage()
					.addComponent({
						type: 'Base',
						width: 499,
						height: 124,
						css: {
							backgroundImage: 'url(./src/img/poyline.png)',
							position: 'absolute',
							top: -40,
							left: 0,
							opacity: 0
						},
						animateIn: {
							top: 40,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						}
					})
					.addComponent({
						type: 'Base',
						width: 500,
						height: 340,
						text: '课程体系水平折现图',
						center: true,
						css: {
							position: 'absolute',
							top: -40,
							opacity: 0,
							color: '#f40',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						animateIn: {
							top: 160,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						},
						delay:500
					})
					.addComponent({
						type: 'Poly',
						width: 530,
						height: 600,
						center: true,
						css: {
							position: 'absolute',
							bottom: -40,
							opacity: 0,
							color: '#f00',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						data: [
							['javascript', 0.3, '#af3345'],
							['css', 0.1, '#567ccc'],
							['html', 0.1, '#aaa222'],
							['vue', 0.4, '#534cba']
						],
						animateIn: {
							bottom: 120,
							opacity: 1
						},
						animateOut: {
							bottom: -40,
							opacity: 0
						},
						delay:500
					})
				.addPage()
					.addComponent({
						type: 'Base',
						width: 499,
						height: 124,
						css: {
							backgroundImage: 'url(./src/img/pie.png)',
							position: 'absolute',
							top: -40,
							left: 0,
							opacity: 0
						},
						animateIn: {
							top: 40,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						}
					})
					.addComponent({
						type: 'Base',
						width: 500,
						height: 340,
						text: '课程体系水平饼图',
						center: true,
						css: {
							position: 'absolute',
							top: -40,
							opacity: 0,
							color: '#f40',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						animateIn: {
							top: 160,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						},
						delay:500
					})
					.addComponent({
						type: 'Pie',
						width: 530,
						height: 600,
						center: true,
						css: {
							position: 'absolute',
							bottom: -40,
							opacity: 0,
							color: '#f00',
							lineHeight: '15px',
							textAlign: 'center',
							fontSize: '25px'
						},
						data: [
							['javascript', 0.3, '#af3345'],
							['css', 0.1, '#567ccc'],
							['html', 0.1, '#aaa222'],
							['vue', 0.4, '#534cba']
						],
						animateIn: {
							bottom: 120,
							opacity: 1
						},
						animateOut: {
							bottom: -40,
							opacity: 0
						},
						delay:300
					})
				.addPage()
					.addComponent({
						type: 'Base',
						name: 'back',
						width: 96,
						height: 52,
						center: true,
						css: {
							backgroundImage: 'url(./src/img/back.png)',
							position: 'absolute',
							top: -40,
							opacity: 0
						},
						animateIn: {
							top: 40,
							opacity: 1
						},
						animateOut: {
							top: -40,
							opacity: 0
						},
						eventType: {
							click: () => {
								Manage.container.fullpage.moveTo(1);
							}
						}
					})
					.addComponent({
						type: 'Base',
						width: 128,
						height: 120,
						css: {
							backgroundImage: 'url(./src/img/share.png)',
							position: 'absolute',
							right: 50,
							top: 100,
							opacity: 0
						},
						animateIn: {
							right: 0,
							top: 0,
							opacity: 1
						},
						animateOut: {
							right: 0,
							top: 0,
							opacity: 0
						},
						delay: 500
					})
					.addComponent({
						type: 'Base',
						name: 'shake',
						width: 428,
						height: 92,
						center: true,
						css: {
							backgroundImage: 'url(./src/img/logo.png)',
							position: 'absolute',
							top: 210,
							left: -400,
							opacity: 0
						},
						animateIn: {
							left: '50%',
							opacity: 1
						},
						animateOut: {
							left: -400,
							opacity: 0
						},
						delay: 700
					})
					.addComponent({
						type: 'Base',
						width: 369,
						height: 95,
						center: true,
						css: {
							backgroundImage: 'url(./src/img/slogan.png)',
							position: 'absolute',
							bottom: -20,
							opacity: 0
						},
						animateIn: {
							bottom: 240,
							opacity: 1
						},
						animateOut: {
							bottom: -20,
							opacity: 0
						},
						delay: 800
					})
			.load();







				// .addComponent({
				// 	type:'Pie',
				// 	width: 600,
				// 	height:600,
				// 	center: true,
				// 	css:{
				// 		opacity: 0,
				// 		position: 'absolute',
				// 		top: -100,
				// 		backgroundColor: 'white'
				// 	},
				// 	data: [
				// 		['j/h/c',0.4,'#ff7676'],
				// 		['CSS3',0.3,'#cc8879'],
				// 		['html5',0.2,'#AA6554'],
				// 		['jquery',0.1,'#455677'],
				// 	],
				// 	animateIn: {
				// 		opacity: 1,
				// 		top:100,
				// 	},
				// 	animateOut: {
				// 		opacity: 0,
				// 		top: -100
				// 	},
				// 	delay: 100
				// })