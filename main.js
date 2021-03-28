canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d")
rowerwidth=100
carwidth=100
rowerheight=100
carheight=100
rowerx=10
carx=100
rowery=10
cary=100
background_image="track.webp"
rower_image="car1.png"
car_image="car2.png"

function add(){
    background_img_tag=new Image();
    background_img_tag.onload=upload_background
    background_img_tag.src=background_image
    rower_img_tag=new Image();
    rower_img_tag.onload=upload_rower
    rower_img_tag.src=rower_image
    car_img_tag=new Image();
    car_img_tag.onload=upload_car
    car_img_tag.src=car_image
    


}
function upload_background(){
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height)
}
function upload_rower(){
    ctx.drawImage(rower_img_tag,rowerx,rowery,rowerwidth,rowerheight)
}
function upload_car(){
    ctx.drawImage(car_img_tag,carx,cary,carwidth,carheight)
}
window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    keypressed=e.keyCode;
    if (keypressed=='38')
{
    up();
    console.log("up") 
}
if (keypressed=='40')
{
    down();
    console.log("down")
}
if (keypressed=='37')
{
    left();
    console.log("left")
}
    if (keypressed=='39')
    {
        right();
        console.log("right")
    }
    if (keypressed=='87')
    {
        up1();
        console.log("up") 
    }
    if (keypressed=='83')
    {
        down1();
        console.log("down")
    }
    if (keypressed=='65')
    {
        left1();
        console.log("left")
    }
        if (keypressed=='68')
        {
            right1();
            console.log("right")
        }
        
}
function up(){
if(rowery>=0){
    rowery=rowery-10;
    upload_background();
    upload_rower();
    upload_car();

}
}
function down(){
    if (rowery<=500){
        rowery=rowery+10;
        upload_background();
        upload_rower();
        upload_car();
    }
}
function left(){
    if (rowerx>=0){
        rowerx=rowerx-10;
        upload_background();
        upload_rower();
        upload_car();
    }
}
function right(){
    if (rowerx<=700){
        rowerx=rowerx+10;
        upload_background();
        upload_rower();
        upload_car();
    }
}


function up1(){
    if(cary>=0){
        cary=cary-10;
        upload_background();
        upload_rower();
        upload_car();
    
    }
    }
    function down1(){
        if (cary<=500){
            cary=cary+10;
            upload_background();
            upload_rower();
            upload_car();
        }
    }
    function left1(){
        if (carx>=0){
            carx=carx-10;
            upload_background();
            upload_rower();
            upload_car();
        }
    }
    function right1(){
        if (carx<=700){
            carx=carx+10;
            upload_background();
            upload_rower();
            upload_car();
        }
    }