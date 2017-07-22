    var index = 0;
    carousel();



    function carousel() { //for showing slide show
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";   //for making display of each image to none
        }
    index++;
    if (index > x.length) {
        index = 1;
    }    
    x[index-1].style.display = "block";  //showing selected image
    setTimeout(carousel, 9000);    
}


    var song = document.querySelector('audio');//updating time on footer
    window.onload = setInterval(function(){ var song = document.querySelector('audio');//setting time in footer
        document.getElementById('duration').value=fancyTimeFormat(song.duration);
        document.getElementById('current_time').value=fancyTimeFormat(song.currentTime);
     }, 1000)



    song.addEventListener('timeupdate', onLoadProgress); //for increasing progress bar
    var myProgressBar = document.getElementById('seekbar'); 
    function onLoadProgress () {
    var progress= parseInt(((song.currentTime / song.duration) * 100), 10);
    myProgressBar.value = progress;  //setting value in progress bar
}



    function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    ret=ret.slice(0,4);
    return ret;
}




    $('.user_name').text(localStorage.getItem("name"));//for geting name of user which was taken as input in songify.html
    var i=0;
    var image_path="../images/";
    var song_path="../songs/";
    var Song_Obj=[{
        'song_image':image_path+'Jagga-Jasoos.jpg',
        'SongName': 'Ullu Ka Pattha',
        'SongArtist': 'arijit singh',
        'SongAlbum': 'Jagga-Jasoos',
        'SongDuration': 5,
    },
    {
        'song_image':image_path+'tubelight.jpg',
        'SongName': 'Radio',
        'SongArtist': 'Kamaal Khan',
        'SongAlbum': 'tubelight',
        'SongDuration': 6,
    },
    {
        'song_image':image_path+'Half gf.jpg',
        'SongName': 'Baarish',
        'SongArtist': 'Ash King',
        'SongAlbum': 'Half Girlfriend',
        'SongDuration': 3,
    }];
    
    document.getElementById("cover2").src=Song_Obj[0].song_image;
    document.getElementById('foot_name').value=Song_Obj[0].SongName;
    document.getElementById('foot_album').value=Song_Obj[0].SongAlbum;
    for(i=0;i<3;i++) //setting value in table first
    {
        var name='#song'+(i+1);
         $(name).find('.song_image').attr("src", Song_Obj[i].song_image);
        $(name).find('.song_name').text(Song_Obj[i].SongName);
        $(name).find('.song_artist').text(Song_Obj[i].SongArtist);
        $(name).find('.song_album').text(Song_Obj[i].SongAlbum);
        $(name).find('.song_duration').text(Song_Obj[i].SongDuration)
    }



    $('#songs').DataTable({ //using table for search
        });



    $('.icon').on('click',addSongNameClickEvent); //function for playing and pausing song and changing play pause icon
    function addSongNameClickEvent()
    {
        var song=$('audio');
        if (document.getElementById("player").paused==true){
                song[0].play();
                $('.icon').removeClass('fa fa-play-circle');//chaining
                $(".icon").addClass("fa fa-pause-circle");//chaining
                //$(".fa-pause-circle").addClass("iconshow");
                console.log("changed play");
            }
            else{
                song[0].pause();
                //$(".fa-play-circle").addClass("iconshow");
                $('.icon').removeClass('fa fa-pause-circle')//chaining
                $('.icon').addClass('fa fa-play-circle');//chaining
                console.log("changed pause");
            }
    }


     $('body').on('keypress', function(event) {//function for playing and pausing by keypress
                if (event.keyCode == 32 && event.target.tagName != "INPUT") {
                    addSongNameClickEvent();
                }
            });


    function songPlay(id){ // palying song
        var song=$('audio');
        var current_song = $('audio').attr('src');
        var request_song=Song_Obj[id].SongName+'.mp3';
        var curr_song=String(current_song);
        curr_song=curr_song.slice(9,curr_song.length);
        if(curr_song!=request_song){
            $(song).attr('src',song_path+request_song)
            song[0].load();
            document.getElementById("cover2").src=Song_Obj[id].song_image;//change song image dynamically on footer
            document.getElementById('foot_name').value=Song_Obj[id].SongName;//change song name dynamically on footer
            document.getElementById('foot_album').value=Song_Obj[id].SongAlbum;//change song Artist dynamically on footer
            song[0].play();
            $(".icon").addClass("fa fa-pause-circle");
            //$(".fa-pause-circle").addClass("iconshow");

            console.log("changed play");
            }
        else{
            addSongNameClickEvent();
        }
}

