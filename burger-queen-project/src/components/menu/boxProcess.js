import { useRouter } from 'next/router';

export function BoxProcess () {
    const router = useRouter();
    return (
        <div className="Process-box">
                <button className="CancelORder" onClick={()=>router.push('/menu')}>CANCELAR</button> <button className="SendOrder">ENVIAR</button> 
            </div>
        
    )
  }