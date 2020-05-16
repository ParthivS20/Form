    const scriptURL = 'https://script.google.com/macros/s/AKfycbzGExjsqeKz2ZF2FQDUg19PxhQGmm2GiomK8jrKKEg8ihDSLQA/exec'
    const form = document.forms['Esthetics-Client-Consultation-Form']
    const ipFormInput = document.getElementById('IP');
    fetch('https://api.ipify.org?format=json')
        .then((response) => { return response.json() })
        .then((json) => {
            let ip = json.ip;
            ipFormInput.value = ip;
        })
        .catch((err) => { console.log(`Error getting IP Address: ${err}`) })
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message))
    document.getElementById("form").reset();
    })
    
    function editFormData(){
        dailyUse();
        concernedConditions();
        getOS();
    }
    function dailyUse(){
      var labels = ["Cleanser", "Soap", "Mask", "Exfoliant", "Toner", "Moisturizer Day/Night", "Eye Cream"]
      var x=0
      var items=7
      var str=""
      var substr=""
      for(i=1;i<=items;i++){
          if(document.getElementById("D"+i).checked){ 
              x++
          }
          else{
              x=x
          }
      }
      if(x==1){
          for(i=1;i<=items;i++){
              if(document.getElementById("D"+i).checked){ 
                  substr=labels[i-1];
              }
              else{
                  substr="";
              }
              str=str+substr
          }
          document.getElementById("DU").value=str   
      }
      else{
          for(i=1;i<=items;i++){
              if(document.getElementById("D"+i).checked){ 
                  substr=labels[i-1]+", ";
              }
              else{
                  substr="";
              }
              str=str+substr
          }  
          document.getElementById("DU").value=str.substring(0,str.length-2);  
      }       
    }
    function concernedConditions(){
      var labels = ["Acne Breakouts", "Dryness", "Excessive Redness", "Tingling/ Burning", "Oiliness", 
      "Flaking/ Peeling", "Under Eye Dark CIrcles", "Pigmentation", "Congestion", "Wrinkles or FIne Lines", "Puffy Eyes"]
      var x=0 
      var items=11
      var str=""
      var substr=""
      for(i=1;i<=items;i++){
          if(document.getElementById("C"+i).checked){ 
              x++
          }
          else{
              x=x
          }
      }
      if(x==1){
          for(i=1;i<=items;i++){
              if(document.getElementById("C"+i).checked){ 
                  substr=labels[i-1];
              }
              else{
                  substr="";
              }
              str=str+substr
          }
          document.getElementById("CC").value=str   
      }
      else{
          for(i=1;i<=items;i++){
              if(document.getElementById("C"+i).checked){ 
                  substr=labels[i-1]+", ";
              }
              else{
                  substr="";
              }
              str=str+substr
          }  
          document.getElementById("CC").value=str.substring(0,str.length-2);  
      }   
    }
    const getUA = () => {
        let device = "Unknown";
        const ua = {
            "Generic Linux": /Linux/i,
            "Android": /Android/i,
            "BlackBerry": /BlackBerry/i,
            "Bluebird": /EF500/i,
            "Chrome OS": /CrOS/i,
            "Datalogic": /DL-AXIS/i,
            "Honeywell": /CT50/i,
            "iPad": /iPad/i,
            "iPhone": /iPhone/i,
            "iPod": /iPod/i,
            "macOS": /Macintosh/i,
            "Windows": /IEMobile|Windows/i,
            "Zebra": /TC70|TC55/i,
        }
        Object.keys(ua).map(v => navigator.userAgent.match(ua[v]) && (device = v));
        return device;
    }
    document.getElementById("type").value=getUA();




