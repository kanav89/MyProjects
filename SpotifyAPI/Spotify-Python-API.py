from dotenv import load_dotenv
import os
import base64
from requests import post, get
import json
from flask import Flask


app = Flask(__name__)


@app.route('/')
def flaskpy():
    return fin


load_dotenv()

fin = ""
min_dancebility = 0
min_tempo = 0
min_valence = 0
max_valence = 0
max_dancebility = 0

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("CLIENT_SECRET")
artist_na = input("enter artist name:")
artist_na2 = input("enter another artist")
genre = input("enter genre")
mood = input("mood:")
if (mood == "happy"):
    min_valence = 0.8
    max_valence = 1
    min_dancebility = 0.7
    max_dancebility = 0.8
    min_tempo = 120
elif (mood == "dance"):
    min_valence = 0.6
    max_valence = 1
    min_dancebility = 0.9
    max_dancebility = 1
    min_tempo = 135
elif mood == "sad":
    min_valence = 0.2
    max_valence = 0.5
    min_dancebility = 0.2
    max_dancebility = 0.4
    min_tempo = 100

else:
    print("Not Valid")


def get_token():
    auth_string = client_id + ":" + client_secret
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
    token = json_result["access_token"]
    return token


def get_auth_header(token):
    return {"Authorization": "Bearer " + token}


def search_for_artist(token, artist_name):
    url = "https://api.spotify.com/v1/search?q={artist_name}&type=artist&limit=1"
    headers = get_auth_header(token)

    result = get(url, headers=headers)
    json_result = json.loads(result.content)["artists"]["items"]
    if len(json_result) == 0:
        return None

    return json_result[0]


def get_recommendations(token, artist_id, seed_genre, min_valence, max_valence, min_dancebility,
                        max_dancebility, min_tempo):

    url = f"https://api.spotify.com/v1/recommendations?limit=10&seed_artists={artist_id}&seed_genre={seed_genre}&min_valence=\
        {min_valence}&max_valence={max_valence}&min_dancebility={min_dancebility}&\
            max_dancebility={max_dancebility}&min_tempo={min_tempo}"

    headers = get_auth_header(token)
    result = get(url, headers=headers)
    json_result = json.loads(result.content)
    return json_result


token = get_token()
result = search_for_artist(token, artist_na)
result2 = search_for_artist(token, artist_na2)
artist_id = result["id"]+","+result2["id"]
songs = get_recommendations(token, artist_id, genre,
                            min_valence, max_valence, min_dancebility, max_dancebility, min_tempo)
l = songs["tracks"]
for i in l:
    fin = i["name"]+" by "+i["artists"][0]["name"]+"\n"
