$(document).ready(function(){
    var Time = moment().format('LLLL')   
    $(".today").text(Time);    
    $("span").text(Time);
    $(".saveBtn").on("click", function(){
        let textValue = $(this).siblings('.text').val();
        let timeBlock = $(this).parent().attr("id");
        localStorage.setItem(timeBlock, textValue);
    })
    
    function keepinTime(){
    
        let Hour = moment().hours();
    
    
        $(".time-block").each(function(){
            let Hour2 = parseInt($(this).attr("id"));
         
    
            if(Hour2 < Hour){
                $(this).addClass("past");
            } else if(Hour2 === Hour){
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    
    keepinTime()
    
    for(let i = 9; i< 17; i++){
   
    $(`#${i} .text`).val(localStorage.getItem(`${i}`));
    

    }
    })