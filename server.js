/* Setting things up. */
const Twitter = require("twitter")
const fs = require("fs")
var request = require('request');
const justreddit = require("justreddit");
var already_vids = [];
const express = require( 'express' ),
      app = express(),
      CronJob = require( 'cron' ).CronJob,
      Twit = require( 'twit' ),
      config = {
      /* Be sure to update the .env file with your API keys. See how to get them: https://botwiki.org/tutorials/how-to-create-a-twitter-app */      
        twitter: {
          consumer_key: process.env.TWITTER_CONSUMER_KEY,
          consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
          access_token: process.env.TWITTER_ACCESS_TOKEN,
          access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
        }
      },
      T = new Twit( config.twitter );
var old_date = new Date();

app.use( express.static( 'public' ) );

let listener = app.listen( process.env.PORT, function(){
  console.log( 'Your bot is running on port ' + listener.address().port );

  /*
    Set up a new cron job to start tweeting automatically.
    Check out https://www.npmjs.com/package/cron#available-cron-patterns to learn more about cron scheduling patterns.
    
    For a few examples, see https://glitch.com/edit/#!/creative-bots?path=helpers%2Fcron-schedules.js
  */
/*
  ( new CronJob( '0 19 * * *', function() {
    
    /* The example below tweets out "Hello world 👋" and the current date. */
/*
    const date = new Date().toLocaleString();
    T.post( 'statuses/update', { status: 'Hello world 👋 ' + date }, function( err, data, response ) {
      if ( err ){
        console.log( 'error!', err );
      }
      else {
        console.log( 'tweeted', `https://twitter.com/${ data.user.screen_name }/status/${ data.id_str }` );
      }
    } );
  } ) ).start();

 ( new CronJob( '0 19 * * *', function() { */
    
    /*Send cat*/
/*
var b64content = fs.readFileSync(__dirname + '/assets/2.jpg', { encoding: 'base64' })
 
// first we must post the media to Twitter
T.post('media/upload', { media_data: b64content }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Small flowers in a planter on a sunny balcony, blossoming."
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: 'Cat', media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        console.log(data)
      })
    }
  })
})
                                           
  } ) ).start();

*/
  function refresh()
  {
    const { exec } = require("child_process");
    
exec("refresh", (error, stdout) => {
    if (error) {
        console.log("CAN'T REFRESH !!")
        console.log(`error: ${error.message}`);
        return FindMedia();
    }
    else
      {
        console.log("REFRESHED/ING !!")
      }
    //console.log(`stdout: ${stdout}`);
})
  }
  
  /*
        ( new CronJob( '0 12 * * *', function() {
var params = {
    id: '1'
    // count: 3
}
T.get('trends/place', params, gotData);

    function gotData(err, data, response) {
        var tweets = data;
        var hash1 = tweets[0]['trends'][0]['name'];
        var hash2 = tweets[0]['trends'][1]['name'];
        var hash3 = tweets[0]['trends'][2]['name'];
        var hash4 = tweets[0]['trends'][3]['name'];
        var hash5 = tweets[0]['trends'][4]['name'];
        var hash6 = tweets[0]['trends'][5]['name'];
        var hash7 = tweets[0]['trends'][6]['name'];
        var hash8 = tweets[0]['trends'][7]['name'];
        var hash9 = tweets[0]['trends'][8]['name'];
        var hash10 = tweets[0]['trends'][9]['name'];
      
      if(hash1.includes('#') == false)
        {
          hash1 = '#' + tweets[0]['trends'][0]['name'];
        }
      if(hash2.includes('#') == false)
        {
          hash2 = '#' + tweets[0]['trends'][1]['name'];
        }
      if(hash3.includes('#') == false)
        {
          hash3 = '#' + tweets[0]['trends'][2]['name'];
        }
      if(hash4.includes('#') == false)
        {
          hash4 = '#' + tweets[0]['trends'][3]['name'];
        }
      if(hash5.includes('#') == false)
        {
          hash5 = '#' + tweets[0]['trends'][4]['name'];
        }
      if(hash6.includes('#') == false)
        {
          hash6 = '#' + tweets[0]['trends'][5]['name'];
        }
      if(hash7.includes('#') == false)
        {
          hash7 = '#' + tweets[0]['trends'][6]['name'];
        }
      if(hash8.includes('#') == false)
        {
          hash8 = '#' + tweets[0]['trends'][7]['name'];
        }
      if(hash9.includes('#') == false)
        {
          hash9 = '#' + tweets[0]['trends'][8]['name'];
        }
      if(hash10.includes('#') == false)
        {
          hash10 = '#' + tweets[0]['trends'][9]['name'];
        }
          
    T.post( 'statuses/update', { status: "Hello world 👋 A new day begins !\n If you don't know me, I'm a BOT who sends funny videos every hour, don't hesitate to follow me!\n\nTop 10 # in the World today:\n" + hash1.replace(/\s/g, "") + "\n" + hash2.replace(/\s/g, "") + "\n" + hash3.replace(/\s/g, "") + "\n" + hash4.replace(/\s/g, "") + "\n" + hash5.replace(/\s/g, "") + "\n" + hash6.replace(/\s/g, "") + "\n" + hash7.replace(/\s/g, "") + "\n" + hash8.replace(/\s/g, "") + "\n" + hash9.replace(/\s/g, "") + "\n" + hash10.replace(/\s/g, "")}, function( err, data, response ) {
      if ( err ){
        console.log( 'error!', err );
      }
      else {
        console.log( 'tweeted (new day !)', `https://twitter.com/${ data.user.screen_name }/status/${ data.id_str }` );
      }
    } );
    }
    console.log(already_vids); //Send already_vids content
  } ) ).start();
  */
  

//SEND https://www.reddit.com/r/FunnyAnimals/ memes __dirname + '/assets/example.mp4'

/*const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
    const fileUrl = "https://v.redd.it/icm07jkhrxj91/DASH_480.mp4";
    const downloadFolder = __dirname + '/assets/';
// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = path.basename(fileUrl);
  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });
    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  } catch (err) { 
    throw new Error(err);
  }
}; */

// Testing
/*const IMAGE_URL =
  'https://www.kindacode.com/wp-content/uploads/2021/01/test.jpg';
downloadFile(IMAGE_URL, 'download');*/

/*
const VIDEO_URL =
  'https://v.redd.it/icm07jkhrxj91/DASH_480.mp4';
downloadFile(VIDEO_URL, 'assets');
*/
  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
  console.log(old_date)
  
  var urltype = null;
  var media_title = null;
  var image_title = null;
  var next_post_url = null
  var next_post_url_mp3 = null
  var save_random_number = null;
function FindMedia () {
  console.log("Wait before Finding")
  function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
  wait(20000);
console.log("start finding")
const Twitter = require("twitter")
const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()
  
  const pathDelete = __dirname + '/assets/video.mp4';

try {
  fs.unlinkSync(pathDelete)
  console.log("video.mp4 deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/video.mp4 to delete");
}
  
  const pathMP3Delete = __dirname + '/assets/audio.mp4';

try {
  fs.unlinkSync(pathMP3Delete)
  console.log("audio.mp4 deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/audio.mp4 to delete");
}
  
  const pathFullDelete = __dirname + '/assets/fullvideo.mp4';

try {
  fs.unlinkSync(pathFullDelete)
  console.log("fullvideo.mp4 deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/fullvideo.mp4 to delete");
}
  
  const pathDeleteTS = __dirname + '/assets/video.ts';

try {
  fs.unlinkSync(pathDeleteTS)
  console.log("video.ts deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/video.ts to delete");
}
  
  const pathMP3DeleteTS = __dirname + '/assets/audio.ts';

try {
  fs.unlinkSync(pathMP3DeleteTS)
  console.log("audio.ts deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/audio.ts to delete");
}
  
  const pathImage = __dirname + '/assets/post.png';

try {
  fs.unlinkSync(pathImage)
  console.log("post.png deleted");
  //file removed
} catch(err) {
  console.log("No file /assets/post.png to delete");
}
        
try{
dotenv.config()
  
//RANDOM VIDEO
const randomPuppy = require('random-puppy');

//RANDOM SUBREDDIT
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const random_number = getRandomInt(9);
save_random_number = random_number;
  if(random_number == 0)
    {
var event = 'gaming'
}
  else if(random_number == 1)
    {
      var event = 'gaming'
    }
  else if(random_number == 2)
    {
      var event = 'gaming'
    }
      else if(random_number == 3)
      {
      var event = 'gaming'
      }
      else if(random_number == 4)
      {
      var event = 'gaming'
      }
  else if(random_number == 5)
    {
      var event = 'gaming'
    }
   else if(random_number == 6)
    {
      var event = 'gaming'
    }
   else if(random_number == 7)
    {
      var event = 'gaming'
    }
   else if(random_number == 8)
    {
      var event = 'gaming'
    }
  else
  {
      var event = 'gaming'
  }

        var urlfunny = null;

  
  
  
//CHECK IF ALREADY IN already.txt

       console.log("Fetching !")
const redditFetch = require('reddit-fetch');

redditFetch({
    subreddit: event,
    sort : 'hot',
    allowNSFW: false,
    allowModPost: false,
    allowCrossPost: false,
    allowVideo: true

}).then(post => {
    console.table(post);
    if(post.post_hint == 'hosted:video')
      {
        urlfunny = post.url + "/DASH_240.mp4";
        next_post_url = post.url + "/DASH_240.mp4";
        console.log("Found !")
        media_title = post.title;
        //console.table(post);//



  console.log("Found url : " + next_post_url)

  if(already_vids.includes(next_post_url) == false)
    {
      //already_vids.push(next_post_url);
    }
  
  
/////////////////////////////
var https = require('https');
var fs = require('fs');

  var url = post.url + "/DASH_audio.mp4"
  next_post_url_mp3 = post.url + "/DASH_audio.mp4";
          
https.get(url,(res) => {
    // Image will be stored at this path
    const path = __dirname + "/assets/audio.mp4"; 
    const filePath = fs.createWriteStream(path);
    res.pipe(filePath);
    filePath.on('finish',() => {
        filePath.close();
        console.log(' AUDIO Download Completed'); 
      })
  })
        
  var enddl = 0;
const path = require('path');
const axios = require('axios').default;

    const fileUrl = next_post_url;
    const downloadFolder = __dirname + '/assets/';
// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
      
const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = 'video.mp4'; //Save as video.mp4

  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });
    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
      enddl = 1;
      
      
  console.log("ffmpeg")
  var ffmpeg = require('fluent-ffmpeg');
  var videoInput = __dirname + "/assets/video.mp4";
  var audioInput = __dirname + "/assets/audio.mp4"
  var outputInput = __dirname + "/assets/fullvideo.mp4"

const { exec } = require("child_process");
      wait(5000)
      exec('ffmpeg -i assets/video.mp4 -i assets/audio.mp4 -c:v copy -c:a aac assets/fullvideo.mp4',(error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
            } else {
                console.log("MADE FULLVIDEO !!")
            }
      });
/*
exec('ffmpeg -i assets/video.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts assets/video.ts', {maxBuffer: 1024 * 100000},(error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
            } else {
                console.log("Converted VIDEO MP4")
                wait(5000)
                exec('ffmpeg -i assets/audio.mp4 -c copy -bsf:v h264_mp4toannexb -f mpegts assets/audio.ts', {maxBuffer: 1024 * 100000},(error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
            } else {
                console.log("Converted AUDIO MP4")
                wait(5000)
                exec('ffmpeg -fflags +discardcorrupt -i assets/video.ts -i assets/audio.ts -bsf:a aac_adtstoasc -map 0:0 -map 1:0 -c copy assets/fullvideo.mp4', {maxBuffer: 1024 * 100000},(error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
            } else {
                console.log("FULLVIDEO IS READY !!")
                //refresh();
                //-bsf:a aac_adtstoasc
            }
  })
            }
  })
                
            }
  })
*/    });
  } catch (err) {
    console.log("Error download : video.mp4")
    FindMedia();
  }

}; 
         const VIDEO_URL = urlfunny;
  next_post_url = urlfunny;

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let URL1080 = post.url + "/DASH_1080.mp4";
let URL720 = post.url + "/DASH_720.mp4";
let URL480 = post.url + "/DASH_480.mp4";
let URL360 = post.url + "/DASH_360.mp4";
let URL240 = post.url + "/DASH_240.mp4";
// Make a function or variable to get the URL you want, in my case it's the episode URL.

