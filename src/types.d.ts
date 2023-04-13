export interface User {
  email: string,
  id: number,
  role: string
}
export interface LoginResponse {
  accessToken: string,
  user: User
}

export interface Product {
  dateEntry: string,
  id: number,
  image: string,
  name: string,
  price: number,
  type: string
}
