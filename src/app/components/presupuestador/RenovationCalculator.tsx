"use client"
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckIcon, Utensils, Bath, Home, Wrench, Paintbrush, Container, ShowerHead } from 'lucide-react'; 

// En una implementación real, estos precios vendrían de una API o base de datos
const PRECIOS = {
  cocina: {
    base: 5000,
    trabajos: {
      instalaciones: 2000,
      revestimientos: 1500,
      muebles: 3000,
      artefactos: 1500
    }
  },
  bano: {
    base: 3000,
    trabajos: {
      instalaciones: 1500,
      revestimientos: 1200,
      muebles: 1800,
      mampara: 1500
    }
  },
  descuentoCombinado: 1000,
  otros: {
    base: 0,
    trabajos: {}
  }
};

const RenovationCalculator = () => {
  const [step, setStep] = useState(1);
  const [espacios, setEspacios] = useState({
    cocina: {
      selected: false,
      trabajos: {
        instalaciones: false,
        revestimientos: false,
        muebles: false,
        artefactos: false
      }
    },
    bano: {
      selected: false,
      trabajos: {
        instalaciones: false,
        revestimientos: false,
        muebles: false,
        mampara: false
      }
    },
    otros: {
      selected: false,
      trabajos: {}
    }
  });
  const [contacto, setContacto] = useState({
    nombre: '',
    email: '',
    telefono: ''
  });
  const [feedback, setFeedback] = useState({
    satisfaccion: '',
    comentarios: ''
  });

  const calcularPresupuesto = () => {
    let total = 0;
    
    if (espacios.cocina.selected) {
      Object.entries(espacios.cocina.trabajos).forEach(([trabajo, selected]) => {
        if (selected) {
          total += PRECIOS.cocina.trabajos[trabajo];
        }
      });
    }

    if (espacios.bano.selected) {
      Object.entries(espacios.bano.trabajos).forEach(([trabajo, selected]) => {
        if (selected) {
          total += PRECIOS.bano.trabajos[trabajo];
        }
      });
    }

    // Aplicar descuento si se seleccionaron ambos espacios
    if (espacios.cocina.selected && espacios.bano.selected) {
      total -= PRECIOS.descuentoCombinado;
    }

    return total;
  };

  const handleEspacioChange = (espacio) => {
    setEspacios(prev => ({
      ...prev,
      [espacio]: {
        ...prev[espacio],
        selected: !prev[espacio].selected
      }
    }));
  };

  const handleTrabajoChange = (espacio, trabajo) => {
    setEspacios(prev => ({
      ...prev,
      [espacio]: {
        ...prev[espacio],
        trabajos: {
          ...prev[espacio].trabajos,
          [trabajo]: !prev[espacio].trabajos[trabajo]
        }
      }
    }));
  };

  const TRABAJO_ICONS = {
    instalaciones: Wrench,
    revestimientos: Paintbrush,
    muebles: Container,
    artefactos: ShowerHead,
    mampara: ShowerHead,
  };

  const renderSeleccionEspacios = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-zinc-900">Selecciona los espacios a remodelar:</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div
          onClick={() => handleEspacioChange('cocina')}
          className={`
            cursor-pointer p-4 rounded-lg border-[1px] transition-all
            flex flex-col items-center justify-center space-y-2
            ${espacios.cocina.selected 
              ? 'border-zinc-900 bg-zinc-50' 
              : 'border-zinc-200 hover:border-zinc-300'
            }
          `}
        >
          <Utensils className={`w-8 h-8 stroke-[1] ${espacios.cocina.selected ? 'text-zinc-900' : 'text-zinc-500'}`} />
          <span className={`font-medium ${espacios.cocina.selected ? 'text-zinc-900' : 'text-zinc-600'}`}>
            Cocina
          </span>
        </div>

        <div
          onClick={() => handleEspacioChange('bano')}
          className={`
            cursor-pointer p-4 rounded-lg border-[1px] transition-all
            flex flex-col items-center justify-center space-y-2
            ${espacios.bano.selected 
              ? 'border-zinc-900 bg-zinc-50' 
              : 'border-zinc-200 hover:border-zinc-300'
            }
          `}
        >
          <Bath className={`w-8 h-8 stroke-[1] ${espacios.bano.selected ? 'text-zinc-900' : 'text-zinc-500'}`} />
          <span className={`font-medium ${espacios.bano.selected ? 'text-zinc-900' : 'text-zinc-600'}`}>
            Baño
          </span>
        </div>

        <div
          onClick={() => handleEspacioChange('otros')}
          className={`
            cursor-pointer p-4 rounded-lg border-[1px] transition-all
            flex flex-col items-center justify-center space-y-2
            ${espacios.otros.selected 
              ? 'border-zinc-900 bg-zinc-50' 
              : 'border-zinc-200 hover:border-zinc-300'
            }
          `}
        >
          <Home className={`w-8 h-8 stroke-[1] ${espacios.otros.selected ? 'text-zinc-900' : 'text-zinc-500'}`} />
          <span className={`font-medium ${espacios.otros.selected ? 'text-zinc-900' : 'text-zinc-600'}`}>
            Otros espacios
          </span>
        </div>
      </div>
    </div>
  );

  const renderSeleccionTrabajos = () => (
    <div className="space-y-8">
      {espacios.cocina.selected && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900">Trabajos en Cocina:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(espacios.cocina.trabajos).map(([trabajo, selected]) => {
              const IconComponent = TRABAJO_ICONS[trabajo] || Wrench;
              return (
                <div
                  key={trabajo}
                  onClick={() => handleTrabajoChange('cocina', trabajo)}
                  className={`
                    cursor-pointer p-4 rounded-lg border-[1px] transition-all
                    flex md:flex-col gap-2 items-center justify-center space-y-1
                    ${selected 
                      ? 'border-zinc-900 bg-zinc-50' 
                      : 'border-zinc-200 hover:border-zinc-300'
                    }
                  `}
                >
                  <IconComponent className={`w-6 h-6 stroke-[1] ${selected ? 'text-zinc-900' : 'text-zinc-500'}`} />
                  <span className={`font-medium text-center ${selected ? 'text-zinc-900' : 'text-zinc-600'}`}>
                    {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
      
      {espacios.bano.selected && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900">Trabajos en Baño:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(espacios.bano.trabajos).map(([trabajo, selected]) => {
              const IconComponent = TRABAJO_ICONS[trabajo] || Wrench;
              return (
                <div
                  key={trabajo}
                  onClick={() => handleTrabajoChange('bano', trabajo)}
                  className={`
                    cursor-pointer p-4 rounded-lg border-[1px] transition-all
                    flex md:flex-col gap-2 items-center justify-center space-y-1
                    ${selected 
                      ? 'border-zinc-900 bg-zinc-50' 
                      : 'border-zinc-200 hover:border-zinc-300'
                    }
                  `}
                >
                  <IconComponent className={`w-6 h-6 stroke-[1] ${selected ? 'text-zinc-900' : 'text-zinc-500'}`} />
                  <span className={`font-medium text-center ${selected ? 'text-zinc-900' : 'text-zinc-600'}`}>
                    {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );

  const renderContacto = () => (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-zinc-900">Tus datos de contacto:</h3>
      <div className="space-y-4">
        <Input
          placeholder="Nombre"
          value={contacto.nombre}
          onChange={(e) => setContacto(prev => ({ ...prev, nombre: e.target.value }))}
          className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500"
        />
        <Input
          type="email"
          placeholder="Email"
          value={contacto.email}
          onChange={(e) => setContacto(prev => ({ ...prev, email: e.target.value }))}
          className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500"
        />
        <Input
          type="tel"
          placeholder="Teléfono"
          value={contacto.telefono}
          onChange={(e) => setContacto(prev => ({ ...prev, telefono: e.target.value }))}
          className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500"
        />
      </div>
    </div>
  );

  const renderResumen = () => {
    const total = calcularPresupuesto();
    const calcularTotalEspacio = (espacio) => {
      return Object.entries(espacios[espacio].trabajos).reduce((sum, [trabajo, selected]) => {
        return selected ? sum + PRECIOS[espacio].trabajos[trabajo] : sum;
      }, 0);
    };

    return (
      <div className="space-y-6">
        {espacios.cocina.selected && (
          <div className="space-y-2 bg-zinc-50 p-4 rounded-lg">
            <h4 className="font-semibold text-zinc-900">Cocina: ${calcularTotalEspacio('cocina')}</h4>
            <ul className="list-disc pl-6 text-zinc-700">
              {Object.entries(espacios.cocina.trabajos)
                .filter(([_, selected]) => selected)
                .map(([trabajo]) => (
                  <li key={trabajo}>
                    {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {espacios.bano.selected && (
          <div className="space-y-2 bg-zinc-50 p-4 rounded-lg">
            <h4 className="font-semibold text-zinc-900">Baño: ${calcularTotalEspacio('bano')}</h4>
            <ul className="list-disc pl-6 text-zinc-700">
              {Object.entries(espacios.bano.trabajos)
                .filter(([_, selected]) => selected)
                .map(([trabajo]) => (
                  <li key={trabajo}>
                    {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                  </li>
                ))}
            </ul>
          </div>
        )}

        {espacios.otros.selected && (
          <div className="space-y-2 bg-zinc-50 p-4 rounded-lg">
            <h4 className="font-semibold text-zinc-900">Otros espacios</h4>
            <p className="text-zinc-700 italic">Cotizar precio a medida</p>
          </div>
        )}

        {espacios.cocina.selected && espacios.bano.selected && (
          <div className="text-green-600 font-medium">
            Descuento por remodelación combinada: -${PRECIOS.descuentoCombinado}
          </div>
        )}

        <div className="space-y-2 bg-zinc-50 p-4 rounded-lg">
            <h4 className="font-semibold text-zinc-900">Todas nuestras obras incluyen:</h4>
            <ul className=" text-zinc-700 font-sans text-sm">
              <li className="my-2 flex items-center">
                <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Diseño personalizado por un arquitecto/diseñador del equipo
              </li>
              <li className="my-2 flex items-center">
                <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Dirección de obra por un supervisor del equipo
              </li>
              <li className="my-2 flex items-center">
                <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Asesoría en compra de materiales
              </li>
              <li className="my-2 flex items-center">
                <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Todos los fletes, volquetes, seguros y limpieza de la obra
              </li>
              <li className="my-2 flex items-center">
                <CheckIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                Garantía de 1 años sobre los trabajos realziados
              </li>
            </ul>
          </div>

        <div className="text-xl font-base text-zinc-900 pt-4 border-t border-zinc-200">
          Presupuesto estimado: <br /> <span className="font-bold text-2xl"> Desde USD ${total}</span>
          <p className="text-xs p-4 bg-zinc-100 rounded-lg text-zinc-500 mt-2">Nuestros contraros son en pesos argentinos, pero estimamos el precio en USD para que se mantengan actualizados.</p>
          <p className="text-sm text-zinc-500 mt-2">Este es un presupuesto estimado, el precio final dependerá de la complejidad de la obra y los materiales elegidos.</p>
        </div>

        <div className="space-y-4 pt-6 border-t border-zinc-200">
          <h4 className="text-lg font-semibold text-zinc-900">Tu opinión nos importa</h4>
          
          <div className="space-y-2">
            <label className="text-sm text-zinc-700">¿Qué te pareció el presupuesto estimado?</label>
            <Select 
              value={feedback.satisfaccion}
              onValueChange={(value) => setFeedback(prev => ({ ...prev, satisfaccion: value }))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona una opción" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="muy_alto">Muy alto</SelectItem>
                <SelectItem value="alto">Alto</SelectItem>
                <SelectItem value="razonable">Razonable</SelectItem>
                <SelectItem value="bajo">Bajo</SelectItem>
                <SelectItem value="muy_bajo">Muy bajo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-zinc-700">Comentarios adicionales</label>
            <Input
              placeholder="Escribe tus comentarios aquí..."
              value={feedback.comentarios}
              onChange={(e) => setFeedback(prev => ({ ...prev, comentarios: e.target.value }))}
              className="border-zinc-300 focus:border-zinc-500 focus:ring-zinc-500"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className=" w-full p-10 md:max-w-4xl mx-auto bg-white ">
      <CardHeader className="border-b border-zinc-100">
        <CardTitle className="text-2xl font-bold text-zinc-900">Calculadora de Presupuesto</CardTitle>
        <CardDescription className="text-zinc-600">
          Calcula el costo estimado de tu proyecto de remodelación
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        {step === 1 && renderSeleccionEspacios()}
        {step === 2 && renderSeleccionTrabajos()}
        {step === 3 && renderContacto()}
        {step === 4 && renderResumen()}
      </CardContent>

      <CardFooter className="flex justify-between border-t border-zinc-100 pt-6">
        {step > 1 && (
          <Button
            variant="outline"
            onClick={() => setStep(prev => prev - 1)}
            className="border-zinc-300 hover:bg-zinc-50"
          >
            Anterior
          </Button>
        )}
        {step < 4 && (
          <Button
            onClick={() => setStep(prev => prev + 1)}
            disabled={
              (step === 1 && !Object.values(espacios).some(e => e.selected)) ||
              (step === 2 && (
                (espacios.cocina.selected && !Object.values(espacios.cocina.trabajos).some(t => t)) ||
                (espacios.bano.selected && !Object.values(espacios.bano.trabajos).some(t => t))
              )) ||
              (step === 3 && (!contacto.email || !contacto.telefono))
            }
            className="bg-zinc-900 text-white hover:bg-zinc-800"
          >
            Siguiente
          </Button>
        )}
        {step === 4 && (
          <Button 
            onClick={() => {
              alert('¡Gracias por tu feedback! Un profesional se pondrá en contacto contigo.');
              console.log('Feedback:', feedback);
            }}
            className="bg-zinc-900 text-white hover:bg-zinc-800"
          >
            Pedir presupuesto a medida
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default RenovationCalculator;