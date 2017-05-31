'use strict';

import  ComponentBaseFactory from './ComponentBaseFactory.js';


let ComponentPieFactory = (config) => {
	let Component = ComponentBaseFactory(config);

	
	Component.addClass('ComponentPie');

	let {data, width, height} = config;
	let canvasR = width / 2;
	
	//二次改造

	let oCanvasBg = $('<canvas/>').get(0);
	let ctxBg = oCanvasBg.getContext('2d');
	oCanvasBg.width	= width;
	oCanvasBg.height = height;
	Component.append(oCanvasBg);
	
	ctxBg.beginPath();
	ctxBg.fillStyle = '#ccc';
	ctxBg.strokeStyle = '#ddd';
	ctxBg.lineWidth = 1;
	ctxBg.arc(canvasR, canvasR, canvasR, 0, 2 * Math.PI);
	ctxBg.fill();

	ctxBg.closePath();



	//数据层
	let oCanvasData = $('<canvas/>').get(0);
	let ctxData = oCanvasData.getContext('2d');
	oCanvasData.width = width;
	oCanvasData.height = height;
	Component.append(oCanvasData);

	let sAngel = 1.5 * Math.PI;
	let eAngel = 0;
	let aAngel = 2 * Math.PI;
	let oTextR = canvasR / 2;


	data.forEach((ele, index) => {
		eAngel = sAngel + aAngel * ele[1];

		ctxData.beginPath();
		ctxData.fillStyle = ele[2];
		ctxData.moveTo(canvasR, canvasR);
		ctxData.arc(canvasR, canvasR, canvasR, sAngel, eAngel);
		ctxData.fill();
		


		let x = Math.abs( oTextR * Math.cos( (aAngel - (sAngel + (eAngel - sAngel) / 2)) ) );
		let y = Math.abs( oTextR * Math.sin( (aAngel - (sAngel + (eAngel - sAngel) / 2)) ) );
		let trueAngel = sAngel + (eAngel - sAngel) / 2;

		let oText = $('<div/>').text(ele[0]).css({position:'absolute',fontSize: '14px'});
		
		if (trueAngel >= 1.5 * Math.PI && trueAngel < 2.5 * Math.PI) {
			oText.css('left', oTextR + x);
		}
		
		if (trueAngel >= 2.5 * Math.PI && trueAngel < 3.5 * Math.PI) {
			oText.css('right', oTextR + x);
		}

		if ( (trueAngel >= 1.5 * Math.PI && trueAngel < 2 * Math.PI) || (trueAngel >= 3 * Math.PI && trueAngel < 3.5 * Math.PI) ) {
			oText.css('bottom', oTextR + y);
		}
		if ( (trueAngel >= 2 * Math.PI && trueAngel < 3 * Math.PI) ) {
			oText.css('top', oTextR + y);
		}

		Component.append(oText);

		sAngel = eAngel;
	});



	//遮罩层

	let oCanvasMask = $('<canvas/>').get(0);
	let ctxMask = oCanvasMask.getContext('2d');
	oCanvasMask.width = width;
	oCanvasMask.height = height;
	Component.append(oCanvasMask);


	function draw (per) {
		ctxMask.clearRect(0, 0, width, height);
		ctxMask.beginPath();
		ctxMask.fillStyle = '#fff';
		ctxMask.moveTo(canvasR, canvasR);
		ctxMask.arc(canvasR,canvasR, canvasR, 1.5 * Math.PI, 1.5 * Math.PI - per * 2 * Math.PI - 0, 1);
		ctxMask.fill();
	}

	draw(1);

	Component.on('componentLoad', () => {
		let s = 1;
		for (let i = 0; i < 100; i++) {
			setTimeout( () => {
				s -=0.01;
				draw(s);
			}, i * 15);
		}
	});

	Component.on('componentLeave', () => {
		draw(1);
	});


	return Component;
};





export default ComponentPieFactory;