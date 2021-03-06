const DATA = [
    {
    "id": 1,
    "name": "Benq Led Monitor Ex2780q Metallic 2k 144hz",
    "price": 119.999,
    "category": "Monitores",
    "description": "IMPRESIONANTE PANTALLA QHD 2K Disfrute de una calidad de imagen inmaculada 16 9 con resolución 2K QHD 2560x1440 en un panel de ángulo de visión IPS amplio con 95% de espacio de color DCI-P3.",
    "image": "/assets/img/products/monitor_benq.png"
    },
    {
    "id": 2,
    "name": "Auriculares Cat Ear Headset Plegable Led Light Cosplay",
    "price": 9.809,
    "category": "Audio",
    "description": "IMPRESIONANTE PANTALLA QHD 2K Disfrute de una calidad de imagen inmaculada 16 9 con resolución 2K QHD 2560x1440 en un panel de ángulo de visión IPS amplio con 95% de espacio de color DCI-P3",
    "image": "/assets/img/products/auriculares-girl.png"
    },
    {
    "id": 3,
    "name": "Mouse inalámbrico Logitech Lightspeed blue",
    "price": 3.399,
    "category": "Periféricos",
    "description": "Los dispositivos Logitech cuentan con un diseño ergonómico pensado para tu confort. Lightspeed es una tecnología ultrarrápida y confiable con desempeño probado en competencias por profesionales. No vuelvas a preocuparte por la duración de la batería. Simplemente, el mouse se mantiene cargado.",
    "image": "/assets/img/products/mouse-cyan.png"
    },
    {
    "id": 4,
    "name": "Monitor Gamer 24 Viewsonic 240hz",
    "price": 83.999,
    "category": "Monitores",
    "description": "La tecnología AMD FreeSync™ Premium sincroniza el monitor con la salida GPU, que elimina fragmentaciones y retraso en la pantalla. La tecnología Fast-IPS combina colores intensos, un contraste sorprendente y amplios ángulos de visión, y, a su vez, ofrece tiempos de respuesta hasta 4 veces más rápidos que las pantallas tradicionales.",
    "image": "/assets/img/products/monitor-omni.png"
    },
    {
    "id": 5,
    "name": "Monitor gamer Gadnic G4D71N-F 27",
    "price": 31.999,
    "category": "Monitores",
    "description": "Este monitor de 27 te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad.",
    "image": "/assets/img/products/monitor_gadnig.png"
    },
    {
    "id": 6,
    "name": "Tablet con funda Gadnic Taurus 10.1",
    "price": 35.399,
    "category": "Notebooks",
    "description": "Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
    "image": "/assets/img/products/tablet_blanca.png"
    },
    {
    "id": 7,
    "name": "Mouse inalámbrico recargable Razer Basilisk Ultimate",
    "price": 20.278,
    "category": "Periféricos",
    "description": "La funcionalidad al alcance de tu mano: El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales. Rapidez y confiabilidad de los botones. Con sus 11 botones podrás tener mayor control e independencia para ejecutar.",
    "image": "/assets/img/products/mouse-razer-basilik.png"
    },
    {
    "id": 8,
    "name": "Auriculares gamer HyperX Cloud Stinger negro",
    "price": 17.999,
    "category": "Audio",
    "description": "¡Experimentá la adrenalina de sumergirte en la escena de otra manera! Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los HyperX Stinger no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores.",
    "image": "/assets/img/products/auricular-hiper-x.png"
    },
    {
    "id": 9,
    "name": "Teclado gamer Razer BlackWidow V3 QWERTY Green inglés US color rosa con luz RGB",
    "price": 20.934,
    "category": "Periféricos",
    "description": "Distinción a todo color. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.",
    "image": "/assets/img/products/razer_blackwidow_v3_rosa.png"
    },
    {
    "id": 10,
    "name": "Teclado gamer bluetooth Logitech Serie G G915 TKL inglés US color blanco con luz RGB",
    "price": 25.999,
    "category": "Periféricos",
    "description": "G915 TKL es una nueva clase de teclado mecánico inalámbrico para gaming con tres opciones de interruptores GL de perfil bajo y tecnología inalámbrica LIGHTSPEED profesional de 1 ms. Es capaz de ofrecer 40 horas de gaming ininterrumpido con una carga completa.",
    "image": "/assets/img/products/logitech_g915_tkl.png"
    },
    {
    "id": 11,
    "name": "Parlante JBL Go 2 portátil con bluetooth midnight black 110V/220V",
    "price": 4.899,
    "category": "Audio",
    "description": "El parlante portátil JBL Go 2 tiene todas las funciones que necesitás para llevarlo y usarlo en cualquier lugar. Con el bluetooth vas a tener la facilidad de poner música desde tu smartphone, tablet o computadora. Pero además, tiene una función específica para conferencias telefónicas, que cancela el ruido del ambiente y ofrece un sonido claro y nítido de la voz.",
    "image": "/assets/img/products/parlante_ jbl_go_ 2_portátil.png"
    },
    {
    "id": 12,
    "name": "Auricular inalámbrico bluetooth JBL Tune 510BT blanco",
    "price": 6.499,
    "category": "Audio",
    "description": "En la calle, en el colectivo o en la oficina, tené siempre a mano tu auricular JBL y ¡escapate de la rutina por un rato! Vas a poder disfrutar de la música que más te gusta y recibir llamadas telefónicas claras donde sea que te encuentres, sin perder contacto con el entorno. Bluetooth de última generación.",
    "image": "/assets/img/products/auricular_inalámbrico_jbl_tune_blanco.png"
    },
    {
    "id": 13,
    "name": "Notebook Pcbox Fire 14.1', Intel Atom X5-Z8350 4GB de RAM 64GB SSD, Intel HD Graphics 1366x768px Windows 10",
    "price": 47.300,
    "category": "Notebooks",
    "description": "La notebook Pcbox Fire PCB-CTW2 es una solución tanto para trabajar y estudiar como para entretenerte. Su pantalla LED de 14.1' y 1366x768 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle.",
    "image": "/assets/img/products/notebook_pcbox_fire_14.1.png"
    },
    {
    "id": 14,
    "name": "Notebook EXO Smart XL4-S3542 gris 15.6', Intel Core i3 5005U 4GB de RAM 256GB SSD, Intel HD Graphics 5500 1920x1080px Windows 11",
    "price": 83.999,
    "category": "Notebooks",
    "description": "Su procesador Intel Core i3 de 2 núcleos, está pensado para aquellas personas generadoras y consumidoras de contenidos. En base a esto, permite el desempeño necesario para la edición de fotografías o videos en programas básicos. Su pantalla LED de 15.6' y 1920x1080 px de resolución te brindará colores más vivos y definidos.",
    "image": "/assets/img/products/notebook_exo_smart_xl4-s3542_gris.png"
    },
    {
    "id": 15,
    "name": "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 512 GB de SSD, 8 GB de RAM) - Color Plata",
    "price": 329.999,
    "category": "Notebooks",
    "description": "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.",
    "image": "/assets/img/products/apple_macbook_air_13.png"
    },
    {
    "id": 16,
    "name": "Monitor gamer Samsung F24T35 led 24' azul y gris oscuro 100V/240V",
    "price": 27.900,
    "category": "Monitores",
    "description": "Este monitor de 24' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Su tiempo de respuesta de 5 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.",
    "image": "/assets/img/products/monitor_gamer_samsung_f24t35.png"
    },
    {
    "id": 17,
    "name": "Monitor gamer LG UltraGear 24GN600 led 24' negro 100V/240V",
    "price": 56.808,
    "category": "Monitores",
    "description": "Este monitor de 2' te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de un milisegundo lo hace ideal para gamers y cinéfilos.",
    "image": "/assets/img/products/monitor_gamer_lg_ultragear_24gn600.png"
    },
    {
    "id": 18,
    "name": "Parlante Tedge Bluetooth 10W P7 portátil negro 110V/200V",
    "price": 6.999,
    "category": "Audio",
    "description": "Tedge Bluetooth 10W ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia. Al ser activo solo necesitarás conectarlo a la fuente de sonido y el mismo equipo se encargará de amplificar y reproducir: ganarás practicidad y espacio, ya que además requiere menos cableado que uno pasivo.",
    "image": "/assets/img/products/parlante_tedge_bluetooth.png"
    },
    {
    "id": 19,
    "name": "Mouse Inalambrico Gamer Razer Basilisk Ultimate 20kdpi",
    "price": 27.747,
    "category": "Periféricos",
    "description": "Al ser un 25 % más rápida que cualquier otra tecnología inalámbrica, ni siquiera te darás cuenta de que no estás usando cables gracias a su transmisión de alta velocidad, su baja latencia de clics y su constante cambio de frecuencia hasta en los entornos más ruidosos y saturados de datos. Con el Razer Basilisk Ultimate, alcanzar la victoria nunca había sido tan personal.",
    "image": "/assets/img/products/mouse_inalambrico_basilisk_ultimate.png"
    },
    {
    "id": 20,
    "name": "Razer Mouse Bungee V3 Chroma Elimina El Arraste Del Cable",
    "price": 7.601,
    "category": "Periféricos",
    "description": "Elimina el arrastre del cable y disfruta de movimientos de ratón suaves y sin interrupciones con el Razer Mouse Bungee V3 Chroma.La abrazadera para cables del Razer Mouse Bungee V3 Chroma cuenta con un recubrimiento de caucho y está diseñada para adaptarse a la mayoría de los cables de ratón de goma, tela y trenzados.",
    "image": "/assets/img/products/razer_mouse_bungee_v3.png"
    },
    {
    "id": 21,
    "name": "Mouse de juego Logitech G Series Hero 16K G502 negro",
    "price": 6.269,
    "category": "Periféricos",
    "description": "El mouse G502 es todo un icono que ha ocupado las primeras posiciones de las listas generación tras generación. Y es el mouse que eligen quienes juegan en serio. Ahora, el mouse G502 se une a las filas de los mouse inalámbricos para juegos más avanzados del mundo con el lanzamiento de G502 LIGHTSPEED. LIGHTSPEED es una tecnología ultrarrápida y confiable con desempeño probado en competencia por profesionales de eSports.",
    "image": "/assets/img/products/mouse_logitech_hero_g502.png"
    },
    {
    "id": 22,
    "name": "Parlante JBL Flip 5 portátil con bluetooth black matte",
    "price": 20.499,
    "category": "Audio",
    "description": "Disfrutalo en viajes, fiestas y reuniones porque su batería rinde hasta 12 horas de reproducción. Pero eso no es todo, tiene bluetooth y podrás emparejarlo con otro parlante con JBL PartyBoost para obtener un sonido estéreo mucho más potente. Tiene una certificación IPX7, que significa que resiste salpicaduras y hasta un metro de profundidad en el agua.",
    "image": "/assets/img/products/parlante_jbl_flip_5.png"
    },
    {
    "id": 23,
    "name": "Auriculares Gamer Razer Kraken V3 X Usb Rgb 7.1 Pc Ps4",
    "price": 14.817,
    "category": "Audio",
    "description": "Experimenta una inmersión completa sin sentir el peso; te presentamos los Razer Kraken V3 X, unos auriculares para juegos de PC que te permiten jugar sin interrupciones. Mejorados con los diafragmas Razer™ TriForce patentados para disfrutar de un sonido increíblemente realista, es hora de sumergirte en una experiencia de audio siempre ventajosa.",
    "image": "/assets/img/products/auriculares_gamer_razer_kraken_v3.png"
    },
    {
    "id": 24,
    "name": "Mouse de juego Logitech G Series Hero G502 kda",
    "price": 6.799,
    "category": "Periféricos",
    "description": "El mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla. El sistema de detección de movimiento óptico te permitirá mover el cursor de una manera más precisa y sensible que en los sistemas tradicionales.",
    "image": "/assets/img/products/mouse_logitech_hero_g502_kda.png"
    },
    {
    "id": 25,
    "name": "Teclado gamer bluetooth Razer BlackWidow V3 Pro Green inglés US de color negro con luz RGB",
    "price": 28.999,
    "category": "Periféricos",
    "description": "Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo. Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.",
    "image": "/assets/img/products/teclado_razer.png"
    },
    {
    "id": 26,
    "name": "Teclado gamer Nisuta NSKBGZ61 Outemu Red español España color blanco con luz RGB",
    "price": 6.599,
    "category": "Periféricos",
    "description": "Teclado ideal para gamers profesionales! Este modelo de Nisuta se destaca por su valor económico en el mercado de teclados. Además, su ligereza y tamaño compacto lo vuelven un compañero único de juegos, fácil de transportar a cualquier lugar. A su vez, incluye doble entrada micro USB que permite conectividad con dispositivos compatibles.",
    "image": "/assets/img/products/teclado_nisuta_nskbgz61.png"
    },
    {
    "id": 27,
    "name": "Teclado gamer Logitech Serie Pro G Pro GX Blue Clicky inglés US color negro con luz RGB",
    "price": 14.999,
    "category": "Periféricos",
    "description": "Su retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados. Este dispositivo tiene teclas antighosting. Esta cualidad es indispensable si requerís de un uso intensivo del periférico. Gracias a esto podrás evitar fallas al tocar varias teclas al mismo tiempo.",
    "image": "/assets/img/products/teclado_logitech_pro_gx_blue.png"
    },
    {
    "id": 28,
    "name": "Notebook Enova Cloudbook C141PP-A3S 14', Intel Celeron N3350 4GB RAM 64GB SSD, Intel HD Graphics 500 1920x1080px Windows 10",
    "price": 72.499,
    "category": "Notebooks",
    "description": "Con su procesador Intel Celeron de 2 núcleos, lograrás el desempeño que necesitás para navegar y trabajar. Podrás usar los programas más esenciales, llevar a cabo tus tareas y organizar tu vida diaria. Su placa de video Intel HD Graphics 500 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
    "image": "/assets/img/products/notebook_enova_cloudbook_c141pp-a3s.png"
    },
    {
    "id": 29,
    "name": "Auriculares gamer Redragon Zeus white",
    "price": 8.610,
    "category": "Audio",
    "description": "Experimentá la adrenalina de sumergirte en la escena de otra manera. Tener auriculares específicos para jugar cambia completamente tu experiencia en cada partida. Con los Redragon Zeus no te perdés ningún detalle y escuchás el audio tal y como fue diseñado por los creadores. El diseño over-ear brinda una comodidad insuperable gracias a sus suaves almohadillas.",
    "image": "/assets/img/products/auriculares_redragon_zeus_white.png"
    },
    {
    "id": 30,
    "name": "Parlante Edifier R1700BT con bluetooth brown 100V/240V",
    "price": 34.490,
    "category": "Audio",
    "description": "Disfrutar de sonidos en frecuencias altas y bajas con una calidad excelente es posible con este parlante tweeter, subwoofer, incluso cuando subas el volumen. Olvidate del amplificador: Al ser activo solo necesitarás conectarlo a la fuente de sonido y el mismo equipo se encargará de amplificar y reproducir: ganarás practicidad y espacio, ya que además requiere menos cableado que uno pasivo. Es la solución más conveniente si querés producir música en tu casa o en un estudio, y también para DJs.",
    "image": "/assets/img/products/parlante_edifier_r1700bt.png"
    },
    {
    "id": 31,
    "name": "Parlante Thonet & Vander Vertrag BT con bluetooth white 100V/220V",
    "price": 31.554,
    "category": "Audio",
    "description": "Thonet & Vander Vertrag BT ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia. Vas a sentir la diferencia en la calidad sonora excelente.",
    "image": "/assets/img/products/parlante_thonet_&_vander_vertrag.png"
    },
    {
    "id": 32,
    "name": "Apple MacBook Pro (16 pulgadas, Chip M1 Pro de Apple con CPU de 10 núcleos, GPU de 16 núcleos, 16 GB RAM, 512 GB SSD) - Color Gris espacial",
    "price": 525.000,
    "category": "Notebooks",
    "description": "La nueva MacBook Pro ofrece a los usuarios más pro un rendimiento revolucionario. Elige entre el chip M1 Pro o el aún más potente M1 Max para resolver las tareas profesionales más exigentes con una excepcional duración de la batería. Además, la MacBook Pro trae una espectacular pantalla Liquid Retina XDR de 16 pulgadas y puertos avanzados para sacarle más provecho que nunca.",
    "image": "/assets/img/products/apple_macbook_pro_16.png"
    },
    {
    "id": 33,
    "name": "Notebook Asus ZenBook UX581LV celestial blue, Core i9 10980HK 32GB de RAM 1TB HDD, NVIDIA GeForce RTX 2060, 3840x2160px Windows 10 Pro",
    "price": 237.300,
    "category": "Notebooks",
    "description": "Su procesador Intel Core i9 de 8 núcleos, te permitirá ejecutar programas variados y procesos indispensables para desenvolverte en el día a día, ya sea en tu trabajo o en los momentos de ocio en tu hogar. Su placa de video NVIDIA GeForce RTX 2060 convierte a este dispositivo en una gran herramienta de trabajo para cualquier profesional del diseño. Te permitirá lograr una gran performance en todos tus juegos y en otras tareas cotidianas que impliquen procesamiento gráfico.",
    "image": "/assets/img/products/notebook_asus_zenbook_ux581lv.png"
    },
    {
    "id": 34,
    "name": "Notebook Dell Intel I5-10300h 8gb 256gb 15,6' Full Hd Silver",
    "price": 139.999,
    "category": "Notebooks",
    "description": "Notebook Dell equipada con Intel Core i5 de décima generación, 8gb de ram y 256gb de disco SSD, pantalla 15,6' Full HD color silver. Gráficos Gráficos Intel UHD. Sistema operativo Inicio de Windows 10. Asistente de voz incorporado Amazon Alexa.",
    "image": "/assets/img/products/notebook_dell_intel_i5-10300h.png"
    }
]

export default DATA;