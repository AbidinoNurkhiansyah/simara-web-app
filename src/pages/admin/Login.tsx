import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import api from "../../lib/axios";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";

import logoSimara from "@/assets/simara-no-title.png";
import logoKemenag from "@/assets/KUA.webp";
import loginImg from "@/assets/login-image.svg";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email atau No Telepon harus diisi.",
  }),
  password: z.string().min(6, {
    message: "Password minimal 6 karakter.",
  }),
});

export default function AdminLogin() {
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMsg("");
    setIsLoading(true);
    try {
      const response = await api.post("/login", values);
      dispatch(
        setCredentials({
          user: response.data.user,
          token: response.data.token,
        }),
      );
      navigate("/admin/dashboard", { state: { loginSuccess: true } });
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMsg("Email atau password salah.");
      } else {
        setErrorMsg("Terjadi kesalahan pada server.");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen w-full flex bg-white font-nunito overflow-hidden">
      {/* Left Pane - Form */}
      <div className="w-full lg:w-[45%] p-8 md:p-12 lg:p-16 flex flex-col justify-center lg:justify-between gap-16 lg:gap-0 relative z-10">
        {/* Top Logo */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2 text-center md:text-left">
          <img
            src={logoSimara}
            alt="Logo Simara"
            className="w-26 md:w-12 md:h-12 object-contain"
          />
          <h1 className="text-primary font-medium font-roboto text-lg md:text-lg leading-tight">
            Sistem Manajemen Data Religi & Agama
          </h1>
        </div>

        {/* Form Container */}
        <div className="w-full max-w-md mx-auto my-0 lg:my-auto space-y-8">
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
                  <FormItem className="space-y-3">
                    <FormLabel className="text-gray-700 font-bold text-md">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Masukkan Email"
                        className="rounded-full bg-gray-100 border-0 h-12 px-5 text-base focus-visible:ring-[#2b5b31] focus-visible:ring-2 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel className="text-gray-700 font-bold text-md">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Masukkan Password"
                          className="rounded-full bg-gray-100 border-0 h-12 px-5 pr-12 text-base focus-visible:ring-[#2b5b31] focus-visible:ring-2 focus-visible:ring-offset-0"
                          {...field}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none cursor-pointer"
                        >
                          {showPassword ? (
                            <EyeOff className="w-5 h-5" />
                          ) : (
                            <Eye className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full rounded-full h-12 text-base md:text-lg font-bold bg-primary hover:bg-primary/80 text-white transition-colors cursor-pointer"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Sedang Memproses...
                    </>
                  ) : (
                    "Masuk"
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>

        {/* Bottom Logo */}
        <div className="flex items-center justify-center md:justify-start gap-2">
          <img
            src={logoKemenag}
            alt="Kemenag"
            className="w-10 h-10 object-contain"
          />
          <span className="font-roboto text-primary font-medium text-md md:text-lg">
            KUA PUSAKA Karawang Barat
          </span>
        </div>
      </div>

      {/* Right Pane - Image */}
      <div className="hidden lg:block lg:w-[65%] relative">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: `url(${loginImg})` }}
        />
      </div>
    </div>
  );
}
