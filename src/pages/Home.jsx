import Header from '../components/Header'

function Home() {
   return (
      <>
         <Header
            texto={'Ven y disfruta del mejor lugar de relajación'}
            heigth='h-[25rem] sm:h-[30rem] md:h-[36rem]'
         />
         <main className='flex flex-col justify-center items-center text-base sm:text-lg md:text-xl'>
            <section className='p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491491/AA%20SPA/Home_1_warott.webp'
                  alt='Imagen de chica flotando en el agua'
               />
               <p>
                  Sumérgete en un oasis de tranquilidad en nuestro Spa de
                  Relajación Angel SPA. Aquí encontrarás el equilibrio perfecto
                  entre el cuerpo y la mente, donde podrás desconectar del
                  estrés diario y rejuvenecer tu espíritu. Nuestro enfoque
                  holístico te brindará una experiencia transformadora que te
                  dejará renovado y revitalizado.
               </p>
            </section>
            <section className='bg-sky-200 p-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:text-right gap-5 font-medium'>
               <p>
                  Descubre nuestras experiencias únicas diseñadas para
                  satisfacer todas tus necesidades de relajación. Desde masajes
                  terapéuticos y tratamientos faciales hasta baños de
                  aromaterapia y sesiones de meditación, nuestro equipo de
                  profesionales altamente capacitados y dedicados se asegurará
                  de brindarte un servicio excepcional y personalizado.
               </p>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491491/AA%20SPA/Home_2_ylv9ku.webp'
                  alt='Imagen de tratamiento facial'
               />
            </section>
            <section className='p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491493/AA%20SPA/Home_3_wgjwe8.webp'
                  alt='Imagen de un sauna'
               />
               <p>
                  Nuestras instalaciones han sido cuidadosamente diseñadas para
                  proporcionarte un ambiente sereno y acogedor. Desde el momento
                  en que ingreses, serás recibido por la suave música y los
                  aromas relajantes que impregnan el aire. Nuestros espacios
                  tranquilos y armoniosos te invitarán a sumergirte en la paz
                  interior y dejar atrás todas tus preocupaciones.
               </p>
            </section>
            <section className='bg-sky-200 p-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:text-right gap-5 font-medium'>
               <p>
                  En Angel SPA, contamos con un equipo de terapeutas expertos en
                  diversas disciplinas de bienestar. Cada uno de ellos está
                  comprometido en ofrecerte una atención personalizada y
                  adaptada a tus necesidades individuales. Con su amplio
                  conocimiento y habilidades, te guiarán en un viaje de
                  relajación profunda y te ayudarán a encontrar el equilibrio
                  interno.
               </p>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491492/AA%20SPA/Home_4_kgowzb.webp'
                  alt='Imagen de masaje terapeutico'
               />
            </section>
            <section className='p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491491/AA%20SPA/Home_5_hqyglf.webp'
                  alt='Imagen de productos naturales'
               />
               <p>
                  Nos enorgullece utilizar solo productos naturales de alta
                  calidad en todos nuestros tratamientos. Nuestros productos
                  están formulados con ingredientes orgánicos y respetuosos con
                  el medio ambiente, lo que garantiza una experiencia de spa
                  segura y saludable. Trabajamos con marcas reconocidas que
                  comparten nuestra pasión por la belleza y el bienestar
                  holístico.
               </p>
            </section>
            <section className='bg-sky-200 p-10 flex flex-col-reverse sm:flex-row justify-between items-center sm:text-right gap-5 font-medium'>
               <p>
                  Te invitamos a reservar tu momento de bienestar en Angel SPA. Ya
                  sea que desees un masaje relajante, una sesión de yoga
                  restauradora o un tratamiento facial rejuvenecedor, nuestro
                  equipo estará encantado de ayudarte a personalizar tu
                  experiencia. Permítenos cuidar de ti y guiar tu camino hacia
                  la armonía y la relajación total.
               </p>
               <img
                  className='rounded-lg w-[200px] md:w-[250px]'
                  src='https://res.cloudinary.com/dtjgc9qlk/image/upload/v1687491493/AA%20SPA/Home_6_c0gwhi.webp'
                  alt='Imagen de una vela'
               />
            </section>
            <section className='p-10 flex flex-col sm:flex-row justify-between items-center sm:text-left gap-5 font-medium'>
               <p>
                  ¡Ven y descubre la paz interior en el Spa de Relajación Angel
                  SPA!
               </p>
            </section>
         </main>
      </>
   )
}

export default Home
