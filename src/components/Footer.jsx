import React from 'react';

const Footer = () => {
    
    return (
        <div>
            
    <footer class="text-center footer-style">
      <div class="container">
          <div class="row">
              <div class="col-md-4 footer-col">
                  <h3>Dirección</h3>
                  <p>
                      CABA - Argentina <br />
                      Alvarez Jonte 400
                  </p>
              </div>
              <div class="col-md-4 footer-col">
           
                <h3>La Mejor Tienda Online </h3>
                <p>Expertos en nuestro rubro</p>
           
              </div>
              <div class="col-md-4 footer-col">
                  <h3>Nuestras Redes</h3>
                  <ul class="list-inline">

                   <a class="btn-social btn-outline" href={() => false}><i class="fa fa-fw fa-facebook"></i></a>      
                   <a class="btn-social btn-outline" href={() => false}><i class="fa fa-fw fa-twitter"></i></a>      
                   <a class="btn-social btn-outline" href={() => false}><i class="fa fa-fw fa-linkedin"></i></a>      
                   <a class="btn-social btn-outline" href={() => false}><i class="fa fa-fw fa-instagram"></i></a>      
                   <a class="btn-social btn-outline" href={() => false}><i class="fa fa-fw fa-telegram"></i></a>      
                  
                  </ul>
             
                </div>
          </div>
      </div>
  </footer>

        </div>
    )

}

export default Footer;