document.getElementById('r').addEventListener('click', function() {
    setTimeout(function() {
      
      document.body.style.backgroundColor = "black";
      document.body.innerHTML = "<img src='gif.gif' id='i' >";
      setTimeout(() => {
        const container = document.createElement('div');
        container.classList.add('container');
        container.innerHTML = "<div id='d'><button id='b'>刷新</button></div>";
        document.body.appendChild(container);
      
        const refreshButton = document.getElementById('b');
        refreshButton.addEventListener('click', showParagraph);
    }, 3000);
      
      
    }, 1000); 
  });
  
  function showParagraph() {
   
    const contain = document.createElement('a');
    
  contain.innerHTML = "<a id='h' href='https://www.bilibili.com/video/BV1PL4y1n7Nm/?spm_id_from=333.337.search-card.all.click'>骗你的hhh</a>";
  document.getElementById('d').appendChild(contain);
    }
  