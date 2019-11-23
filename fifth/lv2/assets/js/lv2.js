
        var count=0;
        window.onload = function(){
            var Msg = document.getElementById("msg");
            var Btn = document.getElementById("btn");
            var Msg_c = document.getElementById("msg_c");
            var Ul = document.createElement("ul"); 
            Msg_c.appendChild(Ul);                
            Btn.onclick = function(){             
                                                   
                var MsgValue = Msg.value;         
                var Li = document.createElement("li");
                Li.innerHTML = MsgValue + " <span>删除</span>";
                var arrayLi = Ul.getElementsByTagName("li")  
                if(arrayLi.length>0){
                    Ul.insertBefore(Li,arrayLi[0]);
                    count++;
                }else{
                    Ul.appendChild(Li);
                    count++;
                }
                Msg.value='';
                var Span = document.getElementsByTagName("span");
                for(var i=0; i<Span.length; i++){
                    Span[i].onclick = function(){
                      Ul.removeChild(this.parentNode);
                      count--;
                    }
                }
            }
        }
        function totalMessage(){       
            alert("一共有"+count+"条留言");
        }

 