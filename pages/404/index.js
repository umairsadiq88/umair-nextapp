// import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const index = () => {
const router =useRouter();

  useEffect( () => {
    setTimeout(()=> {
      router.push("/"); 
    }, 3000);
  }, []);

  return (
    <>

      <h1> 404</h1>
 
              <h2> We can't find that page</h2>
              <p>We're fairly sure that page used to be here, but seems to have gone missing. We do apologise on it's behalf.
                </p>
                  {/* <button><Link href="/"><a>Bank to Home</a></Link></button> */}
                  {/* <button><a onClick={() => router.push("/")}>Bank to Home</a></button> */}
                  <button><a>Bank to Home</a></button>

            </>
  )
}

export default index;