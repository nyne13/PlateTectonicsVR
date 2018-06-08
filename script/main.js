require(

  function () {

    var smallbrown= document.querySelector('#smallbrown');
    var home1= document.querySelector('#home1');
    var spark1= document.querySelector('#spark1');
    var spark2= document.querySelector('#spark2');
    var spark3= document.querySelector('#spark3');
    var spark4= document.querySelector('#spark4');
    var spark5= document.querySelector('#spark5');
    var spark6= document.querySelector('#spark6');
    var spark7= document.querySelector('#spark7');
    var spark8= document.querySelector('#spark8');
    var spark9= document.querySelector('#spark9');
    var spark10= document.querySelector('#spark10');
    var spark12= document.querySelector('#spark12');
    var spark13= document.querySelector('#spark13');
    var spark14= document.querySelector('#spark14');
    var spark15= document.querySelector('#spark15');
    var spark16= document.querySelector('#spark16');
    var spark17= document.querySelector('#spark17');
    var spark18= document.querySelector('#spark18');
    var spark11= document.querySelector('#spark11');
    var riselava= document.querySelector('#riselava');
    var landing= document.querySelector('#landing');
    var button1 = document.querySelector('#button1');
    var button2 = document.querySelector('#button2');
    var scene1 = document.querySelector('#scene1');
    var scene2 = document.querySelector('#scene2');
    var image = document.querySelector('#mountain1');
    var plane = document.querySelector('#plane');
    var plane3 = document.querySelector('#plane3');
    var plane12 = document.querySelector('#plane12');
    var plane13 = document.querySelector('#plane13');
    var leftarrow = document.querySelector('#leftarrow');
    var rightarrow = document.querySelector('#rightarrow');
    var anticlock = document.querySelector('#anticlock');
    var clock = document.querySelector('#clock');
    var magmacount = 0;
    var rightclick = 0;
    var leftclick = 0;
    var text1 = document.querySelector('#text1');
    var text2 = document.querySelector('#text2');
    var fold = document.querySelector('#fold');
    var test= document.querySelector('#test');
    var p = 0;
    var a = 0;
    var scaleclick = 0;
    var leftfar = 0;
    var mountain1 = document.querySelector('#mountain1');
    var mountain2 = document.querySelector('#mountain2');
    var mountain3 = document.querySelector('#mountain3');
    var newland = document.querySelector('#newland');
    var button3 = document.querySelector('#button3');
    var button4 = document.querySelector('#button4');

    scene1.setAttribute('visible', 'false');
    scene2.setAttribute('visible', 'false');
    landing.setAttribute('visible', 'true');

  /*LANDING PAGE*/
    if (landing.getAttribute.visible ='true'){
    /*HOME SCREEN LEFT BUTTON*/
      button1.addEventListener("click", function () {
        scene1.setAttribute('visible', 'true');
        scene2.setAttribute('visible', 'false');
        landing.setAttribute('visible', 'false');
      });

      button1.addEventListener("mouseenter", function () {
        button1.setAttribute('material','color', 'black');
      });

      button1.addEventListener("mouseleave", function () {
        button1.setAttribute('material','color', 'white');
      });

        /* HOME, GO TO INT2 ARROW*/
      button2.addEventListener("click", function () {
        scene1.setAttribute('visible', 'false');
        scene2.setAttribute('visible', 'true')
        landing.setAttribute('visible', 'false');
      });


      button2.addEventListener("mouseenter", function () {
        button2.setAttribute('material','color', 'black');
      });

      button2.addEventListener("mouseleave", function () {
        button2.setAttribute('material','color', 'white');
      });

    }




    /*INT1*/

    if (scene1.getAttribute.visible ='true'){
      /*HOME BUTTON for Int1*/

      button3.addEventListener("mouseenter", function () {
        document.querySelector('#button3').emit('stophome');
        button3.setAttribute('material','color', 'black');
      });

      button3.addEventListener("mouseleave", function () {
         document.querySelector('#button3').emit('starthome');
        button3.setAttribute('material','color', 'white');
      });

        button3.addEventListener("click", function () {
        scene1.setAttribute('visible', 'false');
        scene2.setAttribute('visible', 'false');
        landing.setAttribute('visible', 'true');
      });

      anticlock.addEventListener("mouseenter", function() {
        document.querySelector('#clock').emit('stopclock');
        document.querySelector('#anticlock').emit('stopanticlock');
        document.querySelector('#clock').emit('againstopclock');
        document.querySelector('#anticlock').emit('againstopanticlock');
        document.querySelector('#anticlock').emit('visibleanticlock');
        document.querySelector('#clock').emit('visibleclock');
        anticlock.setAttribute('material','color', 'black');
        clock.setAttribute('material','color', 'black');
        text1.setAttribute('visible','true');

        if(magmacount=== 10 || magmacount===11 || magmacount===12) {
          document.querySelector('#anticlock').emit('notvisibleanticlock');
          document.querySelector('#clock').emit('notvisibleclock');
          document.querySelector('#clock').emit('againstopclock');
          document.querySelector('#anticlock').emit('againstopanticlock');
          text1.setAttribute('visible','false');
        }
      });

      clock.addEventListener("mouseenter", function() {
        document.querySelector('#clock').emit('stopclock');
        document.querySelector('#anticlock').emit('stopanticlock');
        document.querySelector('#clock').emit('againstopclock');
        document.querySelector('#anticlock').emit('againstopanticlock');
        document.querySelector('#anticlock').emit('visibleanticlock');
        document.querySelector('#clock').emit('visibleclock');
        anticlock.setAttribute('material','color', 'black');
        clock.setAttribute('material','color', 'black');
        text1.setAttribute('visible','true');

        if(magmacount=== 10 || magmacount===11 || magmacount===12) {
          document.querySelector('#anticlock').emit('notvisibleanticlock');
          document.querySelector('#clock').emit('notvisibleclock');
          document.querySelector('#clock').emit('againstopclock');
          document.querySelector('#anticlock').emit('againstopanticlock');
          text1.setAttribute('visible','false');
        }
      });

      clock.addEventListener("mouseleave", function() {
        document.querySelector('#clock').emit('stopclock');
        document.querySelector('#anticlock').emit('stopanticlock');
        document.querySelector('#clock').emit('test2');
        document.querySelector('#anticlock').emit('test1');
        document.querySelector('#anticlock').emit('notvisibleanticlock');
        document.querySelector('#clock').emit('notvisibleclock');
        anticlock.setAttribute('material','color','white');
        clock.setAttribute('material','color','white');
        text1.setAttribute('visible','false');

        if(magmacount=== 10 || magmacount===11 || magmacount===12){
          document.querySelector('#anticlock').emit('notvisibleanticlock');
          document.querySelector('#clock').emit('notvisibleclock');
          document.querySelector('#clock').emit('againstopclock');
          document.querySelector('#anticlock').emit('againstopanticlock');
        }
      });

      anticlock.addEventListener("mouseleave", function() {
        document.querySelector('#clock').emit('stopclock');
        document.querySelector('#anticlock').emit('stopanticlock');
        document.querySelector('#clock').emit('test2');
        document.querySelector('#anticlock').emit('test1');
        document.querySelector('#anticlock').emit('notvisibleanticlock');
        document.querySelector('#clock').emit('notvisibleclock');
        anticlock.setAttribute('material','color','white');
        clock.setAttribute('material','color','white');
        text1.setAttribute('visible','false');

        if(magmacount=== 10 || magmacount===11 || magmacount===12) {
          document.querySelector('#anticlock').emit('notvisibleanticlock');
          document.querySelector('#clock').emit('notvisibleclock');
          document.querySelector('#clock').emit('againstopclock');
          document.querySelector('#anticlock').emit('againstopanticlock');
        }
      });


    /* ROTATE ARROWS MOUSE CLICK*/
      clock.addEventListener("click", function () {
        magmacount +=1;
        if (magmacount < 10){
          clock.object3D.rotation.z += 45;
          anticlock.object3D.rotation.z += 45;
          plane.object3D.position.x -=0.2;
          plane3.object3D.position.x +=0.2;
          riselava.object3D.position.y +=0.17;
           smallbrown.object3D.position.y +=0.17;
        }

        if (magmacount ===1){
          spark1.setAttribute('visible','true');
          document.querySelector('#spark1').emit('startspark1');}

        if(magmacount===2){
          spark2.setAttribute('visible','true');
          document.querySelector('#spark2').emit('startspark2');}

        if(magmacount===3){
          spark3.setAttribute('visible','true');
          document.querySelector('#spark3').emit('startspark3');}

        if(magmacount===4){
          spark4.setAttribute('visible','true');
          document.querySelector('#spark4').emit('startspark4');}

        if(magmacount===5){
          spark5.setAttribute('visible','true');
          document.querySelector('#spark5').emit('startspark5');}

        if(magmacount===6){
          spark6.setAttribute('visible','true');
          document.querySelector('#spark6').emit('startspark6');}

        if(magmacount===7){
          spark7.setAttribute('visible','true');
          document.querySelector('#spark7').emit('startspark7');}

        if(magmacount===8){
          spark8.setAttribute('visible','true');
          document.querySelector('#spark8').emit('startspark8');}

        if(magmacount===9){
          spark9.setAttribute('visible','true');
          document.querySelector('#spark9').emit('startspark9');}

        if(magmacount===10) {
          document.querySelector('#clock').emit('moveclock');
          document.querySelector('#anticlock').emit('moveanticlock');
          text1.setAttribute('visible','false');
          document.querySelector('#spark1').emit('stopspark1');
          document.querySelector('#spark2').emit('stopspark2');
          document.querySelector('#spark3').emit('stopspark3');
            document.querySelector('#spark4').emit('stopspark4');
          document.querySelector('#spark5').emit('stopspark5');
          document.querySelector('#spark6').emit('stopspark6');
          document.querySelector('#spark7').emit('stopspark7');
          document.querySelector('#spark8').emit('stopspark8');
          document.querySelector('#spark9').emit('stopspark9');
           spark8.setAttribute('visible','false');
           spark9.setAttribute('visible','false');
           spark7.setAttribute('visible','false');
           spark6.setAttribute('visible','false');
           spark5.setAttribute('visible','false');
           spark4.setAttribute('visible','false');
           spark3.setAttribute('visible','false');
           spark2.setAttribute('visible','false');
           spark1.setAttribute('visible','false');
            riselava.setAttribute('visible','false');
          document.querySelector('#newland').emit('newlandmove');
          document.querySelector('#button3').emit('starthome');
        }

      });

    /* ROTATE ARROWS MOUSE CLICK*/
      anticlock.addEventListener("click", function () {
        magmacount +=1;
        if (magmacount < 10){
          clock.object3D.rotation.z += 45;
          anticlock.object3D.rotation.z += 45;
          plane.object3D.position.x -=0.2;
          plane3.object3D.position.x +=0.2;
          riselava.object3D.position.y +=0.17;
           smallbrown.object3D.position.y +=0.17;
        }

        if (magmacount ===1){
          spark1.setAttribute('visible','true');
          document.querySelector('#spark1').emit('startspark1');}

        if(magmacount===2){
          spark2.setAttribute('visible','true');
          document.querySelector('#spark2').emit('startspark2');}

        if(magmacount===3){
          spark3.setAttribute('visible','true');
          document.querySelector('#spark3').emit('startspark3');}

        if(magmacount===4){
          spark4.setAttribute('visible','true');
          document.querySelector('#spark4').emit('startspark4');}

        if(magmacount===5){
          spark5.setAttribute('visible','true');
          document.querySelector('#spark5').emit('startspark5');}

        if(magmacount===6){
          spark6.setAttribute('visible','true');
          document.querySelector('#spark6').emit('startspark6');}

        if(magmacount===7){
          spark7.setAttribute('visible','true');
          document.querySelector('#spark7').emit('startspark7');}

        if(magmacount===8){
          spark8.setAttribute('visible','true');
          document.querySelector('#spark8').emit('startspark8');}

        if(magmacount===9){
          spark9.setAttribute('visible','true');
          document.querySelector('#spark9').emit('startspark9');}

        if(magmacount===10) {
          document.querySelector('#clock').emit('moveclock');
          document.querySelector('#anticlock').emit('moveanticlock');
          text1.setAttribute('visible','false');
          document.querySelector('#spark1').emit('stopspark1');
          document.querySelector('#spark2').emit('stopspark2');
          document.querySelector('#spark3').emit('stopspark3');
            document.querySelector('#spark4').emit('stopspark4');
          document.querySelector('#spark5').emit('stopspark5');
          document.querySelector('#spark6').emit('stopspark6');
          document.querySelector('#spark7').emit('stopspark7');
          document.querySelector('#spark8').emit('stopspark8');
          document.querySelector('#spark9').emit('stopspark9');
           spark8.setAttribute('visible','false');
           spark9.setAttribute('visible','false');
           spark7.setAttribute('visible','false');
           spark6.setAttribute('visible','false');
           spark5.setAttribute('visible','false');
           spark4.setAttribute('visible','false');
           spark3.setAttribute('visible','false');
           spark2.setAttribute('visible','false');
           spark1.setAttribute('visible','false');
            riselava.setAttribute('visible','false');
          document.querySelector('#newland').emit('newlandmove');
          document.querySelector('#button3').emit('starthome');
        }

      });
    }



  /*INT2&3 HEREEEE*/

      if (scene2.getAttribute.visible ='true'){
    /*HOME BUTTON for Int2&3*/

      button4.addEventListener("mouseenter", function () {
        document.querySelector('#button4').emit('stophome1');
        button4.setAttribute('material','color', 'black');
      });

      button4.addEventListener("mouseleave", function () {
         document.querySelector('#button4').emit('starthome1');
        button4.setAttribute('material','color', 'white');
      });

        button4.addEventListener("click", function () {
        scene1.setAttribute('visible', 'false');
        scene2.setAttribute('visible', 'false');
        landing.setAttribute('visible', 'true');
      });


    /* MOUSE ENTER*/
      rightarrow.addEventListener("mouseenter", function() {
      if(scaleclick<9) {
        rightarrow.setAttribute('material','color', 'black');
        text2.setAttribute('visible','true');
        fold.setAttribute('material','color', 'black');
        document.querySelector('#rightarrow').emit('stopright');
        document.querySelector('#rightarrow').emit('startright');
        document.querySelector('#rightarrow').emit('stopright2');
      }
      if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
        document.querySelector('#leftarrow').emit('stopleft1');
        document.querySelector('#rightarrow').emit('stopright1');
        document.querySelector('#rightarrow').emit('startright3');
        document.querySelector('#leftarrow').emit('startleft3');
        text2.setAttribute('visible','false');}
      });

    /* MOUSE ENTER*/
      leftarrow.addEventListener("mouseenter", function () {
        if(scaleclick<9) {
          leftarrow.setAttribute('material','color', 'black');
          text2.setAttribute('visible','true');
          document.querySelector('#leftarrow').emit('stopleft');
          document.querySelector('#leftarrow').emit('startleft');
          document.querySelector('#leftarrow').emit('stopleft2');
          text2.setAttribute('visible','true');
        }
        if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12){
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
        }
      });

      rightarrow.addEventListener("mouseleave", function () {
        if(scaleclick<9) {
          rightarrow.setAttribute('material','color', 'white');
          text2.setAttribute('visible','false');
          fold.setAttribute('material','color', '#00407f');
          document.querySelector('#rightarrow').emit('startright2');
          document.querySelector('#rightarrow').emit('stopright1');
        }
        if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
        }
      });

      leftarrow.addEventListener("mouseleave", function () {
        if(scaleclick<9) {
          leftarrow.setAttribute('material','color', 'white');
          text2.setAttribute('visible','false');
          document.querySelector('#leftarrow').emit('startleft2');
          document.querySelector('#leftarrow').emit('stopleft1');
          text2.setAttribute('visible','false');
         }
         if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
         }
      });

     /*Making plates clickable*/
       plane12.addEventListener("mouseenter", function() {
      if(scaleclick<9) {
        rightarrow.setAttribute('material','color', 'black');
        text2.setAttribute('visible','true');
        fold.setAttribute('material','color', 'black');
        document.querySelector('#rightarrow').emit('stopright');
        document.querySelector('#rightarrow').emit('startright');
        document.querySelector('#rightarrow').emit('stopright2');
      }
      if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
        document.querySelector('#leftarrow').emit('stopleft1');
        document.querySelector('#rightarrow').emit('stopright1');
        document.querySelector('#rightarrow').emit('startright3');
        document.querySelector('#leftarrow').emit('startleft3');
        text2.setAttribute('visible','false');}
      });


      plane13.addEventListener("mouseenter", function () {
        if(scaleclick<9) {
          leftarrow.setAttribute('material','color', 'black');
          text2.setAttribute('visible','true');
          document.querySelector('#leftarrow').emit('stopleft');
          document.querySelector('#leftarrow').emit('startleft');
          document.querySelector('#leftarrow').emit('stopleft2'); 
          text2.setAttribute('visible','true');
        }
        if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12){
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
        }
      });
      
      plane12.addEventListener("mouseleave", function () {
        if(scaleclick<9) {
          rightarrow.setAttribute('material','color', 'white');
          text2.setAttribute('visible','false');
          fold.setAttribute('material','color', '#00407f');
          document.querySelector('#rightarrow').emit('startright2');
          document.querySelector('#rightarrow').emit('stopright1');
        }
        if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
        }
      });

      plane13.addEventListener("mouseleave", function () {
        if(scaleclick<9) {
          leftarrow.setAttribute('material','color', 'white');
          text2.setAttribute('visible','false');
          document.querySelector('#leftarrow').emit('startleft2');
          document.querySelector('#leftarrow').emit('stopleft1');
          text2.setAttribute('visible','false');
         }
         if(scaleclick === 9 || scaleclick === 10 || scaleclick === 11 || scaleclick === 12) {
          document.querySelector('#leftarrow').emit('stopleft1');
          document.querySelector('#rightarrow').emit('stopright1');
          document.querySelector('#rightarrow').emit('startright3');
          document.querySelector('#leftarrow').emit('startleft3');
          text2.setAttribute('visible','false');
         }
      });

      plane12.addEventListener("click", function() {
        console.log("plane12 x position is " + plane12.object3D.position.x + ", plane12 y position is " + plane12.object3D.position.y);
        
        /*rightclick +=0.1;
        p= rightclick+leftclick;
        a +=1;
        if(p <= 5.5) {
          plane12.object3D.position.x -= 0.1;
          rightarrow.object3D.position.x -= 0.1;
        } 
        if (p>5.5) {
          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -20; */

    /*TESTING MY METHOD*/
        a +=1;
        if(plane12.object3D.position.x > 10.9) {
          plane12.object3D.position.x -= 0.4;
          rightarrow.object3D.position.x -= 0.4;
        }

        if (plane12.object3D.position.x <= 10.9 && plane13.object3D.position.x >= -11.3){
          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -10;
    /*END TESTING MY METHOD*/

          fold.setAttribute('visible', 'true');

          if(scaleclick >= 9){
            //document.querySelector('#spark').emit('sparkappear');
            document.querySelector('#leftarrow').emit('stopleft');
            document.querySelector('#rightarrow').emit('stopright');
            document.querySelector('#leftarrow').emit('stopleft2'); 
            document.querySelector('#leftarrow').emit('stopleft1'); 
            document.querySelector('#rightarrow').emit('stopright1');
            document.querySelector('#rightarrow').emit('stopright2');
            document.querySelector('#mountain1').emit('mountain1move');
            document.querySelector('#mountain2').emit('mountain2move');
            document.querySelector('#mountain3').emit('mountain3move');
            document.querySelector('#rightarrow').emit('startright3');
            document.querySelector('#leftarrow').emit('startleft3');
            plane12.setAttribute('material','color', '#00407f');
            plane13.setAttribute('material','color','#0080ff');
            fold.setAttribute('material','color', '#00407f');
          }
            
          mountain1.addEventListener("animationend", function() {
            document.querySelector('#spark10').emit('stopspark10');
            document.querySelector('#spark12').emit('stopspark12');
            document.querySelector('#spark13').emit('stopspark13');
            document.querySelector('#spark14').emit('stopspark14');
            document.querySelector('#spark15').emit('stopspark15');
            document.querySelector('#spark16').emit('stopspark16');
            document.querySelector('#spark17').emit('stopspark17');
            document.querySelector('#spark18').emit('stopspark18');
            document.querySelector('#spark11').emit('stopspark11');
            spark18.setAttribute('visible','false');
            spark11.setAttribute('visible','false');
            spark17.setAttribute('visible','false');
            spark16.setAttribute('visible','false');
            spark15.setAttribute('visible','false');
            spark14.setAttribute('visible','false');
            spark13.setAttribute('visible','false');
            spark12.setAttribute('visible','false');
            spark10.setAttribute('visible','false');
            document.querySelector('#button4').emit('starthome1');
          });

          if(scaleclick<9){
            fold.object3D.scale.x += 0.8;
            scaleclick +=1; 
            fold.object3D.position.y -=0.15;
            fold.object3D.position.x -=0.19;
            plane12.object3D.scale.x -= 0.02;
            plane12.object3D.position.x -= 0.235;
            //rightarrow.object3D.position.x -= 0.235;
          }
            
          if (scaleclick ===1){
          spark10.setAttribute('visible','true');
          document.querySelector('#spark10').emit('startspark10');}
          
          if (scaleclick ===2){
          spark11.setAttribute('visible','true');
          document.querySelector('#spark11').emit('startspark11');}
          
          if (scaleclick ===3){
          spark12.setAttribute('visible','true');
          document.querySelector('#spark12').emit('startspark12');}
          
          if (scaleclick ===4){
          spark13.setAttribute('visible','true');
          document.querySelector('#spark13').emit('startspark13');}
        }
          
        if (scaleclick ===5){
          spark14.setAttribute('visible','true');
          document.querySelector('#spark14').emit('startspark14');}
        
        if (scaleclick ===6){
          spark15.setAttribute('visible','true');
          document.querySelector('#spark15').emit('startspark15');}
        
        if (scaleclick ===7){
          spark16.setAttribute('visible','true');
          document.querySelector('#spark16').emit('startspark16');}
        
        if (scaleclick ===8){
          spark17.setAttribute('visible','true');
          document.querySelector('#spark17').emit('startspark17');
        
          spark18.setAttribute('visible','true');
          document.querySelector('#spark18').emit('startspark18');}
      });

      plane13.addEventListener("click", function() {
        console.log("plane13 x position is " + plane13.object3D.position.x + ", plane13 y position is " + plane13.object3D.position.y);
        /*leftclick +=1;
        p= rightclick+leftclick;
        leftfar+=1; 

        if (p<=5.5) {
          plane13.object3D.position.x += 1; 
          leftarrow.object3D.position.x += 1;
        }

        if (p>5.5){
          if(leftfar == 6){
            plane13.object3D.position.x += 0.5; 
            leftarrow.object3D.position.x += 0.5;
            leftfar= -20;
          }

          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -20; */

    /*TESTING MY METHOD*/
          if(plane13.object3D.position.x < -11.3) {
                plane13.object3D.position.x += 1;
                leftarrow.object3D.position.x += 1;
              }

          if (plane13.object3D.position.x >= -11.3 && plane12.object3D.position.x <= 10.9){
            while (a>0) {
              fold.object3D.position.x -= 0.1;
              a = a-1;
            }
            a = -10;
    /*END TESTING MY METHOD*/

          fold.setAttribute("visible", 'true');

          if(scaleclick<9){
            fold.object3D.scale.x += 0.8;
            scaleclick +=1; 
            fold.object3D.position.y -=0.13;
            fold.object3D.position.x -=0.1;
            plane12.object3D.scale.x -= 0.003;
            plane12.object3D.position.x+= 0.1; 
            plane13.object3D.position.x += 0.1;
            //leftarrow.object3D.position.x += 0.1;
          }

          if(scaleclick >= 9){
            //document.querySelector('#spark').emit('sparkappear');
            document.querySelector('#leftarrow').emit('stopleft');
            document.querySelector('#rightarrow').emit('stopright');
            document.querySelector('#leftarrow').emit('stopleft2'); 
            document.querySelector('#leftarrow').emit('stopleft1'); 
            document.querySelector('#rightarrow').emit('stopright1');
            document.querySelector('#rightarrow').emit('stopright2');
            document.querySelector('#rightarrow').emit('startright3');
            document.querySelector('#leftarrow').emit('startleft3');
            document.querySelector('#mountain1').emit('mountain1move');
            document.querySelector('#mountain2').emit('mountain2move');
            document.querySelector('#mountain3').emit('mountain3move');
            plane12.setAttribute('material','color', '#00407f');
            plane13.setAttribute('material','color','#0080ff');
            fold.setAttribute('material','color', '#00407f');
          }
          
          mountain1.addEventListener("animationend", function() {
            document.querySelector('#spark10').emit('stopspark10');
            document.querySelector('#spark12').emit('stopspark12');
            document.querySelector('#spark13').emit('stopspark13');
            document.querySelector('#spark14').emit('stopspark14');
            document.querySelector('#spark15').emit('stopspark15');
            document.querySelector('#spark16').emit('stopspark16');
            document.querySelector('#spark17').emit('stopspark17');
            document.querySelector('#spark18').emit('stopspark18');
            document.querySelector('#spark11').emit('stopspark11');
            spark18.setAttribute('visible','false');
            spark11.setAttribute('visible','false');
            spark17.setAttribute('visible','false');
            spark16.setAttribute('visible','false');
            spark15.setAttribute('visible','false');
            spark14.setAttribute('visible','false');
            spark13.setAttribute('visible','false')
            spark12.setAttribute('visible','false');
            spark10.setAttribute('visible','false');
            document.querySelector('#button4').emit('starthome1');
          });
          
          if (scaleclick ===1){
          spark10.setAttribute('visible','true');
          document.querySelector('#spark10').emit('startspark10');}
          
          if (scaleclick ===2){
          spark11.setAttribute('visible','true');
          document.querySelector('#spark11').emit('startspark11');}
          
          if (scaleclick ===3){
          spark12.setAttribute('visible','true');
          document.querySelector('#spark12').emit('startspark12');}
          
          if (scaleclick ===4){
          spark13.setAttribute('visible','true');
          document.querySelector('#spark13').emit('startspark13');}
        
        if (scaleclick ===5){
          spark14.setAttribute('visible','true');
          document.querySelector('#spark14').emit('startspark14');}
        
        if (scaleclick ===6){
          spark15.setAttribute('visible','true');
          document.querySelector('#spark15').emit('startspark15');}
        
        if (scaleclick ===7){
          spark16.setAttribute('visible','true');
          document.querySelector('#spark16').emit('startspark16');}
        
        if (scaleclick ===8){
          spark17.setAttribute('visible','true');
          document.querySelector('#spark17').emit('startspark17');
        
          spark18.setAttribute('visible','true');
          document.querySelector('#spark18').emit('startspark18');}
        }
      });   

    /*Plates clickable end*/


      rightarrow.addEventListener("click", function() {
        /*rightclick +=0.1;
        p= rightclick+leftclick;
        a +=1;
        if(p <= 5.5) {
          plane12.object3D.position.x -= 0.1;
          rightarrow.object3D.position.x -= 0.1;
        }
        if (p>5.5) {
          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -20;
        */

        a += 1;

        if(plane12.object3D.position.x > 10.9) {
          plane12.object3D.position.x -= 0.1;
          rightarrow.object3D.position.x -= 0.1;
        }

        if (plane13.object3D.position.x >= -11.3 && plane12.object3D.position.x <= 10.9){
            while (a>0) {
              fold.object3D.position.x -= 0.1;
              a = a-1;
            }
            a = -10;

          fold.setAttribute("visible", 'true');

          if(scaleclick >= 9){
            //document.querySelector('#spark').emit('sparkappear');
            document.querySelector('#leftarrow').emit('stopleft');
            document.querySelector('#rightarrow').emit('stopright');
            document.querySelector('#leftarrow').emit('stopleft2');
            document.querySelector('#leftarrow').emit('stopleft1');
            document.querySelector('#rightarrow').emit('stopright1');
            document.querySelector('#rightarrow').emit('stopright2');
            document.querySelector('#mountain1').emit('mountain1move');
            document.querySelector('#mountain2').emit('mountain2move');
            document.querySelector('#mountain3').emit('mountain3move');
            document.querySelector('#rightarrow').emit('startright3');
            document.querySelector('#leftarrow').emit('startleft3');
               plane12.setAttribute('material','color', '#00407f');
      plane13.setAttribute('material','color','#0080ff');
            fold.setAttribute('material','color', '#00407f');
          }

          mountain1.addEventListener("animationend", function() {
            document.querySelector('#spark10').emit('stopspark10');
          document.querySelector('#spark12').emit('stopspark12');
          document.querySelector('#spark13').emit('stopspark13');
            document.querySelector('#spark14').emit('stopspark14');
          document.querySelector('#spark15').emit('stopspark15');
          document.querySelector('#spark16').emit('stopspark16');
          document.querySelector('#spark17').emit('stopspark17');
          document.querySelector('#spark18').emit('stopspark18');
          document.querySelector('#spark11').emit('stopspark11');
           spark18.setAttribute('visible','false');
           spark11.setAttribute('visible','false');
           spark17.setAttribute('visible','false');
           spark16.setAttribute('visible','false');
           spark15.setAttribute('visible','false');
           spark14.setAttribute('visible','false');
           spark13.setAttribute('visible','false');
           spark12.setAttribute('visible','false');
           spark10.setAttribute('visible','false');
          document.querySelector('#button4').emit('starthome1');});

          if(scaleclick<9){
            fold.object3D.scale.x += 0.8;
            scaleclick +=1;
            fold.object3D.position.y -=0.15;
            fold.object3D.position.x -=0.19;
            plane12.object3D.scale.x -= 0.02;
            plane12.object3D.position.x -= 0.235;
            rightarrow.object3D.position.x -= 0.235;
          }

          if (scaleclick ===1){
          spark10.setAttribute('visible','true');
          document.querySelector('#spark10').emit('startspark10');}

          if (scaleclick ===2){
          spark11.setAttribute('visible','true');
          document.querySelector('#spark11').emit('startspark11');}

          if (scaleclick ===3){
          spark12.setAttribute('visible','true');
          document.querySelector('#spark12').emit('startspark12');}

          if (scaleclick ===4){
          spark13.setAttribute('visible','true');
          document.querySelector('#spark13').emit('startspark13');}
        }

        if (scaleclick ===5){
          spark14.setAttribute('visible','true');
          document.querySelector('#spark14').emit('startspark14');}

        if (scaleclick ===6){
          spark15.setAttribute('visible','true');
          document.querySelector('#spark15').emit('startspark15');}

        if (scaleclick ===7){
          spark16.setAttribute('visible','true');
          document.querySelector('#spark16').emit('startspark16');}

        if (scaleclick ===8){
          spark17.setAttribute('visible','true');
          document.querySelector('#spark17').emit('startspark17');

          spark18.setAttribute('visible','true');
          document.querySelector('#spark18').emit('startspark18');}
      });

      leftarrow.addEventListener("click", function() {
        /*leftclick +=1;
        p= rightclick+leftclick;
        leftfar+=1;

        if (p<=5.5) {
          plane13.object3D.position.x += 1;
          leftarrow.object3D.position.x += 1; 
        }

        if (p>5.5){
          if(leftfar == 6){
            plane13.object3D.position.x += 0.5;
            leftarrow.object3D.position.x += 0.5; 
            leftfar= -20;
          }

          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -20;
    */

        if (plane13.object3D.position.x < -11.3) {
          plane13.object3D.position.x += 1;
          leftarrow.object3D.position.x += 1; 
        }

        if (plane13.object3D.position.x >= -11.3 && plane12.object3D.position.x <= 10.9){
          while (a>0) {
            fold.object3D.position.x -= 0.1;
            a = a-1;
          }
          a = -10;

          fold.setAttribute("visible", 'true');

          if(scaleclick<9){
            fold.object3D.scale.x += 0.8;
            scaleclick +=1;
            fold.object3D.position.y -=0.13;
            fold.object3D.position.x -=0.1;
            plane12.object3D.scale.x -= 0.003;
            plane12.object3D.position.x+= 0.1;
            plane13.object3D.position.x += 0.1;
          /*  leftarrow.object3D.position.x += 0.1; */
          }

          if(scaleclick >= 9){
            //document.querySelector('#spark').emit('sparkappear');
            document.querySelector('#leftarrow').emit('stopleft');
            document.querySelector('#rightarrow').emit('stopright');
            document.querySelector('#leftarrow').emit('stopleft2');
            document.querySelector('#leftarrow').emit('stopleft1');
            document.querySelector('#rightarrow').emit('stopright1');
            document.querySelector('#rightarrow').emit('stopright2');
            document.querySelector('#rightarrow').emit('startright3');
            document.querySelector('#leftarrow').emit('startleft3');
            document.querySelector('#mountain1').emit('mountain1move');
            document.querySelector('#mountain2').emit('mountain2move');
            document.querySelector('#mountain3').emit('mountain3move');
            plane12.setAttribute('material','color', '#00407f');
            plane13.setAttribute('material','color','#0080ff');
            fold.setAttribute('material','color', '#00407f');
          }

          mountain1.addEventListener("animationend", function() {
            document.querySelector('#spark10').emit('stopspark10');
          document.querySelector('#spark12').emit('stopspark12');
          document.querySelector('#spark13').emit('stopspark13');
            document.querySelector('#spark14').emit('stopspark14');
          document.querySelector('#spark15').emit('stopspark15');
          document.querySelector('#spark16').emit('stopspark16');
          document.querySelector('#spark17').emit('stopspark17');
          document.querySelector('#spark18').emit('stopspark18');
          document.querySelector('#spark11').emit('stopspark11');
           spark18.setAttribute('visible','false');
           spark11.setAttribute('visible','false');
           spark17.setAttribute('visible','false');
           spark16.setAttribute('visible','false');
           spark15.setAttribute('visible','false');
           spark14.setAttribute('visible','false');
           spark13.setAttribute('visible','false');
           spark12.setAttribute('visible','false');
           spark10.setAttribute('visible','false');
           document.querySelector('#button4').emit('starthome1');});

          if (scaleclick ===1){
          spark10.setAttribute('visible','true');
          document.querySelector('#spark10').emit('startspark10');}

          if (scaleclick ===2){
          spark11.setAttribute('visible','true');
          document.querySelector('#spark11').emit('startspark11');}

          if (scaleclick ===3){
          spark12.setAttribute('visible','true');
          document.querySelector('#spark12').emit('startspark12');}

          if (scaleclick ===4){
          spark13.setAttribute('visible','true');
          document.querySelector('#spark13').emit('startspark13');}

        if (scaleclick ===5){
          spark14.setAttribute('visible','true');
          document.querySelector('#spark14').emit('startspark14');}

        if (scaleclick ===6){
          spark15.setAttribute('visible','true');
          document.querySelector('#spark15').emit('startspark15');}

        if (scaleclick ===7){
          spark16.setAttribute('visible','true');
          document.querySelector('#spark16').emit('startspark16');}

        if (scaleclick ===8){
          spark17.setAttribute('visible','true');
          document.querySelector('#spark17').emit('startspark17');

          spark18.setAttribute('visible','true');
          document.querySelector('#spark18').emit('startspark18');}
        }
      });
    }

});