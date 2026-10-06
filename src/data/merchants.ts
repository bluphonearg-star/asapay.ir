export interface Merchant {
  id: number
  name: string
  category: string
  city: string
  logoText: string
  logoColor: string
}

export const merchants: Merchant[] = [
  { id: 1, name: 'فروشگاه آرمان', category: 'لوازم خانگی', city: 'تهران', logoText: 'آ', logoColor: '#146BFF' },
  { id: 2, name: 'کلینیک سلامت', category: 'خدمات پزشکی', city: 'اصفهان', logoText: 'س', logoColor: '#0B1F3A' },
  { id: 3, name: 'بوتیک مارال', category: 'پوشاک', city: 'تهران', logoText: 'م', logoColor: '#5B9BFF' },
  { id: 4, name: 'دیجیتال سنتر', category: 'لوازم دیجیتال', city: 'شیراز', logoText: 'د', logoColor: '#146BFF' },
  { id: 5, name: 'آژانس پرواز', category: 'خدمات مسافرتی', city: 'تهران', logoText: 'پ', logoColor: '#0B1F3A' },
  { id: 6, name: 'رستوران گلستان', category: 'رستوران', city: 'مشهد', logoText: 'گ', logoColor: '#5B9BFF' },
  { id: 7, name: 'مبلمان راحتی', category: 'مبلمان', city: 'تبریز', logoText: 'م', logoColor: '#146BFF' },
  { id: 8, name: 'مرکز تعمیرات خودرو', category: 'خدمات خودرو', city: 'کرج', logoText: 'ت', logoColor: '#0B1F3A' },
]
