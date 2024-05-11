document.addEventListener("DOMContentLoaded", function() {

    function scrollToSection() {
        const section = document.getElementById('contact');

        section.scrollIntoView({ behavior: 'smooth' });
    }



    const videos = document.querySelectorAll("#video-slideshow video");
    let currentVideoIndex = 0;
    
    function playNextVideo() {
        videos[currentVideoIndex].pause();
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
        videos[currentVideoIndex].play();
    }
    
    videos[currentVideoIndex].play();
    
    videos[currentVideoIndex].addEventListener("ended", playNextVideo);

    function toggleCodingOptions(category) {
        var codingOptionsDiv = document.getElementById(`${category}-coding-options`);
        var isVisible = window.getComputedStyle(codingOptionsDiv).display !== 'none';
        var videoSlideshow = document.getElementById('video-slideshow');
        var servicesSection = document.getElementById('services');

        if (isVisible) {
            codingOptionsDiv.style.display = 'none';
            servicesSection.style.marginTop = '200px'; // Reset the margin top of services section
            videoSlideshow.style.marginTop = '400px';
        } else {
            var codingOptionsContent = '';

            switch (category) {
                case 'vehicle-performance':
                    codingOptionsContent = `
                        <ul>
                            <li>Disable start/stop</li>
                            <li>Lap Timer Activation</li>
                            <li>ECS off completely when you click button once</li>
                            <li>Oil temperature display</li>
                            <!-- Add more options related to Vehicle Performance -->
                        </ul>`;
                    break;
                case 'convenience-features':
                    codingOptionsContent = `
                        <ul>
                            <li>Coming home and Leaving home function</li>
                            <li>Comfort operation for Sunroof and Windows</li>
                            <li>Interior light fading</li>
                            <!-- Add more options related to Convenience Features -->
                        </ul>`;
                    break;
                case 'safety-enhancements':
                    codingOptionsContent = `
                        <ul>
                            <li>High intensity break lights</li>
                            <li>Seatbelt warning deactivation</li>
                            <li>Lock/Unlock confirmation via horn</li>
                            <!-- Add more options related to Safety Enhancements -->
                        </ul>`;
                    break;
            }

            codingOptionsDiv.innerHTML = codingOptionsContent;
            codingOptionsDiv.style.display = 'block';

            // Adjust the margin top of services section and video slideshow
            if (window.innerWidth <= 768) {
                servicesSection.style.marginTop = '400px';
                videoSlideshow.style.marginTop = '800px';
            } else if (window.innerWidth <= 576) {
                servicesSection.style.marginTop = '800px';
                videoSlideshow.style.marginTop = '1200px';
            }
        }
    }

    // JavaScript for automatic slideshow
    let slideIndex = 0;
    const services = document.querySelectorAll('.service');

    // Show the first service initially
    showService();

    // Function to display the current service
    function showService() {
        // Hide all services
        services.forEach(service => {
            service.classList.remove('active');
        });

        // Show the current service
        services[slideIndex].classList.add('active');

        // Move to the next service
        slideIndex++;
        if (slideIndex >= services.length) {
            slideIndex = 0;
        }

        // Change service every 3 seconds (3000 milliseconds)
        setTimeout(showService, 3000);
    }
});
