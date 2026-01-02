function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
  
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copied!';
        button.classList.add('copied');
            
        setTimeout(() => {
            button.innerHTML = originalText;
            button.classList.remove('copied');
        }, 2000);
    });
}

// Scroll progress bar
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  
  document.querySelector('.scroll-progress-bar').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

//Smooth reveal animation on scroll
function revealElements() {
    const elements = document.querySelectorAll('.related-card');
  
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', revealElements);
revealElements(); // Check on load

// Enhanced copy button feedback
document.addEventListener('DOMContentLoaded', () => {
    const codeBlocks = document.querySelectorAll('.code-block');
      
    codeBlocks.forEach((block, index) => {
        block.style.animationDelay = (index * 0.1) + 's';
        block.classList.add('fade-in');
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        window.location.href = '/index.html';
    }
});