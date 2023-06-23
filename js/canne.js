const dDay = document.querySelector('h4#dDay');

function getClock(){
    const today = new Date();
    const canneDay = new Date(2023, 11, 25);
    //console.log(canneDay);
    let difference = canneDay.getTime() - today.getTime();
    let remainDay = Math.floor(difference / ( 1000 * 60 * 60 * 24));
    
    let remainHour =  Math.floor((difference - (remainDay * 1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    remainHour = String(remainHour).padStart(2, "0");
    
    let remainMinute = Math.floor((difference - (remainDay * 1000 * 60 * 60 * 24) - (remainHour * 1000 * 60 * 60)) / (1000 * 60 ));
    remainMinute = String(remainMinute).padStart(2, "0");

    let remainSecond = Math.floor((difference - (remainDay * 1000 * 60 * 60 * 24) - (remainHour * 1000 * 60 * 60) - (remainMinute * 1000 * 60 ) ) / (1000));
    remainSecond = String(remainSecond).padStart(2, "0");
    
    dDay.innerHTML = `크리스마스까지 ${remainDay}d ${remainHour}h ${remainMinute}m ${remainSecond}s`
}


getClock();
setInterval(getClock, 1000);