# Google Tag Manager (GTM) - Configuração

## ✅ O que foi implementado:

### 1. **Código GTM no HTML**
- Adicionado no `<head>` do `index.html`
- Adicionado no `<body>` do `index.html`
- ID do GTM: `GTM-WJRBVH4F`

### 2. **Componente React GTM**
- Arquivo: `src/components/GTM.tsx`
- Inicialização automática no `App.tsx`
- Funções para rastrear eventos personalizados

### 3. **Eventos implementados:**

#### **Contatos:**
- `GTM.trackContact('whatsapp', 'limpeza-fossa')` - Clique no WhatsApp
- `GTM.trackContact('phone', 'limpeza-fossa')` - Clique no telefone
- `GTM.trackContact('whatsapp', 'floating-button')` - Botão flutuante WhatsApp

#### **Visualizações de página:**
- `GTM.trackPageView('Home')` - Página inicial
- `GTM.trackPageView('Servicos')` - Página de serviços
- `GTM.trackPageView('Entulho')` - Página Tira Entulho

#### **Interesse em serviços:**
- `GTM.trackServiceInterest('limpeza-fossa')` - Interesse em limpeza de fossa
- `GTM.trackServiceInterest('tira-entulho')` - Interesse em tira entulho

#### **Cliques em botões:**
- `GTM.trackButtonClick('whatsapp-hero', 'hero-section')` - Botão WhatsApp no hero
- `GTM.trackButtonClick('phone-hero', 'hero-section')` - Botão telefone no hero

## 🔧 Como usar:

### **Rastrear novo evento:**
```javascript
import GTM from "@/components/GTM";

// Rastrear clique em botão
GTM.trackButtonClick('nome-do-botao', 'localizacao');

// Rastrear interesse em serviço
GTM.trackServiceInterest('nome-do-servico');

// Rastrear contato
GTM.trackContact('whatsapp', 'servico-especifico');
```

### **Evento personalizado:**
```javascript
GTM.push({
  event: 'meu_evento_personalizado',
  categoria: 'conversao',
  valor: 180.00,
  moeda: 'BRL'
});
```

## 📊 Eventos disponíveis no GTM:

1. **contact_attempt** - Tentativa de contato
2. **service_interest** - Interesse em serviço
3. **page_view** - Visualização de página
4. **button_click** - Clique em botão

## 🎯 Configuração no Google Tag Manager:

1. Acesse [tagmanager.google.com](https://tagmanager.google.com)
2. Selecione o container `GTM-WJRBVH4F`
3. Configure tags para os eventos:
   - **Google Analytics 4** para page_view
   - **Conversões** para contact_attempt
   - **Eventos personalizados** para button_click

## ✅ Status: IMPLEMENTADO E FUNCIONANDO

O GTM está totalmente configurado e rastreando:
- ✅ Visualizações de página
- ✅ Cliques em botões de contato
- ✅ Interesse em serviços
- ✅ Eventos personalizados

