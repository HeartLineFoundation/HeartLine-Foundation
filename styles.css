:root {
    --primary-color: #1a1a1a;
    --secondary-color: #ffffff;
    --accent-color: #ff3d00;
    --text-color: #333333;
    --text-light: #666666;
    --background: #ffffff;
    --background-alt: #f8f9fa;
    --spacing-unit: 8px;
    --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    --container-width: 1200px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--text-color);
    line-height: 1.6;
    overflow-x: hidden;
    background-color: var(--background);
}

/* Navigation */
nav {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(255, 255, 255, 0.98);
    padding: calc(var(--spacing-unit) * 2) 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    transition: var(--transition);
}

.logo a {
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary-color);
    letter-spacing: -0.5px;
}

.logo img {
    height: 40px;
    width: auto;
}

.text-heart {
    color: var(--primary-red);
}

.text-line {
    color: var(--primary-blue);
}

.nav-links {
    display: flex;
    gap: calc(var(--spacing-unit) * 4);
    align-items: center;
}

.nav-links a {
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: var(--transition);
}

.nav-links a:hover {
    color: var(--accent-color);
}

.contact-btn {
    background: var(--primary-color);
    color: var(--secondary-color) !important;
    padding: calc(var(--spacing-unit) * 1.5) calc(var(--spacing-unit) * 3);
    border-radius: 2px;
}

.contact-btn:hover {
    background: var(--accent-color);
    transform: translateY(-2px);
}

/* Hero Section */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;
    background: var(--background);
    overflow: hidden;
    color: var(--secondary-color);
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-content {
    max-width: var(--container-width);
    margin: 0 auto;
    position: relative;
    z-index: 2;
}

.hero-logo {
    position: absolute;
    top: 50%;
    right: 10%;
    transform: translateY(-50%);
    width: 300px;
    height: auto;
    opacity: 0.8;
    animation: float 20s infinite;
    z-index: 1;
}

.hero h1 {
    font-size: 4.5rem;
    line-height: 1.1;
    margin-bottom: calc(var(--spacing-unit) * 4);
    font-weight: 700;
    letter-spacing: -1px;
}

.hero h1 span {
    display: block;
}

.hero h1 .highlight {
    color: var(--accent-color);
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: calc(var(--spacing-unit) * 6);
    color: var(--text-light);
    max-width: 600px;
}

.hero-shapes {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}

.shape {
    position: absolute;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-blue), var(--primary-red));
    opacity: 0.1;
    animation: float 20s infinite;
}

.shape-1 {
    width: 300px;
    height: 300px;
    top: -150px;
    right: -150px;
}

.shape-2 {
    width: 200px;
    height: 200px;
    bottom: 50%;
    right: 10%;
    animation-delay: -5s;
}

.shape-3 {
    width: 150px;
    height: 150px;
    bottom: -75px;
    right: 35%;
    animation-delay: -10s;
}

@keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-25px, 25px) rotate(5deg); }
    50% { transform: translate(25px, -25px) rotate(-5deg); }
    75% { transform: translate(-25px, -25px) rotate(5deg); }
}

/* Buttons */
.cta-buttons {
    display: flex;
    gap: calc(var(--spacing-unit) * 3);
}

.primary-btn, .secondary-btn {
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 4);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;
    letter-spacing: 0.5px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    border: none;
    cursor: pointer;
}

.primary-btn {
    background: var(--primary-color);
    color: var(--secondary-color);
}

.secondary-btn {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
}

.primary-btn:hover {
    background: var(--accent-color);
}

.secondary-btn:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
}

/* Sections */
section {
    padding: calc(var(--spacing-unit) * 12) 5%;
    position: relative;
}

h2 {
    font-size: 3rem;
    margin-bottom: calc(var(--spacing-unit) * 3);
    text-align: left;
    font-weight: 700;
    letter-spacing: -0.5px;
}

.section-subtitle {
    text-align: left;
    color: var(--text-light);
    margin-bottom: calc(var(--spacing-unit) * 8);
    font-size: 1.25rem;
    max-width: 600px;
}

/* About Section */
.about {
    background: #f8f9fa;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.about-text {
    margin-bottom: 2rem;
}

.goal-section {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: var(--card-shadow);
}

.goal-section h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-red);
    margin-bottom: 1rem;
}

/* Solutions Grid */
.solutions-grid, .research-grid, .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: calc(var(--spacing-unit) * 4);
    margin-top: calc(var(--spacing-unit) * 6);
}

.solution-card, .research-card, .value-card {
    background: var(--background);
    padding: calc(var(--spacing-unit) * 4);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    position: relative;
}

