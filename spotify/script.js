db = db.getSiblingDB('spotify');
db.dropDatabase();

db.user.insertOne({
    user_id: 001,
    username: 'gogetasjj4',
    email: 'gogeta@sj.jp',
    password: 'bigbangkame',
    user_details: {
        gender: 'male',
        date_of_birth:  new Date('1994-04-15'),
        country: 'Japan',
        zipcode: '2932'
    },
    subscription: {
        type: 'Premium',
        start_date: new Date('2021-01-12'),
        renewal_date: new Date('2021-'),
        payment_method: 'Credit card',
        card_number: 2984298290,
        expire_date: '21/3',
        security_code: 123
    },
    payments: [
        {
            payment_id: 0001,
            payment_date: new Date ('2020-01-12'),
            price: 20,
        },
        {
            payment_id: 0002,
            payment_date: new Date ('2021-01-12'),
            price: 20
        }
    ],
    playlists: [
        {
            playlist_id: 500,
            playlist_owner_id: 001,
            title: 'Best of 90',
            n_of_songs: 3,
            pl_creation_date: new Date('2021-01-30'),
            status: 'Active',
            shared: 'Yes',
            songs: [
                {
                    track_id: 4,
                    id_user_who_added: 001,
                    added_data: new Date(),
                },
                {
                    track_id: 31,
                    id_user_who_added: 002,
                    added_data: new Date(),
                },
                {
                    track_id: 32,
                    id_user_who_added: 001,
                    added_data: new Date(),
                },
            ]
        },
        {
            playlist_id: 502,
            playlist_owner_id: 001,
            title: 'Best of 80',
            n_of_songs: 1,
            pl_creation_date: new Date('2021-01-30'),
            status: 'Active',
            shared: 'Yes',
            songs: [
                {
                    track_id: 1,
                    id_user_who_added: 002,
                    added_data: new Date(),
                }
            ]
        }
    ],
    favourite_songs: [1, 3],
    favourite_albums: [900],
    followed_artists: ['LZ01']

})

db.user.insertOne({
    user_id: 002,
    username: 'vegito',
    email: 'vegito@ssjgod.jp',
    password: 'finalkame',
    user_details: {
        gender: 'male',
        date_of_birth:  new Date('1995-04-15'),
        country: 'Japan',
        zipcode: '293452'
    },
    subscription: {
        type: 'Free',
    },
    playlists: [
        {
            playlist_id: 0101,
            playlist_owner_id: 002,
            title: 'Rainy day',
            n_of_songs: 2,
            pl_creation_date: new Date('2021-01-30'),
            status: 'Active',
            shared: 'No',
            songs: [
                {
                    track_id: 33,
                    id_user_who_added: 002,
                    added_data: new Date(),
                },
                {
                    track_id: 32,
                    id_user_who_added: 002,
                    added_data: new Date(),
                }
            ]
        },
        {
            playlist_id: 0102,
            playlist_owner_id: 002,
            title: 'Sunny day',
            n_of_songs: 1,
            pl_creation_date: new Date('2021-01-30'),
            status: 'Deleted',
            shared: 'No',
            deletion_date: new Date(),
            songs: [
                {
                    track_id: 54,
                    id_user_who_added: 002,
                    added_data: new Date(),
                }
            ]
        }
    ],
    favourite_songs: [53, 51],
    favourite_albums: [1234, 905],
    followed_artists: ['GNR01', 'LZ01']
})


db.artist.insertOne({
    artist_id: 'LZ01',
    artist_name: 'Led Zeppelin',
    artist_img: 'url_of_the_img',
    albums: [
        {
            album_id: 900,
            album_title: 'Led Zepellin III',
            year: 1987,
            album_cover: 'urlOfTheCover',
            songs: [
                {
                    track_id: 1,
                    track_title: 'Stairway to Heaven',
                    duration: '00:06:23',
                    streams: 12121,
                },
                {
                    track_id: 2,
                    track_title: 'Whole lotta love',
                    duration: '00:03:23',
                    streams: 1481155,
                },
                {
                    track_id: 3,
                    track_title: 'Communication Breakdown',
                    duration: '00:02:23',
                    streams: 897,
                },
                {
                    track_id: 4,
                    track_title: 'Black dog',
                    duration: '00:04:59',
                    streams: 4848984,
                }
            ]
        },
        {
            album_id: 905,
            album_title: 'Led Zepellin (Deluxe Edition)',
            year: 1969,
            album_cover: 'urlOfTheCover',
            songs: [
                {
                    track_id: 30,
                    track_title: "Babe I'm gonna leave you",
                    duration: '00:06:00',
                    streams: 987845,
                },
                {
                    track_id: 31,
                    track_title: 'Dazed and confused',
                    duration: '00:03:48',
                    streams: 8652,
                },
                {
                    track_id: 32,
                    track_title: 'Good times bad times',
                    duration: '00:05:23',
                    streams: 5642158,
                },
                {
                    track_id: 33,
                    track_title: 'You shook me',
                    duration: '00:03:19',
                    streams: 4848984,
                }
            ]
        },
    ]
})

db.artist.insertOne({
    artist_id: 'GNR01',
    artist_name: "Guns n' Roses",
    artist_img: 'url_of_the_img',
    albums: [
        {
            album_id: 1234,
            album_title: 'Appetite for destruction',
            year: 1987,
            album_cover: 'urlOfTheCover',
            songs: [
                {
                    track_id: 50,
                    track_title: 'Paradise City',
                    duration: '00:06:23',
                    streams: 12127451,
                },
                {
                    track_id: 51,
                    track_title: 'Nightrain',
                    duration: '00:03:23',
                    streams: 1481155,
                },
                {
                    track_id: 52,
                    track_title: 'My Michelle',
                    duration: '00:04:23',
                    streams: 894557,
                },
                {
                    track_id: 54,
                    track_title: 'Welcome to the jungle',
                    duration: '00:04:39',
                    streams: 4848984,
                }
            ]
        },
        {
            album_id: 905,
            album_title: 'Use Your illusion',
            year: 1991,
            album_cover: 'urlOfTheCover',
            songs: [
                {
                    track_id: 80,
                    track_title: "Dont cry",
                    duration: '00:05:00',
                    streams: 987415,
                },
                {
                    track_id: 81,
                    track_title: 'November rain',
                    duration: '00:08:48',
                    streams: 8652,
                }
            ]
        }
    ]
})

