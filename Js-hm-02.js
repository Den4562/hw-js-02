// Задача 1

// Створити об'єкт, який містить список фільмів та їх жанри. Напишіть метод, який виводить на екран список фільмів у вибраному жанрі.

// const movies = {
//     action: ["Die Hard", "John Wick", "The Matrix"],
//     comedy: ["The Hangover", "Bridesmaids", "Step Brothers"],
//     drama: ["The Shawshank Redemption", "The Godfather", "Schindler's List"],
//     horror: ["The Shining", "A Nightmare on Elm Street", "The Exorcist"],
  

// showGenre(genre) {
//     const genreMovies = this[genre];

//     if (genreMovies) {
//       console.log(`Фільми в жанрі ${genre}:`);
//       for (let i = 0; i < genreMovies.length; i++) {
//         console.log(`${i + 1}. ${genreMovies[i]}`);
//     }
//     } else {
//       console.log(`Жанр ${genre} не найден.`);
//     }
//   },
// };


// movies.showGenre("comedy");


// Задача 2

// const student = {
//     subjects: [],

//     addSubject(subject) {
//         if (this.subjects.includes(subject)) {
//             console.log(`Ви уже изучаете предмет: ${subject}.`);
//         } else {
//             this.subjects.push(subject);
//             console.log(`Предмет ${subject} добавлен.`);
//         }
//     },

//     removeSubject(subject) {
//         const index = this.subjects.indexOf(subject);
//         if (index !== -1) {
//             this.subjects.splice(index, 1);
//             console.log(`Предмет ${subject} видалено.`);
//         } else {
//             console.log(`Ви не изучаете предмет: ${subject}.`);
//         }
//     }
// };


// student.addSubject("Математика"); // Предмет Математика додано.
// student.addSubject("Історія"); // Предмет Історія додано.
// student.addSubject("Математика"); // Ви вже вивчаєте предмет Математика.
// console.log(student.subjects); // ["Математика", "Історія"]
// student.removeSubject("Історія"); // Предмет Історія видалено.
// console.log(student.subjects); // ["Математика"]
// student.removeSubject("Англійська");


// Задача 3


// Дано масив об'єктів, який містить інформацію про книги: назву, автора та рік видання. 
// Потрібно знайти всі книги, які були видані після 2000 року, відсортувати їх за роком видання в порядку зростання та повернути їхні назви.
// Вхідні дані: масив об'єктів книг

// Вихідні дані: масив назв книг, які були видані після 2000 року та відсортовані за роком видання в порядку зростання.


// let books = [
//     { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
//     { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
//     { title: "1984", author: "George Orwell", year: 1949 },
//     { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
//     {
//       title: "Harry Potter and the Philosopher's Stone",
//       author: "J.K. Rowling",
//       year: 1997,
//     },
//     { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
//     { title: "The Hunger Games", author: "Suzanne Collins", year: 2008 },
//     {
//       title: "The Girl with the Dragon Tattoo",
//       author: "Stieg Larsson",
//       year: 2005,
//     },
//   ];
  
//   function findBooks(books, year) {
//     const filterBooks = books
//       .filter((book) => book.year > year)
//       .sort((a, b) => a.year - b.year);
  
//     const bookTitles = filterBooks.map((book) => book.title);
  
//     return bookTitles;
//   }
  
//   const result = findBooks(books, 2000);
//   console.log(result);
  