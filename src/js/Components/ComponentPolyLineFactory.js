'use strict';

import ComponentBaseFactory from './ComponentBaseFactory.js';

const ComponentPolyLineFactory = (config) => {
	let Component = ComponentBaseFactory(config);

	//二次改造
	Component.addClass('ComponentPolyLine');
	let oCanvasBg = $('<canvas/>').get(0);
	let ctx = oCanvasBg.getContext('2d');

	oCanvasBg.width	= config.width;
	oCanvasBg.height = config.height;
	Component.append(oCanvasBg);

	//水平的线

	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.strokeStyle ="#f00";
	let {width,height} = config;

	let step = 10;
	
	for (let i = 0; i < step + 1; i++) {
		let y = (height / step) * i;
		let w = width;
		ctx.moveTo(0, y);
		ctx.lineTo(w, y);
	}
	ctx.stroke();
	//垂直的线

	step = config.data.length;
	for (let i = 0; i < step + 2; i++) {
		let x = (width / (step + 1)) * i;
		ctx.moveTo(x, 0);
		ctx.lineTo(x, height);
	}
	ctx.stroke();

	//写文本

	let data = config.data;
	let domWidth = width / 2 / (config.data.length + 1);
	data.forEach((ele, index)=> {
		let oText = $('<div class="text"/>').text(ele[0]).css('width',domWidth);
		let x = domWidth * (index + 1);
		oText.css({position: 'absolute',fontSize: '14px',textAlign:'center',bottom:-25,height:20,lineHeight:'20px',left:x-domWidth/2});
		Component.append(oText);

	});



	//画圆点

	let oCanvasLine = $('<canvas/>').get(0);
	let ctxLine = oCanvasLine.getContext('2d');

	oCanvasLine.width	= config.width;
	oCanvasLine.height = config.height;


	ctxLine.lineWidth = 3;
	ctxLine.strokeStyle ="#1188f8";

	let pSingleWidth = width / (data.length + 1);



	function draw (per) {
		ctxLine.clearRect(0, 0, width, height);
		// 描点
		data.forEach((ele, index)=>{
			ctxLine.beginPath();

			let x = pSingleWidth * (index + 1);
			let y = height - height * ele[1] * per;

			ctxLine,moveTo(x, y);
			ctxLine.arc(x, y, 5, 0, Math.PI*2);
			ctxLine.stroke();

			ctxLine.closePath();
		});



		//连线
		ctxLine.beginPath();

		ctxLine.moveTo(pSingleWidth, height - height * data[0][1]);
		let lastx = 0;
		data.forEach((ele, index)=>{
			let x = pSingleWidth * (index + 1);
			let y = height - height * ele[1] * per;

			ctxLine.lineTo(x, y);

			lastx = x;
		});
		ctxLine.stroke();
		//写文本
		data.forEach((ele, index)=>{
			let x = pSingleWidth * (index + 1);
			let y = height - height * ele[1] * per;

			if (ele[2]) {
				ctxLine.fillStyle = ele[2]?ele[2]: '#676767';
			}
			ctxLine.font = "30px Arial";
			ctxLine.fillText ( (ele[1]) * 100 + '%', x - 15, y - 10 );
		});
		ctxLine.stroke();

		//阴影
		ctxLine.lineTo(lastx,height);
		ctxLine.lineTo(pSingleWidth,height);
		ctxLine.fillStyle = 'rgba(255, 188, 188, 0.37)';
		ctxLine.fill();
		ctxLine.closePath();
	}



	let timer = null;
	Component.on('componentLoad', () => {
		let step = 0;
		timer = setTimeout(() => {
			for (let i = 0; i < 100; i++) {
				setTimeout(() => {
					step += 0.01;
					draw(step);
				},i * 10);
			}
		},1500);

	});
	Component.on('componentLeave', () => {
		clearTimeout(timer);
		draw(0);
	});
	Component.append(oCanvasBg).append(oCanvasLine);

	return Component;
}


export default ComponentPolyLineFactory;