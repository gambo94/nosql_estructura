To avoid a growing array for storing the videos uploaded by a user, I've decided to store in the video the username of the uploader.

I've decided to create a collection for comments beacause if I were to put it into the video collection, the array would be very large and nested beacause we also
need to store who liked the comment(s) and the date. In the video collection I've created an array and referenced the comments there.