let xhr = new XMLHttpRequest();
// Requests the headers that would be returned if the HEAD request's URL was instead requested with the HTTP GET method
var FinalQuality = false;
xhr.open('HEAD', URL720, true);

xhr.onload = function() {
// In here I get the Content Type from the HEAD of the response
    let contentType = xhr.getResponseHeader('Content-Type');
    if (contentType == 'video/mp4'){
        console.log(contentType);
        console.log("This is mp4 video")
        var FinalQuality = true;
//Function to play mp4 file
    }
    else {
        console.log("Quality don't exist (720p)")
// Function to play HLS m3u8 file
    }

};

xhr.send();
        wait(3000);
if(FinalQuality == false)
{
  xhr.open('HEAD', URL720, true);
  xhr.send();
  wait(10000);
  if(FinalQuality == false)
  {
    xhr.open('HEAD', URL480, true);
    xhr.send();
    wait(10000);
    if(FinalQuality == false)
    {
      xhr.open('HEAD', URL360, true);
      xhr.send();
      wait(10000);
      if(FinalQuality == false)
      {
        var FinalQuality = post.url + "/DASH_240.mp4";
        console.log("QUALITY : " + FinalQuality);
        wait(10000);
      }
      else
      {
        
        var FinalQuality = post.url + "/DASH_360.mp4";
        console.log("QUALITY : " + FinalQuality);
      wait(10000);
      }
    }
    else
      {
        var FinalQuality = post.url + "/DASH_480.mp4";
        console.log("QUALITY : " + FinalQuality);
      }
  }
  else
    {
      var FinalQuality = post.url + "/DASH_720.mp4";
      console.log("QUALITY : " + FinalQuality);
    }
}
        wait(10000);
        if(FinalQuality != false)
          {
            downloadFile(FinalQuality, 'assets');
          }
        else
          {
            downloadFile(VIDEO_URL, 'assets');
          }
      console.log("Wait 10s... Starting DL...")
      wait(10000);
      console.log("Wait 10s... DL...")
      wait(10000)
  console.log("end ffmpeg")
          
        }
  else
    {
        if(already_vids.includes(post.url) == false)
    {
        urlfunny = post.url;
        next_post_url = post.url;
        console.log("Found ! PNG")
      //already_vids.push(post.url);

      //ITS A PNG
      image_title = null;
      console.log("Found IMAGE !! : " + post.url);
      console.log("Image Title : " + image_title);
      image_title = post.title;
      const fs = require('fs');
const path = require('path');
const axios = require('axios').default;
    const fileUrl = post.url;
    const downloadFolder = __dirname + '/assets/';
// fileUrl: the absolute url of the image or video you want to download
// downloadFolder: the path of the downloaded file on your machine
const downloadFile = async (fileUrl, downloadFolder) => {
  // Get the file name
  const fileName = path.basename("post.png");
  // The path of the downloaded file on our machine
  const localFilePath = path.resolve(__dirname, downloadFolder, fileName);
  try {
    const response = await axios({
      method: 'GET',
      url: fileUrl,
      responseType: 'stream',
    });
    const w = response.data.pipe(fs.createWriteStream(localFilePath));
    w.on('finish', () => {
      console.log('Successfully downloaded file! PNG');
      console.log(urlfunny);
      urlfunny = post.url;
      next_post_url = post.url;
    });
  } catch (err) { 
    throw new Error(err);
  }
};

// Testing
const IMAGE_URL = post.url;
downloadFile(IMAGE_URL, 'assets');
      console.log("Wait 10s, DL PNG...")
      wait(10000);
    }
      else
        {
          FindMedia();
        }
          }          
  });

} catch(error){
  console.log("Error with DL & Convert ??")
  FindMedia();
}
  console.log("End Of FindMedia");
    }

  function SendMedia()
  {
        try
          {
console.log("start posting")
const Twitter = require("twitter")
const dotenv = require("dotenv")
const fs = require("fs")
dotenv.config()
        
/////////////////////////////
    
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
})

