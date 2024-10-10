import type {
	TicketType,
	CallWidgetType,
	PageViewsType,
	OrderChannelType,
	OpportunitiesType,
} from './types'

import logo1 from '@/assets/images/small/img-1.jpg'
import logo2 from '@/assets/images/small/img-2.jpg'
import logo3 from '@/assets/images/small/img-3.jpg'
import logo4 from '@/assets/images/small/img-4.jpg'

import oppo1 from '@/assets/images/widgets/opp-1.png'
import oppo2 from '@/assets/images/widgets/opp-2.png'
import oppo3 from '@/assets/images/widgets/opp-3.png'
import { FiLock, FiPackage, FiTag, FiZap } from 'react-icons/fi'

const ticketData: TicketType[] = [
	{
		title: 'New Tickets',
		count: 155,
		icon: FiTag,
	},
	{
		title: 'Open Tickets',
		count: 101,
		icon: FiPackage,
	},
	{
		title: 'On Hold',
		count: 15,
		icon: FiZap,
	},
	{
		title: 'Unassigned',
		count: 88,
		icon: FiLock,
	},
]

const callData: CallWidgetType[] = [
	{
		icon: 'phone',
		calltime: '0m:27s',
		title: 'Avg.Speed of answer',
		description: 'It is a long established fact that a reader.',
	},
	{
		icon: 'phone',
		calltime: '4m:30s',
		title: 'Time to Resolved Complaint',
		description: 'It is a long established fact that a reader.',
	},
]

const pageViewsData: PageViewsType[] = [
	{
		name: 'Dastone - Admin Dashboard',
		subName: 'analytic-index.html',
		logo: logo1,
		view: '4.3k',
	},
	{
		name: 'Metrica Simple- Admin Dashboard',
		subName: 'sales-index.html',
		logo: logo2,
		view: '4.3k',
	},
	{
		name: 'Crovex - Admin Dashboard',
		subName: 'helpdesk-index.html',
		logo: logo3,
		view: '2.9k',
	},
	{
		name: 'Annex - Admin Dashboard',
		subName: 'calendar.html',
		logo: logo4,
		view: '1.6k',
	},
]

const OrderChannelData: OrderChannelType[] = [
	{
		logo: logo1,
		title: 'Amazon',
		profitLoss: '+4.8',
		profitLossClass: 'success',
		progress: 42,
	},
	{
		logo: logo2,
		title: 'Flipkart',
		profitLoss: '-0.8',
		profitLossClass: 'danger',
		progress: 28,
	},
	{
		logo: logo3,
		title: 'Facebook',
		profitLoss: '+2.1',
		profitLossClass: 'success',
		progress: 18,
	},
	{
		logo: logo4,
		title: 'Instagram',
		profitLoss: '-1.1',
		profitLossClass: 'danger',
		progress: 12,
	},
]

