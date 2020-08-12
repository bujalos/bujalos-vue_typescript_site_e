type Usage = {
  limit: number | 'unlimited',
  count: number
}

type Address = {
  street: string,
  city: string,
  zip: string,
  country: string
}

type UserType = 'business' | 'agency' | 'nonprofit' | 'educational' |'private'

type Subscription = 'none' | 'initial' | 'basic' | 'professional'

namespace Types {

  export interface User {
    id: number,
    firstName?: string,
    lastName?: string,
    phone?: string,
    company?: string,
    dob?: moment.Moment | string,
    type?: UserType,
    email: string,
    created: moment.Moment | string,
    subscription: Subscription,
    website?: string,
    address?: Address,
    usage?: {
      scans: Usage,
      codes: {
        static: Usage,
        dynamic: Usage
      },
      users: Usage
    }
  }
}
