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
    customerName: 'João Silva Santos',
    aiRecommendation: 'Esclarecer sobre as taxas do cartão e oferecer upgrade para categoria premium',
    customerSince: 'Janeiro/2020',
    relationshipLevel: 'Premium',
    accountNumber: '1234567890'
  };

  menuItems: MenuItem[] = [
    {
      "id": "dashboard",
      "label": "Dashboard / Início",
      "icon": "home",
      "subitems": [
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
      "id": "carteira",
      "label": "Minha Carteira",
      "icon": "users",
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
      "id": "atendimento",
      "label": "Atendimento ao Cliente",
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
      "label": "Produtos e Vendas",
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
      "id": "analise_oportunidades",
      "label": "Análise e Oportunidades",
      "icon": "trending-up",
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
      "id": "relatorios",
      "label": "Relatórios",
      "icon": "bar-chart",
      "subitems": [
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
        }
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
}
