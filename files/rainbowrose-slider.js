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
        const levels = [
            { value: 20, label: "20"},
            { value: 40, label: "40"},
            { value: 50, label: "50"},
            { value: 60, label: "60"},
            { value: 70, label: "70"},
            { value: 80, label: "80"}
        ];
        
        for (let ascLevel of levels) {
            if (level >= ascLevel.value) {
                total += ascensionData[ascLevel.value];
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