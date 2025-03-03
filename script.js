// Chatbot knowledge base
const chatbotResponses = {
    // Heart-related questions
    'heart attack symptoms': 'Common heart attack symptoms include chest pain/pressure, shortness of breath, pain in arms/jaw, nausea, and cold sweats. If you experience these symptoms, seek immediate medical attention.',
    'heart health tips': 'To maintain heart health: exercise regularly, eat a balanced diet, maintain healthy weight, avoid smoking, limit alcohol, manage stress, and get regular check-ups.',
    'blood pressure': 'Normal blood pressure is generally considered below 120/80 mmHg. High blood pressure can lead to heart disease and should be monitored regularly.',
    
    // Nonprofit information
    'about foundation': 'Heartline Foundation is a student-led nonprofit founded in 2025, dedicated to transforming cardiology through AI-driven innovation and making heart healthcare more accessible.',
    'mission': 'Our mission is to improve heart health through cutting-edge technology, research, and compassionate care, while making cardiac care more accessible to all.',
    'team': 'Our team is led by Mithun Gopinath (Founder) and Shubh Patel (Vice President), along with dedicated volunteers committed to improving heart health through innovation.',
    'contact': 'You can reach us through our Instagram @the_heartlinefoundation or email us directly.',
    
    // Default responses
    'default': "I'm here to help with questions about heart health and our foundation. Could you please rephrase your question?",
    'greeting': "Hello! I'm the Heartline AI Assistant. How can I help you today?",
};

// Function to find the best matching response
function findBestResponse(input) {
    input = input.toLowerCase();
    
    // Check for greetings
    if (input.match(/\b(hi|hello|hey|greetings)\b/)) {
        return chatbotResponses.greeting;
    }
    
    // Find the best matching topic
    let bestMatch = null;
    let highestScore = 0;
    
    for (let topic in chatbotResponses) {
        if (topic !== 'default' && topic !== 'greeting') {
            const score = calculateMatchScore(input, topic);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = topic;
            }
        }
    }
    
    return highestScore > 0.3 ? chatbotResponses[bestMatch] : chatbotResponses.default;
}

// Calculate match score between input and topic
function calculateMatchScore(input, topic) {
    const topicWords = topic.split(' ');
    let matchCount = 0;
    
    topicWords.forEach(word => {
        if (input.includes(word)) matchCount++;
    });
    
    return matchCount / topicWords.length;
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize chatbot UI
    const chatContainer = document.getElementById('chatbot-container');
    const toggleChat = document.getElementById('toggle-chat');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const sendButton = document.getElementById('send-message');
    
    // Toggle chat visibility
    toggleChat.addEventListener('click', () => {
        chatContainer.classList.toggle('collapsed');
        if (!chatContainer.classList.contains('collapsed')) {
            chatInput.focus();
        }
    });
    
    // Function to add message to chat
    function addMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'bot-message');
        messageDiv.textContent = message;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    // Handle sending messages
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message, true);
            chatInput.value = '';
            
            // Get bot response
            setTimeout(() => {
                const response = findBestResponse(message);
                addMessage(response);
            }, 500);
        }
    }
    
    // Send message on button click
    sendButton.addEventListener('click', sendMessage);
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });

    // Enhanced 3D card effects
    const cards = document.querySelectorAll('.solution-card, .research-card, .value-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * 10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = 'none';
            
            // Add glowing effect
            const glowX = (x / rect.width) * 100;
            const glowY = (y / rect.height) * 100;
            card.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.2), transparent)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'all 0.5s ease';
            card.style.background = 'white';
        });
    });

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.pre-animate').forEach(element => {
        observer.observe(element);
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.menu-btn')) {
            navLinks.classList.remove('active');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu after clicking a link
                navLinks.classList.remove('active');
            }
        });
    });

    // Scroll progress indicator
    const scrollProgress = document.querySelector('.scroll-progress');

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
    });

    // Add active class to nav links on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });

    // Navbar scroll effect with progress bar
    let lastScroll = 0;
    const navbar = document.querySelector('nav');
    
    // Create progress bar
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Update progress bar
        const scrolled = (currentScroll / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.style.width = `${scrolled}%`;
        
        // Navbar hide/show effect
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', () => {
        const scroll = window.pageYOffset;
        if (hero && heroContent) {
            hero.style.backgroundPositionY = `${scroll * 0.5}px`;
            heroContent.style.transform = `translateY(${scroll * 0.3}px)`;
            heroContent.style.opacity = 1 - (scroll * 0.003);
        }
    });

    // Animate hero text on load
    const heroText = document.querySelector('.hero h1');
    if (heroText) {
        heroText.style.opacity = '0';
        heroText.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroText.style.transition = 'all 1s ease';
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 500);
    }

    // Add hover effect to buttons
    document.querySelectorAll('.primary-btn, .secondary-btn').forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
});
