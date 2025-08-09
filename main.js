// DOM Events

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const email = document.querySelector("#email");

// 1. Với sự kiện được gắn hàm thông thường (regular function) thì "this" sẽ phụ thuộc vào cách chúng ta gọi hàm
button1.onclick = function () {
  console.log(this); // <button id="button">Click Me</button>
};

email.oninput = function (e) {
  // console.log(this);

  // Lấy giá trị của ô input
  console.log(email.value); // C1
  console.log(e.target.value); // C2
  console.log(this.value); // C3
};

// Note: Dùng cách nào để lấy giá trị của ô input cho hợp lý trong 3 cách: dùng cách ngắn gọn, đơn giản hoặc khi hàm trên là 1 hàm arrow function thì nên dùng cách nào?

// Làm ngầm: button.onclick()
// Câu lệnh trên gọi 1 phương thức onclick trên 1 đối tượng button thì this sẽ trỏ về chính đối tượng button đó!

// 2. Với sự kiện được gắn vào là hàm mũi tên (arrow function). Ta đã biết arrow function không có ngữ cảnh (context) riêng của nó. Mà ngữ cảnh thì sẽ có ngữ cảnh hàm (FEC) và ngữ cảnh toàn cục (GEC)
// Câu hỏi cả đoạn code bên dưới có nằm trong hàm khác không, nếu không thì this sẽ trỏ về Window.

button2.onclick = () => {
  console.log(this); // Window
};

// 3. Với sự kiện được gắn gọi là hàm mở rộng (expression function), thì "this" sẽ hoạt động như cách 1 thông thường
const expression = function () {
  console.log(this); // <button id="button3">Click 3</button>
};

button3.onclick = expression;
