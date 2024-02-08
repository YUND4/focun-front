export interface User {
  id: string,
  email: string;
  avatar?: string;
  status?: string;
  position_code?: string;
  area_code?: string;
  role_code?: string;
  name: string,
  last_name: string,
  authenticable?: {
    id: any,
    email: string
  },
  profile?: {
    id: any,
    created_at: string,
    updated_at: string,
    description: string,
    country: string,
    phone: string,
    image: string,
    curriculum: string
  }
}
