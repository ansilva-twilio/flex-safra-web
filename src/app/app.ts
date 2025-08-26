import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface CustomerInfo {
  contactReason: string;
  customerName: string;
  aiRecommendation: string;
  customerSince: string;
  relationshipLevel: string;
  accountNumber: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon?: string;
  route?: string;
  subitems?: MenuItem[];
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('safra-flex-app');
  
  customerInfo: CustomerInfo = {
    contactReason: 'Dúvidas sobre cartão de crédito',
    customerName: 'André Silva',
    aiRecommendation: 'Esclarecer sobre as taxas do crédito rotativo do cartão Visa Platinum e oferecer upgrade para categoria Visa Infinite',
    customerSince: 'Janeiro/2020',
    relationshipLevel: 'Master',
    accountNumber: '978773-4'
  };

  menuItems: MenuItem[] = [
    {
      "id": "dashboard",
      "label": "Dashboard",
      "icon": "home",
      "subitems": [
        {
          "id": "carteira",
          "label": "Minha Carteira",
      
          "subitems": [
            {
              "id": "clientes_ativos",
              "label": "Clientes Ativos",
              "route": "/carteira/ativos"
            },
            {
              "id": "novos_clientes",
              "label": "Novos Clientes Designados",
              "route": "/carteira/novos"
            },
            {
              "id": "clientes_inativos",
              "label": "Clientes Inativos/Recuperação",
              "route": "/carteira/inativos"
            },
            {
              "id": "aniversariantes",
              "label": "Aniversariantes do Mês",
              "route": "/carteira/aniversariantes"
            },
            {
              "id": "perfil_risco",
              "label": "Perfil de Risco da Carteira",
              "route": "/carteira/risco"
            },
            {
              "id": "segmentacao",
              "label": "Segmentação de Clientes",
              "route": "/carteira/segmentacao"
            }
          ]
        },

        {
          "id": "agenda_dia",
          "label": "Agenda do Dia",
          "route": "/dashboard/agenda"
        },
        {
          "id": "clientes_contato",
          "label": "Clientes para Contato",
          "route": "/dashboard/contatos"
        },
        {
          "id": "alertas_oportunidades",
          "label": "Alertas e Oportunidades",
          "route": "/dashboard/alertas"
        },
        {
          "id": "tarefas_pendentes",
          "label": "Tarefas Pendentes",
          "route": "/dashboard/tarefas"
        },
        {
          "id": "resumo_performance",
          "label": "Resumo de Performance",
          "route": "/dashboard/performance"
        }
      ]
    },
    
    {
      "id": "atendimento",
      "label": "SAC",
      "icon": "headphones",
      "subitems": [
        {
          "id": "consulta_dados",
          "label": "Consulta de Dados do Cliente",
          "route": "/atendimento/consulta"
        },
        {
          "id": "saldos_extratos",
          "label": "Saldos e Extratos",
          "route": "/atendimento/saldos"
        },
        {
          "id": "historico_produtos",
          "label": "Histórico de Produtos Contratados",
          "route": "/atendimento/historico"
        },
        {
          "id": "canais_relacionamento",
          "label": "Canais de Relacionamento",
          "route": "/atendimento/canais"
        },
        {
          "id": "reclamacoes",
          "label": "Reclamações e Solicitações",
          "route": "/atendimento/reclamacoes"
        },
        {
          "id": "documentos",
          "label": "Documentos e Contratos",
          "route": "/atendimento/documentos"
        }
      ]
    },
    {
      "id": "produtos_vendas",
      "label": "Produtos",
      "icon": "shopping-cart",
      "subitems": [
        {
          "id": "simuladores",
          "label": "Simuladores",
          "route": "/produtos/simuladores",
          "subitems": [
            {
              "id": "sim_credito",
              "label": "Crédito Pessoal",
              "route": "/produtos/simuladores/credito"
            },
            {
              "id": "sim_financiamento",
              "label": "Financiamentos",
              "route": "/produtos/simuladores/financiamento"
            },
            {
              "id": "sim_investimento",
              "label": "Investimentos",
              "route": "/produtos/simuladores/investimento"
            },
            {
              "id": "sim_cartao",
              "label": "Cartão de Crédito",
              "route": "/produtos/simuladores/cartao"
            }
          ]
        },
        {
          "id": "propostas_andamento",
          "label": "Propostas em Andamento",
          "route": "/produtos/propostas"
        },
        {
          "id": "aprovacoes_pendentes",
          "label": "Aprovações Pendentes",
          "route": "/produtos/aprovacoes"
        },
        {
          "id": "catalogo_produtos",
          "label": "Catálogo de Produtos",
          "route": "/produtos/catalogo"
        },
        {
          "id": "campanhas_ativas",
          "label": "Campanhas Ativas",
          "route": "/produtos/campanhas"
        },
        {
          "id": "metas_vendas",
          "label": "Metas e Vendas Realizadas",
          "route": "/produtos/metas"
        },
        {
          "id": "comissoes",
          "label": "Comissões e Incentivos",
          "route": "/produtos/comissoes"
        }
      ]
    },
    {
      "id": "relacionamento",
      "label": "Relacionamento",
      "icon": "message-circle",
      "subitems": [
        {
          "id": "historico_contatos",
          "label": "Histórico de Contatos",
          "route": "/relacionamento/historico"
        },
        {
          "id": "agendamentos",
          "label": "Agendamentos",
          "route": "/relacionamento/agendamentos"
        },
        {
          "id": "followups",
          "label": "Follow-ups Programados",
          "route": "/relacionamento/followups"
        },
        {
          "id": "anotacoes_cliente",
          "label": "Anotações do Cliente",
          "route": "/relacionamento/anotacoes"
        },
        {
          "id": "comunicacao",
          "label": "Comunicação",
          "route": "/relacionamento/comunicacao",
          "subitems": [
            {
              "id": "enviar_email",
              "label": "Enviar E-mail",
              "route": "/relacionamento/comunicacao/email"
            },
            {
              "id": "enviar_whatsapp",
              "label": "Enviar WhatsApp",
              "route": "/relacionamento/comunicacao/whatsapp"
            },
            {
              "id": "enviar_sms",
              "label": "Enviar SMS",
              "route": "/relacionamento/comunicacao/sms"
            }
          ]
        },
        {
          "id": "pesquisas_satisfacao",
          "label": "Pesquisas de Satisfação",
          "route": "/relacionamento/pesquisas"
        }
      ]
    }, 
    {
      "id": "relatorios",
      "label": "Relatórios",
      "icon": "bar-chart",
      "subitems": [
        {
          "id": "analise_oportunidades",
          "label": "Análises",
          "subitems": [
            {
              "id": "cross_selling",
              "label": "Cross-selling e Up-selling",
              "route": "/analise/cross-selling"
            },
            {
              "id": "comportamento_cliente",
              "label": "Análise de Comportamento do Cliente",
              "route": "/analise/comportamento"
            },
            {
              "id": "potencial_investimento",
              "label": "Potencial de Investimento",
              "route": "/analise/potencial"
            },
            {
              "id": "upgrade_conta",
              "label": "Clientes para Upgrade de Conta",
              "route": "/analise/upgrade"
            },
            {
              "id": "score_relacionamento",
              "label": "Score de Relacionamento",
              "route": "/analise/score"
            },
            {
              "id": "oportunidades_perdidas",
              "label": "Oportunidades Perdidas",
              "route": "/analise/perdidas"
            }
          ]
        },
        {
          "id": "performance_pessoal",
          "label": "Performance Pessoal",
          "route": "/relatorios/performance"
        },
        {
          "id": "relatorio_vendas",
          "label": "Relatório de Vendas",
          "route": "/relatorios/vendas"
        },
        {
          "id": "indicadores_relacionamento",
          "label": "Indicadores de Relacionamento",
          "route": "/relatorios/relacionamento"
        },
        {
          "id": "comissoes_detalhado",
          "label": "Relatório de Comissões",
          "route": "/relatorios/comissoes"
        },
        {
          "id": "evolucao_carteira",
          "label": "Evolução da Carteira",
          "route": "/relatorios/evolucao"
        },
        {
          "id": "metas_periodo",
          "label": "Metas por Período",
          "route": "/relatorios/metas"
        },
        {
          "id": "exportar_dados",
          "label": "Exportar Dados",
          "route": "/relatorios/exportar"
        },
        
      ]
    },
    {
      "id": "configuracoes",
      "label": "Configurações",
      "icon": "settings",
      "subitems": [
        {
          "id": "preferencias_atendimento",
          "label": "Preferências de Atendimento",
          "route": "/configuracoes/preferencias"
        },
        {
          "id": "notificacoes",
          "label": "Notificações",
          "route": "/configuracoes/notificacoes"
        },
        {
          "id": "dados_pessoais",
          "label": "Dados Pessoais",
          "route": "/configuracoes/dados"
        },
        {
          "id": "assinatura_digital",
          "label": "Assinatura Digital",
          "route": "/configuracoes/assinatura"
        },
        {
          "id": "backup_dados",
          "label": "Backup de Dados",
          "route": "/configuracoes/backup"
        },
        {
          "id": "ajuda_suporte",
          "label": "Ajuda e Suporte",
          "route": "/configuracoes/ajuda"
        }
      ]
    }
  ];

  getIconSymbol(iconName: string): string {
    const icons: { [key: string]: string } = {
      'home': '🏠',
      'users': '👥',
      'headphones': '🎧',
      'shopping-cart': '🛒',
      'message-circle': '💬',
      'trending-up': '📈',
      'bar-chart': '📊',
      'settings': '⚙️'
    };
    return icons[iconName] || '📋';
  }

  private hideTimeouts: { [key: string]: any } = {};

  onMenuItemHover(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const menuItem = button.closest('.menu-item');
    const submenu = menuItem?.querySelector('.submenu') as HTMLElement;
    
    if (submenu) {
      // Clear any pending hide timeout
      const itemId = menuItem?.getAttribute('data-item-id');
      if (itemId && this.hideTimeouts[itemId]) {
        clearTimeout(this.hideTimeouts[itemId]);
        delete this.hideTimeouts[itemId];
      }
      
      const rect = button.getBoundingClientRect();
      submenu.style.top = `${rect.bottom}px`;
      submenu.style.left = `${rect.left}px`;
      
      // Make visible through JavaScript for consistency
      submenu.style.opacity = '1';
      submenu.style.visibility = 'visible';
      submenu.style.transform = 'translateY(0)';
    }
  }

  onMenuItemLeave(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const menuItem = button.closest('.menu-item');
    const submenu = menuItem?.querySelector('.submenu') as HTMLElement;
    
    if (submenu) {
      const itemId = menuItem?.getAttribute('data-item-id');
      if (itemId) {
        // Delay hiding to allow mouse to move to dropdown
        this.hideTimeouts[itemId] = setTimeout(() => {
          submenu.style.top = '0px';
          submenu.style.left = '0px';
          submenu.style.opacity = '0';
          submenu.style.visibility = 'hidden';
          submenu.style.transform = 'translateY(-8px)';
          delete this.hideTimeouts[itemId];
        }, 150);
      }
    }
  }

  onSubmenuHover(event: MouseEvent) {
    const submenu = event.target as HTMLElement;
    const menuItem = submenu.closest('.menu-item');
    const itemId = menuItem?.getAttribute('data-item-id');
    
    // Clear hide timeout when hovering over dropdown
    if (itemId && this.hideTimeouts[itemId]) {
      clearTimeout(this.hideTimeouts[itemId]);
      delete this.hideTimeouts[itemId];
    }
  }

  onSubmenuLeave(event: MouseEvent) {
    const submenu = event.target as HTMLElement;
    const menuItem = submenu.closest('.menu-item');
    const itemId = menuItem?.getAttribute('data-item-id');
    
    if (itemId) {
      // Hide dropdown when leaving it
      this.hideTimeouts[itemId] = setTimeout(() => {
        const submenuEl = menuItem?.querySelector('.submenu') as HTMLElement;
        if (submenuEl) {
          submenuEl.style.top = '0px';
          submenuEl.style.left = '0px';
          submenuEl.style.opacity = '0';
          submenuEl.style.visibility = 'hidden';
          submenuEl.style.transform = 'translateY(-8px)';
        }
        delete this.hideTimeouts[itemId];
      }, 150);
    }
  }

  onSubmenuItemHover(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const submenuItem = button.closest('.submenu-item');
    const subsubmenu = submenuItem?.querySelector('.subsubmenu') as HTMLElement;
    
    if (subsubmenu) {
      // Clear any pending hide timeout for sub-submenus
      const itemId = submenuItem?.getAttribute('data-subitem-id');
      
      if (itemId && this.hideTimeouts[itemId]) {
        clearTimeout(this.hideTimeouts[itemId]);
        delete this.hideTimeouts[itemId];
      }
      
      const rect = button.getBoundingClientRect();

      // Calculate position - make sure it's visible
      const viewportWidth = window.innerWidth;
      const subsubmenuWidth = 220; // min-width from CSS
      
      let leftPos = rect.width - 5; // Add small gap
      let topPos = rect.top - 120;
      
      // If sub-submenu would go off-screen to the right, position it to the left instead
      if (leftPos + subsubmenuWidth > viewportWidth - 20) { // 20px margin from edge
        leftPos = rect.left - subsubmenuWidth - 5; // Position to the left with gap
      }
      
      // If it would still go off-screen to the left, just put it at a safe position
      if (leftPos < 20) {
        leftPos = 20; // 20px from left edge
      }
      
      subsubmenu.style.top = `${topPos}px`;
      subsubmenu.style.left = `${leftPos}px`;
      
      // Make visible through JavaScript since CSS hover is broken with fixed positioning
      subsubmenu.style.opacity = '1';
      subsubmenu.style.visibility = 'visible';
      subsubmenu.style.transform = 'translateX(0)';
    }
  }

  onSubmenuItemLeave(event: MouseEvent) {
    const button = event.target as HTMLElement;
    const submenuItem = button.closest('.submenu-item');
    const subsubmenu = submenuItem?.querySelector('.subsubmenu') as HTMLElement;
    
    if (subsubmenu) {
      const itemId = submenuItem?.getAttribute('data-subitem-id');
      if (itemId) {
        // Delay hiding to allow mouse to move to sub-submenu
        this.hideTimeouts[itemId] = setTimeout(() => {
          subsubmenu.style.top = '0px';
          subsubmenu.style.left = '0px';
          subsubmenu.style.opacity = '0';
          subsubmenu.style.visibility = 'hidden';
          subsubmenu.style.transform = 'translateX(-8px)';
          delete this.hideTimeouts[itemId];
        }, 150);
      }
    }
  }

  onSubSubmenuHover(event: MouseEvent) {
    const subsubmenu = event.target as HTMLElement;
    const submenuItem = subsubmenu.closest('.submenu-item');
    const itemId = submenuItem?.getAttribute('data-subitem-id');
    
    // Clear hide timeout when hovering over sub-submenu
    if (itemId && this.hideTimeouts[itemId]) {
      clearTimeout(this.hideTimeouts[itemId]);
      delete this.hideTimeouts[itemId];
    }
  }

  onSubSubmenuLeave(event: MouseEvent) {
    const subsubmenu = event.target as HTMLElement;
    const submenuItem = subsubmenu.closest('.submenu-item');
    const itemId = submenuItem?.getAttribute('data-subitem-id');
    
    if (itemId) {
      // Hide sub-submenu when leaving it
      this.hideTimeouts[itemId] = setTimeout(() => {
        const subsubmenuEl = submenuItem?.querySelector('.subsubmenu') as HTMLElement;
        if (subsubmenuEl) {
          subsubmenuEl.style.top = '0px';
          subsubmenuEl.style.left = '0px';
          subsubmenuEl.style.opacity = '0';
          subsubmenuEl.style.visibility = 'hidden';
          subsubmenuEl.style.transform = 'translateX(-8px)';
        }
        delete this.hideTimeouts[itemId];
      }, 150);
    }
  }
}
