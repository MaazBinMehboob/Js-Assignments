var jssec=0;
var jsmin=0;
var jsmsec=0;
function start(){
    interval =setInterval(function(){
        jsmsec++;
        document.getElementById('msec').innerHTML=jsmsec
        if(jsmsec==100){
            jsmsec=0;
            jssec++;
            document.getElementById('sec').innerHTML=jssec
        }
        else if(jssec==60){
            jssec=0;
            jsmin++;
            document.getElementById('min').innerHTML=jsmin
        }
        },10)
        document.getElementById('sbtn').disabled=true
}
function stop(){
    clearInterval(interval)
    document.getElementById('sbtn').disabled=false
}
function reset(){
     stop()
     jsmin=0;
     jssec=0;
     jsmsec=0;
     document.getElementById('msec').innerHTML=jsmsec
     document.getElementById('sec').innerHTML=jssec
     document.getElementById('min').innerHTML=jsmin
}