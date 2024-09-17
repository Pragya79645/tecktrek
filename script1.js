document.addEventListener('DOMContentLoaded', function() {
    const addBtn = document.getElementById('add-btn');
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmountElem = document.getElementById('total-amount');

    let totalAmount = 0;

    addBtn.addEventListener('click', function() {
        const category = document.getElementById('category-select').value;
        const amount = parseFloat(document.getElementById('amount-input').value);
        const date = document.getElementById('date-input').value;

        if (category && !isNaN(amount) && date) {
            addExpense(category, amount, date);
            updateTotal(amount);
            clearInputs();
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    function addExpense(category, amount, date) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${category}</td>
            <td>${amount.toFixed(2)}</td>
            <td>${date}</td>
            <td><button class="btn btn-danger btn-sm">Delete</button></td>
        `;

        row.querySelector('button').addEventListener('click', function() {
            const amountToRemove = parseFloat(row.children[1].textContent);
            row.remove();
            updateTotal(-amountToRemove);
        });

        expenseTableBody.appendChild(row);
    }

    function updateTotal(amount) {
        totalAmount += amount;
        totalAmountElem.textContent = totalAmount.toFixed(2);
    }

    function clearInputs() {
        document.getElementById('category-select').value = '';
        document.getElementById('amount-input').value = '';
        document.getElementById('date-input').value = '';
    }
});



