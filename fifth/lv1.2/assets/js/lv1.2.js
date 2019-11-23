var words = document.getElementById('words');
        var word = words.getElementsByTagName('li');
        
        for(var i=0;i<word.length;i++){
            word[i].addEventListener('click',wordPrint,false);
        };
        function wordPrint(e){
            var x = e.target;
            console.log( x.innerHTML);
        };
        for(var k=0;k<word.length;k++){
            if(k%2==0){
                word[k].style.color = "green"
            }else {
                words[k].style.color = "red"
            }
        }