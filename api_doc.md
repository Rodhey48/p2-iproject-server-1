# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /register`
- `POST /login`
- `GET /news`
- `GET /rangkings/`
- `GET /rangkings/ms`
- `GET /rangkings/md`
- `GET /rangkings/ws`
- `GET /rangkings/wd`
- `GET /rangkings/xd`



&nbsp;

## 1. POST /register

Request:

- body:

```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
}
```

_Response (201 - Created)_

```json
{
    "id": 1,
    "username": "test",
    "email": "test@mail.com"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "Email must be unique"
}
OR
{
  "message": "Username is required"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Password length min 5"
}
```

&nbsp;

## 2. POST /login


Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
    "id": 5,
    "username": "test2",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiJ0ZXN0MiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY0MTIwNDYzNX0.873yOAuRKb1_Ic6CtAxm8Jf9BLYLNPQBorK2YU-4PmY"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. GET /news

Description:
- Get all news from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
        "id": 1,
        "title": "The Most Beautiful Women in the Badminton World",
        "description": "&#32; submitted by &#32; /u/unfuckableslut [link] &#32; [comments]",
        "url": "https://www.reddit.com/r/sports/comments/rvas8x/the_most_beautiful_women_in_the_badminton_world/",
        "publishAt": "2022-01-03T20:11:55+00:00",
        "source": "Sports | Reddit",
        "image": "https://ik.imagekit.io/Rodhey48/badminton_SE0R54cUV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643103939794"
    },
    {
        "id": 2,
        "title": "FKF, Badminton locked out of NOC-K polls",
        "description": "Football Kenya Federation (FKF) Badminton Kenya, Kenya Swimming Federation will for the second time miss to have a seat at the National Olympics Committee of Kenya (NOC-K) at the national elections set for next Thursday, December 9th. With incumbent president Paul Tergat remaining unchallenged, 13 seats will be vied for but FKF will not have [&#8230;]",
        "url": "https://dailysport.co.ke/2021/12/02/fkf-badminton-locked-out-of-noc-k-polls/",
        "publishAt": "2021-12-02T14:30:47+00:00",
        "source": "Daily Sport",
        "image": "https://ik.imagekit.io/Rodhey48/badminton_SE0R54cUV.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1643103939794"
    },
  ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 4. GET /rangkings

Description:
- Get all rangking player from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
{
    "generated_at": "2022-01-26T18:50:38+00:00",
    "rankings": [
        {
            "type_id": 54,
            "name": "hsbc_men_singles_race_to_guangzhou_ranking",
            "year": 2022,
            "week": 5,
            "gender": "men",
            "competitor_rankings": [
                {
                    "rank": 1,
                    "points": 9940,
                    "competitor": {
                        "id": "sr:competitor:316271",
                        "name": "Nguyen, Nhat",
                        "country": "Ireland",
                        "country_code": "IRL",
                        "abbreviation": "NGU"
                    }
                },
                {
                    "rank": 2,
                    "points": 9550,
                    "competitor": {
                        "id": "sr:competitor:162674",
                        "name": "Claerbout, Lucas",
                        "country": "France",
                        "country_code": "FRA",
                        "abbreviation": "CLA"
                    }
                },
                ...,
            ]
        }
        ...,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 4. GET /rangkings/ms

Description:
- Get  rangking player man single from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
    {
        "country": "DEN",
        "member_id": "25831",
        "player": "Viktor AXELSEN",
        "points": 116779,
        "prev_rank": 1,
        "rank": 1,
        "rank_change": 0,
        "tournaments": 32
    },
    {
        "country": "JPN",
        "member_id": "89785",
        "player": "Kento MOMOTA",
        "points": 112210,
        "prev_rank": 2,
        "rank": 2,
        "rank_change": 0,
        "tournaments": 22
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 5. GET /rangkings/md

Description:
- Get  rangking player man double from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
     {
        "country": "INA/INA",
        "member_id1": "26394",
        "member_id2": "80057",
        "player1": "Marcus Fernaldi GIDEON",
        "player2": "Kevin Sanjaya SUKAMULJO",
        "points": 111827,
        "prev_rank": 1,
        "rank": 1,
        "rank_change": 0,
        "tournaments": 29
    },
    {
        "country": "INA/INA",
        "member_id1": "51074",
        "member_id2": "52749",
        "player1": "Hendra SETIAWAN",
        "player2": "Mohammad AHSAN",
        "points": 102330,
        "prev_rank": 2,
        "rank": 2,
        "rank_change": 0,
        "tournaments": 32
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 6. GET /rangkings/ws

Description:
- Get  rangking player woman single from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
     {
        "country": "TPE",
        "member_id": "61427",
        "player": "TAI Tzu Ying",
        "points": 108800,
        "prev_rank": 1,
        "rank": 1,
        "rank_change": 0,
        "tournaments": 19
    },
    {
        "country": "JPN",
        "member_id": "96312",
        "player": "Akane YAMAGUCHI",
        "points": 105149,
        "prev_rank": 2,
        "rank": 2,
        "rank_change": 0,
        "tournaments": 31
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 7. GET /rangkings/wd

Description:
- Get  rangking player woman double from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
     {
        "country": "CHN/CHN",
        "member_id1": "94125",
        "member_id2": "65144",
        "player1": "CHEN Qing Chen",
        "player2": "JIA Yi Fan",
        "points": 105758,
        "prev_rank": 1,
        "rank": 1,
        "rank_change": 0,
        "tournaments": 23
    },
    {
        "country": "KOR/KOR",
        "member_id1": "91292",
        "member_id2": "87473",
        "player1": "LEE Sohee",
        "player2": "SHIN Seungchan",
        "points": 102369,
        "prev_rank": 2,
        "rank": 2,
        "rank_change": 0,
        "tournaments": 29
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;

## 8. GET /rangkings/xd

Description:
- Get  rangking player mix double from database

Request:

- headers: 

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
     {
        "country": "THA/THA",
        "member_id1": "61731",
        "member_id2": "67158",
        "player1": "Dechapol PUAVARANUKROH",
        "player2": "Sapsiree TAERATTANACHAI",
        "points": 115400,
        "prev_rank": 1,
        "rank": 1,
        "rank_change": 0,
        "tournaments": 30
    },
    {
        "country": "CHN/CHN",
        "member_id1": "83046",
        "member_id2": "63168",
        "player1": "ZHENG Si Wei",
        "player2": "HUANG Ya Qiong",
        "points": 110802,
        "prev_rank": 2,
        "rank": 2,
        "rank_change": 0,
        "tournaments": 18
    },
    ....,
]
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Forbiden to Access"
}
```

&nbsp;




## Global Error

_Response (400 - Forbiden to Access)_
```json
{
  "message": "Forbiden To Access"
}
```


_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```