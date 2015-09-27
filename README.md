# PlayList
###Requirment
1.Simple playlist of finite set of videos.

2.A dropdown to choose from different artists [Elton John, Stevie Wonder, Frank Sinatra, Louis Armstrong];

3.By default the first item in the dropdown should be selected and the corresponding playlist should be rendered server  side. Change in selection should trigger client side updates.
###How to run this code
1.Please clone code from https://github.com/sahelmastoureshgh/PlayList.git

2.Please cd in directory of PlayList

3.npm install

4.npm start

5.open your locallhost in port 5000 and you can see the application

###How the application organized as code
1.I used MVC model 

2.To get playListId from YouTube Api by passing artist name (PlayList.js) in model floder

3.In PlayList controller we render form when we recived data from model

4.I assumed name of artits was providen from server side, this can be changed if we need to get from third party API or db

###Imporvement
1.Needs code needs documentation

2.Needs unit test

3.Needs UI improvemet to be responsvie for mobile and desktop browser (Using bootstrap)

4.Getting artist names from Spotify or some other APIs 
