    function setCookie(name, value, options) {
  options = options || {};

  var expires = options.expires;

  if (typeof expires == "number" && expires) {
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000);
    expires = options.expires = d;
  }
  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  value = encodeURIComponent(value);

  var updatedCookie = name + "=" + value;

  for (var propName in options) {
    updatedCookie += "; " + propName;
    var propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

(function sart(){
    var options="";
    options.path="/";
    var cook=getCookie('kegl');
    if (cook==undefined)
        setCookie('kegl',1,options);
    correct_kegl();
    var contr=getCookie('contrast');
    if (contr==undefined)
        setCookie('contrast','0',options);//по умолчанию
    correct_contrast();
})();

    function getCookie(name) {
        var matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    
    function kegl_plus(){
        var options="";
        options.path="/";
        var cook=getCookie('kegl');
        var newcook;
        if (cook<2)
            newcook=+cook+1;
        else
            newcook=2;
        setCookie('kegl',newcook,options);
        correct_kegl();
        //document.getElementById("dec").href="/css/font_inc_1.5.css";
    }
    function kegl_minus(){
        var options="";
        options.path="/";
        var cook=getCookie('kegl');
        var newcook;
        if (cook>0)
            newcook=+cook-1;
        else
            newcook=0;
        setCookie('kegl',newcook,options);
        correct_kegl();
        //document.getElementById("dec").href="/css/font_dec_1.5.css";
    }

    function correct_kegl(){
        var cook=getCookie('kegl');
        if (cook=='0')
        {document.getElementById("dec").href="/css/font_dec_1.5.css";
         document.getElementById("dec_less").href="/css/font_dec_1.5.less";
         document.getElementById("dec_less").rel="stylesheet/less";
        }
        if (cook=='2')
        {document.getElementById("dec").href="/css/font_inc_1.5.css";
         document.getElementById("dec_less").href="/css/font_inc_1.5.less";
         document.getElementById("dec_less").rel="stylesheet/less";
        }
        if (cook=='1')
        {document.getElementById("dec").href="";
         document.getElementById("dec_less").href="";
         document.getElementById("dec_less").rel="";
        }
        console.log(cook);
    }

    function correct_contrast(){
        var options="";
        options.path="/";
        var constr=getCookie('contrast');
        if(constr=='0'){
            console.log('по умолчанию');
            document.getElementById("contrast").href="";
        }
        if(constr=='1'){
            console.log('контрастный');
            document.getElementById("contrast").href="/css/contrast.css";
        }
    }

    function contrast(){
                var options="";
        options.path="/";
        var constr=getCookie('contrast');
        if(constr=='0'){
            setCookie('contrast','1',options);
            
        }
        if(constr=='1'){
            setCookie('contrast','0',options);
            
        }
        correct_contrast();
    }