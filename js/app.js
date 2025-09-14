// Utility function to get query parameters
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Utility function for safe text encoding
function safeEncode(text) {
    return encodeURIComponent(text);
}

// Utility function for safe text decoding
function safeDecode(text) {
    try {
        return decodeURIComponent(text);
    } catch {
        return text;
    }
}

// Index page functionality
if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
    document.addEventListener('DOMContentLoaded', () => {
        const queryForm = document.getElementById('queryForm');
        const queryInput = document.getElementById('queryInput');
        const exampleButtons = document.querySelectorAll('.example-btn');
        
        // Handle form submission
        if (queryForm) {
            queryForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = queryInput.value.trim();
                if (query) {
                    window.location.href = `generate.html?q=${safeEncode(query)}`;
                }
            });
        }
        
        // Handle example buttons
        exampleButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.getAttribute('data-query');
                if (queryInput) {
                    queryInput.value = query;
                    queryInput.focus();
                }
            });
        });
        
        // Dynamic placeholder
        if (queryInput) {
            queryInput.addEventListener('focus', () => {
                queryInput.placeholder = "What would you ask ChatGPT?";
            });
            
            queryInput.addEventListener('blur', () => {
                queryInput.placeholder = "Enter your question...";
            });
        }
    });
}

// Generate page functionality
if (window.location.pathname.endsWith('generate.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        const query = getQueryParam('q');
        
        if (!query) {
            window.location.href = 'index.html';
            return;
        }
        
        const decodedQuery = safeDecode(query);
        const shareLink = `${window.location.origin}/s.html?q=${query}`;
        
        // Display elements
        const queryDisplay = document.getElementById('queryDisplay');
        const linkInput = document.getElementById('linkInput');
        const copyBtn = document.getElementById('copyBtn');
        const previewBtn = document.getElementById('previewBtn');
        const newQueryBtn = document.getElementById('newQueryBtn');
        
        // Social share buttons
        const shareTwitter = document.getElementById('shareTwitter');
        const shareReddit = document.getElementById('shareReddit');
        const shareEmail = document.getElementById('shareEmail');
        
        // Set up the display
        if (queryDisplay) {
            queryDisplay.textContent = `"${decodedQuery}"`;
        }
        
        if (linkInput) {
            linkInput.value = shareLink;
        }
        
        // Copy functionality
        if (copyBtn) {
            copyBtn.addEventListener('click', async () => {
                const copyText = document.querySelector('.copy-text');
                const copiedText = document.querySelector('.copied-text');
                
                try {
                    await navigator.clipboard.writeText(shareLink);
                    showCopiedFeedback(copyText, copiedText);
                } catch (err) {
                    // Fallback for older browsers
                    linkInput.select();
                    document.execCommand('copy') // Note: deprecated but still needed as fallback;
                    showCopiedFeedback(copyText, copiedText);
                }
            });
        }
        
        function showCopiedFeedback(copyText, copiedText) {
            if (copyText && copiedText) {
                copyText.style.display = 'none';
                copiedText.style.display = 'inline';
                
                setTimeout(() => {
                    copyText.style.display = 'inline';
                    copiedText.style.display = 'none';
                }, 2000);
            }
        }
        
        // Preview button
        if (previewBtn) {
            previewBtn.addEventListener('click', () => {
                window.open(shareLink, '_blank');
            });
        }
        
        // New query button
        if (newQueryBtn) {
            newQueryBtn.addEventListener('click', () => {
                window.location.href = 'index.html';
            });
        }
        
        // Social sharing
        if (shareTwitter) {
            shareTwitter.addEventListener('click', () => {
                const text = `Someone asked me "${decodedQuery}" so I made them a LMGPTTFY link:`;
                const url = `https://twitter.com/intent/tweet?text=${safeEncode(text)}&url=${safeEncode(shareLink)}`;
                window.open(url, '_blank');
            });
        }
        
        if (shareReddit) {
            shareReddit.addEventListener('click', () => {
                const title = `LMGPTTFY: ${decodedQuery}`;
                const url = `https://www.reddit.com/submit?url=${safeEncode(shareLink)}&title=${safeEncode(title)}`;
                window.open(url, '_blank');
            });
        }
        
        if (shareEmail) {
            shareEmail.addEventListener('click', () => {
                const subject = 'Let Me GPT That For You';
                const body = `Someone thought you might find this helpful:\n\n${shareLink}\n\nIt shows you how to search for: "${decodedQuery}"`;
                window.location.href = `mailto:?subject=${safeEncode(subject)}&body=${safeEncode(body)}`;
            });
        }
    });
}

