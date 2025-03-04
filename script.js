// Chatbot knowledge base
const chatbotResponses = {
    // Heart-related questions
    'heart_attack_symptoms': 'Common heart attack symptoms include chest pain/pressure, shortness of breath, pain in arms/jaw, nausea, and cold sweats. If you experience these symptoms, seek immediate medical attention.',
    'heart_health_tips': 'To maintain heart health: exercise regularly, eat a balanced diet, maintain healthy weight, avoid smoking, limit alcohol, manage stress, and get regular check-ups.',
    'blood_pressure': 'Normal blood pressure is generally considered below 120/80 mmHg. High blood pressure can lead to heart disease and should be monitored regularly.',
    
    // Nonprofit information
    'about_foundation': 'Heartline Foundation is a student-led nonprofit founded in 2025, dedicated to transforming cardiology through AI-driven innovation and making heart healthcare more accessible.',
    'mission': 'Our mission is to improve heart health through cutting-edge technology, research, and compassionate care, while making cardiac care more accessible to all.',
    'team': 'Our team is led by Mithun Gopinath (Founder) and Shubh Patel (Vice President), along with dedicated volunteers committed to improving heart health through innovation.',
    'contact': 'You can reach us through our Instagram @the_heartlinefoundation or email us directly.',
    
    // Default responses
    'default': "I'm here to help with questions about heart health and our foundation. Could you please rephrase your question?",
    'greeting': "Hello! I'm the Heartline AI Assistant. How can I help you today?"
};

// Function to find the best matching response
function findBestResponse(input) {
    input = input.toLowerCase();
    
    // Check for greetings
    if (input.match(/\b(hi|hello|hey|greetings)\b/)) {
        return chatbotResponses.greeting;
    }
    
    // Find the best matching topic
    let bestMatch = 'default';
    let highestScore = 0;
    
    Object.keys(chatbotResponses).forEach(topic => {
        if (topic !== 'default' && topic !== 'greeting') {
            const score = calculateMatchScore(input, topic);
            if (score > highestScore) {
                highestScore = score;
                bestMatch = topic;
            }
        }
    });
    
    return highestScore > 0.3 ? chatbotResponses[bestMatch] : chatbotResponses.default;
}

// Calculate match score between input and topic
function calculateMatchScore(input, topic) {
    const topicWords = topic.split('_');
    let matchCount = 0;
    
    topicWords.forEach(word => {
        if (input.includes(word)) matchCount++;
    });
    
    return matchCount / topicWords.length;
}

// Initialize Three.js Scene
let scene, camera, renderer;
let heart = null;

function initThree() {
    // Create scene
    scene = new THREE.Scene();
    
    // Set up camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Set up renderer
    const canvas = document.querySelector('#bg');
    renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    // Create a heart shape using basic geometry
    createHeartShape();
    
    // Start animation loop
    animate();
}

function createHeartShape() {
    // Create a heart shape using a torus and sphere geometry
    const heartMaterial = new THREE.MeshPhongMaterial({
        color: 0xff3d00,
        shininess: 100
    });
    
    // Create the main heart shape using a torus
    const torusGeometry = new THREE.TorusGeometry(1, 0.5, 16, 100);
    const torus = new THREE.Mesh(torusGeometry, heartMaterial);
    torus.rotation.x = Math.PI / 2;
    
    // Create spheres for the top curves
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphere1 = new THREE.Mesh(sphereGeometry, heartMaterial);
    const sphere2 = new THREE.Mesh(sphereGeometry, heartMaterial);
    
    sphere1.position.set(-0.5, 0.5, 0);
    sphere2.position.set(0.5, 0.5, 0);
    
    // Group all parts together
    heart = new THREE.Group();
    heart.add(torus);
    heart.add(sphere1);
    heart.add(sphere2);
    
    // Add to scene
    scene.add(heart);
    
    // Animate heart
    gsap.to(heart.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
    });
}

function animate() {
    requestAnimationFrame(animate);
    
    if (heart) {
        heart.rotation.y += 0.005;
    }
    
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeAnimations();
    initializeHealthcareLocator();
    initializeAIAssistant();
});

// Navigation functionality
function initializeNavigation() {
    const nav = document.querySelector('.nav-container');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Handle navigation background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(0, 0, 0, 0.95)';
        } else {
            nav.style.background = 'rgba(0, 0, 0, 0.8)';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                navLinks.classList.remove('active');
            }
        });
    });
}

