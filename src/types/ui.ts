/**
 * Типы для UI компонентов
 * Упрощенные модели для отображения в интерфейсе
 */

/**
 * Упрощенная модель для карточки монеты
 * Используется в списках и превью
 */
export interface CoinCardData {
  id: string
  name: string
  symbol: string
  current_price: number
  price_change_percentage_24h: number
  image?: string
}

/**
 * Состояния загрузки
 */
export type LoadingState = 'idle' | 'loading' | 'success' | 'error'

/**
 * Тип сортировки для UI
 */
export type SortOption = {
  label: string
  value: string
}

/**
 * Настройки отображения списка
 */
export interface ListViewSettings {
  sortBy: string
  perPage: number
  currentPage: number
}
