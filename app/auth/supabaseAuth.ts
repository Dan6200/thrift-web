import { createClient, User } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase URL or Anon Key environment variables.')
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function createUserWithEmailAndPasswordWrapper(
  email: string,
  password: string,
): Promise<
  | { result: User | null; message: string; success: true }
  | { result: string; message: string; success: false }
> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      throw error
    }

    return {
      result: data.user,
      message: 'Created User Account Successfully',
      success: true,
    }
  } catch (error) {
    return {
      result: error instanceof Error ? error.toString() : 'Unknown Error',
      message: 'Failed to Create User.',
      success: false,
    }
  }
}

export async function signInWithEmailAndPasswordWrapper(
  email: string,
  password: string,
): Promise<
  | { result: User | null; message: string; success: true }
  | { result: string; message: string; success: false }
> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      throw error
    }

    return {
      result: data.user,
      message: 'Signed In User Successfully',
      success: true,
    }
  } catch (error) {
    return {
      result: error instanceof Error ? error.toString() : 'Unknown Error',
      message: 'Failed to Sign In User.',
      success: false,
    }
  }
}

export async function signOutWrapper(setUser: any) {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw error
    }
    await setUser(null)
  } catch (e: any) {
    throw new Error('Error signing out -- Tag:2\n\t' + e.message)
  }
}