// GSAP Animations
function initializeAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // Hero section animations
    gsap.from('.hero-content h1 span', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    gsap.from('.hero-content p', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out'
    });

    gsap.from('.cta-group button', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    // Animate solution cards
    gsap.utils.toArray('.solution-card').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

// Healthcare Locator
class HealthcareLocator {
    constructor() {
        this.map = null;
        this.markers = [];
        this.searchBtn = document.getElementById('search-btn');
        this.locationInput = document.getElementById('location-input');
        this.insuranceSelect = document.getElementById('insurance-select');
        this.specialtySelect = document.getElementById('specialty-select');
        this.resultsList = document.getElementById('results-list');
    }

    initialize() {
        this.initMap();
        this.setupEventListeners();
    }

    initMap() {
        this.map = L.map('map').setView([37.0902, -95.7129], 4);
        
        L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);
    }

    setupEventListeners() {
        this.searchBtn.addEventListener('click', () => this.searchLocations());
        this.locationInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchLocations();
        });
    }

    async searchLocations() {
        const location = this.locationInput.value;
        if (!location) {
            alert('Please enter a location');
            return;
        }

        try {
            const coordinates = await this.geocodeLocation(location);
            if (coordinates) {
                this.searchNearbyProviders(coordinates);
            }
        } catch (error) {
            console.error('Error searching locations:', error);
            alert('Error searching for locations. Please try again.');
        }
    }

    async geocodeLocation(location) {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`);
            const data = await response.json();
            
            if (data && data.length > 0) {
                return {
                    lat: parseFloat(data[0].lat),
                    lon: parseFloat(data[0].lon)
                };
            }
            throw new Error('Location not found');
        } catch (error) {
            console.error('Geocoding error:', error);
            throw error;
        }
    }

    searchNearbyProviders(coordinates) {
        this.clearResults();
        const providers = this.getMockProviders(coordinates);
        this.displayResults(providers);
    }

    getMockProviders(coordinates) {
        const providers = [];
        const numProviders = Math.floor(Math.random() * 5) + 5;
        
        const specialties = ['Cardiologist', 'Heart Surgeon', 'Vascular Specialist'];
        const hospitals = ['Heart Center', 'Medical Center', 'Cardiac Care'];
        
        for (let i = 0; i < numProviders; i++) {
            providers.push({
                name: `Dr. ${['Smith', 'Johnson', 'Williams', 'Brown', 'Davis'][Math.floor(Math.random() * 5)]}`,
                specialty: specialties[Math.floor(Math.random() * specialties.length)],
                hospital: `${['City', 'County', 'Regional'][Math.floor(Math.random() * 3)]} ${hospitals[Math.floor(Math.random() * hospitals.length)]}`,
                address: `${Math.floor(Math.random() * 1000)} Medical Center Dr`,
                distance: (Math.random() * 10).toFixed(1),
                rating: (Math.random() * 2 + 3).toFixed(1),
                lat: coordinates.lat + (Math.random() - 0.5) * 0.1,
                lon: coordinates.lon + (Math.random() - 0.5) * 0.1
            });
        }
        
        return providers;
    }

    displayResults(providers) {
        const bounds = [];
        
        providers.forEach(provider => {
            // Add marker to map
            const marker = L.marker([provider.lat, provider.lon])
                .bindPopup(this.createPopupContent(provider))
                .addTo(this.map);
            
            this.markers.push(marker);
            bounds.push([provider.lat, provider.lon]);
            
            // Create result card
            const card = document.createElement('div');
            card.className = 'provider-card';
            card.innerHTML = `
                <div class="provider-info">
                    <h3>${provider.name}</h3>
                    <p class="specialty">${provider.specialty}</p>
                    <p class="hospital">${provider.hospital}</p>
                    <p class="address">${provider.address}</p>
                    <p class="distance">${provider.distance} miles away</p>
                    <div class="rating">
                        ${this.createRatingStars(provider.rating)}
                        <span>${provider.rating}</span>
                    </div>
                </div>
                <div class="provider-actions">
                    <button class="book-btn" onclick="window.open('tel:+1234567890')">
                        <i class="fas fa-phone"></i>
                        Call Now
                    </button>
                    <button class="directions-btn" onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${provider.lat},${provider.lon}')">
                        <i class="fas fa-directions"></i>
                        Directions
                    </button>
                </div>
            `;
            
            card.addEventListener('click', () => {
                marker.openPopup();
                this.map.setView([provider.lat, provider.lon], 14);
            });
            
            this.resultsList.appendChild(card);
        });
        
        if (bounds.length > 0) {
            this.map.fitBounds(bounds);
        }
    }

    createRatingStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '';
        
        for (let i = 0; i < 5; i++) {
            if (i < fullStars) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i === fullStars && hasHalfStar) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        
        return stars;
    }

    createPopupContent(provider) {
        return `
            <div class="map-popup">
                <h3>${provider.name}</h3>
                <p>${provider.specialty}</p>
                <p>${provider.hospital}</p>
                <p>${provider.address}</p>
                <p>${provider.distance} miles away</p>
                <div class="popup-actions">
                    <button onclick="window.open('tel:+1234567890')">
                        <i class="fas fa-phone"></i>
                        Call
                    </button>
                    <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${provider.lat},${provider.lon}')">
                        <i class="fas fa-directions"></i>
                        Directions
                    </button>
                </div>
            </div>
        `;
    }

    clearResults() {
        this.markers.forEach(marker => this.map.removeLayer(marker));
        this.markers = [];
        this.resultsList.innerHTML = '';
    }
}

// AI Assistant
class AIHealthAssistant {
    constructor() {
        this.container = document.getElementById('ai-assistant');
        this.messages = document.getElementById('ai-messages');
        this.input = document.getElementById('ai-input');
        this.sendBtn = document.getElementById('ai-send');
    }

    initialize() {
        this.setupEventListeners();
        this.addWelcomeMessage();
    }

    setupEventListeners() {
        this.sendBtn.addEventListener('click', () => this.handleUserInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });

        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });

        // Quick actions
        document.querySelectorAll('.quick-actions button').forEach(btn => {
            btn.addEventListener('click', () => this.handleQuickAction(btn.dataset.action));
        });

        // Minimize/Close buttons
        document.querySelector('.minimize-btn').addEventListener('click', () => {
            this.container.classList.toggle('minimized');
        });

        document.querySelector('.close-btn').addEventListener('click', () => {
            this.container.classList.add('hidden');
        });
    }

    addWelcomeMessage() {
        this.addMessage("Hello! I'm your AI Health Assistant. How can I help you today?", 'bot');
    }

    switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        
        document.querySelectorAll('.tab-pane').forEach(pane => {
            pane.classList.toggle('active', pane.id === `${tabId}-tab`);
        });
    }

    handleUserInput() {
        const message = this.input.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.input.value = '';
        
        if (this.isEmergency(message)) {
            this.handleEmergency();
        } else {
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }
    }

    isEmergency(message) {
        const emergencyKeywords = [
            'emergency',
            'heart attack',
            'chest pain',
            'difficulty breathing',
            'severe pain',
            'unconscious',
            'stroke',
            'help'
        ];
        
        return emergencyKeywords.some(keyword => 
            message.toLowerCase().includes(keyword)
        );
    }

    handleEmergency() {
        const response = `
            🚨 This seems like an emergency situation. Please:
            
            1. Call emergency services (911) immediately
            2. Stay calm and seated
            3. If available, take aspirin
            4. Unlock your door for emergency responders
            5. Keep talking to me while help arrives
            
            Would you like me to:
            • Call 911 for you
            • Guide you through basic first aid
            • Contact your emergency contact
        `;
        
        this.addMessage(response, 'bot', true);
    }

    generateResponse(message) {
        const responses = {
            'symptoms': 'Please describe your symptoms in detail. I can help assess their severity.',
            'prevention': 'Heart disease prevention includes: regular exercise, healthy diet, stress management, and regular check-ups.',
            'diet': 'A heart-healthy diet includes: fruits, vegetables, whole grains, lean proteins, and limited saturated fats.',
            'exercise': 'Aim for 150 minutes of moderate exercise or 75 minutes of vigorous exercise per week.',
            'stress': 'Stress management techniques include meditation, deep breathing exercises, regular exercise, and adequate sleep.',
            'medication': 'Always take medications as prescribed by your doctor. Let me know if you have specific questions about your medications.',
            'checkup': 'Regular check-ups are essential. I can help you find a cardiologist in your area.',
            'risk': 'Key risk factors include: high blood pressure, high cholesterol, smoking, obesity, and family history.'
        };
        
        for (const [key, value] of Object.entries(responses)) {
            if (message.toLowerCase().includes(key)) {
                return value;
            }
        }
        
        return "I understand you're asking about heart health. Could you please be more specific about what you'd like to know?";
    }

    handleQuickAction(action) {
        const actions = {
            'checkup': "Let's check your heart health. What symptoms or concerns do you have?",
            'find-doctor': 'I can help you find a cardiologist. Please share your location or ZIP code.',
            'heart-info': `Here are key heart health tips:
                1. Maintain a healthy diet
                2. Exercise regularly
                3. Manage stress
                4. Get regular check-ups
                5. Know your numbers (BP, cholesterol)
                
                What would you like to learn more about?`
        };
        
        this.addMessage(actions[action] || actions['heart-info'], 'bot');
    }

    addMessage(text, sender, isEmergency = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}${isEmergency ? ' emergency' : ''}`;
        messageDiv.innerHTML = text.replace(/\n/g, '<br>');
        
        this.messages.appendChild(messageDiv);
        this.messages.scrollTop = this.messages.scrollHeight;
        
        if (sender === 'bot') {
            gsap.from(messageDiv, {
                opacity: 0,
                y: 20,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    }
}

// Initialize Healthcare Locator
function initializeHealthcareLocator() {
    const healthcareLocator = new HealthcareLocator();
    healthcareLocator.initialize();
}

// Initialize AI Assistant
function initializeAIAssistant() {
    const aiAssistant = new AIHealthAssistant();
    aiAssistant.initialize();
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

