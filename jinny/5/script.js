function calculateOpacity(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    
    var monthStart = 5;
    var dayStart =1;
    var monthOver = 11;
    var dayOver = 30;
    
    var durationMonth= monthOver- monthStart;
    var durationDay = dayOver- dayStart;
    var totalDuration = (durationMonth * 30) + durationDay;

    var monthLeft = monthOver - mm;
    var dayLeft = dayOver - dd;
    
    var i = 0;
    
    var circles = document.getElementById('circles');
    
    if (mm == monthStart && dd == dayStart) {
        circles.style.opacity = "1";
        circles.style.filter  = 'alpha(opacity=100)';
    }else if(monthLeft > 0){
        i = (monthLeft*30 + dayLeft)/totalDuration;
        circles.style.opacity = i;
        circles.style.filter= 'alpha(opacity=i)';
    }else if (monthLeft === 0){
        if(dayLeft > 0){
            i = dayLeft/totalDuration;
            circles.style.opacity = i;
            circles.style.filter = 'alpha(opacity=i)';
        }
    }else{
        circles.style.opacity=0;
        circles.style.filter = 'alpha(opacity=0)';
    }

}



/*function daysLeft() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    
    var monthOver = 11;
    var dayOver = 30;
    

    var monthLeft = monthOver - mm;
    var dayLeft = dayOver - dd;
    
    var limit = (monthLeft*30) +(dayLeft);
    document.getElementById('limit').innerHTML =
    limit + 'days left';
}*/