if(next_post_url.substr(next_post_url.length-3, 3) == "mp4")
  {
const pathToFile = __dirname + '/assets/fullvideo.mp4'
const mediaType = "video/mp4"

const mediaData = fs.readFileSync(pathToFile)
const mediaSize = fs.statSync(pathToFile).size
console.log("SIZE SIZE SIZE : " + mediaSize);

if(next_post_url != undefined)
  {
    if(next_post_url.substr(next_post_url.length-3, 3) == "mp4")
      {
initializeMediaUpload()
  .then(appendFileChunk)
  .then(finalizeUpload)
  .then(publishStatusUpdate)
  }
  else
  {
      console.log("Else 1, have to find another")
      FindMedia();
  }
        }
        else
        {
            console.log("Else 2, have to find another")
            FindMedia();
        }
function initializeMediaUpload() {
  return new Promise(function(resolve, reject) {
    client.post("media/upload", {
      command: "INIT",
      total_bytes: mediaSize,
      media_type: mediaType
    }, function(error, data, response) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        resolve(data.media_id_string)
      }
    })
  }).catch(function () {
     console.log("Promise Rejected (code: 631)");
     FindMedia();
});
}

function appendFileChunk(mediaId) {
  return new Promise(function(resolve, reject) {
    client.post("media/upload", {
      command: "APPEND",
      media_id: mediaId,
      media: mediaData,
      segment_index: 0
    }, function(error, data, response) {
      if (error) {
        console.log(error)
        reject(error)
        return FindMedia();
      } else {
        resolve(mediaId)
      }
    })
  }).catch(function () {
     console.log("Promise Rejected (code: 864)");
});
}

