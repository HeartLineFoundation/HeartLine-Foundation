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

function initializeAnimations() {
    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate hero section
    gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate cards on scroll
    gsap.utils.toArray('.card-3d').forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom-=100',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out'
        });
    });
}

function initializeHealthcareLocator() {
    const healthcareLocator = new HealthcareLocator();
    healthcareLocator.initialize();
}

function initializeAIAssistant() {
    const aiAssistant = new AIHealthAssistant();
    aiAssistant.initialize();
}

// Navigation
const nav = document.querySelector('.nav-container');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Handle navigation background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(10, 12, 16, 0.95)';
    } else {
        nav.style.background = 'rgba(10, 12, 16, 0.8)';
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
            navLinks.classList.remove('active');
        }
    });
});

// Healthcare Location Search
class HealthcareLocator {
    constructor() {
        this.map = null;
        this.markers = [];
        this.searchBtn = document.getElementById('search-btn');
        this.locationInput = document.getElementById('location-input');
        this.insuranceSelect = document.getElementById('insurance-select');
        this.specialtySelect = document.getElementById('specialty-select');
        this.resultsList = document.getElementById('results-list');
        
        this.initMap();
        this.setupEventListeners();
    }
    
    initMap() {
        // Initialize Leaflet map
        this.map = L.map('map').setView([37.0902, -95.7129], 4);
        
        // Add dark theme tile layer
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
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
        const insurance = this.insuranceSelect.value;
        const specialty = this.specialtySelect.value;
        
        if (!location) {
            alert('Please enter a location');
            return;
        }
        
        try {
            const coordinates = await this.geocodeLocation(location);
            if (coordinates) {
                this.searchNearbyProviders(coordinates.lat, coordinates.lon, insurance, specialty);
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
    
    searchNearbyProviders(lat, lon, insurance, specialty) {
        // Clear previous results
        this.clearResults();
        
        // Simulate API call to healthcare provider database
        const mockProviders = this.getMockProviders(lat, lon, insurance, specialty);
        this.displayResults(mockProviders);
    }
    
    getMockProviders(lat, lon, insurance, specialty) {
        // Simulate nearby providers
        const providers = [];
        const numProviders = Math.floor(Math.random() * 5) + 5;
        
        for (let i = 0; i < numProviders; i++) {
            const provider = {
                name: `Dr. ${['Smith', 'Johnson', 'Williams', 'Brown', 'Jones'][Math.floor(Math.random() * 5)]}`,
                specialty: specialty || 'Cardiology',
                address: `${Math.floor(Math.random() * 1000)} Medical Center Dr`,
                distance: (Math.random() * 10).toFixed(1),
                rating: (Math.random() * 2 + 3).toFixed(1),
                insurance: insurance || 'Most insurances accepted',
                lat: lat + (Math.random() - 0.5) * 0.1,
                lon: lon + (Math.random() - 0.5) * 0.1
            };
            providers.push(provider);
        }
        
        return providers;
    }
    
    displayResults(providers) {
        this.clearResults();
        const bounds = [];
        
        providers.forEach((provider, index) => {
            // Add marker to map
            const marker = L.marker([provider.lat, provider.lon])
                .bindPopup(this.createPopupContent(provider))
                .addTo(this.map);
            
            this.markers.push(marker);
            bounds.push([provider.lat, provider.lon]);
            
            // Create result card
            const resultCard = document.createElement('div');
            resultCard.className = 'result-card';
            resultCard.innerHTML = `
                <h3>${provider.name}</h3>
                <p class="specialty">${provider.specialty}</p>
                <p class="address">${provider.address}</p>
                <p class="distance">${provider.distance} miles away</p>
                <div class="rating">
                    <span class="stars">${'★'.repeat(Math.floor(provider.rating))}${provider.rating % 1 >= 0.5 ? '½' : ''}</span>
                    <span class="rating-number">${provider.rating}</span>
                </div>
                <p class="insurance">${provider.insurance}</p>
                <button class="book-btn">Book Appointment</button>
            `;
            
            // Add click event to card
            resultCard.addEventListener('click', () => {
                marker.openPopup();
                this.map.setView([provider.lat, provider.lon], 14);
            });
            
            this.resultsList.appendChild(resultCard);
        });
        
        // Fit map to bounds if there are results
        if (bounds.length > 0) {
            this.map.fitBounds(bounds);
        }
    }
    
    createPopupContent(provider) {
        return `
            <div class="info-window">
                <h3>${provider.name}</h3>
                <p>${provider.specialty}</p>
                <p>${provider.address}</p>
                <p>${provider.distance} miles away</p>
                <button onclick="window.open('tel:+1234567890')">Call Now</button>
            </div>
        `;
    }
    
    clearResults() {
        // Clear markers
        this.markers.forEach(marker => this.map.removeLayer(marker));
        this.markers = [];
        
        // Clear result list
        this.resultsList.innerHTML = '';
    }
}

// AI Health Assistant
class AIHealthAssistant {
    constructor() {
        this.container = document.getElementById('ai-assistant');
        this.messages = document.getElementById('ai-messages');
        this.input = document.getElementById('ai-input');
        this.sendBtn = document.getElementById('ai-send');
        this.minimizeBtn = document.querySelector('.minimize-btn');
        this.closeBtn = document.querySelector('.close-btn');
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.tabPanes = document.querySelectorAll('.tab-pane');
        
        this.setupEventListeners();
        this.initializeAI();
    }
    
    setupEventListeners() {
        this.sendBtn.addEventListener('click', () => this.handleUserInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
        
        this.minimizeBtn.addEventListener('click', () => {
            this.container.classList.toggle('minimized');
        });
        
        this.closeBtn.addEventListener('click', () => {
            this.container.classList.add('hidden');
        });
        
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', () => this.switchTab(btn.dataset.tab));
        });
        
        document.querySelectorAll('.quick-actions button').forEach(btn => {
            btn.addEventListener('click', () => this.handleQuickAction(btn.dataset.action));
        });
    }
    
    async initializeAI() {
        try {
            // Load TensorFlow.js model
            this.model = await tf.loadLayersModel('path/to/your/model.json');
            this.addMessage('Hello! I'm your AI Health Assistant. How can I help you today?', 'bot');
        } catch (error) {
            console.error('Error loading AI model:', error);
            this.addMessage('AI Assistant is ready to help you with general health information.', 'bot');
        }
    }
    
    switchTab(tabId) {
        this.tabBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tabId);
        });
        
        this.tabPanes.forEach(pane => {
            pane.classList.toggle('active', pane.id === `${tabId}-tab`);
        });
    }
    
    async handleUserInput() {
        const message = this.input.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.input.value = '';
        
        if (this.isEmergency(message)) {
            this.handleEmergency();
            return;
        }
        
        const response = await this.generateResponse(message);
        this.addMessage(response, 'bot');
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
            'help',
        ];
        return emergencyKeywords.some(keyword => message.toLowerCase().includes(keyword));
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
    
    async generateResponse(message) {
        // In production, this would use the loaded TensorFlow.js model
        // For now, using pattern matching
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
        
        return 'I understand you're asking about heart health. Could you please be more specific about what you'd like to know?';
    }
    
    handleQuickAction(action) {
        const actions = {
            'checkup': 'Let's check your heart health. What symptoms or concerns do you have?',
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
            messageDiv.style.opacity = '0';
            messageDiv.style.transform = 'translateY(20px)';
            setTimeout(() => {
                messageDiv.style.opacity = '1';
                messageDiv.style.transform = 'translateY(0)';
            }, 100);
        }
    }
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
