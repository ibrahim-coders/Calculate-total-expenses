let count = 0;
const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function () {
  count += 1;
  const income = document.getElementById('income').value;
  const software = document.getElementById('software').value;
  const courses = document.getElementById('courses').value;
  const internet = document.getElementById('internet').value;

  const totalExpenses =
    parseFloat(software) + parseFloat(courses) + parseFloat(internet);

  const balance = income - totalExpenses;

  if (totalExpenses > income) {
    document.getElementById('logic-error').classList.remove('hidden');
    return;
  }
  const totalExpensesElement = document.getElementById('total-expenses');
  totalExpensesElement.innerText = totalExpenses.toFixed(2);

  const balanceElement = document.getElementById('balance');
  balanceElement.innerText = balance.toFixed(2);

  const result = document.getElementById('results');
  result.classList.remove('hidden');

  if (income <= 0 || isNaN(income)) {
    document.getElementById('income-error').classList.remove('hidden');
  }

  if (software <= 0 || isNaN(software)) {
    document.getElementById('software-error').classList.remove('hidden');
  }
  if (courses <= 0 || isNaN(courses)) {
    document.getElementById('courses-error').classList.remove('hidden');
  }
  if (internet <= 0 || isNaN(internet)) {
    document.getElementById('internet-error').classList.remove('hidden');
  }
  if (savings <= 0 || isNaN(savings)) {
    document.getElementById('savings-error').classList.remove('hidden');
  }
  const histortItem = document.createElement('div');
  histortItem.className = 'bg-white p-3 rounded-md border-2 border-indigo-500';

  histortItem.innerHTML += `
    <p class="text-sm text-gray-500">Setial:${count}</p>
  <p class="text-sm text-gray-500">
    ${new Date().toLocaleDateString()}</p>
    <p class='text-sm text-gray-500'>Income: $${income}</p>
    <p class='text-sm text-gray-500'>Expenses: $${totalExpenses}</p>
    <p class='text-sm text-gray-500'>Balance: $${balance}</p>
  `;

  const historyList = document.getElementById('history-list');

  // historyList.appendChild(histortItem);

  historyList.insertBefore(histortItem, historyList.firstChild);
});

const calculateSaving = document.getElementById('calculate-savings');

calculateSaving.addEventListener('click', function () {
  const income = parseFloat(document.getElementById('income').value);
  const software = parseFloat(document.getElementById('software').value);
  const courses = parseFloat(document.getElementById('courses').value);
  const internet = parseFloat(document.getElementById('internet').value);
  const savings = parseFloat(document.getElementById('savings').value);
  const savingsAmounts = document.getElementById('savings-amount');

  const totalExpenses = software + courses + internet;

  const balance = income - totalExpenses;
  const savingAmount = (savings * balance) / 100;

  const remaining = document.getElementById('remaining-balance');
  savingsAmounts.innerText = savingAmount.toFixed(2);
  const remainingBalance = balance - savingAmount;

  remaining.innerText = remainingBalance.toFixed(2);
});

const histort = document.getElementById('history-tab');

histort.addEventListener('click', function () {
  // Apply styles to the 'histort' button
  histort.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );
  // Remove styles from the 'assistantTab'
  assistantTab.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  document.getElementById('expense-form').classList.add('hidden');
  document.getElementById('history-section').classList.remove('hidden');
});

const assistantTab = document.getElementById('assistant-tab');
assistantTab.addEventListener('click', function () {
  assistantTab.classList.add(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );
  histort.classList.remove(
    'text-white',
    'bg-gradient-to-r',
    'from-blue-500',
    'to-purple-600'
  );

  document.getElementById('expense-form').classList.remove('hidden');
  document.getElementById('history-section').classList.add('hidden');
});

document.getElementById('income').addEventListener('input', function () {
  const inputValue = parseFloat(document.getElementById('income').value);
  if (isNaN(inputValue) || inputValue <= 0) {
    document.getElementById('income-error').classList.remove('hidden');
  }
})