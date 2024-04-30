
      const clickButton = document.getElementById('clickButton');
      const outputDiv = document.getElementById("output");
      clickButton.addEventListener('click', function(event) {
         outputDiv.innerHTML += 'Clicked!'+ JSON.stringify(event) + "<br>";
      });
   