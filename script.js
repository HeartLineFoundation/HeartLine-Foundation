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

// AI Health Assistant
class AIHealthAssistant {
    constructor() {
        this.container = document.querySelector('.ai-assistant');
        this.messagesContainer = this.container.querySelector('.messages');
        this.input = this.container.querySelector('input');
        this.sendButton = this.container.querySelector('.send');
        this.toggleButton = this.container.querySelector('.toggle-ai');
        
        this.setupEventListeners();
        this.addMessage("Hello! How can I help you with heart health today?", 'bot');
    }
    
    setupEventListeners() {
        this.sendButton.addEventListener('click', () => this.handleUserInput());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleUserInput();
        });
        this.toggleButton.addEventListener('click', () => this.toggleAssistant());
        
        document.querySelectorAll('.quick-actions button').forEach(button => {
            button.addEventListener('click', () => this.handleQuickAction(button.dataset.action));
        });
    }
    
    handleUserInput() {
        const message = this.input.value.trim();
        if (!message) return;
        
        this.addMessage(message, 'user');
        this.input.value = '';
        
        if (this.isEmergency(message)) {
            this.handleEmergency();
            return;
        }
        
        const response = findBestResponse(message);
        this.addMessage(response, 'bot');
    }
    
    isEmergency(message) {
        const emergencyKeywords = ['emergency', 'help', 'pain', 'chest pain', 'heart attack', 'difficulty breathing'];
        return emergencyKeywords.some(keyword => message.toLowerCase().includes(keyword));
    }
    
    handleEmergency() {
        const response = "This seems like an emergency situation. Please:\n" +
            "1. Call emergency services immediately (911)\n" +
            "2. Stay calm and seated\n" +
            "3. If available, take aspirin\n" +
            "4. Unlock your door for emergency responders\n" +
            "5. Keep talking to me while help arrives";
        
        this.addMessage(response, 'bot', true);
    }
    
    handleQuickAction(action) {
        const responses = {
            'checkup': "Let's check your heart health. What symptoms or concerns do you have?",
            'emergency': "If you're experiencing a medical emergency, please call 911 immediately. What symptoms are you having?",
            'tips': "Here are some key heart health tips:\n" +
                   "1. Exercise regularly\n" +
                   "2. Maintain a healthy diet\n" +
                   "3. Monitor blood pressure\n" +
                   "4. Get regular check-ups\n" +
                   "5. Manage stress levels"
        };
        
        this.addMessage(responses[action] || responses.tips, 'bot');
    }
    
    addMessage(text, sender, isEmergency = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender);
        if (isEmergency) messageDiv.classList.add('emergency');
        messageDiv.textContent = text;
        
        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }
    
    toggleAssistant() {
        this.container.classList.toggle('collapsed');
    }
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initThree();
    const aiAssistant = new AIHealthAssistant();
    
    // Initialize 3D card effects
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
});

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});
