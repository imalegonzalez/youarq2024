import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { RadioGroupItem, RadioGroup } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';


export default function MultiSelectRadioGroup({ onInterestsChange }) {
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const toggleInterest = (value: string) => {
    setSelectedInterests((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  useEffect(() => {
    onInterestsChange(selectedInterests);
  }, [selectedInterests, onInterestsChange]);

  const interests = [
    { value: 'cocina', label: 'Cocina', description: 'Incluye muebles a medida, mesadas, demoliciones y colocaciones estandar.'},
    { value: 'baño', label: 'Baño', description: 'Incluye vanitory, demoliciones y colocaciones estandar.'},
    { value: 'ampliacion', label: 'Ampliación', description: 'Agregar m2 a la propiedad'},
    { value: 'integral', label: 'Integral', description: 'Remodelación de cocina, baño y puesta a punto de la propiedad.' },
    { value: 'otro', label: 'Otro', description: 'Pintura de varios ambientes, cambio de pisos, aberturas o fachadas.' },
  ];

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">¿Qué espacios necesitas remodelar?</CardTitle>
          
        </div>
        <CardDescription>Usaremos esta información para darte costos estimados para tu remodelación.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup>
        <div className="grid gap-4">
          {interests.map((interest) => (
            <>
            <RadioGroupItem value={interest.value} id={interest.value} className="peer sr-only" />
            <Label
            key={interest.value}
            htmlFor={interest.value}
            className={`flex items-center justify-between rounded-md border p-4 hover:bg-gray-50 ${
              selectedInterests.includes(interest.value) ? 'border-gray-900 bg-gray-50' : 'border-gray-200 bg-white'
            }`}
            onClick={() => toggleInterest(interest.value)}
            >
              <div className="flex items-center gap-4">
                  <div>
                    <div className="font-medium">{interest.label}</div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{interest.description}</p>
                  </div>
              </div>
              
            </Label>
            </>
          ))}
        </div>
        </RadioGroup>
      </CardContent>
      <CardFooter>
        <Button type="button" onClick={() => console.log('Selected interests:', selectedInterests)}>
          Save Interests
        </Button>
      </CardFooter>
    </Card>
  );
}
