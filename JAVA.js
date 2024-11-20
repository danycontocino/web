document.querySelector('.selected-option').addEventListener('click', function() {
    const options = document.querySelector('.options');
    options.style.display = options.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedText = option.textContent.trim();
        document.querySelector('.selected-option').textContent = selectedText;
        document.querySelector('.options').style.display = 'none';
    });
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function(event) {
        document.querySelector('.options').style.display = 'none';
    }
});

