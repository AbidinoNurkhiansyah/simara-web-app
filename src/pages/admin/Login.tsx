import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../features/auth/authSlice';
import api from '../../lib/axios';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';

const formSchema = z.object({
  email: z.string().email({
    message: 'Format email tidak valid.',
  }),
  password: z.string().min(6, {
    message: 'Password minimal 6 karakter.',
  }),
});

export default function AdminLogin() {
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMsg('');
    setIsLoading(true);
    try {
      const response = await api.post('/login', values);
      dispatch(setCredentials({
        user: response.data.user,
        token: response.data.token,
      }));
      navigate('/admin/dashboard');
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMsg('Email atau password salah.');
      } else {
        setErrorMsg('Terjadi kesalahan pada server.');
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-nunito">
      <Card className="w-full max-w-md border-t-4 border-t-primary shadow-xl">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
          <CardDescription>
            Masukkan email dan password untuk masuk ke Panel Admin.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-md text-center border border-red-200">
                  {errorMsg}
                </div>
              )}
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="admin@kua.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary-hover text-white" disabled={isLoading}>
                {isLoading ? 'Sedang Masuk...' : 'Masuk ke Dashboard'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
