
import React from 'react';
import { Smartphone, Monitor, Wrench, Clock, Star, Shield, MapPin, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-foreground">Ra Assistência Técnica</h1>
              <p className="text-sm text-muted-foreground">Especialistas em Celulares e Computadores</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Início', 'Serviços', 'Sobre', 'Contato'].map((item) => (
              <a key={item} href="#" className="text-foreground hover:text-primary transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            Orçamento Grátis
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conserto Rápido e Confiável
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Especialistas em reparo de celulares e computadores com mais de 10 anos de experiência. 
            Diagnóstico gratuito e garantia em todos os serviços.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Ligar Agora
            </Button>
            <Button size="lg" variant="outline">
              <MapPin className="mr-2 h-5 w-5" />
              Como Chegar
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Nossos Serviços</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferecemos soluções completas para seus dispositivos eletrônicos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Celulares */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-8 w-8 text-primary" />
                  <CardTitle>Celulares</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Conserto completo de smartphones de todas as marcas
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Troca de tela e touch</li>
                  <li>• Reparo de placa mãe</li>
                  <li>• Troca de bateria</li>
                  <li>• Problemas de software</li>
                  <li>• Entrada de água</li>
                </ul>
              </CardContent>
            </Card>

            {/* Computadores */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Monitor className="h-8 w-8 text-primary" />
                  <CardTitle>Computadores</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Manutenção e reparo de PCs e notebooks
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Formatação e instalação</li>
                  <li>• Limpeza e manutenção</li>
                  <li>• Upgrade de hardware</li>
                  <li>• Remoção de vírus</li>
                  <li>• Recuperação de dados</li>
                </ul>
              </CardContent>
            </Card>

            {/* Serviço Rápido */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Clock className="h-8 w-8 text-primary" />
                  <CardTitle>Serviço Express</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Reparos rápidos enquanto você espera
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Troca de película</li>
                  <li>• Instalação de apps</li>
                  <li>• Backup de dados</li>
                  <li>• Configurações</li>
                  <li>• Diagnóstico gratuito</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Por que escolher a Ra?</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Garantia</h4>
              <p className="text-muted-foreground">
                Todos os nossos serviços possuem garantia de 90 dias
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Agilidade</h4>
              <p className="text-muted-foreground">
                Diagnóstico rápido e reparo no menor tempo possível
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-2">Qualidade</h4>
              <p className="text-muted-foreground">
                Peças originais e técnicos especializados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">Entre em Contato</h3>
              <p className="text-muted-foreground">
                Estamos prontos para ajudar você com o melhor atendimento
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Informações de Contato</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Telefone</p>
                      <p className="text-muted-foreground">(11) 99999-9999</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">E-mail</p>
                      <p className="text-muted-foreground">contato@raassistencia.com.br</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Endereço</p>
                      <p className="text-muted-foreground">Rua das Flores, 123 - Centro<br />São Paulo - SP</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Horário de Funcionamento</p>
                      <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h<br />Sábado: 8h às 14h</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Solicite um Orçamento</CardTitle>
                  <CardDescription>
                    Preencha os dados abaixo e entraremos em contato
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Nome</label>
                      <input 
                        type="text" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Tipo de Dispositivo</label>
                      <select className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                        <option>Selecione...</option>
                        <option>Smartphone</option>
                        <option>Notebook</option>
                        <option>Computador Desktop</option>
                        <option>Tablet</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Descrição do Problema</label>
                      <textarea 
                        className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-primary h-20"
                        placeholder="Descreva o problema do seu dispositivo..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">
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
      <footer className="bg-card border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-bold text-foreground">Ra Assistência Técnica</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-muted-foreground">© 2024 Ra Assistência Técnica. Todos os direitos reservados.</p>
              <p className="text-sm text-muted-foreground">Desenvolvido com dedicação para servir você melhor</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
