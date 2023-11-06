import { useParams } from 'react-router-dom'
import { useProduct } from '../hooks/useProduct'
import { useSpa } from '../hooks/useSpa'
import Header from '../components/Header'
import Loader from '../components/Loader'
import ErrorModal from '../components/ErrorModal'

function Product() {
   const { productID } = useParams()
   const { error, setError } = useSpa()
   const { product, loading } = useProduct(productID)
   
   return (
      <>
         <Header texto={product.titulo} />
         <main className='flex flex-col items-center gap-5'>
            {loading ? (
               <Loader/>
            ) : (
               <>
                  <section className='flex flex-col sm:flex-row justify-around gap-5 py-5 mx-10'>
                     <article className='flex flex-col items-center gap-5'>
                        <h2 className='font-bold text-xl'>Descripción</h2>
                        <p className='text-lg max-w-[75ch]'>{product.descripcion}</p>
                        <h2 className='font-bold text-xl'>Categoria</h2>
                        <p className='text-lg'>{product.categoria}</p>
                        <h2 className='font-bold text-xl'>Cantidad</h2>
                        <p className='text-lg'>{product.cantidad} unidades</p>
                        <h2 className='font-bold text-xl'>Precio</h2>
                        <p className='text-lg'>${product.precio}</p>
                     </article>
                  </section>
               </>
            )}
            {!!error && 
               <ErrorModal error={error} setError={setError}/>
            }
         </main>
      </>
   )
}

export default Product
