


//Tabuleiro - Canvas

function draw() {
    const c = document.getElementById("myCanvas");
        const ctx = c.getContext("2d");

        //Linhas Principais - Horizontal
        ctx.moveTo(0, 100);
        ctx.lineTo(300, 100);
        ctx.stroke();
        
        ctx.moveTo(0, 200);
        ctx.lineTo(300, 200);
        ctx.stroke();
        
        //Linhas Principais - Vertical
        ctx.moveTo(100, 0);
        ctx.lineTo(100, 300);
        ctx.stroke();
       
        ctx.moveTo(200, 0);
        ctx.lineTo(200, 300);
        ctx.stroke();

        ctx.moveTo(33, 0);
        ctx.lineTo(33, 300);
        ctx.stroke();
        
        //vertical1
        ctx.beginPath();
        ctx.moveTo(66, 0);
        ctx.lineTo(66, 300);
        ctx.stroke();
        ctx.closePath();

        //vertical2
        ctx.beginPath();
        ctx.moveTo(133, 0);
        ctx.lineTo(133, 300);
        ctx.stroke();
        ctx.closePath();

        //vertical3
        ctx.beginPath();
        ctx.moveTo(166, 0);
        ctx.lineTo(166, 300);
        ctx.stroke();
        ctx.closePath();
        
        //vertical4
        ctx.beginPath();
        ctx.moveTo(233, 0);
        ctx.lineTo(233, 300);
        ctx.stroke();
        ctx.closePath();

        //vertical5
        ctx.beginPath();
        ctx.moveTo(266, 0);
        ctx.lineTo(266, 300);
        ctx.stroke();
        ctx.closePath();

        //vertical6
        ctx.beginPath();
        ctx.moveTo(0, 33);
        ctx.lineTo(300, 33);
        ctx.stroke();
        ctx.closePath();

        //horizontal1
        ctx.beginPath();
        ctx.moveTo(0, 66);
        ctx.lineTo(300, 66);
        ctx.stroke();
        ctx.closePath();

        //horizontal2
        ctx.beginPath();
        ctx.moveTo(0, 133);
        ctx.lineTo(300, 133);
        ctx.stroke();
        ctx.closePath();

        //horizontal3
        ctx.beginPath();
        ctx.moveTo(0, 166);
        ctx.lineTo(300, 166);
        ctx.stroke();
        ctx.closePath();

        //horizontal4
        ctx.beginPath();
        ctx.moveTo(0, 233);
        ctx.lineTo(300, 233);
        ctx.stroke();
        ctx.closePath();

        //horizontal5
        ctx.beginPath();
        ctx.moveTo(0, 266);
        ctx.lineTo(300, 266);
        ctx.stroke();
        ctx.closePath();
}
draw();

