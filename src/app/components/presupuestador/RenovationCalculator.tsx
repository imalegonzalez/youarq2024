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

  const renderSeleccionEspacios = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-zinc-900">Selecciona los espacios a remodelar:</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="cocina"
            checked={espacios.cocina.selected}
            onCheckedChange={() => handleEspacioChange('cocina')}
            className="h-5 w-5 border-2 border-zinc-800 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-[--primary] rounded-sm"
          />
          <label htmlFor="cocina" className="text-zinc-800 font-medium">
            Cocina
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <Checkbox
            id="bano"
            checked={espacios.bano.selected}
            onCheckedChange={() => handleEspacioChange('bano')}
            className="h-5 w-5 border-2 border-zinc-800 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-[--primary] rounded-sm"
          />
          <label htmlFor="bano" className="text-zinc-800 font-medium">
            Baño
          </label>
        </div>
        <div className="flex items-center space-x-3">
          <Checkbox
            id="otros"
            checked={espacios.otros.selected}
            onCheckedChange={() => handleEspacioChange('otros')}
            className="h-5 w-5 border-2 border-zinc-800 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-[--primary] rounded-sm"
          />
          <label htmlFor="otros" className="text-zinc-800 font-medium">
            Otros espacios
          </label>
        </div>
      </div>
    </div>
  );

  const renderSeleccionTrabajos = () => (
    <div className="space-y-8">
      {espacios.cocina.selected && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900">Trabajos en Cocina:</h3>
          <div className="space-y-3 pl-4">
            {Object.entries(espacios.cocina.trabajos).map(([trabajo, selected]) => (
              <div key={trabajo} className="flex items-center space-x-3">
                <Checkbox
                  id={`cocina-${trabajo}`}
                  checked={selected}
                  onCheckedChange={() => handleTrabajoChange('cocina', trabajo)}
                  className="h-5 w-5 border-2 border-zinc-800 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-[--primary] rounded-sm"
                />
                <label htmlFor={`cocina-${trabajo}`} className="text-zinc-800 font-medium">
                  {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {espacios.bano.selected && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-zinc-900">Trabajos en Baño:</h3>
          <div className="space-y-3 pl-4">
            {Object.entries(espacios.bano.trabajos).map(([trabajo, selected]) => (
              <div key={trabajo} className="flex items-center space-x-3">
                <Checkbox
                  id={`bano-${trabajo}`}
                  checked={selected}
                  onCheckedChange={() => handleTrabajoChange('bano', trabajo)}
                  className="h-5 w-5 border-2 border-zinc-800 data-[state=checked]:bg-zinc-900 data-[state=checked]:text-[--primary] rounded-sm"
                />
                <label htmlFor={`bano-${trabajo}`} className="text-zinc-800 font-medium">
                  {trabajo.charAt(0).toUpperCase() + trabajo.slice(1)}
                </label>
              </div>
            ))}
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
        <h3 className="text-xl font-semibold text-zinc-900">Resumen de tu presupuesto:</h3>
        
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

        <div className="text-xl font-base text-zinc-900 pt-4 border-t border-zinc-200">
          Presupuesto total estimado: <br /> <span className="font-bold text-2xl">${total}</span>
          <p className="text-sm text-zinc-500 mt-2">Este es un presupuesto estimado, el precio final dependerá de la complejidad de la obra y los materiales elegidos.</p>
        </div>
      </div>
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg">
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
            onClick={() => alert('¡Un profesional se pondrá en contacto contigo!')}
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