.solution-card:hover, .research-card:hover, .value-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-color);
}

.solution-icon, .value-card .icon {
    font-size: 2rem;
    color: var(--accent-color);
    margin-bottom: calc(var(--spacing-unit) * 3);
}

.solution-card h3, .research-card h3, .value-card h3 {
    font-size: 1.5rem;
    margin-bottom: calc(var(--spacing-unit) * 2);
    font-weight: 600;
    letter-spacing: -0.5px;
}

.solution-card p, .research-card p, .value-card p {
    color: var(--text-light);
    margin-bottom: calc(var(--spacing-unit) * 2);
}

/* Research Cards */
.research-card {
    background: var(--background);
    padding: calc(var(--spacing-unit) * 4);
    border: 1px solid rgba(0, 0, 0, 0.1);
}

.research-card ul {
    list-style: none;
    margin-top: calc(var(--spacing-unit) * 2);
}

.research-card ul li {
    margin-bottom: calc(var(--spacing-unit) * 2);
    padding-left: calc(var(--spacing-unit) * 3);
    position: relative;
    color: var(--text-light);
}

.research-card ul li:before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--accent-color);
}

/* Contact Section */
.contact {
    background: var(--background-alt);
}

.contact-container {
    max-width: var(--container-width);
    margin: 0 auto;
}

.social-links {
    display: flex;
    gap: calc(var(--spacing-unit) * 3);
    margin-top: calc(var(--spacing-unit) * 6);
}

.social-link {
    display: flex;
    align-items: center;
    gap: calc(var(--spacing-unit) * 2);
    text-decoration: none;
    color: var(--text-color);
    font-weight: 500;
    padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
    border: 1px solid rgba(0, 0, 0, 0.1);
    transition: var(--transition);
}

.social-link:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
    border-color: var(--primary-color);
}

/* Footer */
footer {
    background: var(--primary-color);
    color: var(--secondary-color);
    padding: calc(var(--spacing-unit) * 8) 5% calc(var(--spacing-unit) * 4);
}

.footer-content {
    max-width: var(--container-width);
    margin: 0 auto;
}

.footer-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: calc(var(--spacing-unit) * 8);
    margin-bottom: calc(var(--spacing-unit) * 6);
}

.footer-brand p {
    color: rgba(255, 255, 255, 0.7);
    margin-top: calc(var(--spacing-unit) * 2);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: calc(var(--spacing-unit) * 4);
}

.link-group h3 {
    font-size: 1rem;
    margin-bottom: calc(var(--spacing-unit) * 3);
    color: var(--secondary-color);
    text-transform: uppercase;
    letter-spacing: 1px;
}

.link-group a {
    display: block;
    text-decoration: none;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: calc(var(--spacing-unit) * 2);
    transition: var(--transition);
}

.link-group a:hover {
    color: var(--accent-color);
}

.footer-bottom {
    padding-top: calc(var(--spacing-unit) * 4);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
}

/* Animations */
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideIn {
    from {
        transform: translateX(-100px);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

.pre-animate {
    opacity: 0;
    transform: translateY(20px);
}

.reveal {
    animation: fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.reveal-delay-1 {
    animation-delay: 0.2s;
}

.reveal-delay-2 {
    animation-delay: 0.4s;
}

.reveal-delay-3 {
    animation-delay: 0.6s;
}

/* Scroll Progress Bar */
.scroll-progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 0.1s ease;
    z-index: 1001;
}

/* Mobile Menu */
.menu-btn {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}

@media (max-width: 768px) {
    .menu-btn {
        display: block;
    }

    .nav-links {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: var(--background);
        padding: calc(var(--spacing-unit) * 2);
        flex-direction: column;
        align-items: flex-start;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    .nav-links.active {
        display: flex;
    }

    .hero h1 {
        font-size: 3rem;
    }

    .hero p {
        font-size: 1.1rem;
    }

    .cta-buttons {
        flex-direction: column;
    }

    .solutions-grid, .research-grid, .values-grid {
        grid-template-columns: 1fr;
    }

    .footer-main {
        grid-template-columns: 1fr;
        gap: calc(var(--spacing-unit) * 4);
    }

    .team-profiles {
        grid-template-columns: 1fr;
    }
}

/* 3D Transform Effects */
.solution-card, .research-card, .value-card {
    transform-style: preserve-3d;
    perspective: 1000px;
}

.solution-card:hover, .research-card:hover, .value-card:hover {
    transform: translateY(-10px) rotateX(5deg) rotateY(5deg);
}

/* Team Section */
.team-profiles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: calc(var(--spacing-unit) * 4);
    margin-top: calc(var(--spacing-unit) * 6);
}

.profile {
    text-align: center;
}

.profile-pic {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 2px;
    margin-bottom: calc(var(--spacing-unit) * 3);
}

.profile h3 {
    font-size: 1.5rem;
    margin-bottom: calc(var(--spacing-unit));
    font-weight: 600;
    letter-spacing: -0.5px;
}

.profile p {
    color: var(--text-light);
    font-size: 1rem;
}

/* Chatbot Styles */
.chatbot-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 350px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
}

.chatbot-container.collapsed {
    height: 60px;
    overflow: hidden;
}

.chatbot-container.collapsed .chat-body {
    display: none;
}

.chat-header {
    background: var(--primary-blue);
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.chat-header h3 {
    margin: 0;
    font-size: 1rem;
}

.toggle-chat {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
}

.chat-body {
    height: 400px;
    display: flex;
    flex-direction: column;
}

.chat-messages {
    flex-grow: 1;
    padding: 15px;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 10px;
    max-width: 80%;
}

.user-message {
    background: #e3f2fd;
    margin-left: auto;
}

.bot-message {
    background: #f5f5f5;
    margin-right: auto;
}

.chat-input-container {
    display: flex;
    padding: 15px;
    border-top: 1px solid #eee;
}

#chat-input {
    flex-grow: 1;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 20px;
    margin-right: 10px;
}

#send-message {
    background: var(--primary-blue);
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: var(--transition);
}

