const clockTitle = document.querySelector(".js-clock");

const getClock = () => {
    const nowDate = new Date();
    const nowYear = nowDate.getFullYear();

    let eveDate = new Date(`${nowYear}-12-25T00:00:00+0900`);

    const checkAllSecond = (eveDate.getTime() - nowDate.getTime())/1000;

    if (checkAllSecond > 0) {}
    else {eveDate = new Date(`${nowYear+1}-12-25T00:00:00+0900`);
    }
  
    const counterFunction = () => {             
        const countAllSecond = (eveDate.getTime() - nowDate.getTime())/1000;
        const countDate = Math.floor(countAllSecond/86400);
        const countHour = Math.floor((countAllSecond%86400)/3600);
        const countMin = Math.floor((countAllSecond%3600)/60);
        const countSec = Math.floor(countAllSecond%60);
        
        const dHour = String(countHour).padStart(2,"0");
        const dMin = String(countMin).padStart(2,"0");
        const dSec = String(countSec).padStart(2,"0");       
        
        clockTitle.innerText = `${countDate}d ${dHour}h ${dMin}m ${dSec}s`;
    }
    counterFunction();
}

getClock();
setInterval(getClock, 1000);