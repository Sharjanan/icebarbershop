// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world


$w.onReady(async function () { 
    const placeId = "ChIJYbjPFkIRyUwRK1ev6YoThrg"; // Replace with your Google Place ID
      

    try {
        const reviews = await getGoogleReviews(placeId);
        const formattedReviews = reviews.map(review => ({
            name: review.author_name,
            rating: review.rating,
            text: review.text,
            time: new Date(review.time * 1000).toLocaleDateString()
        }));

        $w("#repeater7").data = formattedReviews; // Bind data to the repeater
    } catch (error) {
        console.error('Error fetching Google Reviews:', error);
        $w("#errorMessage").text = "Unable to load reviews at this time. Please try again later.";
    }
});