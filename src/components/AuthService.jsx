// class AuthService {
//   static authenticate(email, password) {
//     return fetch('http://localhost:8080/login', { method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ email, password }),})
//       .then((response) => response.json())
//       .then((data) => {console.log (data)
//       })

//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   }
// }

// export default AuthService;
