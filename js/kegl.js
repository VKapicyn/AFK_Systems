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
        setCookie('kegl','12',options);
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
            var newcook=+cook+2;
            setCookie('kegl',newcook,options);
        correct_kegl();
    }
    function kegl_minus(){
        var options="";
        options.path="/";
        var cook=getCookie('kegl');
            var newcook=cook-2;
            setCookie('kegl',newcook,options);
        correct_kegl();
    }
    
    function correct_kegl(){
        var kegl=getCookie('kegl');
        console.log(kegl);
        //изменение стиля чере jQuery
    }

    function contrast(){
        var options="";
        options.path="/";
        var constr=getCookie('contrast');
        if(constr=='0'){
            console.log('по умолчанию');
            setCookie('contrast','1',options);
        }
        if(constr=='1'){
            console.log('контрастный');
            setCookie('contrast','0',options);
        }
    }

    function correct_contrast(){
        console.log(getCookie('contrast'));
        //изменение стиля чере jQuery
    }