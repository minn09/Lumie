import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import {
  CheckCircle,
  CheckCircle2,
  Layers,
  ArrowRight,
  Sparkles,
  Calendar,
  UserPlus,
  BarChart2,
} from "lucide-react";

import { Link } from "react-router";

function LandingPage() {
  return (
    <div className="flex min-h-screen w-full flex-col mx-auto max-w-[1920px]">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Lumie</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Características
            </a>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Cómo Funciona
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Testimonios
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Precios
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Iniciar Sesión
            </a>
            <Button>Comenzar gratis</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32 space-y-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium mb-4">
              <span className="text-primary">✨ Organiza mejor tus tareas</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Gestiona proyectos con <span className="text-primary">Lumie</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-[700px]">
              La forma más intuitiva de gestionar proyectos, colaborar con tu
              equipo y aumentar la productividad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/project"
                className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md"
              >
                Comenzar gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Button size="lg" variant="outline">
                Ver Demo
              </Button>
            </div>
          </div>
          <div className="relative mx-auto mt-16 w-full max-w-5xl rounded-xl border bg-background shadow-lg">
            <img
              src="/placeholder.svg?height=720&width=1280"
              width={1280}
              height={720}
              alt="Dashboard de Lumie"
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full bg-muted/40 py-16 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Características que impulsan tu productividad
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Herramientas diseñadas para ayudarte a gestionar tus proyectos
                de manera eficiente
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <Calendar className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">
                      Planificación intuitiva
                    </h3>
                    <p className="text-muted-foreground">
                      Arrastra y suelta tareas en un calendario visual para una
                      planificación sin esfuerzo
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <Layers className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">
                      Vistas personalizables
                    </h3>
                    <p className="text-muted-foreground">
                      Cambia entre vistas de Kanban, lista o calendario según
                      tus preferencias
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <UserPlus className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">
                      Colaboración en equipo
                    </h3>
                    <p className="text-muted-foreground">
                      Invita a miembros, asigna tareas y colabora en tiempo real
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <BarChart2 className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">
                      Estadísticas avanzadas
                    </h3>
                    <p className="text-muted-foreground">
                      Obtén información valiosa sobre el progreso y rendimiento
                      de tu equipo
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <CheckCircle className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">Seguimiento de tareas</h3>
                    <p className="text-muted-foreground">
                      Mantén un registro detallado del progreso de cada tarea
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <Sparkles className="h-10 w-10 text-primary mb-2" />
                    <h3 className="text-xl font-bold">Automatizaciones</h3>
                    <p className="text-muted-foreground">
                      Ahorra tiempo con flujos de trabajo automatizados para
                      tareas repetitivas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section
          id="how-it-works"
          className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
        >
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Cómo funciona Lumie
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Un flujo de trabajo sencillo para maximizar tu productividad
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-sm">
                  <span className="text-3xl font-semibold">1</span>
                </div>
                <h3 className="text-xl font-bold">Crea un proyecto</h3>
                <p className="text-center text-muted-foreground">
                  Define tu proyecto, establece objetivos y metas claras para el
                  equipo
                </p>
              </div>

              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-sm">
                  <span className="text-3xl font-semibold">2</span>
                </div>
                <h3 className="text-xl font-bold">Añade y asigna tareas</h3>
                <p className="text-center text-muted-foreground">
                  Crea tareas, establece plazos y asígnalas a los miembros del
                  equipo
                </p>
              </div>

              <div className="group relative flex flex-col items-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border bg-background shadow-sm">
                  <span className="text-3xl font-semibold">3</span>
                </div>
                <h3 className="text-xl font-bold">
                  Realiza un seguimiento del progreso
                </h3>
                <p className="text-center text-muted-foreground">
                  Visualiza el avance de tu proyecto a través de tableros y
                  gráficos intuitivos
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="testimonials"
          className="w-full bg-muted/40 py-16 md:py-24 lg:py-32"
        >
          <div className="container mx-auto px-4 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Lo que dicen nuestros usuarios
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Miles de equipos confían en Lumie para gestionar sus proyectos
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
              <Card className="w-full">
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-0.5 text-primary">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "Lumie transformó la forma en que nuestro equipo gestiona
                      los proyectos. Ahora somos mucho más eficientes."
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="text-sm font-medium">María Rodríguez</p>
                        <p className="text-xs text-muted-foreground">
                          Gerente de Proyectos, Empresa ABC
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-0.5 text-primary">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "La interfaz intuitiva y las potentes funciones de Lumie
                      hacen que la gestión de proyectos sea una tarea sencilla."
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="text-sm font-medium">Carlos López</p>
                        <p className="text-xs text-muted-foreground">
                          Director de Operaciones, XYZ Inc.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex gap-0.5 text-primary">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "Desde que empezamos a usar Lumie, hemos reducido nuestros
                      plazos de entrega en un 30%. Simplemente impresionante."
                    </p>
                    <div className="flex items-center gap-2 pt-4">
                      <div className="h-10 w-10 rounded-full bg-muted"></div>
                      <div>
                        <p className="text-sm font-medium">Ana Martínez</p>
                        <p className="text-xs text-muted-foreground">
                          Líder de Equipo, StartUp Tech
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
        >
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Planes simples y transparentes
              </h2>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Elige el plan perfecto para ti o tu equipo
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardContent className="pt-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Gratis</h3>
                    <p className="text-4xl font-bold">
                      €0
                      <span className="text-muted-foreground text-sm font-normal">
                        /mes
                      </span>
                    </p>
                    <p className="text-muted-foreground">
                      Para individuos y pequeños proyectos
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Hasta 3 proyectos</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Tareas ilimitadas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Vista Kanban básica</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" variant="outline">
                      Comenzar gratis
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col border-primary">
                <CardContent className="pt-6 flex-1">
                  <div className="space-y-2">
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      Popular
                    </div>
                    <h3 className="text-xl font-bold">Pro</h3>
                    <p className="text-4xl font-bold">
                      €9
                      <span className="text-muted-foreground text-sm font-normal">
                        /mes
                      </span>
                    </p>
                    <p className="text-muted-foreground">
                      Para profesionales y equipos pequeños
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Proyectos ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Colaboración con 5 usuarios
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Todas las vistas (Kanban, Lista, Calendario)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Automatizaciones básicas</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full">Comenzar Ahora</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardContent className="pt-6 flex-1">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Empresa</h3>
                    <p className="text-4xl font-bold">
                      €29
                      <span className="text-muted-foreground text-sm font-normal">
                        /mes
                      </span>
                    </p>
                    <p className="text-muted-foreground">
                      Para equipos y organizaciones grandes
                    </p>
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Todo lo de Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Usuarios ilimitados</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Automatizaciones avanzadas
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">
                        Análisis y reportes avanzados
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Soporte prioritario</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button className="w-full" variant="outline">
                      Contactar Ventas
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Empieza a gestionar tus proyectos hoy mismo
            </h2>
            <p className="text-xl max-w-[700px] mx-auto opacity-90">
              Prueba Lumie gratis durante 14 días, sin necesidad de tarjeta de
              crédito
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button size="lg" variant="secondary">
                Comenzar gratis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="secondary">
                Ver Demo
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/40">
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Lumie</span>
          </div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="space-y-3">
              <h4 className="font-medium">Producto</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Características
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Precios
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Testimonios
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Compañía</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Empleo
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    Términos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 py-6 border-t flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            © 2024 Lumie. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
