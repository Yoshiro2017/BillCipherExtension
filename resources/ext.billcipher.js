window.makeBillCipherDeal = function() {
    // 1. Mandatory warning popup
    alert("REALITY IS AN ILLUSION, THE UNIVERSE IS A HOLOGRAM, BUY GOLD, BYE!");

    // 2. Inject cinematic styles for earthquakes, flickering, and text typing
    if ( !document.getElementById( 'bill-cinematic-styles' ) ) {
        const style = document.createElement( 'style' );
        style.id = 'bill-cinematic-styles';
        style.innerHTML = `
            @keyframes billGentleShake {
                0% { transform: translate(1px, 1px) rotate(0deg); }
                50% { transform: translate(-2px, 1px) rotate(-0.5deg); }
                100% { transform: translate(1px, 1px) rotate(0deg); }
            }
            @keyframes billViolentEarthquake {
                0% { transform: translate(5px, 5px) rotate(2deg) scale(1.01); }
                20% { transform: translate(-6px, -4px) rotate(-2deg) scale(0.99); }
                40% { transform: translate(-5px, 6px) rotate(1.5deg) scale(1.02); }
                60% { transform: translate(6px, -3px) rotate(-1.5deg) scale(0.98); }
                80% { transform: translate(-4px, -5px) rotate(2deg) scale(1.01); }
                100% { transform: translate(5px, 5px) rotate(0deg) scale(1); }
            }
            @keyframes screenFlicker {
                0% { opacity: 1; filter: brightness(1); }
                20% { opacity: 0.2; filter: brightness(0.2); }
                40% { opacity: 0.9; filter: brightness(1.2); }
                60% { opacity: 0.1; filter: brightness(0.1); }
                80% { opacity: 0.8; filter: brightness(0.8); }
                100% { opacity: 0; filter: brightness(0); }
            }
            .shake-gentle {
                animation: billGentleShake 0.3s infinite ease-in-out !important;
            }
            .shake-violent {
                animation: billViolentEarthquake 0.12s infinite ease-in-out !important;
            }
            .flickering-out {
                animation: screenFlicker 1.5s linear forwards !important;
            }
            .darkness-screen {
                background-color: #000000 !important;
                color: #ffffff !important;
                width: 100vw;
                height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 999999;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                margin: 0;
                font-family: monospace;
            }
            .fade-in-prompt {
                opacity: 0;
                animation: fadeInText 2s ease forwards;
            }
            @keyframes fadeInText {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .giant-bye-text {
                font-size: 5vw;
                font-weight: 900;
                color: #ffeb3b;
                text-align: center;
                text-shadow: 3px 3px #000;
                margin: 0;
                padding: 20px;
                font-family: sans-serif;
                animation: fadeInBox 2s ease forwards;
            }
            .pure-vanilla-box-dark {
                background: #111111;
                border: 4px solid #f57f17;
                border-radius: 16px;
                padding: 40px;
                box-shadow: 0 0 40px rgba(245, 127, 23, 0.4);
                max-width: 480px;
                text-align: center;
                animation: fadeInBox 2s ease forwards;
            }
            @keyframes fadeInBox {
                from { opacity: 0; transform: scale(0.8); }
                to { opacity: 1; transform: scale(1); }
            }
            .pure-vanilla-btn {
                background-color: #fbc02d;
                color: #000000;
                border: 2px solid #f57f17;
                padding: 14px 28px;
                font-size: 18px;
                font-weight: bold;
                border-radius: 8px;
                cursor: pointer;
                margin-top: 24px;
                transition: background 0.2s, transform 0.1s;
            }
            .pure-vanilla-btn:hover {
                background-color: #f9a825;
                transform: scale(1.05);
            }
        `;
        document.head.appendChild( style );
    }

    // 3. Initiate gentle earthquake shake
    document.body.classList.add( 'shake-gentle' );

    // --- PHASE 1: Delete the Title (After 5 seconds) ---
    setTimeout( function() {
        const pageTitle = document.querySelector( '#firstHeading, .mw-page-title-main, h1' );
        if ( pageTitle ) {
            pageTitle.style.transition = 'opacity 2s ease';
            pageTitle.style.opacity = '0';
            setTimeout( () => pageTitle.remove(), 2000 );
        }
    }, 5000 );

    // --- PHASE 2: Half Content Gone & Shake Intensifies to Violent (After 10 seconds) ---
    setTimeout( function() {
        const contentBody = document.querySelector( '.mw-parser-output' ) || document.body;
        // Strip half of the child elements to simulate halfway destruction
        const children = contentBody.children;
        for ( let i = 0; i < Math.floor( children.length / 2 ); i++ ) {
            if ( children[i] ) children[i].remove();
        }
        
        // Upgrade shake from gentle to violent earthquake
        document.body.classList.remove( 'shake-gentle' );
        document.body.classList.add( 'shake-violent' );
    }, 10000 );

    // --- PHASE 3: Every Single Part of the Body is Gone (After 15 seconds) ---
    setTimeout( function() {
        const contentBody = document.querySelector( '.mw-parser-output' ) || document.body;
        contentBody.style.transition = 'opacity 2s ease';
        contentBody.style.opacity = '0';
        setTimeout( () => {
            contentBody.innerHTML = '';
        }, 2000 );
    }, 15000 );

    // --- PHASE 4: Screen Flickers & Lights Go Out (After 20 seconds) ---
    setTimeout( function() {
        document.body.classList.remove( 'shake-violent' );
        document.body.classList.add( 'flickering-out' );
    }, 20000 );

    // --- PHASE 5: Pitch Black Void & Text Typing: "The lights are out." (After 21.5 seconds) ---
    setTimeout( function() {
        document.body.className = 'darkness-screen';
        
        const container = document.createElement( 'div' );
        container.style.fontSize = '28px';
        container.style.color = '#ffffff';
        container.innerHTML = '<span id="typing-text"></span>';
        document.body.appendChild( container );

        const message = "The lights are out.";
        let index = 0;
        const typeInterval = setInterval( function() {
            document.getElementById( 'typing-text' ).innerText += message[index];
            index++;
            if ( index >= message.length ) {
                clearInterval( typeInterval );
                
                // --- PHASE 6: Prompt Fades In: "What do you do?" (After typing completes) ---
                setTimeout( function() {
                    const promptDiv = document.createElement( 'div' );
                    promptDiv.className = 'fade-in-prompt';
                    promptDiv.style.fontSize = '22px';
                    promptDiv.style.color = '#888888';
                    promptDiv.style.marginTop = '20px';
                    promptDiv.innerText = "What do you do?";
                    document.body.appendChild( promptDiv );
                }, 1500 );
            }
        }, 100 );
    }, 21500 );

    // --- PHASE 7: The "BYE" Part Appears (After 28 seconds) ---
    setTimeout( function() {
        document.body.className = 'darkness-screen';
        document.body.innerHTML = '<h1 class="giant-bye-text">BYE BYE, WIKI FARM!</h1>';
    }, 28000 );

    // --- PHASE 8: Pure Vanilla Cookie Reload Button Appears in Darkness (After 34 seconds) ---
    setTimeout( function() {
        document.body.className = 'darkness-screen';
        document.body.innerHTML = `
            <div class="pure-vanilla-box-dark">
                <div style="font-size: 50px; margin-bottom: 12px;">✨🛡️🍦</div>
                <h2 style="color: #ffb300; margin-bottom: 15px; font-size: 26px;">Pure Vanilla Cookie's Sanctuary</h2>
                <p style="font-size: 16px; line-height: 1.6; color: #cccccc;">
                    Bill Cipher's chaos has been completely purified. The wiki farm rests safely in the eternal void. 
                </p>
                <button class="pure-vanilla-btn" onclick="location.reload()">Reload the Page</button>
            </div>
        `;
    }, 34000 );
};
