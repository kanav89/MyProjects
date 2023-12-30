import base64
import json
from requests import get, post
from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse

app = FastAPI()

class SongRecommendation:

    def __init__(self, artist_na, artist_na2, genre, mood):
        self.client_id = "3cf5e65e6d9c49ed95057b5d4beaaf9f"
        self.client_secret = "3276739117f946e19c6695e8a925575e"
        self.artist_na = artist_na
        self.artist_na2 = artist_na2
        self.genre = genre
        self.mood = mood
        self.token = None
        self.initialize()  # Call the initialize method during initialization

    def get_token(self):
        auth_string = f"{self.client_id}:{self.client_secret}"
        auth_bytes = auth_string.encode("utf-8")
        auth_base64 = str(base64.b64encode(auth_bytes), "utf-8")

        url = "https://accounts.spotify.com/api/token"
        headers = {
            "Authorization": "Basic " + auth_base64,
            "Content-Type": "application/x-www-form-urlencoded"
        }
        data = {"grant_type": "client_credentials"}
        result = post(url, headers=headers, data=data)
        json_result = json.loads(result.content)
        self.token = json_result["access_token"]
        return self.token

    def initialize(self):
        if self.mood == "Happy":
            self.min_valence, self.max_valence, self.min_dancebility, self.max_dancebility = 0.6, 1, 0.5, 0.8
        elif self.mood == "Dance":
            self.min_valence, self.max_valence, self.min_dancebility, self.max_dancebility = 0.8, 1, 0.8, 1
        elif self.mood == "Sad":
            self.min_valence, self.max_valence, self.min_dancebility, self.max_dancebility = 0.0, 0.4, 0.2, 0.5
        else:
            self.min_dancebility, self.min_valence, self.max_valence, self.max_dancebility = 0, 0, 10, 10

    def get_auth_header(self):
        return {"Authorization": "Bearer " + self.token}

    def search_for_artist(self, artist_name):
        url = f"https://api.spotify.com/v1/search?q={artist_name}&type=artist&limit=1"
        header = self.get_auth_header()

        result = get(url, headers=header)
        json_result = json.loads(result.content)["artists"]["items"]
        if len(json_result) == 0:
            return None

        return json_result[0]

    def get_recommendations(self, artist_id, seed_genre, min_valence, max_valence, min_dancebility,
                            max_dancebility):
        url = f"https://api.spotify.com/v1/recommendations?limit=20&seed_artists={artist_id}&seed_genre={seed_genre}&min_valence=\
            {min_valence}&max_valence={max_valence}&min_dancebility={min_dancebility}&\
                max_dancebility={max_dancebility}&market=IN"

        header = self.get_auth_header()
        result = get(url, headers=header)
        json_result = json.loads(result.content)
        return json_result


@app.get('/recommendations')
def output(artist_na: str, artist_na2: str, genre: str, mood: str):
    song_instance = SongRecommendation(artist_na, artist_na2, genre, mood)
    
    try:
        # Before making any requests, get the token
        token = song_instance.get_token()
        
        result = song_instance.search_for_artist(artist_na)
        result2 = song_instance.search_for_artist(artist_na2)
        artist_id = result["id"] + "," + result2["id"]
        
        # Get recommendations
        songs = song_instance.get_recommendations(
            artist_id, genre, song_instance.min_valence, song_instance.max_valence,
            song_instance.min_dancebility, song_instance.max_dancebility
        )
        result = []
        strr=""
        x = 1
        for i in songs["tracks"]:
            link = i["album"]["external_urls"]["spotify"]
            y = str(x)
            strr = y + ". "+i["name"] + " by " + i["artists"][0]["name"]
            result.append([strr,link])
            x+=1
        return JSONResponse(content=result)
    
    except HTTPException as e:
        return JSONResponse(content=e)
