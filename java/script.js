document.addEventListener('DOMContentLoaded', () => {

    let currentLang = 'es';
    const translations = {
        es: {
            'nav-ponente': 'Conferencista',
            'nav-sobre': 'Sobre la Conferencia',
            'nav-teoria': 'Universo Cromático',
            'nav-galeria': 'Galería',
            'nav-conceptos': 'Conceptos',
            'nav-resumen': 'Resumen',
            'badge-ponente': 'Invitada Magistral',
            'title-ponente': 'Sara Viloria',
            'desc-ponente': 'Una autoridad multidisciplinar en el mundo del color. Pintora, poeta, escritora y curadora de arte orientada a la expresión territorial.',
            'c1-title': 'Credenciales:',
            'c1-desc': 'Licenciada en Artes Visuales, diplomada en Ilustración y Arte en su expresión territorial.',
            'c2-title': 'Certificación Internacional:',
            'c2-desc': 'Colorista Certificada por Leatrice Eiseman (Directora Ejecutiva de Pantone Color Institute).',
            'c3-title': 'Trayectoria:',
            'c3-desc': 'Ex Coordinadora de educación del Museo de Artes Visuales (MAVI) de Santiago y mediadora cultural.',
            'c4-title': 'Faceta Literaria:',
            'c4-desc': 'Ganadora de la Beca Fundación Neruda (2021) y el premio Lily Peter Fellowship (USA). Autora de los libros "Color y Acuarela" y "Cartas para Siena".',
            'title-sobre': 'El Color: Un Lenguaje Caprichoso y Estratégico',
            'desc-sobre': 'La conferencia exploró el color no solo como un fenómeno óptico, sino como un puente directo hacia las emociones humanas. Como se debatió en la charla, a menudo "es más fácil definir cómo nos hace sentir un color, que explicar lo que significa en sí mismo". La ponencia navegó entre las definiciones físicas tradicionales (como las de la RAE o el Oxford Dictionary) y la realidad práctica: el color es un lenguaje poderoso, a veces caprichoso, que dicta nuestras decisiones, moldea nuestra cultura y define nuestro entorno.',
            'stat-1': 'De las decisiones de compra de los consumidores se ven influenciadas directamente por el color.',
            'stat-2': 'De incremento en el reconocimiento e identidad corporativa de una marca al usar el color estratégico.',
            'title-teoria': 'Psicología & Teoría del Color',
            'desc-teoria2': 'Cada tono evoca asociaciones culturales y respuestas biológicas específicas. (Aporte extra: es importante recordar que estas percepciones pueden variar según la cultura, pero en el mundo. Un buen uso del color debe ser democrático. Las normativas web actuales (WCAG 2.1) exigen que el color no sea el único medio para transmitir información.',
            'desc-teoria': 'Haz clic en los botones de colores para interactuar y explorar los significados emocionales occidentales analizados en la conferencia.',
            'h-origen': 'El Origen de la Rueda',
            'p-origen': 'Isaac Newton descompuso la luz blanca a través de un prisma, identificando 7 colores fundamentales y uniendo los extremos para crear el círculo cromático.',
            'h-modelo': 'Modelo RYB Tradicional',
            'p-modelo': 'Primarios: Rojo, Amarillo, Azul. Secundarios: Naranja, Verde, Morado.',
            'h-armonia': 'Armonías Exitosas',
            'p-armonia': 'Estrategias visuales clave: Complementaria (contraste), Análoga (vecinos), Triádica (vibrante) y Monocromática (minimalismo).',
            'title-galeria': 'Galería de la Conferencia',
            'hero-title-1': 'COLOR: Lenguaje Caprichoso y Estratégico',
            'hero-desc-1': 'Explorando el impacto del diseño visual en la Universidad ECCI.',
            'hero-title-2': 'Ciencia y Emoción',
            'hero-desc-2': 'El cruce perfecto entre física, fisiología y respuestas biológicas.',
            'hero-title-3': 'Diseño Inclusivo y Accessible',
            'hero-desc-3': 'Garantizando experiencias web democráticas para el 100% de los usuarios.',
            'color-rojo-t': 'Rojo (Pasión, Energía, Urgencia)',
            'color-rojo-d': 'Ideal para llamados a la acción y rebajas. Estimula de forma inmediata las respuestas biológicas.',
            'color-naranja-t': 'Naranja (Creatividad, Entusiasmo, Calidez)',
            'color-naranja-d': 'Transmite juventud y accesibilidad. Ampliamente utilizado para conectar con audiencias dinámicas.',
            'color-yellow-t': 'Amarillo (Optimismo, Alegría, Atención)',
            'color-yellow-d': 'Atrapa el ojo rápidamente. Debe usarse con cuidado porque su exceso fatiga la vista humana.',
            'color-verde-t': 'Verde (Naturaleza, Calma, Equilibrio)',
            'color-verde-d': 'Asociado de forma directa a la salud, finanzas sostenibles y procesos de crecimiento orgánico.',
            'color-azul-t': 'Azul (Confianza, Profesionalismo, Serenidad)',
            'color-azul-d': 'El gran favorito de la tecnología, corporaciones y bancos por la extrema seguridad que emana.',
            'color-morado-t': 'Morado (Lujo, Misterio, Espiritualidad)',
            'color-morado-d': 'Históricamente reservado para la realeza debido al alto coste de producción del pigmento original.',
            'desc-galeria': 'Haz clic sobre las fotos para ver los detalles de nuestra experiencia en la ECCI.',
            'g1-t': 'Comunidad ECCI en Formación',
            'g2-t': 'Equipo ADSO: Futuro y Diseño',
            'g3-t': 'Identidad de la Conferencia',
            'g4-t': 'Perfil de la Ponente',
            'g5-t': 'Semántica vs. Emoción',
            'g6-t': 'Legado de Isaac Newton',
            'g7-t': 'Psicología y Percepción',
            'g8-t': 'El Color en el Arte',
            'h-conclu': 'Conclusión del Evento',
            'p-conclu': '"El color no es solo un fenómeno visual, es la herramienta de comunicación más potente que tenemos como desarrolladores y diseñadores. Entender su estrategia nos permite crear soluciones más humanas, inclusivas y efectivas."',
            'btn-restart': 'Volver al Inicio y Reflexionar',
            
            // NUEVO: CONCEPTOS
            'title-conceptos': 'Glosario Cromático',
            'desc-conceptos': 'Explora y filtra los términos fundamentales analizados durante la conferencia.',
            'btn-all': 'Todos',
            'btn-ciencia': 'Ciencia y Teoría',
            'btn-psico': 'Psicología y Emoción',
            'btn-historia': 'Historia y Aplicación',
            'c1-t': 'Teoría del Color', 'c1-d': 'Conjunto de reglas, principios y directrices que explican la percepción visual de la luz, la interacción entre los tonos y su combinación armónica.',
            'c2-t': 'Espectro Visible', 'c2-d': 'Franja de luz que el ojo humano puede percibir, descubierta por Isaac Newton al descomponer la luz blanca a través de un prisma.',
            'c3-t': 'Longitud de Onda', 'c3-d': 'Propiedad física de la luz que determina el color exacto que perciben nuestros órganos visuales (definición técnica avalada por la RAE).',
            'c4-t': 'Círculo Cromático', 'c4-d': 'Representación visual y circular de los colores organizados según su relación cromática, originada a partir de los estudios de Newton.',
            'c5-t': 'Colores Primarios', 'c5-d': 'Rojo, Amarillo y Azul. Son los colores puros y fundamentales de los cuales nacen todos los demás en la mezcla de pigmentos.',
            'c6-t': 'Colores Secundarios', 'c6-d': 'Tonos (Naranja, Verde, Morado) resultantes de la mezcla exacta al 50% de dos colores primarios.',
            'c7-t': 'Colores Terciarios', 'c7-d': 'Tonos intermedios o "puente" obtenidos al mezclar un color primario con un color secundario adyacente en la rueda cromática.',
            'c8-t': 'Armonía Complementaria', 'c8-d': 'Combinación de colores que se encuentran en posiciones exactamente opuestas dentro del círculo cromático, generando alto contraste.',
            'c9-t': 'Armonía Análoga', 'c9-d': 'Agrupación de tres colores vecinos o consecutivos en la rueda cromática, creando una estética serena y natural.',
            'c10-t': 'Armonía Triádica', 'c10-d': 'Uso de tres colores que forman un triángulo equilátero en el círculo cromático, logrando un diseño vibrante pero equilibrado.',
            'c11-t': 'Armonía Tetrádica', 'c11-d': 'Combinación compleja que utiliza cuatro colores dispuestos en forma de rectángulo (dos pares complementarios).',
            'c12-t': 'Armonía Monocromática', 'c12-d': 'Esquema visual que utiliza un solo color base, alterando únicamente su nivel de luz (tintes) y sombra para crear profundidad.',
            'c13-t': 'Psicología del Color', 'c13-d': 'Estudio de cómo los distintos colores alteran el estado de ánimo, evocan emociones e influyen en el comportamiento humano.',
            'c14-t': 'Lenguaje Caprichoso', 'c14-d': 'Concepto que define al color como un método de expresión no verbal que a menudo es más fácil de sentir que de explicar lógicamente.',
            'c15-t': 'Percepción Emocional', 'c15-d': 'La respuesta instintiva e inmediata que un usuario tiene al enfrentarse a una paleta de colores específica.',
            'c16-t': 'Asociación Cultural', 'c16-d': 'Significados y valores atribuidos a un color dependiendo de la geografía, la historia y la sociedad de quien lo observa.',
            'c17-t': 'Impacto del Rojo', 'c17-d': 'Tono asociado psicológicamente a la pasión, la energía extrema y el sentido de urgencia.',
            'c18-t': 'Impacto del Naranja', 'c18-d': 'Color que el cerebro relaciona con la creatividad vibrante, el entusiasmo, la juventud y la calidez.',
            'c19-t': 'Impacto del Amarillo', 'c19-d': 'Pigmento del optimismo, la alegría y la máxima atención visual (aunque en exceso puede causar fatiga ocular).',
            'c20-t': 'Impacto del Verde', 'c20-d': 'Tono vinculado instintivamente a la naturaleza, la calma, el crecimiento, el equilibrio y las finanzas.',
            'c21-t': 'Impacto del Azul', 'c21-d': 'El color de la confianza, el profesionalismo, la seguridad y la serenidad; altamente utilizado en el sector corporativo.',
            'c22-t': 'Impacto del Morado', 'c22-d': 'Tono históricamente relacionado con el lujo, la realeza, el misterio y la espiritualidad.',
            'c23-t': 'Fatiga Visual', 'c23-d': 'Cansancio ocular generado por combinaciones de colores vibrantes sin descanso o por falta de contraste adecuado.',
            'c24-t': 'Diferenciador Emocional', 'c24-d': 'El uso del color para separar emocionalmente a una marca o producto de sus competidores directos.',
            'c25-t': 'Decisión de Compra', 'c25-d': 'Métrica fundamental en marketing; el color determina el 85% de las decisiones de los consumidores al adquirir un producto.',
            'c26-t': 'Reconocimiento de Marca', 'c26-d': 'Capacidad del color corporativo para aumentar la identificación y retención de una marca en la memoria del público hasta en un 80%.',
            'c27-t': 'Estrategia de Comunicación', 'c27-d': 'Uso planificado del color, dejando de lado la simple estética para convertirlo en una herramienta de persuasión.',
            'c28-t': 'Accesibilidad Visual', 'c28-d': 'Práctica de diseño que garantiza que el contenido gráfico sea comprensible y navegable para todas las personas.',
            'c29-t': 'Directrices WCAG 2.1', 'c29-d': 'Estándares internacionales de accesibilidad web que dictan las normas obligatorias para el uso del color y el contraste.',
            'c30-t': 'Ratio de Contraste', 'c30-d': 'Medida técnica exigida en diseño web (4.5:1 para texto normal y 3:1 para texto grande) para asegurar la legibilidad.',
            'c31-t': 'Diseño Inclusivo', 'c31-d': 'Creación de interfaces que no dependen exclusivamente del color para transmitir información crucial.',
            'c32-t': 'Pigmentos Históricos', 'c32-d': 'Materiales de origen natural o sintético utilizados a lo largo de los siglos para teñir, pintar y comunicar.',
            'c33-t': 'Índigo Natural', 'c33-d': 'Pigmento azul oscuro de origen botánico, clave en el desarrollo de la teoría del color de Newton y en la industria textil.',
            'c34-t': 'Verde de París', 'c34-d': 'Famoso pigmento victoriano conocido por su brillo y su alta toxicidad debido a su contenido de arsénico.',
            'c35-t': 'Pantone', 'c35-d': 'Sistema global de identificación, comparación y comunicación del color, fundamental en las artes gráficas.'
        },
        en: {
            'nav-ponente': 'Speaker',
            'nav-sobre': 'About the Lecture',
            'nav-teoria': 'Chromatic Universe',
            'nav-galeria': 'Gallery',
            'nav-conceptos': 'Concepts',
            'nav-resumen': 'Summary',
            'badge-ponente': 'Keynote Speaker',
            'title-ponente': 'Sara Viloria',
            'desc-ponente': 'A multidisciplinary authority in the world of color. Painter, poet, writer, and art curator focused on territorial expression.',
            'c1-title': 'Credentials:',
            'c1-desc': 'Bachelor of Visual Arts, degree in Illustration and Territorial Art Expressions.',
            'c2-title': 'International Certification:',
            'c2-desc': 'Certified Colorist by Leatrice Eiseman (Executive Director of the Pantone Color Institute).',
            'c3-title': 'Professional Career:',
            'c3-desc': 'Former Educational Coordinator at the Museum of Visual Arts (MAVI) in Santiago and cultural mediator.',
            'c4-title': 'Literary Background:',
            'c4-desc': 'Winner of the Neruda Foundation Fellowship (2021) and the Lily Peter Fellowship (USA). Author of "Color and Watercolor" and "Letters to Siena".',
            'title-sobre': 'Color: A Capricious and Strategic Language',
            'desc-teoria2': 'Each hue evokes specific cultural associations and biological responses. (Bonus point: It,s important to remember that these perceptions can vary across cultures, but globally. Good use of color should be democratic. Current web standards (WCAG 2.1) require that color not be the sole means of conveying information.',
            'desc-sobre': 'The conference explored color not only as an optical phenomenon, but as a direct bridge to human emotions. As discussed in the talk, it is often "easier to define how a color makes us feel than to explain what it means in itself." The presentation navigated between traditional physical definitions (such as those from the Royal Spanish Academy or the Oxford Dictionary) and practical reality: color is a powerful, sometimes capricious, language that dictates our decisions, shapes our culture, and defines our environment.',
            'stat-1': 'Of consumer purchasing decisions are directly driven and influenced by color strategy.',
            'stat-2': 'Increase in brand recognition and corporate identity metrics by utilizing correct palettes.',
            'title-teoria': 'Psychology & Color Theory',
            'desc-teoria': 'Click on the color dots to dynamically interact and explore the Western emotional meanings discussed.',
            'h-origen': 'The Origin of the Wheel',
            'p-origen': 'Isaac Newton split white light through a laboratory prism, discovering 7 core colors and connecting the spectrum ends to create the first chromatic wheel.',
            'h-modelo': 'Traditional RYB Model',
            'p-modelo': 'Primary: Red, Yellow, Blue. Secondary: Orange, Green, Purple.',
            'h-armonia': 'Successful Harmonies',
            'p-armonia': 'Key design strategies: Complementary (contrast), Analogous (neighboring), Triadic (vibrant), and Monochromatic (minimalist elegance).',
            'title-galeria': 'Conference Gallery',
            'hero-title-1': 'COLOR: Capricious & Strategic Language',
            'hero-desc-1': 'Exploring visual design impact within Universidad ECCI.',
            'hero-title-2': 'Science and Emotion',
            'hero-desc-2': 'The perfect cross-match between physics, physiology, and biological responses.',
            'hero-title-3': 'Inclusive & Accessible Design',
            'hero-desc-3': 'Ensuring democratic web experiences for 100% of global end users.',
            'color-rojo-t': 'Red (Passion, Energy, Urgency)',
            'color-rojo-d': 'Ideal for clear calls to action and sales. Instantly stimulates human biological responses.',
            'color-naranja-t': 'Orange (Creativity, Enthusiasm, Warmth)',
            'color-naranja-d': 'Conveys youthfulness and accessibility. Widely implemented to engage with vibrant audiences.',
            'color-yellow-t': 'Yellow (Optimism, Joy, Attention)',
            'color-yellow-d': 'Grabs the human eye very fast. Should be used carefully as it can cause visual fatigue.',
            'color-verde-t': 'Green (Nature, Calm, Balance)',
            'color-verde-d': 'Directly connected with health, sustainable finance, and organic growth frameworks.',
            'color-azul-t': 'Blue (Trust, Professionalism, Serenity)',
            'color-azul-d': 'The absolute favorite for tech, corporations, and banking due to the ultimate safety it projects.',
            'color-morado-t': 'Purple (Luxury, Mystery, Spirituality)',
            'color-morado-d': 'Historically reserved for royalty due to the extreme production cost of the original organic pigment.',
            'desc-galeria': 'Click on the photos to see the details of our experience at ECCI.',
            'g1-t': 'ECCI Community in Training',
            'g2-t': 'ADSO Team: Future and Design',
            'g3-t': 'Conference Identity',
            'g4-t': 'Speaker Profile',
            'g5-t': 'Semantics vs. Emotion',
            'g6-t': 'Isaac Newton\'s Legacy',
            'g7-t': 'Psychology and Perception',
            'g8-t': 'Color in Art',
            'h-conclu': 'Event Conclusion',
            'p-conclu': '"Color is not just a visual phenomenon, it is the most powerful communication tool we have as developers and designers. Understanding its strategy allows us to create more human, inclusive and effective solutions."',
            'btn-restart': 'Back to Top and Reflect',

            // NEW CONCEPTS EN
            'title-conceptos': 'Chromatic Glossary',
            'desc-conceptos': 'Explore and filter the fundamental terms discussed during the lecture.',
            'btn-all': 'All',
            'btn-ciencia': 'Science & Theory',
            'btn-psico': 'Psychology & Emotion',
            'btn-historia': 'History & Application',
            'c1-t': 'Color Theory', 'c1-d': 'A set of rules, principles, and guidelines that explain the visual perception of light, tone interaction, and harmonic combination.',
            'c2-t': 'Visible Spectrum', 'c2-d': 'The band of light that the human eye can perceive, discovered by Isaac Newton by breaking down white light through a prism.',
            'c3-t': 'Wavelength', 'c3-d': 'The physical property of light that determines the exact color our visual organs perceive.',
            'c4-t': 'Color Wheel', 'c4-d': 'A visual and circular representation of colors organized according to their chromatic relationship.',
            'c5-t': 'Primary Colors (RYB)', 'c5-d': 'Red, Yellow, and Blue. They are the pure and fundamental colors from which all others are born in pigment mixing.',
            'c6-t': 'Secondary Colors', 'c6-d': 'Tones (Orange, Green, Purple) resulting from the exact 50% mixture of two primary colors.',
            'c7-t': 'Tertiary Colors', 'c7-d': 'Intermediate or "bridge" tones obtained by mixing a primary color with an adjacent secondary color.',
            'c8-t': 'Complementary Harmony', 'c8-d': 'A combination of colors located in exactly opposite positions on the color wheel, creating high contrast.',
            'c9-t': 'Analogous Harmony', 'c9-d': 'A grouping of three neighboring or consecutive colors on the color wheel, creating a serene aesthetic.',
            'c10-t': 'Triadic Harmony', 'c10-d': 'The use of three colors forming an equilateral triangle on the color wheel, achieving a vibrant but balanced design.',
            'c11-t': 'Tetradic Harmony', 'c11-d': 'A complex combination using four colors arranged in a rectangle (two complementary pairs).',
            'c12-t': 'Monochromatic Harmony', 'c12-d': 'A visual scheme using a single base color, altering only its light level (tints) and shadow to create depth.',
            'c13-t': 'Color Psychology', 'c13-d': 'The study of how different colors alter moods, evoke emotions, and influence human behavior.',
            'c14-t': 'Capricious Language', 'c14-d': 'A concept defining color as a non-verbal expression method that is often easier to feel than logically explain.',
            'c15-t': 'Emotional Perception', 'c15-d': 'The instinctive and immediate response a user has when faced with a specific color palette.',
            'c16-t': 'Cultural Association', 'c16-d': 'Meanings and values attributed to a color depending on the geography, history, and society of the observer.',
            'c17-t': 'Impact of Red', 'c17-d': 'A tone psychologically associated with passion, extreme energy, and a sense of urgency.',
            'c18-t': 'Impact of Orange', 'c18-d': 'A color the brain associates with vibrant creativity, enthusiasm, youth, and warmth.',
            'c19-t': 'Impact of Yellow', 'c19-d': 'The pigment of optimism, joy, and maximum visual attention (though excess can cause visual fatigue).',
            'c20-t': 'Impact of Green', 'c20-d': 'A tone instinctively linked to nature, calm, growth, balance, and finance.',
            'c21-t': 'Impact of Blue', 'c21-d': 'The color of trust, professionalism, security, and serenity; highly used in the corporate sector.',
            'c22-t': 'Impact of Purple', 'c22-d': 'A tone historically related to luxury, royalty, mystery, and spirituality.',
            'c23-t': 'Visual Fatigue', 'c23-d': 'Eye strain caused by restless combinations of vibrant colors or a lack of adequate contrast.',
            'c24-t': 'Emotional Differentiator', 'c24-d': 'The use of color to emotionally separate a brand or product from its direct competitors.',
            'c25-t': 'Purchasing Decision', 'c25-d': 'A fundamental metric in marketing; color determines 85% of consumer decisions when buying a product.',
            'c26-t': 'Brand Recognition', 'c26-d': 'The ability of corporate color to increase brand identification and retention in the public memory by up to 80%.',
            'c27-t': 'Communication Strategy', 'c27-d': 'The planned use of color, going beyond simple aesthetics to turn it into a tool of persuasion.',
            'c28-t': 'Visual Accessibility', 'c28-d': 'Design practices that ensure graphic content is understandable and navigable for all people.',
            'c29-t': 'WCAG 2.1 Guidelines', 'c29-d': 'International web accessibility standards dictating mandatory rules for color use and contrast.',
            'c30-t': 'Contrast Ratio', 'c30-d': 'A technical metric required in web design (4.5:1 for normal text) to ensure content readability.',
            'c31-t': 'Inclusive Design', 'c31-d': 'The creation of interfaces that do not rely solely on color to convey crucial information.',
            'c32-t': 'Historical Pigments', 'c32-d': 'Materials of natural or synthetic origin used over centuries to dye, paint, and communicate.',
            'c33-t': 'Natural Indigo', 'c33-d': 'A dark blue pigment of botanical origin, key in Newton’s color theory development and the textile industry.',
            'c34-t': 'Paris Green', 'c34-d': 'A famous Victorian pigment known for its brilliance and high toxicity due to its arsenic content.',
            'c35-t': 'Pantone', 'c35-d': 'A global system for identifying, comparing, and communicating color, fundamental in graphic arts.'
        }
    };

    const langToggle = document.getElementById('langToggle');
    const btnFlag = document.getElementById('btnFlag');
    const btnText = document.getElementById('btnText');

    langToggle.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        
        if (currentLang === 'es') {
            btnFlag.textContent = '🇨🇴';
            btnText.textContent = 'ES';
        } else {
            btnFlag.textContent = '🇺🇸';
            btnText.textContent = 'EN';
        }
        
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    });

    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(nextSlide, 4000);

    const colorDots = document.querySelectorAll('.color-dot');
    const colorPanel = document.getElementById('colorPanel');
    const panelTitle = document.getElementById('panelColorTitle');
    const panelDesc = document.getElementById('panelColorDesc');

    const colorMap = {
        rojo: '#ef4444',
        naranja: '#f97316',
        yellow: '#eab308',
        verde: '#22c55e',
        azul: '#3b82f6',
        morado: '#a855f7'
    };

    colorDots.forEach(dot => {
        dot.addEventListener('click', () => {
            colorDots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            const selectedColor = dot.getAttribute('data-color');
            colorPanel.style.backgroundColor = colorMap[selectedColor];

            panelTitle.setAttribute('data-key', `color-${selectedColor}-t`);
            panelDesc.setAttribute('data-key', `color-${selectedColor}-d`);

            panelTitle.textContent = translations[currentLang][`color-${selectedColor}-t`];
            panelDesc.textContent = translations[currentLang][`color-${selectedColor}-d`];
        });
    });

    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalClose = document.getElementById('modalClose');
    const modalTitle = document.getElementById('modalTitle');
    const modalDesc = document.getElementById('modalDesc');
    const modalImage = document.getElementById('modalImage');

    galleryItems.forEach((item) => {
        item.addEventListener('click', () => {
            const title = currentLang === 'es' ? item.getAttribute('data-title-es') : item.getAttribute('data-title-en');
            const desc = currentLang === 'es' ? item.getAttribute('data-desc-es') : item.getAttribute('data-desc-en');
            
            const clickedImg = item.querySelector('.gallery-img');
            if (clickedImg) {
                modalImage.src = clickedImg.src;
            }

            modalTitle.textContent = title;
            modalDesc.textContent = desc;

            modal.classList.add('active');
        });
    });

    modalClose.addEventListener('click', () => modal.classList.remove('active'));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
    });

    // NUEVO: FILTRO PARA LA SECCIÓN DE CONCEPTOS
    const filterBtns = document.querySelectorAll('.filter-btn');
    const conceptCards = document.querySelectorAll('.concept-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            filterBtns.forEach(b => b.classList.remove('active'));
            // Añadir clase activa al botón presionado
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');

            conceptCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'flex'; // Ocultar o mostrar usando display flex
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});