const OpportunitiesData: OpportunitiesType[] = [
	{
		logo: oppo1,
		title: 'Starbucks coffee',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo2,
		title: 'Mc Donald',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo3,
		title: 'Life Good',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
	{
		logo: oppo1,
		title: 'Starbucks coffee',
		location: 'Seattle, Washington',
		email: 'Ernest@Webster.com',
	},
]

const transactions = [
	{
	  "date": "2024-10-01",
	  "end_of_day_balance": 1500.00,
	  "transactions": [
		{
		  "description": "Pagamento de serviços de consultoria e assessoria para o projeto X",
		  "balance_after": 1000.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 1, "name": "Serviços" },
		  "created_at": "2024-10-01T10:00:00Z",
		  "updated_at": "2024-10-01T10:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-01T10:00:00Z",
		  "transfer_type": "Receita",
		  "transaction_amount": 500.00,
		  "fit_id": "ABC123",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		},
		{
		  "description": "Recebimento de doação para o projeto Y",
		  "balance_after": 1500.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 2, "name": "Doações" },
		  "created_at": "2024-10-01T12:00:00Z",
		  "updated_at": "2024-10-01T12:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-01T12:00:00Z",
		  "transfer_type": "Receita",
		  "transaction_amount": 1000.00,
		  "fit_id": "DEF456",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		}
	  ]
	},
	{
	  "date": "2024-10-02",
	  "end_of_day_balance": 2200.00,
	  "transactions": [
		{
		  "description": "Venda de produtos do projeto B",
		  "balance_after": 2200.00,
		  "user": { "id": 2, "name": "Maria" },
		  "category": { "id": 3, "name": "Vendas" },
		  "created_at": "2024-10-02T10:00:00Z",
		  "updated_at": "2024-10-02T10:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-02T10:00:00Z",
		  "transfer_type": "Receita",
		  "transaction_amount": 1200.00,
		  "fit_id": "GHI789",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		}
	  ]
	},
	{
	  "date": "2024-10-03",
	  "end_of_day_balance": 200.00,
	  "transactions": [
		{
		  "description": "Pagamento de aluguel do escritório",
		  "balance_after": 700.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 4, "name": "Despesas" },
		  "created_at": "2024-10-03T09:00:00Z",
		  "updated_at": "2024-10-03T09:00:00Z",
		  "deleted_at": null,
		  "is_recurring": true,
		  "recurring_months": 12,
		  "diposted_date": "2024-10-03T09:00:00Z",
		  "transfer_type": "Despesa",
		  "transaction_amount": -1500.00,
		  "fit_id": "JKL012",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		},
		{
		  "description": "Compra de materiais de escritório",
		  "balance_after": 400.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 5, "name": "Materiais" },
		  "created_at": "2024-10-03T11:00:00Z",
		  "updated_at": "2024-10-03T11:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-03T11:00:00Z",
		  "transfer_type": "Despesa",
		  "transaction_amount": -300.00,
		  "fit_id": "MNO345",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		},
		{
		  "description": "Serviços de limpeza do escritório",
		  "balance_after": 200.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 4, "name": "Despesas" },
		  "created_at": "2024-10-03T13:00:00Z",
		  "updated_at": "2024-10-03T13:00:00Z",
		  "deleted_at": null,
		  "is_recurring": true,
		  "recurring_months": 6,
		  "diposted_date": "2024-10-03T13:00:00Z",
		  "transfer_type": "Despesa",
		  "transaction_amount": -200.00,
		  "fit_id": "PQR678",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		}
	  ]
	},
	{
	  "date": "2024-10-04",
	  "end_of_day_balance": -400.00,
	  "transactions": [
		{
		  "description": "Compra de softwares para o projeto C",
		  "balance_after": -400.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 6, "name": "Tecnologia" },
		  "created_at": "2024-10-04T09:00:00Z",
		  "updated_at": "2024-10-04T09:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-04T09:00:00Z",
		  "transfer_type": "Despesa",
		  "transaction_amount": -600.00,
		  "fit_id": "STU901",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		}
	  ]
	},
	{
	  "date": "2024-10-05",
	  "end_of_day_balance": -450.00,
	  "transactions": [
		{
		  "description": "Compra de materiais para o projeto Y",
		  "balance_after": -700.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 5, "name": "Materiais" },
		  "created_at": "2024-10-05T09:00:00Z",
		  "updated_at": "2024-10-05T09:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-05T09:00:00Z",
		  "transfer_type": "Despesa",
		  "transaction_amount": -300.00,
		  "fit_id": "VWX234",
		  "wallet": { "id": 1, "name": "Carteira Principal" }
		},
		{
		  "description": "Reembolso de despesas de viagem",
		  "balance_after": -450.00,
		  "user": { "id": 1, "name": "João" },
		  "category": { "id": 7, "name": "Reembolsos" },
		  "created_at": "2024-10-05T11:00:00Z",
		  "updated_at": "2024-10-05T11:00:00Z",
		  "deleted_at": null,
		  "is_recurring": false,
		  "recurring_months": null,
		  "diposted_date": "2024-10-05T11:00:00Z",
		  "transfer_type": "Receita",
		  "transaction_amount": 250.00,
		  "fit_id": "YZA567",
		  "wallet": { "id": 1, "name": "Carteira" }
		}]
	}
]
  




export {
	transactions,
	ticketData,
	callData,
	pageViewsData,
	OrderChannelData,
	OpportunitiesData,
}
