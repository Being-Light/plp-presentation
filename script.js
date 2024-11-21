document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a[href^="/instagram"], a[href^="/facebook"], a[href^="/youtube"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            const socialMedia = link.href.split('/')[1]; // Extracts 'instagram', 'facebook', or 'youtube'
            fetch(`/track-click?social=${socialMedia}`)
                .then(response => console.log(`Click tracked for ${socialMedia}`))
                .catch(error => console.error("Tracking failed", error));
        });
    });
});
