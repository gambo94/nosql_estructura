db = db.getSiblingDB('youtube');
db.dropDatabase();

db.users.insertOne({
    username_user: 'ErenY', // it is a unique value
    email: 'ereny@aot.es',
    pwd: '123456eren',
    user_details: {
            date_of_birth: new Date('1994-04-15'),
            gender: 'M',
            country: 'Japan',
            zipcode: '23432'
    },
    user_channel: {
            channel_name: 'Eren Yeager',
            channel_creation_date: new Date(),
            description: 'hajsghs',
            users_subscribed: ['MikasaA', 'ArminA'],
            subscribed_channels: ['MikasaA']
    },
    videos_liked: [
        {
            video_id: '',
            liked_date: new Date()
        }
    ],
    videos_disliked: [
        {
            video_id: '',
            disliked_date: new Date()
        }
    ],
    playlists: [
        {
            playlist_id: 01,
            playlist_name: "Eren's playlist",
            playlist_videos: [],
            playlist_creation_date: new Date(),
            status: 'Public'
        }
    ]
})

db.users.insertOne({
    username_user: 'MikasaA',  
    email: 'mikasaa@aot.es',
    pwd: '123456mikasa',
    user_details: {
            date_of_birth: new Date('1994-05-05'),
            gender: 'F',
            country: 'Japan',
            zipcode: '88754'
    },
    user_channel: {
            channel_name: 'Mikasa Ackerman',
            channel_creation_date: new Date(),
            description: 'shgajsghsaj',
            users_subscribed: ['ErenY'],
            subscribed_channels: ['ErenY']
    },
    videos_liked: [
        {
            video_id: '12345',
            liked_date: new Date()
        }
    ],
    videos_disliked: [
        {
            video_id: '678910',
            disliked_date: new Date()
        }
    ],
    playlists: [
        {
            playlist_id: 02,
            playlist_name: "Favorite AoT moments",
            playlist_videos: [],
            playlist_creation_date: new Date(),
            status: 'Public'
        }
    ]
})

db.users.insertOne({
    username_user: 'ArminA',  
    email: 'armina@aot.es',
    pwd: '123456armin',
    user_details: {
            date_of_birth: new Date('1995-04-20'),
            gender: 'M',
            country: 'Japan',
            zipcode: '78952'
    },
    user_channel: {
            channel_name: 'Armin Arlert',
            channel_creation_date: new Date(),
            description: 'isususksj',
            users_subscribed: ['ErenY', 'MikasaA'],
            subscribed_channels: ['ErenY']
    },
    videos_liked: [
        {
            video_id: '12345',
            liked_date: new Date()
        },
        {
            video_id: '678910',
            liked_date: new Date()
        },
    ]
})

db.videos.insertOne({
    video_id: 12345,
    uploader_user: 'ErenY',
    title: 'Eren eats Warhammer',
    description: 'shasjgasjghaa',
    views: 11242,
    likes: 12,
    dislikes: 3,
    upload_date : new Date(),
    tags: ['anime', 'fight'],
    video_details: {
        file_dimension: '14mb',
        file_name: 'ereneats.mp4',
        duration: '00:03:25',
        status: 'Public'
    },
    comments: [0001]

})

db.videos.insertOne({
    video_id: 678910,
    uploader_user: 'ErenY',
    title: 'Eren controls funding titan',
    description: 'jkkdhsjsja',
    views: 100000,
    likes: 546,
    dislikes: 65,
    upload_date : new Date(),
    tags: ['anime', 'fight', 'action'],
    video_details: {
        file_dimension: '25mb',
        file_name: 'control.mp4',
        duration: '00:05:05',
        status: 'Public'
    },
    comments: [0045]
})

db.videos.insertOne({
    video_id: 678910,
    uploader_user: 'ArminA',
    title: 'My colossal transformation',
    description: 'jsjsjsieieijtjsjsgjahgsjhsj',
    views: 1007840,
    likes: 236,
    dislikes: 4,
    upload_date : new Date(),
    tags: ['anime', 'MAPPA', 'action', 'transformation'],
    video_details: {
        file_dimension: '10mb',
        file_name: 'tran.mp4',
        duration: '00:00:41',
        status: 'Public'
    },
    comments: [0055]
})

db.comments.insertOne({
    comment_id: 0001,
    author: 'MikasaA',  
    comment_date: new Date(),
    text: 'cool video!',
    likes: [
        {
            username: 'ErenY', 
            like_comment_date: new Date(),
        }
    ],
    dislikes: [
        {
            username: 'ArminA',
            dislike_comment_date: new Date()
        }
    ]
})

db.comments.insertOne({
    comment_id: 0045,
    author: 'MikasaA',  
    comment_date: new Date(),
    text: 'this video sucks!',
    likes: [
        {
            username: 'ArminA', 
            like_comment_date: new Date(),
        }
    ],
    dislikes: [
        {
            username: 'ErenY',
            dislike_comment_date: new Date()
        }
    ]
})

db.comments.insertOne({
    comment_id: 0055,
    author: 'MikasaA',  
    comment_date: new Date(),
    text: 'woaaaaah UwU',
    likes: [
        {
            username: 'ArminA', 
            like_comment_date: new Date(),
        },
        {
            username: 'ErenY', 
            like_comment_date: new Date(),
        },
    ]
})