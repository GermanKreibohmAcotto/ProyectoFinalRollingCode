import Container from 'react-bootstrap/Container';

export const SobreNosotrosPage = () => {
    return (
        <>
            <Container>
                <h1 className='text-center mt-3'>Sobre Nosotros</h1>
                <p className='fs-5 text-center mt-3'>GTG es una distribuidora mayorista de golosinas y artículos para Kioscos, en la cual nos esforzamos por brindar un servicio de calidad entregando en tiempo y forma productos de relevancia nuestros clientes.
                    Contamos con venta presencial en todo el pais mediante preventistas y logística propia para entregas.
                    Nuestros clientes son todo tipo de Kioscos, Mini Mercados, Almacenes, Ferreterías, Empresas y todos aquellos comercios que requieran algunos de nuestros productos.</p>
                <h3 className='text-center'>Historia</h3>
                <p className='fs-5 text-center mt-3'>Jovenes que comenzaron como emprendedores, vendiendo en su propio colegio. Años despues se juntaron aportando cada uno lo mejor de si mismo y fundando asi el primer kiosco de lo que luego se convertiria en el primero
                    deposito de la empresa. Gracias a este primer paso hoy, 7 años despues, contamos con mas de 15 representantes a lo largo del pais y trabajamos en conjunto con mas de 1000 comercios.
                </p>
            </Container>
        </>
    )
}

export default SobreNosotrosPage