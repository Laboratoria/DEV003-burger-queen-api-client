import { useRouter } from 'next/router';

export function NavigationMenu () {
  const router = useRouter();
    return (
      <div className="NavigationMenu">
        <nav className="NavigationMenu-nav">
               <button className="NavigationMenu-nav-btnBreakfast"onClick={()=>router.push('/desayuno')}>Desayuno</button> <button className="Navigation-nav-btnFood" onClick={()=>router.push('/food')}>Comida</button> 
            </nav>
            </div>
    )
  }
