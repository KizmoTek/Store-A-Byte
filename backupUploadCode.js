firebase.initializeApp(firebaseConfig);
        $(function() {
            var form = $('form');
            form.submit( function(event){
                console.log("hi");
                event.preventDefault()
                var timeStamp =  Number(new Date());
                var storageRef = firebase.storage().ref(timeStamp.toString());
                var $ = jQuery;
                var file_data = $('#browseBtn').prop('files')[0];
                storageRef.put(file_data);
                
            });
        });