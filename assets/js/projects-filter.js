// Project filtering functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter);
        });
    });
    
    function filterProjects(filter) {
        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                // Show project
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.display = 'block';
                }, 10);
            } else {
                // Hide project
                item.classList.add('hidden');
                setTimeout(() => {
                    if (item.classList.contains('hidden')) {
                        item.style.display = 'none';
                    }
                }, 500);
            }
        });
        
        // Update project count
        updateProjectCount(filter);
    }
    
    function updateProjectCount(filter) {
        let visibleCount = 0;
        
        projectItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
                visibleCount++;
            }
        });
        
        // You can add a project counter display here if needed
        console.log(`Showing ${visibleCount} projects`);
    }
    
    // Initialize with all projects visible
    filterProjects('all');
});

// Add smooth scrolling to project section when filter is clicked
function scrollToProjects() {
    const projectsSection = document.getElementById('highlights');
    if (projectsSection) {
        projectsSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Enhanced project card interactions
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add hover effect for tech badges
        const techBadges = card.querySelectorAll('.tech-badge');
        
        techBadges.forEach(badge => {
            badge.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.1) rotate(2deg)';
            });
            
            badge.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1) rotate(0deg)';
            });
        });
        
        // Add click analytics (you can integrate with Google Analytics here)
        const projectLinks = card.querySelectorAll('a');
        projectLinks.forEach(link => {
            link.addEventListener('click', function() {
                const projectTitle = card.querySelector('h3').textContent;
                console.log(`Project clicked: ${projectTitle}`);
                // Add your analytics tracking code here
            });
        });
    });
});

// Add loading animation for project cards
function animateProjectCards() {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', animateProjectCards);