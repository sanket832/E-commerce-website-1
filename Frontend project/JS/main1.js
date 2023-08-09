fetch("header1.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("header-div").innerHTML = html;
        });
      // Fetch and insert the footer
      fetch("footer.html")
        .then(response => response.text())
        .then(html => {
          document.getElementById("footer").innerHTML = html;
        });