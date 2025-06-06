
import React, { useState } from 'react';
import { Smartphone, Monitor, Wrench, Clock, Star, Shield, MapPin, Phone, Mail, Zap, Cpu, Wifi, User, LogIn, ArrowRight, ChevronRight } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Ra Assistência Técnica
              </h1>
              <p className="text-sm text-gray-500 font-medium">Especialistas em Tecnologia</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a 
                key={item} 
                href={item === 'Serviços' ? '#services' : '#'} 
                onClick={item === 'Serviços' ? scrollToServices : undefined}
                className="text-gray-700 hover:text-blue-600 transition-all duration-300 relative group font-medium"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <div className="flex space-x-3">
            <Button 
              onClick={() => setIsLoginOpen(true)}
              className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <Zap className="mr-2 h-4 w-4" />
              Orçamento Grátis
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-yellow-50/30"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm border border-blue-200/50 rounded-full px-6 py-3 shadow-sm">
                <Cpu className="h-5 w-5 text-blue-600" />
                <span className="text-blue-800 font-medium">Tecnologia de Ponta</span>
              </div>
              
              <div className="space-y-4">
                <h2 className="text-6xl md:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Conserto</span>
                  <br />
                  <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Rápido</span>
                  <br />
                  <span className="text-gray-900">& Confiável</span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Especialistas em reparo de dispositivos móveis e computadores com mais de 10 anos de experiência. 
                <span className="text-blue-600 font-semibold"> Diagnóstico gratuito</span> e garantia em todos os serviços.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <Phone className="mr-2 h-5 w-5" />
                  Ligar Agora
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 shadow-lg transition-all duration-300">
                  <MapPin className="mr-2 h-5 w-5" />
                  Como Chegar
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-yellow-400/20 rounded-3xl blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
                alt="Reparo de computadores"
                className="relative rounded-3xl shadow-2xl w-full object-cover h-96"
              />
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-r from-yellow-400 to-yellow-500 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-white" />
                  <div>
                    <p className="font-bold text-white text-lg">Garantia</p>
                    <p className="text-yellow-100 text-sm">90 dias</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Informativos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Por que escolher a Ra Assistência?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">Nossos diferenciais que nos tornam únicos no mercado</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group bg-white border-2 border-blue-100 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="mx-auto bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Rapidez</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Diagnóstico em 30 minutos e reparo no mesmo dia quando possível
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white border-2 border-red-100 hover:border-red-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="mx-auto bg-gradient-to-br from-red-100 to-red-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-10 w-10 text-red-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Técnicos certificados e peças originais para garantir a durabilidade
                </p>
              </CardContent>
            </Card>

            <Card className="group bg-white border-2 border-yellow-100 hover:border-yellow-300 hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="text-center relative">
                <div className="mx-auto bg-gradient-to-br from-yellow-100 to-yellow-200 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-10 w-10 text-yellow-600" />
                </div>
                <CardTitle className="text-gray-900 text-xl">Confiança</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  Mais de 5000 clientes satisfeitos e garantia estendida em todos os serviços
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Serviços Cards */}
      <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Nossos Serviços
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto text-xl leading-relaxed">
              Oferecemos soluções completas para seus dispositivos eletrônicos com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smartphones */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-2xl">Smartphones</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="mb-6 text-gray-600 text-base leading-relaxed">
                  Conserto especializado de smartphones de todas as marcas
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span>Troca de tela e touch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span>Reparo de placa mãe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span>Troca de bateria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span>Problemas de software</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-blue-500" />
                    <span>Recuperação pós água</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Computadores */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-red-50 to-red-100 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-2xl">Computadores</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="mb-6 text-gray-600 text-base leading-relaxed">
                  Manutenção completa de PCs e notebooks
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                    <span>Formatação e instalação</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                    <span>Limpeza e manutenção</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                    <span>Upgrade de hardware</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                    <span>Remoção de malware</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-red-500" />
                    <span>Recuperação de dados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Serviço Express */}
            <Card className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-b">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900 text-2xl">Express Tech</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription className="mb-6 text-gray-600 text-base leading-relaxed">
                  Serviços rápidos enquanto você espera
                </CardDescription>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-yellow-600" />
                    <span>Instalação de películas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-yellow-600" />
                    <span>Setup de aplicativos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-yellow-600" />
                    <span>Backup de dados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-yellow-600" />
                    <span>Configurações avançadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="h-4 w-4 text-yellow-600" />
                    <span>Diagnóstico tech</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-24 relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Tecnologia que Faz a Diferença
              </span>
            </h3>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Utilizamos as melhores práticas e tecnologias mais avançadas do mercado
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-green-500/30 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Shield className="h-12 w-12 text-green-400" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6">Garantia Premium</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Todos os nossos serviços possuem garantia estendida de 90 dias com suporte técnico especializado
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-yellow-500/30 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Clock className="h-12 w-12 text-yellow-400" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6">Velocidade Tech</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Diagnóstico ultra-rápido e reparo no menor tempo possível com tecnologia de última geração
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/30 backdrop-blur-sm w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-pink-500/30 group-hover:scale-110 transition-all duration-500 shadow-xl">
                <Star className="h-12 w-12 text-pink-400" />
              </div>
              <h4 className="text-3xl font-bold text-white mb-6">Excelência</h4>
              <p className="text-gray-300 text-lg leading-relaxed">
                Peças originais certificadas e técnicos altamente especializados em tecnologia avançada
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h3 className="text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Entre em Contato
              </h3>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto">
                Estamos prontos para ajudar você com o melhor atendimento tecnológico da região
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
                  <CardTitle className="text-gray-900 text-3xl">Informações de Contato</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">Entre em contato pelos canais abaixo</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 p-8">
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xl">Telefone</p>
                      <p className="text-gray-600 text-lg">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl shadow-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xl">E-mail</p>
                      <p className="text-gray-600 text-lg">contato@raassistencia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl shadow-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xl">Endereço</p>
                      <p className="text-gray-600 text-lg">Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="p-4 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-xl">Horário de Funcionamento</p>
                      <p className="text-gray-600 text-lg">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-xl border-0">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 border-b">
                  <CardTitle className="text-gray-900 text-3xl">Solicite um Orçamento</CardTitle>
                  <CardDescription className="text-gray-600 text-lg">
                    Preencha os dados abaixo e entraremos em contato rapidamente
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 transition-all duration-300"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Tipo de Dispositivo</label>
                      <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 transition-all duration-300">
                        <option>Selecione...</option>
                        <option>Smartphone</option>
                        <option>Notebook</option>
                        <option>Computador Desktop</option>
                        <option>Tablet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">Descrição do Problema</label>
                      <textarea 
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 placeholder-gray-500 h-32 transition-all duration-300 resize-none"
                        placeholder="Descreva o problema do seu dispositivo..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 py-4 text-lg">
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
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-8 md:mb-0">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-lg">
                <Wrench className="h-8 w-8 text-white" />
              </div>
              <span className="font-bold text-white text-2xl">Ra Assistência Técnica</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg">© 2024 Ra Assistência Técnica. Todos os direitos reservados.</p>
              <p className="text-gray-400 text-sm mt-2">Desenvolvido com tecnologia e inovação</p>
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
