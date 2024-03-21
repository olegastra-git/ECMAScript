// Функция для имитации получения данных о пользователе
function getUserData(userID) {
  return new Promise((resolve, reject) => {
    const users = {
      123: { name: 'Alice', age: 25, email: 'alice@example.com' },
      456: { name: 'Bob', age: 30, email: 'bob@example.com' }
    };
    const user = users[userID];
    if (user) {
      resolve(user);
    } else {
      reject(new Error("User not found"));
    }
  });
}

// Функция для имитации отправки данных о пользователе на сервер
function saveUserData(userData) {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

// Функци для изменения стиля элемента через заданное время
function changeStyleDelayed(elementID, delay) {
  setTimeout(() => {
    const element = document.getElementById(elementID);
    if (element) {
      element.style.color = 'red';
    } else {
      console.log(`Element with ID ${elementID} not found`);
    }
  }, delay);
}

// Пример использования функций
const user = { name: 'John Doe', age: 35, email: 'john.doe@example.com' };

// Получение данных о пользователе с идентификатором 123
getUserData(123)
  .then(userData => {
    console.log('User data retrieved:', userData);
  })
  .catch(error => {
    console.log('Error retrieving user data:', error.message);
  });

// Отправка данных о новом пользователе на сервер (имитация)
saveUserData(user)
  .then(() => {
    console.log('New user data saved successfully:', user);
  })
  .catch(error => {
    console.log('Error saving user data:', error.message);
  });

// Изменение стиля элемента 'myElement' через 2 секунды
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменит стиль элемента с id 'myElement'