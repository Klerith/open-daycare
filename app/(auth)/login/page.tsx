import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] bg-[#FBF4EC]">
      {/* Left panel */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#F6A98E] via-[#F2937A] to-[#EC7E62] flex flex-col justify-between p-14 sm:p-14 text-white">
        {/* Decorative circles */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-white/12 -top-[140px] -right-[120px]" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/10 -bottom-[110px] -left-[80px]" />

        {/* Logo */}
        <div className="flex items-center gap-3 relative">
          <div className="w-[46px] h-[46px] rounded-[14px] bg-white/22 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </div>
          <span className="font-head font-semibold text-xl tracking-wide">OpenDayCare</span>
        </div>

        {/* Tagline */}
        <div className="relative">
          <h1 className="font-head font-semibold text-[42px] leading-[1.12] mb-4">
            El día de cada niño,<br />compartido con su familia.
          </h1>
          <p className="text-lg leading-[1.6] max-w-[430px] text-white/92">
            Publicá momentos, gestioná las salas y mantené a las familias cerca, desde un solo lugar.
          </p>
        </div>

        {/* Footer */}
        <div className="relative text-sm text-white/90">🌿 Guardería Sala Soles</div>
      </div>

      {/* Right panel */}
      <div className="flex items-center justify-center p-10">
        <div className="w-full max-w-[392px]">
          <h2 className="font-head font-semibold text-3xl mb-1 text-[#3F362E]">Iniciar sesión</h2>
          <p className="mb-7 text-[#94887B] text-sm">Ingresá para ver el día de hoy.</p>

          {/* Role selector */}
          <div className="text-xs font-bold tracking-wider text-[#94887B] mb-2">INGRESO COMO</div>
          <div className="flex gap-2.5 mb-5">
            <button
              type="button"
              className="flex-1 flex items-center gap-2 p-3.5 rounded-[14px] border-[1.5px] border-[#F2937A] bg-[#FBE3D8] text-[#D9583C] font-bold text-sm transition-[0.15s] cursor-default"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              Personal
            </button>
            <button
              type="button"
              className="flex-1 flex items-center gap-2 p-3.5 rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-[#6E6359] font-bold text-sm transition-[0.15s] cursor-default"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Familia
            </button>
          </div>

          {/* Email */}
          <div className="text-xs font-bold tracking-wider text-[#94887B] mb-2">EMAIL</div>
          <input
            type="email"
            defaultValue="caro@opendaycare.com"
            className="w-full p-3.5 px-4 rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-base text-[#3F362E] mb-4 placeholder:text-[#B6A99B]"
          />

          {/* Password */}
          <div className="text-xs font-bold tracking-wider text-[#94887B] mb-2">CONTRASEÑA</div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full p-3.5 px-4 rounded-[14px] border-[1.5px] border-[#EADFD0] bg-white text-base text-[#3F362E] mb-2.5 placeholder:text-[#B6A99B]"
          />

          {/* Forgot password */}
          <div className="text-right mb-5">
            <span className="text-[#C5503A] text-[13.5px] font-bold cursor-default">¿Olvidaste tu contraseña?</span>
          </div>

          {/* Login button */}
          <div
            className="block text-center w-full p-4 rounded-[15px] bg-gradient-to-b from-[#F4977E] to-[#EE8164] text-white font-extrabold text-base cursor-default shadow-[0_10px_22px_-8px_rgba(238,129,100,0.7)]"
          >
            Iniciar sesión
          </div>

          {/* Footer link */}
          <p className="text-center mt-6 text-[#94887B] text-[14.5px]">
            ¿Te invitó la guardería?{' '}
            <Link href="/activate" className="text-[#C5503A] font-extrabold">
              Activá tu cuenta
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