#send-message:hover {
    transform: scale(1.1);
}

/* Smooth Scrolling */
html {
    scroll-behavior: smooth;
}

/* 3D Canvas Container */
#canvas-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: -1;
    background: linear-gradient(45deg, #000510, #001529);
}

.hero-3d-model {
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    height: 80%;
    z-index: 1;
}

/* 3D Card Effects */
.solution-card, .research-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transform-style: preserve-3d;
    perspective: 1000px;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.solution-card:hover, .research-card:hover {
    transform: translateY(-10px) rotateX(10deg) rotateY(10deg);
    border-color: var(--accent-color);
    box-shadow: 
        0 5px 15px rgba(0, 0, 0, 0.2),
        0 0 30px rgba(255, 61, 0, 0.2);
}

.solution-card::before, .research-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        45deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
    );
    transform: translateZ(-10px);
}

/* AI Assistant Styles */
.ai-assistant {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 380px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    z-index: 1000;
    transform-origin: bottom right;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.ai-assistant.collapsed {
    transform: scale(0.3);
    opacity: 0.8;
}

.ai-assistant-header {
    background: var(--primary-color);
    color: var(--secondary-color);
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.ai-assistant-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
}

.toggle-ai {
    background: none;
    border: none;
    color: var(--secondary-color);
    cursor: pointer;
    font-size: 1.2rem;
    transition: transform 0.3s ease;
}

.toggle-ai:hover {
    transform: scale(1.1);
}

.ai-assistant-body {
    height: 500px;
    display: flex;
    flex-direction: column;
}

.messages {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.message {
    max-width: 80%;
    padding: 12px 16px;
    border-radius: 15px;
    font-size: 0.95rem;
    line-height: 1.4;
    animation: messageSlide 0.3s ease forwards;
}

.message.user {
    background: var(--primary-color);
    color: var(--secondary-color);
    margin-left: auto;
    border-bottom-right-radius: 5px;
}

.message.bot {
    background: #f0f0f0;
    color: var(--text-color);
    margin-right: auto;
    border-bottom-left-radius: 5px;
}

.input-container {
    padding: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    gap: 10px;
}

.input-container input {
    flex-grow: 1;
    padding: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.input-container input:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px rgba(255, 61, 0, 0.1);
}

.input-container .send {
    background: var(--accent-color);
    color: white;
    border: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.input-container .send:hover {
    transform: scale(1.1);
    background: var(--primary-color);
}

.features {
    padding: 15px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
}

.feature-btn {
    background: #f0f0f0;
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    font-size: 0.8rem;
}

.feature-btn i {
    font-size: 1.2rem;
    color: var(--accent-color);
}

.feature-btn:hover {
    background: var(--primary-color);
    color: var(--secondary-color);
}

.feature-btn:hover i {
    color: var(--secondary-color);
}

@keyframes messageSlide {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 3D Parallax Effect */
.parallax-wrapper {
    transform-style: preserve-3d;
    perspective: 1000px;
}

.parallax-layer {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
}
