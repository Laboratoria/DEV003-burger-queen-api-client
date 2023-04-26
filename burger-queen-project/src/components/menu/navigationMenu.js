import { useRouter } from 'next/router';

export function NavigationMenu () {
  const router = useRouter();
    return (
      <div className="NavigationMenu">
        <nav className="NavigationMenu-nav">
               <button className="NavigationMenu-nav-btnBreakfast"onClick={()=>router.push('/breakfast')}>Desayuno</button> <button className="Navigation-nav-btnFood" onClick={()=>router.push('/food')}>Almuerzo</button> 
            </nav>
            </div>
    )
  }
