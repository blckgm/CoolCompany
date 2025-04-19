// Валидация
const productOrderForm = document.getElementById('product-order-form');
const orderResult = document.getElementById('order-result');

productOrderForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Получаем все поля формы
  const formData = new FormData(productOrderForm);
  const errors = [];
  
  // Валидация полей
  if (!formData.get('name') || formData.get('name').length < 2) {
    errors.push('Имя должно содержать минимум 2 символа');
  }
  
  if (!formData.get('surname') || formData.get('surname').length < 2) {
    errors.push('Фамилия должна содержать минимум 2 символа');
  }
  
  if (!formData.get('product-name')) {
    errors.push('Укажите название продукта');
  }
  
  if (!formData.get('product-quantity') || parseInt(formData.get('product-quantity')) < 1) {
    errors.push('Укажите корректное количество');
  }
  
  if (!formData.get('phone') || !/^[\d\s\(\)\-+]+$/.test(formData.get('phone'))) {
    errors.push('Укажите корректный номер телефона');
  }
  
  if (!formData.get('address')) {
    errors.push('Укажите адрес доставки');
  }
  
  if (!formData.get('payment-method')) {
    errors.push('Выберите метод оплаты');
  }
  
  // Если есть ошибки - показываем их
  if (errors.length > 0) {
    orderResult.innerHTML = `<div class="error">${errors.join('<br>')}</div>`;
    orderResult.style.color = 'red';
    return;
  }
  
  // Если ошибок нет - показываем результат
  const resultHTML = `
    <div class="success">
      <h3>Ваш заказ принят!</h3>
      <p><strong>Имя:</strong> ${formData.get('name')}</p>
      <p><strong>Фамилия:</strong> ${formData.get('surname')}</p>
      <p><strong>Продукт:</strong> ${formData.get('product-name')}</p>
      <p><strong>Количество:</strong> ${formData.get('product-quantity')}</p>
      <p><strong>Телефон:</strong> ${formData.get('phone')}</p>
      <p><strong>Адрес:</strong> ${formData.get('address')}</p>
      <p><strong>Оплата:</strong> ${formData.get('payment-method')}</p>
    </div>
  `;
  
  orderResult.innerHTML = resultHTML;
  orderResult.style.color = 'green';
  

});

// Обработка формы обратного звонка (HTML5 валидация)
const callbackForm = document.getElementById('callback-form');
const callbackResult = document.getElementById('callback-result');

callbackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  if (callbackForm.checkValidity()) {
    const name = document.getElementById('callback-name').value;
    const email = document.getElementById('callback-email').value;
    const phone = document.getElementById('callback-phone').value;
    const question = document.getElementById('callback-question').value;
    
    callbackResult.innerHTML = `
      <div class="success">
        <h3>Ваш запрос принят!</h3>
        <p>Мы свяжемся с вами в ближайшее время.</p>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Тема:</strong> ${question}</p>
      </div>
    `;
    callbackResult.style.color = 'green';
    

  }
});

// Дополнительные эффекты
//  Изменение цвета кнопки в шапке при наведении
const headerBtn = document.getElementById('header-btn');

headerBtn.addEventListener('mouseover', function() {
  this.style.backgroundColor = '#008000';
  this.style.transform = 'scale(1.05)';
});

headerBtn.addEventListener('mouseout', function() {
  this.style.backgroundColor = '#facc15';
  this.style.transform = 'scale(1)';
});

// Анимация первого блока features при клике
const feature1 = document.getElementById('feature1');

feature1.addEventListener('click', function() {
  this.style.transform = 'rotate(5deg)';
  this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  
  setTimeout(() => {
    this.style.transform = 'rotate(0)';
    this.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
  }, 500);
});