const transactions = [];

gsap.from("#page0 #heading0", {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  scrollTrigger: "#page0 #heading0"
});

gsap.from("#page2 #heading", {
  x: -500,
  opacity: 0,
  duration: 1,
  scrollTrigger: "#page2 #heading"
});

gsap.from("#page0 #para", {
  x: -500,
  opacity: 0,
  duration: 1,
  scrollTrigger: "#page0 #para"
});

gsap.to("#page2 #heading2", {
  y: 40,
  opacity: 1,
  duration: 2.2,
  scrollTrigger: "#page2 #heading2"
});

const formatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  signDisplay: "always"
});

const list = document.getElementById("transactionList");
const form = document.getElementById("transactionForm");
const status = document.getElementById("status");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");
const budgetLimitInput = document.getElementById("budgetLimit");
const notification = document.getElementById("notification");

form.addEventListener("submit", addTransaction);
budgetLimitInput.addEventListener("change", updateTotal);

function updateTotal() {
  const incomeTotal = transactions
    .filter((trx) => trx.type === "income")
    .reduce((total, trx) => total + trx.amount, 0);

  const expenseTotal = transactions
    .filter((trx) => trx.type === "expense")
    .reduce((total, trx) => total + trx.amount, 0);

  const balanceTotal = incomeTotal - expenseTotal;

  balance.textContent = formatter.format(balanceTotal).substring(1);
  income.textContent = formatter.format(incomeTotal);
  expense.textContent = formatter.format(expenseTotal * -1);

  const budgetLimit = parseFloat(budgetLimitInput.value);
  if (budgetLimit && expenseTotal > budgetLimit) {
    notification.style.display = "block";
    alert("limit reached")
  } else {
    notification.style.display = "none";
  }
}

function renderList() {
  list.innerHTML = "";

  status.textContent = "";
  if (transactions.length === 0) {
    status.textContent = "No transactions.";
    return;
  }

  transactions.forEach(({ id, name, amount, date, type }) => {
    const sign = "income" === type ? 1 : -1;

    const li = document.createElement("li");

    li.innerHTML = `
      <div class="name">
        <h4>${name}</h4>
        <p>${new Date(date).toLocaleDateString()}</p>
      </div>

      <div class="amount ${type}">
        <span>${formatter.format(amount * sign)}</span>
      </div>
      
      <div class="action">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" onclick="deleteTransaction(${id})">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    `;

    list.appendChild(li);
  });
}

renderList();
updateTotal();

function deleteTransaction(id) {
  const index = transactions.findIndex((trx) => trx.id === id);
  transactions.splice(index, 1);

  updateTotal();
  saveTransactions();
  renderList();
}

function addTransaction(e) {
  e.preventDefault();

  const formData = new FormData(this);

  transactions.push({
    id: transactions.length + 1,
    name: formData.get("name"),
    amount: parseFloat(formData.get("amount")),
    date: new Date(formData.get("date")),
    type: "on" === formData.get("type") ? "income" : "expense"
  });

  this.reset();

  updateTotal();
  saveTransactions();
  renderList();
}

function saveTransactions() {
  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Clear local storage and reset values on reload
window.addEventListener('load', () => {
  localStorage.removeItem("transactions");
  balance.textContent = formatter.format(0).substring(1);
  income.textContent = formatter.format(0);
  expense.textContent = formatter.format(0);
});