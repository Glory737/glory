// Glory Makeup Studio - JavaScript
// Vanilla JS for interactive elements

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Testimonials Slider
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.dot');

    if (testimonials.length > 0 && dots.length > 0) {
        let currentSlide = 0;

        function showSlide(index) {
            testimonials.forEach(testimonial => testimonial.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            testimonials[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        // Auto slide
        function autoSlide() {
            currentSlide = (currentSlide + 1) % testimonials.length;
            showSlide(currentSlide);
        }

        let slideInterval = setInterval(autoSlide, 5000);

        // Dot navigation
        dots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showSlide(index);
                clearInterval(slideInterval);
                slideInterval = setInterval(autoSlide, 5000);
            });
        });

        // Initial slide
        showSlide(0);
    }

    // Gallery Filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterButtons.length > 0 && galleryItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');

                const filterValue = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form validation enhancement
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ff6b6b';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });

            if (!isValid) {
                e.preventDefault();
                alert('Please fill in all required fields.');
            }
        });
    });

    // Lazy loading for images (basic implementation)
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    // WhatsApp booking pre-fill (if on booking page)
    const serviceSelect = document.getElementById('service');
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    if (serviceSelect && whatsappLinks.length > 0) {
        serviceSelect.addEventListener('change', function() {
            const selectedService = this.options[this.selectedIndex].text;
            whatsappLinks.forEach(link => {
                const baseUrl = link.href.split('?')[0];
                link.href = `${baseUrl}?text=Hi%20Glory,%20I%20would%20like%20to%20book%20a%20${encodeURIComponent(selectedService.toLowerCase())}%20session`;
            });
        });
    }

    // Set active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // WhatsApp Booking Function
    window.sendWhatsAppBooking = function(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Build WhatsApp message
        let message = "🧴 *GLORY MAKEUP STUDIO - BOOKING REQUEST* 🧴\n\n";

        message += "👤 *Name:* " + (formData.get('name') || 'Not provided') + "\n";
        message += "📞 *Phone:* " + (formData.get('phone') || 'Not provided') + "\n";
        message += "📧 *Email:* " + (formData.get('email') || 'Not provided') + "\n";
        message += "💄 *Service:* " + (formData.get('service') || 'Not specified') + "\n";
        message += "📅 *Date:* " + (formData.get('date') || 'Not specified') + "\n";
        message += "⏰ *Time:* " + (formData.get('time') || 'Not specified') + "\n";
        message += "📍 *Location:* " + (formData.get('location') || 'Not specified') + "\n";

        if (formData.get('requirements')) {
            message += "\n💡 *Special Requirements:*\n" + formData.get('requirements') + "\n";
        }

        if (formData.get('hear-about')) {
            message += "\n📢 *How they heard about us:* " + formData.get('hear-about') + "\n";
        }

        message += "\n✅ *Please confirm availability and pricing.*\n";
        message += "📱 *Contact:* +91 70651 36300";

        // Encode message for WhatsApp URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/917065136300?text=${encodedMessage}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');

        // Show success message
        alert('Opening WhatsApp with your booking details. Please send the message to complete your booking request!');

        return false;
    };

    // Email Contact Function
    window.sendEmailContact = function(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        // Build email content
        const subject = encodeURIComponent("Glory Makeup Studio - " + (formData.get('subject') || 'Contact Inquiry'));
        const body = encodeURIComponent(
            "Hello Glory Makeup Studio,\n\n" +
            "Name: " + (formData.get('name') || 'Not provided') + "\n" +
            "Email: " + (formData.get('email') || 'Not provided') + "\n" +
            "Phone: " + (formData.get('phone') || 'Not provided') + "\n\n" +
            "Message:\n" + (formData.get('message') || 'No message provided') + "\n\n" +
            "Best regards,\n" + (formData.get('name') || 'Customer')
        );

        // Create mailto link
        const mailtoUrl = `mailto:awasthigarima70@gmail.com?subject=${subject}&body=${body}`;

        // Open email client
        window.location.href = mailtoUrl;

        // Show success message
        alert('Opening your email client with the message. Please send the email to complete your inquiry!');

        return false;
    };
});