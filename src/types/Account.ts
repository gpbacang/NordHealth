export type AccountData = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  confirmPassword?: string
  receiveUpdates?: boolean
}

export type LoginData = Omit<
  AccountData,
  'firstName' | 'lastName' | 'confirmPassword' | 'receiveUpdates'
>

export type AccountUpdateData = Omit<AccountData, 'password' | 'confirmPassword' | 'receiveUpdates'>
