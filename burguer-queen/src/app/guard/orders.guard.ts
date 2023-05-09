import { inject } from '@angular/core';
import { Router } from '@angular/router';

// canActivate fn actualized
export const ordersGuard = () => {
  // Injects Router to change view
  const router = inject(Router);
  let token = sessionStorage.getItem('user')

  // Adds condition and error case
      if (token === 'cheff' || token === 'waiter' ) {
        return true
      }

      return router.parseUrl('');

}

