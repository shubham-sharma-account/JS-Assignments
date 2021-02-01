var btn = document.getElementById("btn");
        btn.addEventListener('click',function(){
            var map = document.getElementById("map");
            map.style.display="block";
            var input = document.getElementById("loc").value;
            if(input == "maimt")
            {
                initMap(30.1520,77.3130,"black");
            }else if(input == "eiffel"){
                initMap(48.8584,2.2945,"red");
            }
            else if(input == "taj"){
                initMap(27.1751,78.0421,"blue");
            }
            else if(input == "burj"){
                initMap(25.1972,55.2744,"orange");
            }
            else if(input == "debut"){
                initMap(30.7065,76.6848,"purple");
            }else{
                alert("Select any location first");
                map.style.display="none";
            }
        });
        function initMap(latitude,longitude,color)
        {
            var options = {
                center: { lat: latitude, lng: longitude }, 
                zoom: 18
            }
            var map = new google.maps.Map(document.getElementById("map"),options);

            var marker = new google.maps.Marker({
                icon: {
                    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
                    strokeColor: color,
                    scale: 5
                },
                position:{lat: latitude, lng: longitude },
                map:map
            });
        }