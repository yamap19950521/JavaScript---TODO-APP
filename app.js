// 程式碼寫這裡

// －－－－－－監聽新增按鈕－－－－－－－－
// // 寫法一(最基礎的寫法一步一步寫 抓DOM->加監聽器->監聽器裡面的任務)
// // 抓  新增按鈕跟使用者輸入框  String.prototype.trim()方法：修剪前後的空白字串，這樣就不會造成：使用打很多空格可以輸入
const addBtn = document.querySelector("#addBtn")
const taskInput = document.querySelector("#taskInput")

// 因為要將新增的DOM放到ul的子層，所以要抓ul
const tasks = document.querySelector(".todo-list")

// 在新增按鈕上加監聽器-click事件
addBtn.addEventListener("click", function () {
  // 要小心“”裡面不可以有空格
  if (taskInput.value.trim() !== "") {
    // 建立li DOM元素 及加上class
    const li = document.createElement("li")
    li.className = "todo-item"

    // 建立span DOM元素 及加上class
    const span = document.createElement("span")
    span.className = "item"
    span.textContent = taskInput.value

    // 建立x(button) DOM元素 及加上class
    const btn = document.createElement("button")
    btn.className = "closeBtn"
    btn.textContent = "X"

    // 把span跟button加到li的子層 很容易寫成有""（需要特別注意）
    li.appendChild(span)
    li.appendChild(btn)
    tasks.insertAdjacentElement("afterbegin", li)
    taskInput.value = ""
    // 輸入完->清空輸入框->"聚焦在輸入框"
    taskInput.focus()
  }
})

// 寫法二  （用Markdown寫 在插入到ul裡改用insertAdjacentHTML）
// const addBtn = document.querySelector("#addBtn")
// const taskInput = document.querySelector("#taskInput")
// const ul = document.querySelector(".todo-list")

// addBtn.addEventListener("click", function () {
//   if (taskInput.value.trim() !== "") {
//     const todo = `<li class="todo-item">
//   <span class="item">${taskInput.value}</span>
//   <button class="closeBtn">X</button>
// </li>`
//     ul.insertAdjacentHTML("afterbegin", todo)
//   }
//   taskInput.value = " "
//   taskInput.focus()
// })

// 寫法三(把建立的任務改成用fn寫，在監聽事件呼叫fn)
// But...建議fn輸入值跟回傳值是有關係的～～～～參數可以帶入fn、每個fn只做一件事情。
// const addBtn = document.querySelector("#addBtn")
// const taskInput = document.querySelector("#taskInput")

// // 因為要將新增的DOM放到ul的子層，所以要抓ul
// const tasks = document.querySelector(".todo-list")

// const createtasks = function () {
//   // 建立li DOM元素 及加上class
//   if (taskInput.value.trim() !== "") {
//     const li = document.createElement("li")
//     li.className = "todo-item"

//     // 建立span DOM元素 及加上class
//     const span = document.createElement("span")
//     span.className = "item"
//     span.textContent = taskInput.value

//     // 建立x(button) DOM元素 及加上class
//     const btn = document.createElement("button")
//     btn.className = "closeBtn"
//     btn.textContent = "X"

//     // 把span跟button加到li的子層 很容易寫成有""（需要特別注意）
//     li.appendChild(span)
//     li.appendChild(btn)
//     tasks.insertAdjacentElement("afterbegin", li)
//   }
//   taskInput.value = ""
//   taskInput.focus()
// }
// // 在新增按鈕上加監聽器-click事件
// addBtn.addEventListener("click", function () {
//   createtasks()
// })

// －－－－－－監聽enter按鍵－－－－－－－－
// 鍵盤按鍵對應的鍵盤代碼 如果對輸入框按enter印出13(enter的鍵盤代碼是13) 特別注意Enter 第一個英文字是大寫
taskInput.addEventListener("keyup", function (e) {
  if (taskInput.value.trim() && e.key === "Enter") {
    const li = document.createElement("li")
    li.className = "todo-item"

    // 建立span DOM元素 及加上class
    const span = document.createElement("span")
    span.className = "item"
    span.textContent = taskInput.value

    // 建立x(button) DOM元素 及加上class
    const btn = document.createElement("button")
    btn.className = "closeBtn"
    btn.textContent = "X"

    // 把span跟button加到li的子層 很容易寫成有""（需要特別注意）
    li.appendChild(span)
    li.appendChild(btn)
    tasks.insertAdjacentElement("afterbegin", li)
    taskInput.value = ""
    // 輸入完->清空輸入框->"聚焦在輸入框"
    taskInput.focus()
  }
})

// －－－－－－監聽刪除按鈕－－－－－－－－
// 把整個ul加監聽器 target

tasks.addEventListener("click", function (e) {
  e.target.parentElement.remove()
})
