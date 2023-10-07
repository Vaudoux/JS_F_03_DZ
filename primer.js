/* Создайте класс Product, который будет представлять товар в магазине. У товара должны быть следующие свойства:
name (строка) - имя товара.
price (число) - цена товара за одну единицу.

Создайте класс ShoppingCart, представляющий корзину интернет-магазина. Конструктор класса ShoppingCart должен принимать два параметра:
customerName (строка) - имя покупателя.
initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).

Алексей Кадочников У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину. Метод должен принимать два параметра:
product (объект класса Product) - товар, который добавляется в корзину.
quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину. Если quantity не указано, считается, что добавляется одна единица товара.
У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.

У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}. Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".
Алексей Кадочников const product1 = new Product("Футболка", 1000);
const product2 = new Product("Джинсы", 2000);

const cart = new ShoppingCart("Иван", 0);
cart.addItem(product1, 2);
cart.addItem(product2);
cart.addItem(product2, 3);

console.log("Текущая общая стоимость: ", cart.getCurrentTotalCost()); // Выведет: Текущая общая стоимость: 3000

cart.checkout(); // Выведет: Заказ оформлен для Иван. Общая стоимость заказа: 3000 рублей. Спасибо за покупку! */
class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    }
    
    class ShoppingCart {
    constructor(customerName, initialTotalCost) {
    this.customerName = customerName;
    this.totalCost = initialTotalCost;
    }
    
    addItem(product, quantity = 1) {
    this.totalCost += quantity * product.price;
    }
    
    getCurrentTotalCost() {
    return this.totalCost;
    }
    
    checkout() {
    console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.totalCost} рублей. Спасибо за покупку!`);
    }
    }
    
    const product1 = new Product("Футболка", 1000);
    const product2 = new Product("Джинсы", 2000);
    
    const cart = new ShoppingCart("Иван", 0);
    cart.addItem(product1, 2); // 2000
    cart.addItem(product2); // 2000
    cart.addItem(product2, 3); // 6000
    
    console.log("Текущая общая стоимость: ", cart.getCurrentTotalCost()); // Выведет: Текущая общая стоимость: 3000
    
    cart.checkout(); // Выведет: Заказ оформлен для Иван. Общая стоимость заказа: 3000 рублей. Спасибо за покупку!