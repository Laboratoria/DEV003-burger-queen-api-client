import { render, screen, waitFor } from '@testing-library/react';
import Waiter from "@/pages/waiter";
 
jest.mock('axios', () => ({
    get: () => {
      return  Promise.resolve({
        data: [    
          {
            "id": 1,
            "name": "Sandwich de jamón y queso",
            "price": 1000,
            "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/sandwich.png",
            "type": "Desayuno",
            "dateEntry": "2022-03-05 15:14:10"   
          },
          {
            "id": 2,
            "name": "Café americano",
            "price": 500,
            "image": "https://raw.githubusercontent.com/ssinuco/burger-queen-api-mock/main/resources/images/coffee.png",
            "type": "Desayuno",                    
            "dateEntry": "2022-03-05 15:14:10"
          }
        ]
      })    
    }
})) 

/*Este test falla porque no ha habido un inicio de sesión 
Por consiguiente no existe la data del login, principalmente el token
necesitado para la consulta http y obtener la data de los productos*/ 

describe('Home', () => {
  it('renders a header with title', async () => { 
    render(<Waiter />);

    const heading = screen.getByRole('heading', {
      name: "BURGER QUEEN",
    });
 
    expect(heading).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Café americano')).toBeTruthy())
  });
});