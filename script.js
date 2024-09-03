function calculateDaysSince(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function updateWidget() {
    const startDate = document.getElementById('startDateInput').value;
    const eventDescription = document.getElementById('eventInput').value;
    
    if (startDate && eventDescription) {
        const daysSince = calculateDaysSince(startDate);
        document.getElementById('errorMessage').textContent = ' ';
        document.getElementById('daysSince').textContent = `${daysSince} days`;
        document.getElementById('event').textContent = `since ${eventDescription}`;
    } else {
        document.getElementById('errorMessage').textContent = 'Please provide a start date and event description.';
        setTimeout(() => {
            document.getElementById('errorMessage').textContent = ' ';
        }, 5000);
    }
}

function copyLink() {
    const widgetLink = document.getElementById('widgetLink');
    widgetLink.select();
    widgetLink.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    
    // Optional: Show a message to indicate the link was copied
     document.getElementById('errorMessage').textContent = 'Widget link copied to clipboard!';
}

document.getElementById('updateButton').addEventListener('click', updateWidget);
document.getElementById('copyLinkButton').addEventListener('click', copyLink);