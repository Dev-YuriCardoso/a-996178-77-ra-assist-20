
import React from 'react';
import { Smartphone, Monitor, Wrench, Clock, Star, Shield, MapPin, Phone, Mail, Zap, Cpu, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10 shadow-xl sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Ra Assistência Técnica
              </h1>
              <p className="text-sm text-gray-300">Especialistas em Tecnologia</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:text-blue-400 transition-all duration-300 relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300">
            <Zap className="mr-2 h-4 w-4" />
            Orçamento Grátis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8 inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2">
            <Cpu className="h-5 w-5 text-blue-400" />
            <span className="text-gray-300">Tecnologia de Ponta</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Conserto Rápido
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              & Confiável
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Especialistas em reparo de dispositivos móveis e computadores com mais de 10 anos de experiência. 
            <span className="text-blue-400 font-semibold"> Diagnóstico gratuito</span> e garantia em todos os serviços.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 transform hover:scale-105">
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
              <MapPin className="mr-2 h-5 w-5" />
              Como Chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Cards */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-6">
              <Wifi className="h-5 w-5 text-blue-400" />
              <span className="text-gray-300">Nossos Serviços</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Soluções Tecnológicas
              </span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Oferecemos soluções completas para seus dispositivos eletrônicos com tecnologia de ponta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Celulares */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl group-hover:from-blue-400 group-hover:to-blue-500 transition-all duration-300">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Smartphones</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-300 text-base">
                  Conserto especializado de smartphones de todas as marcas com garantia
                </CardDescription>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Troca de tela e touch</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Reparo de placa mãe</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Troca de bateria</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Problemas de software</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span>Recuperação pós água</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Computadores */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl group-hover:from-purple-400 group-hover:to-purple-500 transition-all duration-300">
                    <Monitor className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Computadores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-300 text-base">
                  Manutenção completa de PCs e notebooks com tecnologia avançada
                </CardDescription>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Formatação e instalação</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Limpeza e manutenção</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Upgrade de hardware</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Remoção de malware</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                    <span>Recuperação de dados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Serviço Express */}
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl group-hover:from-cyan-400 group-hover:to-cyan-500 transition-all duration-300">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">Express Tech</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-6 text-gray-300 text-base">
                  Serviços rápidos e especializados enquanto você espera
                </CardDescription>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Instalação de películas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Setup de aplicativos</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Backup de dados</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Configurações avançadas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                    <span>Diagnóstico tech</span>
                  </li>
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
              <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg">Telefone</p>
                      <p className="text-gray-300">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg">E-mail</p>
                      <p className="text-gray-300">contato@raassistencia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg">Endereço</p>
                      <p className="text-gray-300">Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-lg">Horário de Funcionamento</p>
                      <p className="text-gray-300">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-md border border-white/10">
                <CardHeader>
                  <CardTitle className="text-white text-2xl">Solicite um Orçamento</CardTitle>
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
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                <Wrench className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-white text-lg">Ra Assistência Técnica</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Ra Assistência Técnica. Todos os direitos reservados.</p>
              <p className="text-sm text-gray-500">Desenvolvido com tecnologia de ponta para servir você melhor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
