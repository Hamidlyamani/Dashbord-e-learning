import { GalleryVerticalEnd } from "lucide-react"
import imgLogin from '@/assets/imgs/imgLogin.png'
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="relative hidden bg-muted lg:block">
                <img
                    src={imgLogin}
                    alt="Image"
                    className="absolute inset-0 h-full w-full object-cover z-0 dark:brightness-[0.2] dark:grayscale"
                />
                <div className="absolute z-10 bottom-16 left-16">
                    <div className="text-white text-[60px] font-urb_bold">Formly</div>
                    <div className="text-white text-[30px] font-medium">An LMS solution for your schools</div>
                   
                </div>
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex flex-1 items-center justify-center">
                    <div className="w-full max-w-[450px]">
                        <LoginForm />
                    </div>
                </div>
            </div>
           
        </div>
    )
}
