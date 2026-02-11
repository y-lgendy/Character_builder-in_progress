document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('level-slider');
    const currentLevel = document.getElementById('current-level');
    const targetLevel = document.getElementById('target-level');
    const roseCount = document.getElementById('rose-count');
    
    // Ascension breakpoints and roses needed
    const ascensionData = {
        20: 3,
        40: 10,
        50: 20,
        60: 30,
        70: 45,
        80: 60
    };
    
    function calculateRoses(level) {
        let total = 0;
        const levels = [20, 40, 50, 60, 70, 80];
        
        for (let ascLevel of levels) {
            if (level >= ascLevel) {
                total += ascensionData[ascLevel];
            } else {
                break;
            }
        }
        
        return total;
    }
    
    function updateDisplay() {
        const level = parseInt(slider.value);
        targetLevel.textContent = level;
        
        const roses = calculateRoses(level);
        roseCount.textContent = roses;
        
        // Add animation effect
        roseCount.style.transform = 'scale(1.2)';
        setTimeout(() => {
            roseCount.style.transform = 'scale(1)';
        }, 200);
    }
    
    slider.addEventListener('input', updateDisplay);
    
    // Add transition for smooth scaling
    roseCount.style.transition = 'transform 0.2s ease';
});