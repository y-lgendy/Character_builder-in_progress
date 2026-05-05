document.addEventListener('DOMContentLoaded', function() {
    const slider = document.getElementById('level-slider');
    const targetLevel = document.getElementById('target-level');
    const roseCount = document.getElementById('rose-count');
    
    // 1. Move levels to the top so both functions can use it
    const levels = [
        { value: 20, label: "20"},
        { value: 40, label: "40"},
        { value: 50, label: "50"},
        { value: 60, label: "60"},
        { value: 70, label: "70"},
        { value: 80, label: "80"}
    ];

    const ascensionData = {
        20: 3, 40: 10, 50: 20, 60: 30, 70: 45, 80: 60
    };
    
    function calculateRoses(level) {
        let total = 0;
        for (let ascLevel of levels) {
            if (level >= ascLevel.value) { // Access .value correctly
                total += ascensionData[ascLevel.value];
            } else {
                break;
            }
        }
        return total;
    }
    
    function updateDisplay() {
        const val = parseInt(slider.value);
        
        // 2. HARD SNAP: Force the slider to the nearest milestone[cite: 5]
        const snapped = levels.reduce((prev, curr) => {
            return (Math.abs(curr.value - val) < Math.abs(prev.value - val) ? curr : prev);
        });

        // Update the slider and text to the snapped value
        slider.value = snapped.value;
        targetLevel.textContent = snapped.label;
        
        // 3. DYNAMIC FILL: Update the orange bar color
        const min = 20; // Your min level
        const max = 80; // Your max level
        const percentage = ((snapped.value - min) / (max - min)) * 100;
        slider.style.background = `linear-gradient(to right, #ff9500 ${percentage}%, #4a4a4a ${percentage}%)`;

        const roses = calculateRoses(snapped.value);
        roseCount.textContent = roses;
        
        // Animation
        roseCount.style.transform = 'scale(1.2)';
        setTimeout(() => { roseCount.style.transform = 'scale(1)'; }, 200);
    }
    
    slider.addEventListener('input', updateDisplay);
    roseCount.style.transition = 'transform 0.2s ease';
    
    // Run once on load to set initial state
    updateDisplay();
});