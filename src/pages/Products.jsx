import Header from '../components/Header'
import CardProduct from '../components/CardProduct'
import {
   BsCalendar3Week,
   BsClock,
   BsEnvelope,
   BsFacebook,
   BsInstagram,
   BsPhone,
   BsPinMapFill,
   BsWhatsapp
} from 'react-icons/bs'
import { useSpa } from '../hooks/useSpa'
import FormProduct from '../components/FormProduct'
import { useContext, useState } from 'react'
import { UserContext } from '../context/userContext'
import ModalEdit from '../components/ModalEdit'
import ModalDelete from '../components/ModalDelete'
import Loader from '../components/Loader'
import ErrorModal from '../components/ErrorModal'


function Products() {
   const { user, adminMode } = useContext(UserContext)
   const { favorites } = user
   const { products, setCategory, categorias, addProduct, updateProduct, removeProduct, updateFavorite, loading, error, setError } = useSpa()
   const [formProduct, setFormProduct] = useState(false)
   const [modalEdit, setModalEdit] = useState(false)
   const [modalDelete, setModalDelete] = useState(false)
   const [itemUpdate, setItemUpdate] = useState(null)
   const [itemDelete, setItemDelete] = useState(null)

   const handleModalDelete = (data = null) => {
      if (data) setItemDelete(data)
      setModalDelete(!modalDelete)
   }
   
   const handleModalEdit = (data = null) => {
      if (data) setItemUpdate(data)
      setModalEdit(!modalEdit)
   }

   const handleCategory = (e) => {
      setCategory(e.target.value);
   }

   const showFormProduct = () => {
      setFormProduct(!formProduct)
   }
   return (
      <>
         <Header
            texto={`¡Bienvenido ${user.username} al Spa de Relajación Angel SPA!`}
         />
         <main className='flex flex-col gap-5 pt-5 items-center'>
            <div className='relative w-full flex flex-col items-center gap-2 md:block'>
               <h2 className='font-bold text-xl sm:text-2xl'>Servicios</h2>
               <div className='md:absolute top-1 right-20 flex items-center gap-2'>
                  <label htmlFor="categoria" className='font-semibold'>Filtrar: </label>
                  <select name="categoria" id="categoria" className='bg-sky-50 px-2 py-1 rounded-lg outline-none focus:ring-2 focus:ring-sky-600' onChange={e => {handleCategory(e)}}>
                     <option value="all">All</option>
                     {categorias.map((categoria, i) => (
                        <option key={i} value={categoria}>{categoria}</option>
                     ))}
                  </select>
               </div>
            </div>
            <section className='grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] w-full gap-5'>
               {loading ? (
                  <Loader/>
               ) : (
                  products.length === 0 ? (
                     <h2 className='font-medium text-lg'>
                        No hay servicios disponibles
                     </h2>
                  ) : (
                     user.rol === 'User' ? (
                        products.map(product => (
                           product.cantidad > 0 && (
                              <CardProduct
                                 key={product._id}
                                 data={product}
                                 favorite={favorites.includes(product._id) ? true : false}
                                 updateFavorite={updateFavorite}
                                 handleModalEdit={handleModalEdit}
                                 handleModalDelete={handleModalDelete}
                              />
                           )
                        ))
                     ) : (
                        products.map(product => (
                           <CardProduct
                              key={product._id}
                              data={product}
                              favorite={favorites.includes(product._id) ? true : false}
                              updateFavorite={updateFavorite}
                              handleModalEdit={handleModalEdit}
                              handleModalDelete={handleModalDelete}
                           />
                        ))

                     )
                  )
               )}
            </section>
               {adminMode && 
                  <section className='flex flex-col items-center gap-6 w-full bg-sky-300 p-6'>
                     <button
                        disabled={formProduct}
                        onClick={showFormProduct}
                        className='bg-sky-600 text-sky-100 text-lg px-6 rounded-md disabled:bg-black/50'
                     >
                        Agregar servicio
                     </button>
                     {formProduct && (
                        <article>
                           <FormProduct peticion={addProduct} showFormProduct={showFormProduct}/>
                        </article>
                     )}
                  </section>
               }
            <section className='bg-sky-200 w-full p-5 grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-none md:grid-cols-3 justify-around items-center text-left gap-5 break-words'>
               <article className='sm:col-start-1 flex flex-col max-md:items-center text-lg gap-2'>
                  <h2 className='font-bold text-xl sm:text-2xl text-center'>Horario:</h2>
                  <div className='flex items-center gap-2'>
                     <BsCalendar3Week />
                     <p>De Lunes a Sabados</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <BsClock />
                     <p>De 8am a 6pm</p>
                  </div>
               </article>
               <article className='sm:col-span-2 md:col-span-1 flex flex-col text-lg items-center gap-2'>
                  <h2 className='font-bold text-xl sm:text-2xl'>Ubicanos en:</h2>
                  <div className='flex items-center gap-2'>
                     <BsPinMapFill />
                     <p>Valera, sector Las Lomas</p>
                  </div>
                  <div className='flex gap-4'>
                     <BsFacebook className='hover:scale-110 text-xl' />
                     <BsInstagram className='hover:scale-110 text-xl' />
                     <BsWhatsapp className='hover:scale-110 text-xl' />
                  </div>
               </article>
               <article className='sm:col-start-2 row-start-1 md:col-start-3 flex flex-col text-lg items-center gap-2'>
                  <h2 className='font-bold text-xl sm:text-2xl'>Contacto:</h2>
                  <div className='flex items-center gap-2'>
                     <BsEnvelope />
                     <p>angelspa@gmail.com</p>
                  </div>
                  <div className='flex items-center gap-2'>
                     <BsPhone />
                     <p>+58 424-7643986</p>
                  </div>
               </article>
            </section>
            {modalEdit && 
               <ModalEdit>
                  <FormProduct data={itemUpdate} showFormProduct={handleModalEdit} peticion={updateProduct}/>
               </ModalEdit>
            }
            {modalDelete && 
               <ModalDelete handleModalDelete={handleModalDelete} id={itemDelete} peticion={removeProduct}/>
            }
            {!!error && 
               <ErrorModal error={error} setError={setError}/>
            }
         </main>
      </>
   )
}

export default Products
