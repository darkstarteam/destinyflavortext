        grabFlavorText();

        function grabFlavorText() {
        // Get JSON file from server
        $.getJSON('https://destinyflavortext.net/data/flavortext.json', function(data) { 
        // Grab random entry from list
        var entry = data[Math.floor(Math.random()*data.length)];

        // Take the chosen entry and add it to the corresponding HTML elements.
        var myObj = entry;
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("flavortext").innerHTML = myObj.flavor;
        })
        }
        
        function Refresh() {
            grabFlavorText();
        }

        var aboutTitle = "About DestinyFlavorText.net";
        var aboutText = "Destiny Flavor Text, is a simple website that will give you a random piece of flavortext from Destiny on request. It is being developed by Hennamann from <a href=\"https\://antioxidantsin.space\">The Antioxidants</a> If you would like to contribute to DestinyFlavorText.net's development, help contribute to the source code over on Github: <a href=\"https\://github.com/antioxidants/destinyflavortext\">https\://github.com/antioxidants/destinyflavortext</a>.";

        function About() {
            document.getElementById("name").innerHTML = aboutTitle;
            document.getElementById("flavortext").innerHTML = aboutText;
};