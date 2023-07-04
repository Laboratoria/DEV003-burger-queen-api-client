import Home from "@/pages";
import { useRouter } from "next/router";
import { render, screen, waitFor, act } from '@testing-library/react'; 
import { TokenContextProvider } from "@/pages/components_waiter/tokenContext";

// mock useRouter
jest.mock('next/router', () => ({
    useRouter: jest.fn()
  }));
  
  // setup a new mocking function for push method
  const pushMock = jest.fn();
  
  // mock a return value on useRouter
  useRouter.mockReturnValue({
    query: {},
    // return mock for push method
    push: pushMock,
    // ... add the props or methods you need
  });

describe("<Home />", () => {

    beforeEach(() => {
        render(
        <TokenContextProvider>
            <Home/>
        </TokenContextProvider>
        )
    })
    
    it("Renders correctly", () => {
       expect(screen.getByRole("banner")).toBeDefined();
       expect(screen.getByRole("form")).toBeDefined();
       expect(screen.getAllByRole("textbox")).toBeDefined();
       expect(screen.getByRole("button")).toBeDefined();
       expect(screen.getByTestId("errorDiv")).toBeDefined();
         
    });

    it("The user can log in succesfully", () => {
        
       const loginSubmit = screen.getByRole("button")
       const logMock = jest.fn();
       act(() => {
        loginSubmit.onsubmit = logMock()
        loginSubmit.click();
       })
       
       expect(logMock).toHaveBeenCalled();
    })

});