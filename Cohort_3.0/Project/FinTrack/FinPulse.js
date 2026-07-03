let logoutUser = document.querySelector("#logoutUser");
let userNameShow = document.querySelector("#userNameShow");
let cancelbtn = document.querySelector("#cancelbtn");

let AddTransectionBox = document.querySelector(".AddTransection");
let addMoneybtn = document.querySelector("#addTransaction");

let TransectionexpenceType = document.querySelector("#expenceType");
let Transectiondescription = document.querySelector("#description");
let Transectionamount = document.querySelector("#amount");
let TransectionDate = document.querySelector("#date");
let TransectionCategory = document.querySelector("#category");
let addTransactionBtn = document.querySelector("#addTransactionBtn");

let transactionForm = document.querySelector("#transactionForm");
let expenceType = document.querySelector("#expenceType");
let description = document.querySelector("#description");
let amount = document.querySelector("#amount");
let date = document.querySelector("#date");
let category = document.querySelector("#category");

let Curentbalance = document.querySelector("#Curentbalance");
let totalIncome = document.querySelector("#totalIncome");
let totalExpence = document.querySelector("#totalExpence");
let totalTransactions = document.querySelector("#totalTransactions");

let filterTypes = document.querySelector("#all_Types");

let transactionTable = document.querySelector("#transactionTable");

let resetAllData    = document.querySelector("#resetAllData")

let editingTransactionId = null;



const modalTitle = document.querySelector(".modal-header h2");

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function getAllUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

function saveUserData(allUsers, userIndex) {
  localStorage.setItem("users", JSON.stringify(allUsers));
  localStorage.setItem("currentUser", JSON.stringify(allUsers[userIndex]));
}

function getVisibleTransactions() {
  const currentUser = getCurrentUser();
  const transactions = currentUser.transactions;
  const selectedType = filterTypes.value;

  if (selectedType === "all_types") {
    return transactions;
  }

  return transactions.filter((trans) => trans.type === selectedType);
}




function filteringData() {
  filterTypes.addEventListener("change", () => {
    renderTransactions(getVisibleTransactions());
  });
}

filteringData();

function renderTransactions(filteringData) {
  transactionTable.innerHTML = "";

  filteringData.forEach((elm) => {
    console.log(elm)
    const row = document.createElement("tr");

    row.innerHTML = `
    <td>${elm.date}</td>

    <td>${elm.description}</td>

    <td>${elm.category}</td>

    <td>${elm.amount}</td>

    <td>
        <i class="fa-solid fa-pen edit" data-id=${elm.id}></i>
        <i class="fa-solid fa-trash delete" data-id=${elm.id}></i>
    </td>
        `

        transactionTable.append(row)
  });
}

transactionTable.addEventListener("click", (event) => {
  const editButton = event.target.closest(".edit");
  const deleteButton = event.target.closest(".delete");

  if (!editButton && !deleteButton) {
    return;
  }

  const transactionId = Number(
    (editButton || deleteButton).getAttribute("data-id"),
  );
  const currentUser = getCurrentUser();
  const allUsers = getAllUsers();
  const userIndex = allUsers.findIndex((user) => user.id === currentUser.id);
  const transactionIndex = allUsers[userIndex].transactions.findIndex(
    (transaction) => transaction.id === transactionId,
  );

  if (transactionIndex === -1) {
    return;
  }

  if (deleteButton) {
    allUsers[userIndex].transactions.splice(transactionIndex, 1);
    saveUserData(allUsers, userIndex);
    renderTransactions(getVisibleTransactions());
    UpdateDashBoard();
    return;
  }

  const transaction = allUsers[userIndex].transactions[transactionIndex];

  editingTransactionId = transaction.id;
  modalTitle.textContent = "Edit Transaction";
  addTransactionBtn.textContent = "Update Transaction";
  expenceType.value = transaction.type;
  description.value = transaction.description;
  amount.value = transaction.amount;
  date.value = transaction.date;
  category.value = transaction.category;
  AddTransectionBox.style.display = "block";
});




cancelbtn.addEventListener("click", () => {
  AddTransectionBox.style.display = "none";
});

addMoneybtn.addEventListener("click", () => {
  AddTransectionBox.style.display = "block";
});

// =========================
// * Transaction Functions
// =========================

transactionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  AddTransection();
});

