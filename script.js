const locations = {
    library: {
        title: 'Library',
        description: 'The library is a quiet space where you can study or do research. It has a large collection of books, academic journals, and study rooms for group work or individual study.'
    },
    diningHall: {
        title: 'Dining Hall',
        description: 'The dining hall offers a range of meal options, including vegetarian and vegan choices. It’s a great place to grab a meal with friends or get a quick bite between classes.'
    },
    dorms: {
        title: 'Dorms',
        description: 'The dorms provide comfortable living spaces for students. Each room comes with basic furnishings, and there are common areas where students can relax and socialize. Check out the different dorms based on your intended major, interests, and more!'
    },
    athletics: {
        title: 'Athletics',
        description: 'Our athletics facilities include modern gyms, swimming pools, and fields for various sports. Whether you’re into team sports or personal fitness, there’s something for everyone.'
    },
    facilities: {
        title: 'Facilities',
        description: 'The campus offers a range of facilities including a state-of-the-art gym, an arts and crafts center, and a mental health support center. These resources help students stay active, creative, and mentally healthy.'
    },
    offCampusFood: {
        title: 'Off Campus Food',
        description: "Explore a wide range of dining options just off-campus. From popular local eateries to cozy cafes, you’ll find great spots for when you want a break from the dining hall."
    },
    offCampusLife: {
        title: 'Off Campus Life',
        description: "Discover exciting places near campus where students hang out. Whether you’re interested in hiking trails, vibrant nightlife, or local shops, there are plenty of spots to explore and enjoy outside of campus."
    }
};


const overallRating = {
    food: '⭐️ ⭐️ ⭐️ ⭐️ ',
    campus: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️ ',
    academics: '⭐️ ⭐️ ⭐️ ⭐️ ⭐️' ,
    athletics: '⭐️ ⭐️ ⭐️ ',
    greekLife: '⭐️ ⭐️ ⭐️ ⭐️ '
};

function showLocation(locationKey) {
    const location = locations[locationKey];
    document.getElementById('location-title').innerText = location.title;
    document.getElementById('location-description').innerText = location.description;

    // Hide the ratings section
    document.getElementById('ratings').classList.add('hidden');

    // Show the virtual tour button
    document.getElementById('virtual-tour-btn').classList.remove('hidden');
    document.getElementById('virtual-tour-btn').setAttribute('data-location', locationKey);
}

function showOverallRating() {
    document.getElementById('location-title').innerText = 'Overall College Rating';
    document.getElementById('location-description').innerText = ''; // Clear description

    // Show the ratings section
    document.getElementById('ratings').classList.remove('hidden');

    // Update ratings
    document.getElementById('rating-food').innerText = 'Food: ' + overallRating.food;
    document.getElementById('rating-campus').innerText = 'Campus: ' + overallRating.campus;
    document.getElementById('rating-academics').innerText = 'Academics: ' + overallRating.academics;
    document.getElementById('rating-athletics').innerText = 'Athletics: ' + overallRating.athletics;
    document.getElementById('rating-greekLife').innerText = 'Greek Life: ' + overallRating.greekLife;


}

function startVirtualTour() {
    const locationKey = document.getElementById('virtual-tour-btn').getAttribute('data-location');
    if (locationKey) {
        alert('Starting virtual tour for ' + locations[locationKey].title);
    } else {
        alert('No location selected for the virtual tour.');
    }
}

function toggleChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
}

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.innerText = message;
        document.getElementById('messages').appendChild(messageDiv);
        input.value = '';
        document.getElementById('messages').scrollTop = document.getElementById('messages').scrollHeight; // Scroll to the bottom
    }
}

function searchColleges() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        alert('Searching for colleges related to: ' + query);
        //functionality to actually perform the searchs
    } else {
        alert('Please enter a search term.');
    }
}