// Search animation page functionality
if (window.location.pathname.endsWith('s.html')) {
    // Sarcastic message variations
    const sarcasticMessages = [
        {
            line1: " I've done the hard part for you...",
            line2: "All you need to do is press:",
            line3: "Think you can handle that? "
        },
        {
            line1: " I've typed everything out...",
            line2: "Your mission, should you choose to accept it:",
            line3: "Press this one key! "
        },
        {
            line1: " 99% complete!",
            line2: "Remaining task:",
            line3: "One. Single. Keystroke. "
        },
        {
            line1: " So close to your answer...",
            line2: "The only thing standing in your way:",
            line3: "The tyranny of the Enter key! "
        },
        {
            line1: " I've brought you to water...",
            line2: "But I can't make you:",
            line3: "Press Enter after the redirect! "
        },
        {
            line1: " I've exercised my fingers...",
            line2: "Now it's your turn to exercise:",
            line3: "Just one finger! "
        },
        {
            line1: " Achievement almost unlocked!",
            line2: "Final boss:",
            line3: "The Enter key awaits! "
        }
    ];
    
    document.addEventListener('DOMContentLoaded', () => {
        const query = getQueryParam('q');
        
        if (!query) {
            window.location.href = 'index.html';
            return;
        }
        
        const decodedQuery = safeDecode(query);
        
        // Animation elements
        const typedTextSpan = document.getElementById('typedText');
        const cursor = document.getElementById('cursor');
        const instructionPhase = document.getElementById('instructionPhase');
        
        // Animation settings
        let charIndex = 0;
        const typingDelay = 60;
        
        // Select random sarcastic message
        const randomMessage = sarcasticMessages[Math.floor(Math.random() * sarcasticMessages.length)];
        
        function updateStep(stepNum) {
            document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
            const stepElement = document.getElementById(`step${stepNum}`);
            if (stepElement) {
                stepElement.classList.add('active');
            }
        }
        
        function typeWriter() {
            if (charIndex < decodedQuery.length) {
                typedTextSpan.textContent += decodedQuery.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, typingDelay);
            } else {
                // Typing complete
                updateStep(2);
                setTimeout(() => {
                    if (cursor) cursor.style.display = 'none';
                    showInstructions();
                }, 500);
            }
        }
        
        function showInstructions() {
            if (instructionPhase) {
                // Update instruction text with random message
                instructionPhase.innerHTML = `
                    <p class="sarcasm-text">${randomMessage.line1}</p>
                    <p class="sarcasm-text">${randomMessage.line2}</p>
                    <div class="enter-key">&crarr; ENTER</div>
                    <p class="sarcasm-text">${randomMessage.line3}</p>
                    <p class="countdown">Redirecting in <span id="countdown">5</span> seconds...</p>
                `;
                instructionPhase.style.display = 'block';
                
                startCountdown();
            }
        }
        
        function startCountdown() {
            updateStep(3);
            let count = 5;
            const countdownEl = document.getElementById('countdown');
            
            const interval = setInterval(() => {
                count--;
                if (countdownEl) {
                    countdownEl.textContent = count.toString();
                }
                
                if (count <= 0) {
                    clearInterval(interval);
                    if (countdownEl && countdownEl.parentElement) {
                        countdownEl.parentElement.innerHTML = 'Redirecting now... ';
                    }
                    
                    // Redirect to ChatGPT
                    setTimeout(() => {
                        window.location.href = `https://chatgpt.com/?hints=search&prompt=${safeEncode(decodedQuery)}`;
                    }, 500);
                }
            }, 1000);
        }
        
        // Start the animation
        setTimeout(() => {
            updateStep(1);
            typeWriter();
        }, 500);
    });
}

// 404
if (window.location.pathname.endsWith('404.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        // Check if this is a redirect from an old URL format
        const params = new URLSearchParams(window.location.search);
        const query = params.get('query') || params.get('q');
        
        if (query) {
            // Redirect old format to new format
            window.location.href = `/s.html?q=${safeEncode(query)}`;
            return;
        }
        
        // Easter egg: Make the error query clickable
        setTimeout(() => {
            const errorQuery = document.querySelector('.error-query');
            if (errorQuery) {
                errorQuery.style.cursor = 'pointer';
                errorQuery.title = 'Click to generate this link!';
                
                errorQuery.addEventListener('click', () => {
                    const query = safeEncode("How to find a page that doesn't exist?");
                    window.location.href = `/generate.html?q=${query}`;
                });
            }
        }, 1000);
    });
}

// PWA Support (optional - for future enhancement)
if ('serviceWorker' in navigator && window.location.hostname !== 'localhost') {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {
            // Service worker registration failed, app still works
        });
    });
}

// Analytics placeholder (commented out - uncomment if using analytics)
/*
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
}
*/

// Keyboard shortcuts (optional enhancement)
document.addEventListener('keydown', (e) => {
    // Press 'N' to go to new query from any page
    if (e.key === 'n' && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const activeElement = document.activeElement;
        const isInputField = activeElement && (activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA');
        
        if (!isInputField) {
            window.location.href = '/';
        }
    }
});

// Console Easter Egg
console.log('%c Let Me GPT That For You ', 'background: #00e676; color: #000; font-size: 24px; padding: 10px;');
console.log('%c For all those people who find it more convenient to ask you instead of AI 🙄', 'font-size: 14px; color: #00e676;');
console.log('%c Want to contribute? https://github.com/bpsai/lmgpttfy-web', 'font-size: 12px; color: #888;');