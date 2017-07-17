    var index = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("slide");
        for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
        }
    index++;
    if (index > x.length) {
        index = 1;
    }    
    x[index-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}
    var song = document.querySelector('audio');
    window.onload = setInterval(function(){ var song = document.querySelector('audio');
        document.getElementById('duration').value=fancyTimeFormat(song.duration);
        document.getElementById('current_time').value=fancyTimeFormat(song.currentTime);
     }, 1000)
    song.addEventListener('timeupdate', onLoadProgress);
    var myProgressBar = document.getElementById('seekbar'); 
    function onLoadProgress () {
    var progress= parseInt(((song.currentTime / song.duration) * 100), 10);
    console.log(progress);
    myProgressBar.value = progress; 
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
    return ret;
}
    $('.user_name').text(localStorage.getItem("name"));//for geting name of user which was taken as input in songify.html
    var i=0;
    var image_path="images/"
    var song_image=[image_path+'Jagga-Jasoos.jpg',image_path+'tubelight.jpg',image_path+'Half gf.jpg']
    var SongName=['Ullu Ka Pattha','Radio','Baarish'];
    var SongArtist=['arijit singh','Kamaal Khan','Ash King'];
    var SongAlbum=['Jagga-Jasoos','tubelight','Half Girlfriend'];
    var SongDuration=['5','6','5.4'];
    document.getElementById("cover2").src=song_image[0];
    document.getElementById('foot_name').value=SongName[0];
    document.getElementById('foot_album').value=SongAlbum[0];
    for(i=0;i<3;i++)
    {
        var name='#song'+(i+1);
         $(name).find('.song_image').attr("src", song_image[i]);
        $(name).find('.song_name').text(SongName[i]);
        $(name).find('.song_artist').text(SongArtist[i]);
        $(name).find('.song_album').text(SongAlbum[i]);
        $(name).find('.song_duration').text(SongDuration[i])
    }
    $('#songs').DataTable({
        });

    $('.icon').on('click',addSongNameClickEvent);
    function addSongNameClickEvent()
    {
        var song=$('audio');
        if (document.getElementById("player").paused==true){
                song[0].play();
                $('.icon').removeClass('fa fa-play-circle');
                $(".icon").addClass("fa fa-pause-circle");
                //$(".fa-pause-circle").addClass("iconshow");
                console.log("changed play");
            }
            else{
                song[0].pause();
                //$(".fa-play-circle").addClass("iconshow");
                $('.icon').removeClass('fa fa-pause-circle')
                $('.icon').addClass('fa fa-play-circle');
                console.log("changed pause");
            }
    }
     $('body').on('keypress', function(event) {
                if (event.keyCode == 32 && event.target.tagName != "INPUT") {
                    addSongNameClickEvent();
                }
            });
    function songPlay(id){
        var song=$('audio');
        var current_song = $('audio').attr('src');
        var request_song=SongName[id]+'.mp3';
        if(current_song!=request_song){
            $(song).attr('src',request_song)
            song[0].load();
            document.getElementById("cover2").src=song_image[id];
            document.getElementById('foot_name').value=SongName[id];
            document.getElementById('foot_album').value=SongAlbum[id];
            song[0].play();
            $(".icon").addClass("fa fa-pause-circle");
            //$(".fa-pause-circle").addClass("iconshow");

            console.log("changed play");
            }
        else{
            addSongNameClickEvent();
        }
}

