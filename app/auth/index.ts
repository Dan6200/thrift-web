import { Session, User } from '@supabase/supabase-js'
import { supabase } from './supabase'

export async function createUserWithEmailAndPasswordWrapper(
  email: string,
  password: string,
): Promise<
  | {
      result: { user: User; session: Session } | null
      message: string
      success: true
    }
  | { result: string; message: string; success: false }
> {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error || data.user == null || data.session == null) {
      throw error ?? new Error()
    }

    return {
      result: data as any,
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
  | {
      result: { user: User; session: Session } | null
      message: string
      success: true
    }
  | { result: string; message: string; success: false }
> {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error || data.user == null || data.session == null) {
      throw error ?? new Error()
    }

    return {
      result: data.user as any,
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
