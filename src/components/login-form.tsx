import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import LogoTypo from "@/assets/imgs/LogoTypo.png"
import eye from "@/assets/imgs/eye.png"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col gap-2 ">
        <img src={LogoTypo} alt="" className="w-[260px]" />
      </div>
      <div className="flex flex-col  gap-2 text-white">
        <h1 className="text-[36px] font-urb_bold">Se connecter</h1>
        <p className=" text-[16px] text-[#D2D2D2]">
          Entrez votre email et mot de passe
        </p>
      </div>
      <div className="grid gap-6 my-3 text-white">
        <div className="grid gap-3">
          <Label htmlFor="email" className="text-[14px] font-Urb_medium  ">Email<span className="text-blue">*</span></Label>
          <Input id="email" className="bg-[#0B3665] h-[58px] p-4 placeholder:text-[14px] text-white border-[#969696] " type="email" placeholder="mail@simmmple.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password" className="text-[14px] font-Urb_medium  ">Password<span className="text-blue">*</span></Label>

          </div>
          <div className="relative">
            <Input id="password" className="bg-[#0B3665] h-[58px] p-4 placeholder:text-[14px] text-white border-[#969696] " placeholder="Min. 8 characters" type="password" required />
            <img src={eye} alt="" className="absolute right-3 top-4.5" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 ">
            <input type="checkbox" id="rester" className="form-checkbox" />
            <label htmlFor="rester" className="text-[14px]">Rester connecté</label>
          </div>
          <a
            href="#"
            className="ml-auto text-[14px] underline-offset-4 hover:underline"
          >
            Mot de passe oublié?
          </a>
        </div>
        <Button type="submit" className="w-full text-[14px] font-bold h-[60px] bg-blue">
          Se connecter
        </Button>

      </div>


    </form>
  )
}
