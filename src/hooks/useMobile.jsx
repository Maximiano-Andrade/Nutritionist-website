import { useState, useEffect } from 'react';

function useMobileScreen() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 868); // 768px é o breakpoint para mobile
        };

        // Verifica o tamanho da tela ao carregar a página
        checkIfMobile();

        // Adiciona um listener para verificar o tamanho da tela ao redimensionar a janela
        window.addEventListener('resize', checkIfMobile);

        // Remove o listener ao desmontar o componente
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    return isMobile;
}

export default useMobileScreen;