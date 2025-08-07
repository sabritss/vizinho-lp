import logo from '/img/logo.png';

export function Footer() {
  return (
    <footer className="bg-yellow-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <img src={logo} alt="Vizinho App Logo" className="h-12 w-auto mx-auto mb-4" />
            <p className="text-black/70 text-lg">
              A confiança que conecta comunidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-black mb-4">Contato</h4>
              <p className="text-black/70">
                contato@vizinhoapp.com.br
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-4">Redes Sociais</h4>
              <div className="space-y-2 text-black/70">
                <p>@vizinhoapp</p>
                <p>Instagram • LinkedIn</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-black mb-4">Legal</h4>
              <div className="space-y-2 text-black/70">
                <p>Política de Privacidade</p>
                <p>Termos de Uso</p>
              </div>
            </div>
          </div>

          <div className="border-t border-black/20 pt-8">
            <p className="text-black/60">
              © 2024 Vizinho APP. Todos os direitos reservados.
            </p>
            <p className="text-black/50 text-sm mt-2">
              Desenvolvido com ❤️ para fortalecer comunidades
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