function AddTransection() {
  let expenceTypevalue = expenceType.value.toLowerCase();
  let descriptionValue = description.value;
  let amountValue = Number(amount.value);
  let dateValue = date.value;
  let categoryValue = category.value;

  const traansactions = {
    id: editingTransactionId ?? Date.now(),
    type: expenceTypevalue,
    description: descriptionValue,
    amount: amountValue,
    date: dateValue,
    category: categoryValue,
  };

  const currentUser = getCurrentUser();

  const AllUsers = getAllUsers();

  const userIndex = AllUsers.findIndex((user) => {
    return user.id === currentUser.id;
  });

  const transactionIndex = AllUsers[userIndex].transactions.findIndex(
    (transaction) => transaction.id === editingTransactionId,
  );

  if (editingTransactionId !== null && transactionIndex !== -1) {
    AllUsers[userIndex].transactions[transactionIndex] = traansactions;
  } else {
    AllUsers[userIndex].transactions.push(traansactions);
  }

  transactionForm.reset();

  saveUserData(AllUsers, userIndex);

  AddTransectionBox.style.display = "none";
  editingTransactionId = null;
  modalTitle.textContent = "Add Transaction";
  addTransactionBtn.textContent = "Save Transaction";
  renderTransactions(getVisibleTransactions());
  UpdateDashBoard();
}

// =========================
// * Dashboard *
// =========================

function UpdateDashBoard() {
  const currentUser = getCurrentUser();
//   console.log(currentUser.transactions);
  const transactions = currentUser.transactions;

  let totalIncome = 0;
  let totalExpence = 0;

  transactions.forEach((transaction) => {
    if (String(transaction.type).toLowerCase() === "income") {
      totalIncome += Number(transaction.amount);
    } else {
      totalExpence += Number(transaction.amount);
    }
  });

  //  * current balanace
  let currentBalance = totalIncome - totalExpence;

  // * total Tansections
  let totalTransactions = transactions.length;

  updateSummaryCards(
    currentBalance,
    totalIncome,
    totalExpence,
    totalTransactions,
  );

  renderChart(totalIncome, totalExpence);
}

UpdateDashBoard();

function updateSummaryCards(
  currentBalanceValue,
  totalIncomeValue,
  totalExpenceValue,
  totalTransactionsValue,
) {
  Curentbalance.textContent = currentBalanceValue;
  totalIncome.textContent = totalIncomeValue;
  totalExpence.textContent = totalExpenceValue;
  totalTransactions.textContent = totalTransactionsValue;
}

// * logout user
logoutUser.addEventListener("click", () => {
  LogutUser();
});

function LogutUser() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  window.location.href = "./Finplush_LoginPage.html";
}

// * userName showing
let currentUser = JSON.parse(localStorage.getItem("currentUser"));
userNameShow.textContent = `${currentUser.username}`;

// * signup

// * Active boackgound colour
const boxes = document.querySelectorAll(".leftContentBox");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((item) => {
      item.classList.remove("active");
    });
    box.classList.add("active");
  });
});

//  * Chat render
function renderChart(totalIncome, totalExpence) {
  const ctx = document.getElementById("cashFlowChart");

  const income = totalIncome;
  const expense = totalExpence;

  new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Income vs Expense"],

      datasets: [
        {
          label: "Income",
          data: [income],
          backgroundColor: "#1F7A3D",
        },

        {
          label: "Expense",
          data: [expense],
          backgroundColor: "#C0392B",
        },
      ],
    },

    options: {
      responsive: true,

      plugins: {
        legend: {
          position: "top",
        },
      },

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

// * setting button & dashboad button

const dashboardBtn = document.querySelector("#dashboardBtn");
const settingsBtn = document.querySelector("#settingsBtn");

const dashboardPage = document.querySelector("#dashboardPage");
const settingsPage = document.querySelector("#settingPage");

dashboardBtn.addEventListener("click", () => {
  dashboardPage.classList.remove("active");
  settingsPage.classList.add("active");
});

settingsBtn.addEventListener("click", () => {
  settingsPage.classList.remove("active");
  dashboardPage.classList.add("active");
});





resetAllData.addEventListener("click",()=>{
    const shouldReset = confirm("Are you sure you want to reset all data?");

    if (!shouldReset) {
      return;
    }

    const currentUser = getCurrentUser();
    const allUsers = getAllUsers();
    const userIndex = allUsers.findIndex((user) => user.id === currentUser.id);

    if (userIndex === -1) {
      return;
    }

    allUsers[userIndex].transactions = [];
    saveUserData(allUsers, userIndex);

    renderTransactions(getVisibleTransactions());
    UpdateDashBoard();
})