function finalizeUpload(mediaId) {
  return new Promise(function(resolve, reject) {
    client.post("media/upload", {
      command: "FINALIZE",
      media_id: mediaId
    }, function(error, data, response) {
      if (error) {
        console.log(error)
        reject(error)
        return FindMedia();
      } else {
        resolve(mediaId)
      }
    })
  }).catch(function () {
     console.log("Promise Rejected (code: 357)");
});
}
          if(media_title.slice(0, 2) == "By")
        {
          function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const random_number = getRandomInt(5);
          if(random_number == 1)
            {
              media_title = "🇫🇷";
            }
          else if(random_number == 2)
            {
              media_title = "Croissant";
            }
          else if(random_number == 3)
            {
              media_title = "Baguette";
            }
          else if(random_number == 4)
            {
              media_title = "Meme";
            }
          else
            {
              media_title = "";
            }
        }
function publishStatusUpdate(mediaId) {
  return new Promise(function(resolve, reject) {
    client.post("statuses/update", {
      status: `${media_title}\n#gaming #games #game #gamer #videogames`, //Message
      media_ids: mediaId
    }, function(error, data, response) {
      if (error) {
        console.log(error)
        reject(error)
        return FindMedia();
      } else {
        old_date = new Date();
        console.log("Successfully uploaded media and tweeted!")
        already_vids.push(next_post_url);
        refresh();
        resolve(data)


      }
    })
  })
}
  }
            else if(next_post_url.substr(next_post_url.length-3, 3) == "png" || next_post_url.substr(next_post_url.length-3, 3) == "jpg")
              {
                const fs = require('fs');
const path = require('path');
const mediaFile = fs.readFileSync(path.join(__dirname, '/assets/post.png'));
const base64image = Buffer.from(mediaFile).toString('base64');
T.post('media/upload', { media_data: base64image }, function (err, data, response) {
  // now we can assign alt text to the media, for use by screen readers and
  // other text-based presentations and interpreters
  var mediaIdStr = data.media_id_string
  var altText = "Like and Sub :3"
  var meta_params = { media_id: mediaIdStr, alt_text: { text: altText } }
 
  T.post('media/metadata/create', meta_params, function (err, data, response) {
    if (!err) {
      if(image_title.slice(0, 2) == "By")
        {
          image_title = "🇫🇷";
        }
      // now we can reference the media and post a tweet (media will attach to the tweet)
      var params = { status: `${image_title}\n#gaming #games #game #gamer #videogames`, media_ids: [mediaIdStr] }
 
      T.post('statuses/update', params, function (err, data, response) {
        console.log("Successfully uploaded media and tweeted! PNG !")
        already_vids.push(next_post_url);
        old_date = new Date();
        FindMedia();
        next_post_url = null;
      })
    }
  })
})
              }
            else
              {
                FindMedia();
              }
        console.log("already_vids : " + already_vids);
            console.log("FINISHED POSTING")
        //console.log("Wait 60s befind Finding Again (End Sending)")     
        //wait(60000);
        //FindMedia();
          }catch(error)
            {
              console.log("ERROR UPLOADING")
              console.log(error)
              console.log("Wait 10s")
              wait(10000);
              FindMedia();
            }
            
  }
  
  
      ( new CronJob( '0 * * * *', function() {
//SendMedia();
        console.log("already_vids: " + already_vids);
  } ) ).start();
  
  //Auto Like (1H)

      ( new CronJob( '*/5 * * * *', function() {
        /*
        console.log("Like (start)");
        const mediaArtsSearch = { q: "#leagueoflegends", count: 100, result_type: "recent" };

// This function finds the latest tweet with the MeetMaye hashtag and retweets.
  try {
       T.get("search/tweets", mediaArtsSearch, (error, data) => {
    // If our search request to the server had no errors...
    if (error) {
      // However, if our original search request had an error, we want to print it out here...
      console.log(error.message);
    } else {
      // Grab the ID of the tweet we want to retweetwit...
      const retweetId = data.statuses[0].id_str;
      // Tell Twitter we want to retweet it...
T.post('favorites/create', { id: retweetId })
    .then(result => {

    console.log('Liked tweet successfully!');
}).catch(console.error);
    }
  });
  } catch(error) {
     // Handle errors...
    console.log(error)
  }

     */   
  } ) ).start();

  
  ( new CronJob( '*/3 * * * *', function() {
  const pathToFile = __dirname + '/assets/video.mp4'
  const pathToFullFile = __dirname + '/assets/fullvideo.mp4'
  

  var mediaSize = 10000000;
  var mediaFullSize = 10000000;
  var new_date = new Date();
        if(old_date != null)
        {
              console.log("---")
              try {
                if (fs.existsSync(pathToFile)) {
                mediaSize = fs.statSync(pathToFile).size
                console.log("Size video.mp4 :" + mediaSize);
                }
              } catch(err) {
                mediaSize = 10000000;
                console.log("No video.mp4")
                console.error(err)
              }
              try {
                if (fs.existsSync(pathToFullFile)) {
                mediaFullSize = fs.statSync(pathToFullFile).size
                console.log("Full Size :" + mediaFullSize);
                }
              } catch(err) {
                mediaFullSize = 10000000;
                console.log("No fullvideo.mp4")
                console.error(err)
              }
              console.log("New :" + new_date.getHours())
              console.log("Old :" + old_date.getHours())
              console.log(new_date.getHours() - old_date.getHours())
              console.log("Next : " + next_post_url)
              console.log("---")
    if(((new_date.getHours() - old_date.getHours() + 0.1) > 1) || ((new_date.getHours() - old_date.getHours()) < 0))
      {
        console.log("START SENDMEDIA !!")
        SendMedia();
      }
        }
var ok = false;

//var next_post_time;
  if((next_post_url != null))
    {

    if(next_post_url.substr(next_post_url.length-3, 3) == "mp4")
           {
      var { getVideoDurationInSeconds } = require('get-video-duration')

// From a local path...
getVideoDurationInSeconds('assets/video.mp4').then((duration) => {
  console.log("Duration video.mp4 :" + duration)
  getVideoDurationInSeconds('assets/fullvideo.mp4').then((duration2) => {
  console.log("Duration fullvideo.mp4 :" + duration2)
      if((duration2 <= duration + 2) && (duration > 0.5) && (duration < 30))
        {
          if(already_vids.includes(next_post_url) == false)
            {
             ok = true;
             console.log("Its ok !");
             console.log("Seems good, next post will be :")
             console.log("Video :" + next_post_url)
             console.log("Audio : " + next_post_url_mp3)
            const pathToFullFile = __dirname + '/assets/fullvideo.mp4'
              try {
                if (fs.existsSync(pathToFullFile)) {
                var mediaFullSize = fs.statSync(pathToFullFile).size
                console.log("Full Media Exist !!")
                console.log("Full Media Size :" + mediaFullSize);
                  console.log("Title : " + media_title);
                }
              } catch(err) {
                console.error(err)
              }
            }
          else
            {
              FindMedia();
            }
        
        }
      else
        {
            console.log("Wasnt good, find another media")
            FindMedia();
        }
    }).catch(function () {
     console.log("ERROR WITH DURATION2 CHECK ??");
     FindMedia();
});
}).catch(function () {
     console.log("ERROR WITH DURATION CHECK ??");
     FindMedia();
});
           }
      else if(next_post_url.substr(next_post_url.length-3, 3) == "png" || next_post_url.substr(next_post_url.length-3, 3) == "jpg")
        {
          if(already_vids.includes(next_post_url) == false)
            {
          //IF IMAGE !!
          ok = true;
          console.log("Its ok ! ITS A PNG !!");
          console.log("Seems good, next post will be :")
          console.log("Next post : " + next_post_url);
            }
          else
            {
              FindMedia();
            }
        }
    else
      {
          console.log("Link is not MP4 ??")
          FindMedia();
      }
      
    }    else
    {
        console.log("Next post is null ! Finding...")
        FindMedia();
    }
    
} ) ).start();
  
})