(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    answer.innerHTML="Loading...";
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(function(data) {
        appendData(data);
      })
    function appendData(data){
        answer.innerHTML="";
        for(var i=0;i<data.length;i++){
          var div=document.createElement("div");
          div.innerHTML='UserID: '+ data[i].userID + 'id: '+ data[i].id+',<br> title: '+data[i].title +'<br> body: '+data[i].body +'<br><br>'
          answer.appendChild(div);
        }
    }   
    
  })

  cw2.addEventListener("click", function () {
    answer.innerHTML="Loading...";
    
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(function(data) {
        appendData(data);
      })
    function appendData(data){
        answer.innerHTML="";
        
          var div=document.createElement("div");
          div.innerHTML='UserID:'+ data[3].userID + 'id:'+ data[3].id+' <br>'
          answer.appendChild(div);
        
    }   
    
    
  })

  cw3.addEventListener("click", function () {
    answer.innerHTML="Processing...";
    
  })

})();
