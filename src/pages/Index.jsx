import React, { useState } from 'react';
import { Smartphone, Monitor, Wrench, Clock, Star, Shield, MapPin, Phone, Mail, Zap, Cpu, Wifi, User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import LoginModal from '@/components/LoginModal';
import AdminPanel from '@/components/AdminPanel';

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showServicesModal, setShowServicesModal] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'admin' && password === 'alan@123') {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (isLoggedIn) {
    return <AdminPanel onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-600 rounded-xl">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Ra Assistência Técnica
              </h1>
              <p className="text-sm text-gray-300">Especialistas em Tecnologia</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={item === 'Serviços' ? '#services' : '#'} 
                onClick={item === 'Serviços' ? scrollToServices : undefined}
                className="text-white hover:text-blue-400 transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex space-x-2">
            <Button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white border-0"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0">
              <Zap className="mr-2 h-4 w-4" />
              Orçamento Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8 inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-6 py-2">
                <Cpu className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800">Tecnologia de Ponta</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-black">
                <span className="text-blue-600">Conserto Rápido</span>
                <br />
                <span className="text-red-600">& Confiável</span>
              </h2>
              
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Especialistas em reparo de dispositivos móveis e computadores com mais de 10 anos de experiência. 
                <span className="text-blue-600 font-semibold"> Diagnóstico gratuito</span> e garantia em todos os serviços.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <MapPin className="mr-2 h-5 w-5" />
                  Como Chegar
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="Reparo de computadores"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-black" />
                  <span className="font-bold text-black">Garantia 90 dias</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Informativos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12 text-black">
            Por que escolher a Ra Assistência?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-black">Rapidez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Diagnóstico em 30 minutos e reparo no mesmo dia quando possível
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-red-100 hover:border-red-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-red-600" />
                </div>
                <CardTitle className="text-black">Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Técnicos certificados e peças originais para garantir a durabilidade
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle className="text-black">Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Mais de 5000 clientes satisfeitos e garantia estendida em todos os serviços
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Cards */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-black">
              Nossos Serviços
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Oferecemos soluções completas para seus dispositivos eletrônicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="bg-white border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-600 rounded-xl">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-black text-xl">Smartphones</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-600 text-base">
                  Conserto especializado de smartphones de todas as marcas
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li>• Troca de tela e touch</li>
                  <li>• Reparo de placa mãe</li>
                  <li>• Troca de bateria</li>
                  <li>• Problemas de software</li>
                  <li>• Recuperação pós água</li>
                </ul>
              </CardContent>
            </Card>

            {/* Computadores */}
            <Card className="bg-white border-2 border-red-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-red-600 rounded-xl">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-black text-xl">Computadores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-600 text-base">
                  Manutenção completa de PCs e notebooks
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li>• Formatação e instalação</li>
                  <li>• Limpeza e manutenção</li>
                  <li>• Upgrade de hardware</li>
                  <li>• Remoção de malware</li>
                  <li>• Recuperação de dados</li>
                </ul>
              </CardContent>
            </Card>

            {/* Serviço Express */}
            <Card className="bg-white border-2 border-yellow-200 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-yellow-600 rounded-xl">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-black text-xl">Express Tech</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-600 text-base">
                  Serviços rápidos enquanto você espera
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li>• Instalação de películas</li>
                  <li>• Setup de aplicativos</li>
                  <li>• Backup de dados</li>
                  <li>• Configurações avançadas</li>
                  <li>• Diagnóstico tech</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Tecnologia que Faz a Diferença
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30 group-hover:scale-110 transition-all duration-300">
                <Shield className="h-10 w-10 text-green-400" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">Garantia Premium</h4>
              <p className="text-gray-400 text-lg">
                Todos os nossos serviços possuem garantia estendida de 90 dias com suporte técnico
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-yellow-500/30 group-hover:scale-110 transition-all duration-300">
                <Clock className="h-10 w-10 text-yellow-400" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">Velocidade Tech</h4>
              <p className="text-gray-400 text-lg">
                Diagnóstico ultra-rápido e reparo no menor tempo possível com tecnologia avançada
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-pink-500/30 group-hover:scale-110 transition-all duration-300">
                <Star className="h-10 w-10 text-pink-400" />
              </div>
              <h4 className="text-2xl font-semibold text-white mb-4">Excelência</h4>
              <p className="text-gray-400 text-lg">
                Peças originais certificadas e técnicos altamente especializados em tecnologia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Entre em Contato
                </span>
              </h3>
              <p className="text-gray-400 text-lg">
                Estamos prontos para ajudar você com o melhor atendimento tecnológico
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-black text-2xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-600 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-lg">Telefone</p>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-red-600 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-lg">E-mail</p>
                      <p className="text-gray-600">contato@raassistencia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-yellow-600 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-lg">Endereço</p>
                      <p className="text-gray-600">Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-orange-600 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-black text-lg">Horário de Funcionamento</p>
                      <p className="text-gray-600">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-black text-2xl">Solicite um Orçamento</CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    Preencha os dados abaixo e entraremos em contato rapidamente
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Tipo de Dispositivo</label>
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300">
                        <option className="bg-slate-800">Selecione...</option>
                        <option className="bg-slate-800">Smartphone</option>
                        <option className="bg-slate-800">Notebook</option>
                        <option className="bg-slate-800">Computador Desktop</option>
                        <option className="bg-slate-800">Tablet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Descrição do Problema</label>
                      <textarea 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 h-24 transition-all duration-300"
                        placeholder="Descreva o problema do seu dispositivo..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105 py-3">
                      <Zap className="mr-2 h-5 w-5" />
                      Enviar Solicitação
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="p-2 bg-blue-600 rounded-xl">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-white text-lg">Ra Assistência Técnica</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Ra Assistência Técnica. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
        onLogin={handleLogin} 
      />
    </div>
  );
};

export default Index;
