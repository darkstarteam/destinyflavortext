        // Get JSON file from server
        $.getJSON('https://cdn.rawgit.com/antioxidants/destinyflavortext/development/data/flavortext.json', function(data) { 
        // Grab random entry from list
        var entry = data[Math.floor(Math.random()*data.length)];

        // Take the chosen entry and add it to the corresponding HTML elements.
        var myObj = entry;
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("flavortext").innerHTML = myObj.flavor;
        });

        function Refresh() {
            location.reload();
        };