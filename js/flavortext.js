        function grabRandomFlavorText() {
        // Get JSON file from server
        $.getJSON('https://destinyflavortext.net/data/flavortext.json', function(data) { 
        // Grab random entry from list
        var entry = data[Math.floor(Math.random()*data.length)];

        // Take the chosen entry and add it to the corresponding HTML elements.
        var myObj = entry;
        document.getElementById("name").innerHTML = myObj.name;
        document.getElementById("type").innerHTML = myObj.type;
        document.getElementById("flavortext").innerHTML = myObj.flavor;
        })
        }
        
        // Loads a new random piece of flavor text.
        function Refresh() {
            grabRandomFlavorText();
        }

        // Variables with info on the website, used for @About function.
        var aboutTitle = "About DestinyFlavorText.net";
        var aboutText = "Destiny Flavor Text, is a simple website that will give you a random piece of flavortext from Destiny on request. It is being developed by Hennamann from <a href=\"https\://antioxidantsin.space\">The Antioxidants</a> If you would like to contribute to DestinyFlavorText.net's development, help contribute to the source code over on Github: <a href=\"https\://github.com/antioxidants/destinyflavortext\">https\://github.com/antioxidants/destinyflavortext</a>.";

        // Changes the flavor text, into a small description for the website.
        function About() {
            document.getElementById("name").innerHTML = aboutTitle;
            document.getElementById("flavortext").innerHTML = aboutText;
        }

        // Opens the list page
        function goToLists() {
            window.location = "https://destinflavortext.net/lists.html";
        }

        // Changes the list depending on the chosen filter.
        function SubmitFilterChoice(){
        document.getElementById("filter_type").value!="all"||(GrabFlavorText())
        document.getElementById("filter_type").value!="autos"||(GrabAutos())
        document.getElementById("filter_type").value!="fusions"||(GrabFusions())
        document.getElementById("filter_type").value!="hand_cannons"||(GrabHandCannons())
        document.getElementById("filter_type").value!="lmgs"||(GrabLmgs())
        document.getElementById("filter_type").value!="pulses"||(GrabPulses())
        document.getElementById("filter_type").value!="rockets"||(GrabRockets())
        document.getElementById("filter_type").value!="scouts"||(GrabScouts())
        document.getElementById("filter_type").value!="shotguns"||(GrabShotguns())
        document.getElementById("filter_type").value!="sidearms"||(GrabSidearms())
        document.getElementById("filter_type").value!="snipers"||(GrabSnipers())
        document.getElementById("filter_type").value!="swords"||(GrabSwords())
        }

        // Grabs all the flavortext and displays it as a list.
        function GrabFlavorText() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/flavortext.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
        };

        // Grabs all flavor text from auto rifles and displays it as a list.
        function GrabAutos() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/autos.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from fusion rifles and displays it as a list.
        function GrabFusions() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/fusions.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };

        // Grabs all flavor text from hand cannons and displays it as a list.
        function GrabHandCannons() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/hand%20cannons.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from machine guns and displays it as a list.
        function GrabLmgs() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/lmgs.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from pulse rifles and displays it as a list.
        function GrabPulses() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/pulses.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from rocket launchers and displays it as a list.
        function GrabRockets() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/rockets.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from scout rifles and displays it as a list.
        function GrabScouts() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/scouts.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from shotguns and displays it as a list.
        function GrabShotguns() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/shotguns.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from sidearms and displays it as a list.
        function GrabSidearms() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/sidearms.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
    
        // Grabs all flavor text from sniper rifles and displays it as a list.
        function GrabSnipers() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/snipers.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
    };
        // Grabs all flavor text from swords and displays it as a list.
        function GrabSwords() {
        $("#weapon_list").html("");
        $.getJSON('https://destinyflavortext.net/data/weapons/swords.json', function(data) { 
            var container = $('#weapon_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                flavor.text(data[i].flavor);

                container.append(name, flavor);
            }
        })
        };