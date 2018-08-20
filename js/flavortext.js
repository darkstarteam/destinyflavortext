        function GrabRandomFlavorText() {
        // Get JSON file from server
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/flavortext.json', function(data) { 
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
            GrabRandomFlavorText();
        }

        // Variables with info on the website, used for @About function.
        var aboutTitle = "About Destiny Flavor Text";
        var aboutText = "Destiny Flavor Text, is a simple website that will give you a random piece of flavortext from Destiny on request. It is being developed by Hennamann from <a href=\"https\://antioxidantsin.space\">The Antioxidants</a> If you would like to contribute to DestinyFlavorText.net's development, help contribute to the source code over on Github: <a href=\"https\://github.com/antioxidants/destinyflavortext\">https\://github.com/antioxidants/destinyflavortext</a>.";

        // Changes the flavor text, into a small description for the website.
        function About() {
            document.getElementById("name").innerHTML = aboutTitle;
            document.getElementById("type").innerHTML = "";
            document.getElementById("flavortext").innerHTML = aboutText;
        }

        // Opens the list page
        function goToLists() {
            window.location = "https://darkstarteam.github.io/destinyflavortext/lists.html";
        }

        // Returns the user to the home page
        function GoHome() {
            window.location = "https://darkstarteam.github.io/destinyflavortext/"
        }

        function ThemeChooser() {
            document.getElementById("theme-picker").value!="light"||(setActiveStyleSheet('default'))
            document.getElementById("theme-picker").value!="dark"||(setActiveStyleSheet('dark'))
        }

        // Changes the list depending on the chosen filter.
        function SubmitFilterChoice() {
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
        document.getElementById("filter_type").value!="artifacts"||(GrabArtifacts())
        document.getElementById("filter_type").value!="hunter_artifacts"||(GrabHunterArtifacts())
        document.getElementById("filter_type").value!="hunter_helmets"||(GrabHunterHelmets())
        document.getElementById("filter_type").value!="hunter_chest_armor"||(GrabHunterChestArmor())
        document.getElementById("filter_type").value!="hunter_cloaks"||(GrabCloaks())
        document.getElementById("filter_type").value!="hunter_gauntlets"||(GrabHunterGauntlets())
        document.getElementById("filter_type").value!="hunter_helmets"||(GrabHunterHelmets())
        document.getElementById("filter_type").value!="hunter_leg_armor"||(GrabHunterLegArmor())
        document.getElementById("filter_type").value!="titan_artifacts"||(GrabHunterArtifacts())
        document.getElementById("filter_type").value!="titan_helmets"||(GrabTitanHelmets())
        document.getElementById("filter_type").value!="titan_chest_armor"||(GrabTitanChestArmor())
        document.getElementById("filter_type").value!="titan_marks"||(GrabMarks())
        document.getElementById("filter_type").value!="titan_gauntlets"||(GrabTitanGauntlets())
        document.getElementById("filter_type").value!="titan_helmets"||(GrabTitanHelmets())
        document.getElementById("filter_type").value!="titan_leg_armor"||(GrabTitanLegArmor())
        document.getElementById("filter_type").value!="warlock_artifacts"||(GrabWarlockArtifacts())
        document.getElementById("filter_type").value!="warlock_helmets"||(GrabWarlockHelmets())
        document.getElementById("filter_type").value!="warlock_chest_armor"||(GrabWarlockChestArmor())
        document.getElementById("filter_type").value!="warlock_bonds"||(GrabBonds())
        document.getElementById("filter_type").value!="warlock_gauntlets"||(GrabWarlockGauntlets())
        document.getElementById("filter_type").value!="warlock_helmets"||(GrabWarlockHelmets())
        document.getElementById("filter_type").value!="warlock_leg_armor"||(GrabWarlockLegArmor())
        document.getElementById("filter_type").value!="ghosts"||(GrabGhosts())
        document.getElementById("filter_type").value!="ships"||(GrabShips())
        document.getElementById("filter_type").value!="sparrows"||(GrabSparrows())
        }

        // Grabs all the flavortext and displays it as a list.
        function GrabFlavorText() {
        $("#item_list").html("");
        $.getJSON('flavortext.json', function(data) { 
            var container = $('#item_list');

            for(var i = 0, k = data.length; i < k; i++){
                var name = $(document.createElement('p'),
                type = $(document.createElement('p')),
                flavor = $(document.createElement('p')));

                name.attr('id', 'name');
                flavor.attr('id', 'type');
                flavor.attr('id', 'flavortext');

                name.text(data[i].name);
                type.text(data[i].type);
                flavor.text(data[i].flavor);

                container.append(name, type, flavor);
            }
        })
        };

        // Grabs all flavor text from auto rifles and displays it as a list.
        function GrabAutos() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/autos.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/fusions.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/hand%20cannons.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/lmgs.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/pulses.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/rockets.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/scouts.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/shotguns.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/sidearms.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/snipers.json', function(data) { 
            var container = $('#item_list');

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
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/weapons/swords.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from artifacts and displays it as a list.
        function GrabArtifacts() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/artifacts.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from hunter artifacts and displays it as a list.
        function GrabHunterArtifacts() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_artifact.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from hunter chest armor and displays it as a list.
        function GrabHunterChestArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_chest_armor.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from cloaks and displays it as a list.
        function GrabCloaks() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_cloaks.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from hunter gauntlets and displays it as a list.
        function GrabHunterGauntlets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_gauntlets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from hunter helmets and displays it as a list.
        function GrabHunterHelmets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_helmets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from hunter leg armor and displays it as a list.
        function GrabHunterLegArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/hunter_leg_armor.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from titan artifacts and displays it as a list.
        function GrabTitanArtifacts() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_artifacts.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from titan chest armor and displays it as a list.
        function GrabTitanChestArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_chest_armor.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from marks and displays it as a list.
        function GrabMarks() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_marks.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from titan gauntlets and displays it as a list.
        function GrabTitanGauntlets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_gauntlets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from titan helmets and displays it as a list.
        function GrabTitanHelmets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_helmets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from titan leg armor and displays it as a list.
        function GrabTitanLegArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/titan_leg_armor.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from warlock artifacts and displays it as a list.
        function GrabWarlockArtifacts() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_artifact.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from warlock chest armor and displays it as a list.
        function GrabWarlockChestArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_chest_armor.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from bonds and displays it as a list.
        function GrabBonds() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_bonds.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from warlock gauntlets and displays it as a list.
        function GrabWarlockGauntlets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_gauntlets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from warlock helmets and displays it as a list.
        function GrabWarlockHelmets() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_helmets.json', function(data) { 
            var container = $('#item_list');

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
    
        // Grabs all flavor text from warlock leg armor and displays it as a list.
        function GrabWarlockLegArmor() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/armor/warlock_leg_armor.json', function(data) { 
            var container = $('#item_list');

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

        // Grabs all flavor text from ghost shells and displays it as a list.
        function GrabGhosts() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/misc/ghosts.json', function(data) { 
            var container = $('#item_list');

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

        // Grabs all flavor text from ships and displays it as a list.
        function GrabShips() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/misc/ships.json', function(data) { 
            var container = $('#item_list');

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

        // Grabs all flavor text from sparrows and displays it as a list.
        function GrabSparrows() {
        $("#item_list").html("");
        $.getJSON('https://darkstarteam.github.io/destinyflavortext/data/misc/sparrows.json', function(data) { 
            var container = $('#item_list');

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
