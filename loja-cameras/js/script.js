// js/script.js

document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DADOS SIMULADA DE PRODUTOS (ESTRUTURA COMPLETA) ---
    const products = [
        { 
            id: 1, 
            name: "Câmera Bullet Full HD", 
            description: "Ideal para áreas externas, resistente à água e poeira.",
            price: 250.00, 
            image: "https://http2.mlstatic.com/D_NQ_NP_629278-MLA82427921477_022025-O.webp", 
            images: ["https://http2.mlstatic.com/D_NQ_NP_629278-MLA82427921477_022025-O.webp", "https://http2.mlstatic.com/D_NQ_NP_793502-MLA84476425299_052025-O.webp", "https://http2.mlstatic.com/D_NQ_NP_855968-MLA82427921489_022025-O.webp"], // Galeria de imagens
            category: "Externa", 
            connectivity: "Com Fio",
            stock: 15, // Status do estoque
            full_description: "A Câmera Bullet Full HD oferece vigilância de alta definição para ambientes externos. Com certificação IP66, é totalmente resistente à poeira e jatos d'água potentes, garantindo durabilidade em qualquer clima. Sua visão noturna infravermelha alcança até 30 metros, proporcionando imagens claras mesmo na escuridão total.",
            specs: {
                "Resolução": "1920x1080 (Full HD)",
                "Lente": "3.6mm",
                "Visão Noturna": "30 metros",
                "Proteção": "IP66",
                "Material": "Metal"
            }
        },
        { 
            id: 2, 
            name: "Câmera externa Solar", 
            description: "Design discreto e moderno para monitoramento externo.",
            price: 180.50, 
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98r-lm1w3pyx8njrfc@resize_w450_nl.webp",
            images: ["https://down-br.img.susercontent.com/file/br-11134207-7r98s-lm1w3pyxa24766@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lm1w3pyng2sra8@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98p-lm1w3pyx5uev7f@resize_w450_nl.webp"],
            category: "Externa", 
            connectivity: "Com Fio",
            stock: 8, // Estoque baixo
            full_description: "Com seu design elegante e discreto, a Câmera Dome é perfeita para monitorar o exterior de residências, escritórios e lojas sem poluir o ambiente. Oferece um amplo ângulo de visão e captura de imagens em alta qualidade.",
            specs: {
                "Resolução": "1920x1080 (Full HD)",
                "Lente": "2.8mm",
                "Visão Noturna": "20 metros",
                "Áudio": "Microfone embutido",
                "Material": "Plástico ABS"
            }
        },
        { 
            id: 3, 
            name: "Kit 4 Câmeras Wi-Fi", 
            description: "Solução completa sem fios para residências.",
            price: 899.90, 
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1ir4brumpii94@resize_w450_nl.webp",
            images: ["https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1ir4bs4jhzl3e@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1ir4brulay225@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m1ir4brumpii94@resize_w450_nl.webp"],
            category: "Kits", 
            connectivity: "Wi-Fi",
            stock: 20,
            full_description: "Este kit é a solução perfeita para quem busca praticidade. Com quatro câmeras Wi-Fi Full HD e um NVR (gravador de vídeo em rede), você pode instalar seu próprio sistema de segurança sem a necessidade de passar cabos. Acesso remoto via app.",
            specs: {
                "Nº de Câmeras": "4",
                "Conexão": "Wi-Fi 2.4GHz",
                "Armazenamento": "Suporta HD de até 2TB (não incluso)",
                "App": "Disponível para iOS e Android",
                "Instalação": "Plug and Play"
            }
        },
        { 
            id: 4, 
            name: "Câmera PTZ com Zoom", 
            description: "Controle de movimento e zoom para cobrir grandes áreas.",
            price: 550.00, 
            image: "https://down-br.img.susercontent.com/file/br-11134207-7qukw-liz6ubska9bkf6@resize_w450_nl.webp",
            images: ["https://down-br.img.susercontent.com/file/br-11134207-7qukw-liz6ubsk8ur4da@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7qukw-liz6ubskbnw04c@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7qukw-liz6ubsk61m864@resize_w450_nl.webp"],
            category: "Externa", 
            connectivity: "Wi-Fi",
            stock: 0, // Esgotado
            full_description: "Controle total na palma da sua mão. A câmera PTZ (Pan-Tilt-Zoom) permite que você mova a lente remotamente para os lados, para cima e para baixo, além de aplicar um potente zoom óptico para ver detalhes distantes com clareza.",
            specs: {
                "Movimento Pan": "355°",
                "Movimento Tilt": "90°",
                "Zoom Óptico": "4x",
                "Conexão": "Wi-Fi ou Cabo Ethernet",
                "Recursos": "Auto-tracking, presets"
            }
        },
         { 
            id: 5, 
            name: "Mini Câmera Espiã", 
            description: "Pequena e discreta para monitoramento sigiloso.",
            price: 150.00, 
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8w45p6is61da8@resize_w450_nl.webp",
            images: ["https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8w45p6iqrgx8e@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8w45p6inyc141@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8w45p6ipcwhf6@resize_w450_nl.webp"],
            category: "Interna", 
            connectivity: "Wi-Fi",
            stock: 35,
            full_description: "A Mini Câmera Espiã é a ferramenta definitiva para vigilância discreta. Com seu tamanho reduzido, pode ser escondida em qualquer lugar. Grava vídeos em alta resolução e possui detecção de movimento para economizar bateria e armazenamento.",
            specs: {
                "Resolução de Vídeo": "1080p",
                "Bateria": "Até 2 horas de gravação contínua",
                "Conexão": "Wi-Fi",
                "Ângulo de Visão": "150°",
                "Armazenamento": "Cartão MicroSD de até 64GB"
            }
        },
        { 
            id: 6, 
            name: "Kit 8 Câmeras com DVR", 
            description: "Sistema robusto com fio para máxima estabilidade.",
            price: 1599.00, 
            image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8hv7c62k9o169.webp",
            images: ["https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8hv7c61we0ha7@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8hv7c6220a966@resize_w450_nl.webp", "https://down-br.img.susercontent.com/file/br-11134207-7r98o-m8hv7c61tkvlce@resize_w450_nl.webp"],
            category: "Kits", 
            connectivity: "Com Fio",
            stock: 12,
            full_description: "Para quem não abre mão de estabilidade e segurança máxima, este kit com 8 câmeras e um gravador digital (DVR) de 8 canais é a escolha ideal. A conexão com fio garante que não haja perda de sinal ou interferências.",
            specs: {
                "Nº de Câmeras": "8",
                "Tipo de Conexão": "Cabo Coaxial",
                "Gravador": "DVR de 8 Canais",
                "Acesso Remoto": "Sim, via App e Navegador",
                "Resolução": "Full HD 1080p"
            }
        }
    ];

    /**
     * FUNÇÕES GLOBAIS (CARRINHO E ATUALIZAÇÃO DE UI)
     */
    const getCart = () => JSON.parse(localStorage.getItem('cart')) || [];
    const saveCart = (cart) => localStorage.setItem('cart', JSON.stringify(cart));
    const updateCartCount = () => {
        const cart = getCart();
        const cartCountElement = document.getElementById('cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }
    };

    /**
     * LÓGICA DA PÁGINA DE PRODUTOS (COM FILTROS, BUSCA E ORDENAÇÃO)
     */
    const productListContainer = document.getElementById('product-list');
    if (productListContainer) {
        const searchBar = document.getElementById('search-bar');
        const filterCategory = document.getElementById('filter-category');
        const filterConnectivity = document.getElementById('filter-connectivity');
        const sortBy = document.getElementById('sort-by');

        const renderProducts = () => {
            let filteredProducts = [...products];
            const searchTerm = searchBar.value.toLowerCase();
            if (searchTerm) {
                filteredProducts = filteredProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
            }
            const category = filterCategory.value;
            if (category !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.category === category);
            }
            const connectivity = filterConnectivity.value;
            if (connectivity !== 'all') {
                filteredProducts = filteredProducts.filter(p => p.connectivity === connectivity);
            }
            const sortValue = sortBy.value;
            switch (sortValue) {
                case 'price-asc': filteredProducts.sort((a, b) => a.price - b.price); break;
                case 'price-desc': filteredProducts.sort((a, b) => b.price - a.price); break;
                case 'name-asc': filteredProducts.sort((a, b) => a.name.localeCompare(b.name)); break;
            }
            displayProducts(filteredProducts);
        };

        const displayProducts = (productsToDisplay) => {
            productListContainer.innerHTML = '';
            if (productsToDisplay.length === 0) {
                productListContainer.innerHTML = `<div class="col-12 text-center"><p class="lead mt-5">Nenhum produto encontrado com os filtros selecionados.</p></div>`;
                return;
            }
            productsToDisplay.forEach(product => {
                const productCard = `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <a href="detalhe-produto.html?id=${product.id}" class="card-link">
                            <div class="card h-100 card-product">
                                <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text text-muted">${product.description}</p>
                                    <p class="card-price mt-auto">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                                    <span class="btn btn-sm btn-outline-dark mt-2">Ver Detalhes</span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                productListContainer.innerHTML += productCard;
            });
        };

        [searchBar, filterCategory, filterConnectivity, sortBy].forEach(element => {
            element.addEventListener('input', renderProducts);
            element.addEventListener('change', renderProducts);
        });

        renderProducts();
    }
    
    /**
     * LÓGICA DA PÁGINA INICIAL (PRODUTOS EM DESTAQUE)
     */
    const featuredContainer = document.getElementById('featured-products-list');
    if (featuredContainer) {
        const displayFeaturedProducts = () => {
            const featured = products.slice(0, 3);
            featuredContainer.innerHTML = '';
            featured.forEach(product => {
                const productCard = `
                    <div class="col-lg-4 col-md-6 mb-4">
                        <a href="detalhe-produto.html?id=${product.id}" class="card-link">
                            <div class="card h-100 card-product">
                                <img src="${product.image}" class="card-img-top" alt="${product.name}" loading="lazy">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${product.name}</h5>
                                    <p class="card-text text-muted">${product.description}</p>
                                    <p class="card-price mt-auto">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                                    <span class="btn btn-sm btn-outline-dark mt-2">Ver Detalhes</span>
                                </div>
                            </div>
                        </a>
                    </div>
                `;
                featuredContainer.innerHTML += productCard;
            });
        };
        displayFeaturedProducts();
    }

    /**
     * LÓGICA DA PÁGINA DO CARRINHO
     */
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        const displayCart = () => {
            const cart = getCart();
            cartContainer.innerHTML = '';
            if (cart.length === 0) {
                cartContainer.innerHTML = `<div class="text-center"><p class="lead">Seu carrinho está vazio.</p><a href="produtos.html" class="btn btn-custom-red">Ver Produtos</a></div>`;
                return;
            }
            let total = 0;
            const cartItemsHTML = cart.map(item => {
                const subtotal = item.price * item.quantity;
                total += subtotal;
                return `
                    <div class="cart-item d-flex justify-content-between align-items-center mb-3 p-3 bg-light rounded shadow-sm">
                        <div class="d-flex align-items-center">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="ms-3">
                                <h6 class="mb-0">${item.name}</h6>
                                <small class="text-muted">Qtd: ${item.quantity} | Preço: R$ ${item.price.toFixed(2).replace('.', ',')}</small>
                            </div>
                        </div>
                        <div class="d-flex align-items-center">
                            <strong class="me-4">R$ ${subtotal.toFixed(2).replace('.', ',')}</strong>
                            <button class="btn btn-sm btn-outline-danger remove-from-cart-btn" data-id="${item.id}"><i class="bi bi-trash-fill"></i></button>
                        </div>
                    </div>`;
            }).join('');
            const cartTotalHTML = `<div class="mt-4 text-end"><h4 class="fw-bold">Total: <span class="text-custom-red">R$ ${total.toFixed(2).replace('.', ',')}</span></h4><button class="btn btn-custom-red btn-lg mt-2">Finalizar Compra</button></div>`;
            cartContainer.innerHTML = cartItemsHTML + cartTotalHTML;
        };
        
        const removeFromCart = (productId) => {
            let cart = getCart().filter(item => item.id !== productId);
            saveCart(cart);
            updateCartCount();
            displayCart();
        };

        displayCart();
        
        cartContainer.addEventListener('click', (e) => {
            const removeButton = e.target.closest('.remove-from-cart-btn');
            if (removeButton) {
                removeFromCart(parseInt(removeButton.dataset.id));
            }
        });
    }

    /**
     * LÓGICA DO FORMULÁRIO DE CONTATO
     */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            e.stopPropagation();
            contactForm.classList.add('was-validated');
            if (contactForm.checkValidity()) {
                alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
                contactForm.reset();
                contactForm.classList.remove('was-validated');
            }
        });
    }

    /**
     * LÓGICA DA PÁGINA DE DETALHES DO PRODUTO
     */
    const productDetailPage = document.getElementById('product-detail-page');
    if (productDetailPage) {
        const params = new URLSearchParams(window.location.search);
        const productId = parseInt(params.get('id'));
        const product = products.find(p => p.id === productId);

        if (product) {
            document.title = `${product.name} - Segurança Certa`;
            const getStockStatus = () => {
                if (product.stock > 10) return `<span class="badge bg-success">EM ESTOQUE</span>`;
                if (product.stock > 0) return `<span class="badge bg-warning text-dark">ESTOQUE BAIXO</span>`;
                return `<span class="badge bg-danger">ESGOTADO</span>`;
            };
            
            productDetailPage.innerHTML = `
                <div class="row">
                    <div class="col-lg-6">
                        <div class="mb-4"><img src="${product.images[0]}" class="main-product-image img-fluid rounded shadow-sm" alt="Imagem principal de ${product.name}"></div>
                        <div class="thumbnail-gallery d-flex">${product.images.map((img, index) => `<img src="${img}" class="thumbnail-image img-fluid rounded me-2 ${index === 0 ? 'active' : ''}" alt="Miniatura ${index + 1}">`).join('')}</div>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="product-title">${product.name}</h1>
                        <div class="mb-3">${getStockStatus()}</div>
                        <p class="product-price fs-2 fw-bold text-custom-red">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                        <p class="lead text-muted">${product.full_description}</p>
                        <div class="mt-4">
                            <div class="d-flex align-items-center">
                                <label for="quantity" class="form-label me-3 mb-0">Quantidade:</label>
                                <div class="quantity-selector input-group">
                                    <button class="btn btn-outline-secondary" type="button" id="decrease-qty">-</button>
                                    <input type="number" class="form-control text-center" id="quantity" value="1" min="1" max="${product.stock}">
                                    <button class="btn btn-outline-secondary" type="button" id="increase-qty">+</button>
                                </div>
                            </div>
                        </div>
                        <div class="d-grid gap-2 mt-4">
                            <button id="add-to-cart-detail" class="btn btn-custom-red btn-lg" ${product.stock === 0 ? 'disabled' : ''}>
                                <i class="bi bi-cart-plus-fill"></i> ${product.stock > 0 ? 'Adicionar ao Carrinho' : 'Produto Esgotado'}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="accordion" id="productInfoAccordion">
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Descrição Completa</button></h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#productInfoAccordion"><div class="accordion-body">${product.full_description}</div></div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Especificações Técnicas</button></h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#productInfoAccordion">
                                    <div class="accordion-body">
                                        <table class="table table-striped"><tbody>${Object.entries(product.specs).map(([key, value]) => `<tr><th scope="row">${key}</th><td>${value}</td></tr>`).join('')}</tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;

            const mainImage = document.querySelector('.main-product-image');
            const thumbnails = document.querySelectorAll('.thumbnail-image');
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', () => {
                    mainImage.src = thumb.src;
                    thumbnails.forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                });
            });

            const qtyInput = document.getElementById('quantity');
            document.getElementById('increase-qty').addEventListener('click', () => { if(parseInt(qtyInput.value) < product.stock) qtyInput.value = parseInt(qtyInput.value) + 1; });
            document.getElementById('decrease-qty').addEventListener('click', () => { if (parseInt(qtyInput.value) > 1) qtyInput.value = parseInt(qtyInput.value) - 1; });

            document.getElementById('add-to-cart-detail').addEventListener('click', (e) => {
                const button = e.currentTarget;
                const quantity = parseInt(qtyInput.value);
                const cart = getCart();
                const existingProduct = cart.find(item => item.id === product.id);

                if (existingProduct) existingProduct.quantity += quantity;
                else cart.push({ ...product, quantity });
                
                saveCart(cart);
                updateCartCount();

                button.innerHTML = '<i class="bi bi-check-lg"></i> Adicionado!';
                button.classList.add('btn-success');
                setTimeout(() => {
                    button.innerHTML = '<i class="bi bi-cart-plus-fill"></i> Adicionar ao Carrinho';
                    button.classList.remove('btn-success');
                }, 2000);
            });

        } else {
            productDetailPage.innerHTML = `<div class="row"><div class="col text-center"><h1 class="display-4">Produto Não Encontrado</h1><p class="lead">O produto que você está procurando não existe ou foi removido.</p><a href="produtos.html" class="btn btn-custom-red mt-3">Voltar aos Produtos</a></div></div>`;
        }
    }

    // --- EXECUÇÃO INICIAL EM TODAS AS PÁGINAS ---
    updateCartCount();
});