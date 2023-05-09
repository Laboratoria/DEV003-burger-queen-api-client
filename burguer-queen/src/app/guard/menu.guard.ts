import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

// canActivate fn actualized
export const menuGuard = () => {
  const toast = inject(NgToastService)
  // Injects Router to change view
  const router = inject(Router);
  const token = sessionStorage.getItem('user')
  function errorMsg(){toast.error({detail:"Error",summary: 'You can not access menu', duration:3000})}

  // Adds condition and error case
      if ( token === 'waiter' ) {
        return true
      } else if (token === 'cheff') {
        errorMsg();
        return router.parseUrl('/orders');
      }

      errorMsg();
      return router.parseUrl('');

}

