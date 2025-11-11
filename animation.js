    // animation.js
    const asciiFrames = [
    'o
    ,
    'O
    ,
    '0
    ,
    'c j
    ,
    '_ _
    ,
    '   
    ];

    const container = document.getElementById('ascii-container');
    let currentFrame = 0;

    function animateAscii() {
        container.textContent = asciiFrames[currentFrame];
        currentFrame = (currentFrame + 1) % asciiFrames.length;
    }

    // anim speed (ms)
    setInterval(animateAscii, 200);
