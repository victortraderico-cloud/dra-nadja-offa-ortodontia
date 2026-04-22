# PRD - Site Ortodôntico Dra. Nadja Offa

## Problema Original
Criar um site luxuoso, moderno e high-end para "Dra. Nadja Offa", ortodontista especializada em São Paulo, Brasil. O site deve ser premium, visualmente refinado, soft, acolhedor, child-friendly mas sofisticado.

## Persona do Usuário
**Primária:** Pais de crianças (5-12 anos)
**Secundária:** Adolescentes e adultos buscando tratamentos ortodônticos estéticos

## Arquitetura Técnica
- **Frontend:** React 19 com Vite
- **UI Components:** Shadcn/UI (Radix UI + Tailwind CSS)
- **Backend:** FastAPI + MongoDB (ainda não implementado)
- **Deployment:** Emergent Cloud

## Paleta de Cores Aplicada
- #F0F3FA (azul muito claro)
- #D5DEEF (azul claro suave)
- #B1C9EF (azul médio claro)
- #8AAEE0 (azul médio)
- #638ECB (azul)
- #395886 (azul escuro)

## Features Implementadas (Dezembro 2025)

### ✅ Frontend Completo (Landing Page)
1. **Header** - Sticky glassmorphism com navegação smooth scroll
2. **Hero Section** - Imagem profissional da Dra. Nadja + CTAs principais
3. **Trust Badge** - 5.0 estrelas, 85 avaliações, localização, horários
4. **About Section** - Sobre a Dra. Nadja Offa, expertise, credenciais
5. **Services Section** - 9 serviços ortodônticos com cards premium + CTA WhatsApp
6. **Parent Section (Infantil)** - 
   - Preocupações dos pais (medo, mastigação, fala, mordida)
   - **Aparelhos personalizados** (nome, desenhos, times de futebol)
   - Imagem da Dra. com paciente infantil
   - Caixa "Atendimento especializado para crianças"
7. **Teens & Adults Section** - Alinhadores invisíveis + CTA WhatsApp
8. **Fixed Braces Section** - Aparelhos fixos (metálico tradicional, autoligado, estético cerâmico, safira) + CTA WhatsApp
9. **Why Choose** - 4 diferenciais principais
10. **Testimonials** - 4 depoimentos reais + banner de rating
11. **FAQ** - 6 perguntas frequentes com accordion + CTA WhatsApp
12. **Footer** - CTA final, navegação, contato, localização, Google Maps embed
13. **Booking Modal** - Sistema de agendamento (frontend-only com mock data)

### 🎨 Design Highlights
- Glassmorphism effects (header, overlays)
- Soft gradients e transições suaves
- Rounded corners e shadows profissionais
- Micro-animations nos hovers
- Premium healthcare aesthetic
- 100% responsivo (mobile-first)

### 📱 CTAs WhatsApp
Estrategicamente posicionados em:
- Header (desktop e mobile)
- Hero section (2 botões)
- Services section (bottom)
- Parent section (reassurance box)
- Teens & Adults section (avaliação gratuita)
- Fixed Braces section (qual aparelho ideal)
- FAQ section (ainda tem dúvidas)
- Footer (CTA final grande)

### 📸 Imagens Utilizadas
- **Hero:** Imagem profissional da Dra. Nadja no consultório
- **About:** Dra. Nadja no consultório com materiais
- **Parent Section:** Dra. Nadja abraçando criança paciente
- **Aparelhos Personalizados:** Imagem de aparelhos coloridos
- **Fixed Braces:** Imagem educativa dos tipos de aparelhos
- **Outras:** Imagens complementares do Unsplash

## Dados da Clínica
- **Nome:** Dra. Nadja Offa
- **Telefone/WhatsApp:** (11) 99720-3335
- **Endereço:** Av. Nossa Senhora do Ó, 865 - 16º andar - conjunto 1411 - Limão, São Paulo - SP
- **Prédio:** Helbor Offices São Paulo 3
- **Horário:** Até 20:00
- **Área de Atendimento:** Limão, Santana e regiões próximas
- **Google Maps:** https://maps.app.goo.gl/QLxGe6I9MWaWtlHvZ

## Serviços Oferecidos
1. Ortodontia Infantil (aparelhos fixos e removíveis)
2. Alinhadores Invisíveis
3. Ortopedia Funcional Pediátrica
4. Avaliação de Crescimento Ortodôntico
5. Tratamento de Má Oclusão (mordida cruzada, aberta, diastema)
6. Clareamento Dental
7. Odontopediatria (limpeza, adaptação, prevenção)
8. Escaneamento Digital 3D
9. Tratamento de Bruxismo Infantil

## Mock Data (Frontend)
Localização: `/app/frontend/src/data/mock.js`
- Informações da clínica
- Serviços
- Depoimentos
- FAQs
- Preocupações dos pais
- Diferenciais
- Slots de agendamento (mock)
- Tipos de consulta

## Backlog Prioritizado

### P0 (Próximos Passos)
- [ ] Backend API development
- [ ] Sistema de agendamento real (integrado com calendário)
- [ ] Formulário de contato funcional
- [ ] Integração com Google Maps API

### P1 (Futuro)
- [ ] Blog/conteúdo educativo
- [ ] Galeria de casos antes/depois
- [ ] Sistema de avaliações/reviews
- [ ] Área de paciente (login)
- [ ] Notificações de lembretes de consulta

### P2 (Nice to Have)
- [ ] Calculadora de tratamento
- [ ] Chat em tempo real
- [ ] Vídeos educativos
- [ ] Multi-idioma (PT/EN/ES)

## Next Action Items
1. Testar site completamente (frontend)
2. Validar responsividade em diversos dispositivos
3. Coletar feedback do cliente
4. Planejar desenvolvimento do backend
5. Definir API contracts para agendamento

## Tecnologias e Dependências
- React 19.0.0
- Shadcn/UI components
- Tailwind CSS 3.4.17
- Lucide React (ícones)
- React Hook Form + Zod (forms)
- Sonner (toasts)
- React Router DOM 7.5.1

---
**Última atualização:** Dezembro 2025
**Status:** Frontend MVP completo ✅
