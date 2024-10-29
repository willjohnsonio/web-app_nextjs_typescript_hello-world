import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Component() {
  return (
    <div className="flex h-screen">
      {/* Left side - Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground">Enter your credentials to access your account</p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign in
            </Button>
          </form>
          <div className="text-center text-sm">
            <a className="underline" href="#">
              Forgot password?
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Abstract Art */}
      <div className="hidden md:block w-1/2 bg-red-500 relative overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "rgb(239, 68, 68)", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "rgb(153, 27, 27)", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          <path
            d="M0 0 L50 100 L100 0 Z"
            fill="url(#grad)"
          />
          <circle cx="80" cy="20" r="15" fill="rgba(255,255,255,0.1)" />
          <circle cx="20" cy="80" r="10" fill="rgba(255,255,255,0.1)" />
          <path
            d="M20 20 Q50 50 80 80"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </div>
  )
}