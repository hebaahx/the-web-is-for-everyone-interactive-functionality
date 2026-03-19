// Stap 1: zoek de elementen op in de pagina
const comments = document.getElementById('comments')
const popover = document.getElementById('reactie-popover')

// Stap 2: luister naar een klik op de knop
comments.addEventListener('click', function() {
    
    // Stap 3: zet de popover aan of uit
    popover.hidden = !popover.hidden
 
})