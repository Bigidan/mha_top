function filterRows() {
    const checkBox = document.getElementById('interestFilter');
    const rows = document.querySelectorAll('#pollBody tr');

    rows.forEach(row => {
        if (checkBox.checked) {
            if (!row.classList.contains('interest')) {
                row.style.display = 'none';
            }
        } else {
            row.style.display = '';
        }
    });
}

// Виклик функції при завантаженні сторінки
window.onload = function() {
    document.getElementById('interestFilter').checked = true;
    filterRows();
};
